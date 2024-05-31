import React from 'react';

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  handleChange(e) {
    this.setState({[e.target.name] : [e.target.value]});
  }
  onSubmitData(e) {
    var a = this.state.txt2;
    var b = this.state.txt3;
    var c = localStorage.getItem('email');
    var d = localStorage.getItem('password');
    if(a == c && b == d) {
      this.setState({msg: 'Welcome'});
    } 
    else {
      this.setState({msg: 'Error'});
    }
    e.preventDefault();
  }
  render() {
    return (
    <>
    <h2>Login</h2>
    <form onSubmit={this.onSubmitData.bind(this)}>
    Email: <input type='email' name='txt2' onChange={this.handleChange.bind(this)} /><br/>
    Password: <input type='text' name='txt3' onChange={this.handleChange.bind(this)} /><br/>
    <input type='submit' value="Submit"/><br/>
    </form>
    <h3 style={{color: 'blue'}}>{this.state.msg}</h3>
    </>
    );
  }
}

export default Page2;