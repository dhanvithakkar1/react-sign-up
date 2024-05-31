import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return (
    <>
    <Router>
      <Link to="/page1">Page1</Link> |
      <Link to="/page2">Page2</Link>
      <Routes>
        <Route path='/page1' element={<Page1 />}/>
        <Route path='/page2' element={<Page2 />}/>
      </Routes>
    </Router>
    </>
    );
  }
}

export default App;