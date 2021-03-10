import React from 'react';
import  {Navbar, Nav, }  from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PersonCircle} from 'react-bootstrap-icons';


// Import the views
import Home from '../Home/home';
import About from '../About/about';
import Startups from '../Startups/startups';
import Investors from '../Investors/investors';
import Profile from '../Profile/profile';

class nav extends React.Component {
  constructor(props) {
      super(props);
      this.state =({
          key: "home"
      })
    }

      handleSelect(key){
        this.setState({
            key: key
        })
        alert(`selected ${key}`);
    }
     render() {
          return(
               <div className='navigation'>
               <Router>
               <Navbar collapseOnSelect expand="lg" bg="light" sticky='top'>
               <Navbar.Brand href="/">Startvest logo</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="mr-auto">
                 {/* <Nav.Link active className='Navlinks' href="/" >Home</Nav.Link> */}
                 </Nav>
                 <Nav className=" navitems" defaultActiveKey="/" onSelect={this.handleSelect}>    
                 {/* <NavLink exact activeClassName="Navlinks-active"><Nav.Link active className='Navlinks' href="/" >Home</Nav.Link></NavLink>  */}
                 <Nav.Item><Nav.Link active eventKey="home" className='Navlinks' href="/" >Home</Nav.Link></Nav.Item>
                 <Nav.Item><Nav.Link active eventKey="about" className='Navlinks' href="/about">About Us</Nav.Link></Nav.Item>
                 <Nav.Item><Nav.Link active eventKey="about" className='Navlinks' href="/startups">Startups</Nav.Link></Nav.Item>
                 <Nav.Item><Nav.Link active eventKey="about" className='Navlinks' href="/investors">Investors</Nav.Link></Nav.Item>
                 <Nav.Item><Nav.Link active eventKey="about" className='Navlinks' href="/profile"><PersonCircle color='#21295C' height={30} width={30}/></Nav.Link></Nav.Item>
                 </Nav>
                 
               </Navbar.Collapse>
             </Navbar>
             <Switch>
                  <Route exact path="/">
                    
                    <Home/>
                  </Route>
                  <Route exact path="/about">
                    <About/>
                  </Route>
                  <Route exact path="/startups">
                    <Startups/>
                  </Route>
                  <Route exact path="/investors">
                    <Investors/>
                  </Route>
                  <Route exact path="/profile">
                    <Profile/>
                  </Route>
             </Switch>
             </Router>
             </div>
          )
     }
}

export default nav;