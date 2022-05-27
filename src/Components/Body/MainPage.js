import React, { Component, Fragment } from 'react';
import * as Header from '../Header'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

class MainPage extends Component
{
    render(){
        return(
            <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <div className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block text-indigo-600">GGU Token는 차세대 SW Token 입니다.</span>
              <br></br>

                <p className="mt-3 text-left text-gray-500 sm:mt-5 sm:text-sg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                GGU SW의 거버넌스 코인인 GGU Token입니다.    
              </p>

              <p className="mt-3 text-left text-gray-500 sm:mt-5 sm:text-sg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                GGU SW는 투자 상품 개발 및 Software 출시합니다.
              </p>
              
              <p className="mt-3 text-left text-gray-500 sm:mt-5 sm:text-sg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                투자와 SW 개발을 통한 이용에 대한 수익, 결제, 인수합병을 통해 GGU Toekn의 가치를 극대화 시킬 예정입니다.   
              </p>
              <br></br>
              <br></br>
                <span className="block ">Ready to dive in GGU Token?</span>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <a
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    onClick={function (e) {
                      e.preventDefault();
                      var navigation_data=Header.navigation;
                      navigation_data.map((item) => (item.name==="NFT Minting"?item.current=true:item.current=false))
                      this.props.onChangeMode("NFT Minting");
                    }.bind(this)}
                  >
                    GET NFT
                  </a>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <a
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                    onClick={function (e) {
                      e.preventDefault();
                      var navigation_data=Header.navigation;
                      navigation_data.map((item) => (item.name==="Token Sale"?item.current=true:item.current=false))
                      this.props.onChangeMode("Token Sale");
                    }.bind(this)}
                  >
                    GET Pre Sale Coin
                  </a>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <a
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                    onClick={function (e) {
                      e.preventDefault();
                      var navigation_data=Header.navigation;
                      navigation_data.map((item) => (item.name==="DOCS"?window.open(item.href):null))

                    }.bind(this)}
                  >
                    DOCS
                  </a>
                </div>
              </div>
            </div>
          </div>

  );
}
}

export default MainPage;
