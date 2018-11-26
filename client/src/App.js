import React, { Component } from "react";
import Election from './contracts/Election';
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";
import Content from './components/Content';

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

class App extends Component {
    constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      candidates: [],
      hasVoted: false,
      loading: true,
      voting: false,
    }

    this.castVote = this.castVote.bind(this)
    this.watchEvents = this.watchEvents.bind(this)
  }

  componentDidMount = async () => {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const Contract = truffleContract(Election);
    Contract.setProvider(web3.currentProvider);
    const instance = await Contract.deployed();

    console.log(instance);

    // TODO: Refactor with promise chain
    web3.eth.getCoinbase((err, account) => {
      this.setState({ account });
      Contract.deployed().then((electionInstance) => {
        this.electionInstance = instance;

        //this.watchEvents();

        this.electionInstance.candidatesCount().then((candidatesCount) => {
          for (var i = 1; i <= candidatesCount; i++) {
            this.electionInstance.candidates(i).then((candidate) => {
              const candidates = [...this.state.candidates]
              candidates.push({
                id: candidate[0],
                name: candidate[1],
                voteCount: candidate[2]
              });
              this.setState({ candidates: candidates })
            });
          }
        })
        this.electionInstance.voters(this.state.account).then((hasVoted) => {
          this.setState({ hasVoted, loading: false })
        })
      })
    })
  }

   watchEvents() {
    // TODO: trigger event when vote is counted, not when component renders
    console.log(this.electionInstance);
    this.electionInstance.votedEvent({
      fromBlock: 0,
      toBlock: 'latest'
    }).watch((error, event) => {
      this.setState({ voting: false });
    })
  }

  castVote(candidateId) {
    this.setState({ voting: true })
    this.electionInstance.vote(candidateId, { from: this.state.account }).then((result) =>
      this.setState({ hasVoted: true })
    )
  }

  render() {
    return (
      <div className='row'>
        <div className='col-lg-12 text-center' >
          <br/>
          { this.state.loading || this.state.voting
            ? <p className='text-center'>Loading...</p>
            : <Content
                account={this.state.account}
                candidates={this.state.candidates}
                hasVoted={this.state.hasVoted}
                castVote={this.castVote} />
          }
        </div>
      </div>
    )
  }
}

export default App;
