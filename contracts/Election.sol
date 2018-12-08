//Smart contract for Cooking Election
//1. Model a Cookbook (Struct)
//2. Read/write Cookbook (Using Solidity mapping)
//3. Store Cookbook Count (variable)
//4. Add cookbook to the list (Function)
//5. Store accounts that have voted (Using Solidity mapping).
//6. Function vote (to update cookbook vote-count)
//7. Trigger voted event


contract Election {
    // Define a structure for Cookbook Candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // Store voted accounts
    mapping(address => bool) public voters;
    
    // Store Candidate
    mapping(uint => Candidate) public candidates;

    // Store Candidates Count
    uint public candidatesCount;

    // Event : Voted event (store the IDs of voters)
    event votedEvent (
        uint indexed _candidateId
    );

    //Initialize the contract with eight cookbooks
    function Election () public {
        addCandidate("American Cookbook");
        addCandidate("Chinese Cookbook");
        addCandidate("Indian Cookbook");
        addCandidate("Italian Cookbook");
        addCandidate("Japanese Cookbook");
        addCandidate("Mexican Cookbook");
        addCandidate("Thai Cookbook");
        addCandidate("Vegetarian Cookbook");
    }

    //Function to add cooking candidates
    function addCandidate (string _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    //vote function
    function vote (uint _candidateId) public {

        // check the condition to validae that it is the new voter and has not already voted
        require(!voters[msg.sender]);

        // check the condition to validate the Candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount);

        // Mark that the voter has casted a vote
        voters[msg.sender] = true;

        // Incerement the vote Count for candidate
        candidates[_candidateId].voteCount ++;

        // trigger voted event
        emit votedEvent(_candidateId);
    }
}
