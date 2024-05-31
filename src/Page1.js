import React from 'react';
 
class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  handleChange(e) {
    this.setState({[e.target.name] : [e.target.value]});
  }
  onSubmitData(e) {
    var a = this.state.txt1;
    localStorage.setItem("name", a);
    var b = this.state.txt2;
    localStorage.setItem("email", b);
    var c = this.state.txt3;
    localStorage.setItem("password", c);
    var d = this.state.txt4;
    localStorage.setItem("mobile", d);
    e.preventDefault();
  }
  render() {
    return (
    <>
    <h2>Sign Up</h2>
    <form onSubmit={this.onSubmitData.bind(this)}>
    Name: <input type='text' name='txt1' onChange={this.handleChange.bind(this)}/><br/>
    Email: <input type='email' name='txt2' onChange={this.handleChange.bind(this)} /><br/>
    Password: <input type='text' name='txt3' onChange={this.handleChange.bind(this)} /><br/>
    Mobile: <input type='number' name='txt4' onChange={this.handleChange.bind(this)} /><br/>
    <input type='submit' value="Submit"/><br/>
    </form>
    </>
    );
  }
}

export default Page1;