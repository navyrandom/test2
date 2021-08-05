import React from 'react'
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter} from '../../redux/actions/counterActions';

class App extends React.Component{

  static getInitialProps({store}){}

  constructor(props){
    super(props);
    // this.state= {
    //   counter: 0
    // };
  }
  // incrementCounter = ()=>{
  //   this.setState(prevState => {
  //     this.setState({
  //       counter: prevState.counter + 1.
  //     });
  //   });
  // };
  // decrementCounter = ()=>{
  //   this.setState(prevState => {
  //     this.setState({
  //       counter: prevState.counter - 1.
  //     });
  //   });
  // };

  render(){
    return(
      <div>
        <h1>Count : {this.props.counter}</h1>
        <button onClick={this.props.incrementCounter} >Increment</button>
        <button onClick={this.props.decrementCounter} >Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter, 
  decrementCounter: decrementCounter,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);