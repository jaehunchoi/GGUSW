import React, { Component } from 'react';
import "./App.css";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import * as mintScript from  "./mintScript";
import Header from "./Components/Header";
import NFT from "./Components/Body/NFT";
import DashBoard from "./Components/Body/DashBaord"
import MainPage from "./Components/Body/MainPage"
import MainPage2 from "./Components/Body/MainPage2"
import Footer from './Components/Footer';
import SimpleToast from './Components/Body/SimpleToast';
import Projects from './Components/Body/Projects';
import MainPage3 from './Components/Body/MainPage3';
import MainPage4 from './Components/Body/MainPage4';
import CommingSoon from './Components/Body/CommingSoon';
    

class App extends Component  {
  constructor(props) {
    super(props);
  this.state = {
    headerSelected: "MainPage",
  }
}
getContent() {
  var _body=[];
  if (this.state.headerSelected === "MainPage"){
    _body.push(<MainPage onChangeMode={function (_headerSelected) {
      this.setState({ headerSelected: _headerSelected });
    }.bind(this)}/>);
    _body.push(<MainPage2/>);
    _body.push(<MainPage3/>);
    _body.push(<MainPage4 onChangeMode={function (_headerSelected) {
      this.setState({ headerSelected: _headerSelected });
    }.bind(this)}/>);
  }
  else if (this.state.headerSelected === "NFT Minting"|| this.state.headerSelected === "DOCS") {
    _body = <NFT/>;
  } 
  else if (this.state.headerSelected === "Dashboard") {
    _body = <DashBoard/>;
  }
  else if (this.state.headerSelected === "Projects") {
    _body = <Projects/>;
  }
  else {
    _body=<CommingSoon/>;
  }
  return _body;
}

    render() {
    return (
      <div className="App">
        <Header           
          onChangeMode={function (_headerSelected) {
            this.setState({ headerSelected: _headerSelected });
          }.bind(this)}
          />
          {this.getContent()}
        <Footer/>
      </div>

    );
                                    }
}

export default App;
