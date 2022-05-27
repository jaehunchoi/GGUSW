import React, { Component } from 'react';
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import * as mintScript from  "../mintScript";
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import Banner_image from "../images/Logo.svg"
import LanguageChoose from './Body/LanguageChoose';
// import * as navigation from  "../Data/HeaderMenu";
export const navigation = [
    { name: "Dashboard", href: "#", current: false },
    { name: "DOCS", href: "https://undefined-255.gitbook.io/ggu-software-de-fi-system/", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "NFT Minting", href: "#", current: false },
    { name: "Token Sale", href: "#", current: false },
    { name: "Staking", href: "#", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

class Header extends Component
{
    render(){
        return(
            <Disclosure as="nav" className="bg-gray-700">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src={Banner_image}
                                        onClick={function (e) {
                                            e.preventDefault();

                                            this.props.onChangeMode("MainPage");
                                            navigation.map((item) => (item.current=false))
                                        }.bind(this)}
                                    />
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src={Banner_image}
                                        onClick={function (e) {
                                            e.preventDefault();

                                            this.props.onChangeMode("MainPage");
                                            navigation.map((item) => (item.current=false))
                                        }.bind(this)}
                                    />
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "px-3 py-2 rounded-md text-sm font-medium",
                                                )}
                                                aria-current={item.current ? "page" : undefined}
                                                onClick={function (e) {
                                                    e.preventDefault();
                                                    navigation.map((item) => (item.current=false))
                                                    this.props.onChangeMode(item.name);
                                                    item.current=true;
                                                    if(item.href!=="#")
                                                    {
                                                        navigation.map((item) => (item.current=false))
                                                        window.open(item.href);
                                            this.props.onChangeMode("MainPage");

                                                    }
                                                  }.bind(this)}

                                            >
                                                {item.name}
                                            </a>
                                            // <ToastsContainer store={ToastsStore} 
                                            // lightBackground/>
                                        ))}
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="flex inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 w-2/5">

                                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">

<p class="ml-3 text-sm font-GodoB text-indigo-50 " id="myWallet">Unconnected</p>

<p class="ml-3 text-sm font-GodoB text-indigo-50 " id="myKlay"></p>
<button
  class="ml-3 text-sm font-GodoB font-bold font-bold text-indigo-50 rounded-full bg-indigo-900  h-full motion-safe:hover:-translate-x-0.5 motion-safe:transition "
  onClick={mintScript.connect} id="myKlayBtn">Connect Kaikas
  </button>
</div>
<button
                                    type="button"
                                    className="ml-3 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                              
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block px-3 py-2 rounded-md text-base font-medium",
                                    )}
                                    aria-current={item.current ? "page" : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                    
            {/* <LanguageChoose/> */}
                </>
            )}
        </Disclosure>
        
        )
    }
}

export default Header;