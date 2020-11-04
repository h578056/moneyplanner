import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import './ShowHide1.css';
import ShowHide1 from "./ShowHide1";
import ShowHide2 from "./ShowHide2";
import DropdownButton from 'react-bootstrap/DropdownButton'

class App extends React.Component{ 

constructor(){
  super();
  this.state={
      name: "test",
      showHide1: false,
      showHide2: false
  };
  this.hideComponent = this.hideComponent.bind(this);
}
hideComponent(name) {

  console.log(name);
  switch (name) {
    case "showHide1":
      this.setState({ showHide1: !this.state.showHide1 });
      this.setState({showHide2 : false});
      console.log("nr1");
      break;
    case "showHide2":
      this.setState({ showHide2: !this.state.showHide2 });
      this.setState({showHide1 : false});
      console.log("nr2");
      break;   
    default:
     return ;
  }
}
hide2(name){
  if(name=='showHide1'){
    
  }
}
  
render() {
  const { showHide1, showHide2} = this.state;
  return (
      <div>
        <br/>
        <br/>
        <header>
        <div className="center wrapper">
          <Button variant="secondary" onClick={() => this.hideComponent("showHide1")}>Show nr 1</Button>
          <Button variant="secondary" onClick={() => this.hideComponent("showHide2")}> Show nr 2</Button>
          <br/>
          <Button variant="primary" onClick={() => this.hideComponent("showHide3")}>  Show something else!!!! </Button>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
           <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
           <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
           <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <br/>
          <br/>
          {showHide1 && <ShowHide1  />}
          {showHide2 && <ShowHide2 />}

      </div>
      </header>
      </div>
    )    
  };

}
export default App;
