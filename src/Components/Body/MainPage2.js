import React, { Component, Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo_orange from "../../images/Logo_Orange.svg"
import main1 from "../../images/main1.png"
import main2 from "../../images/main2.png"
import main3 from "../../images/main3.png"
import main4 from "../../images/main4.png"
import nft7 from "../../images/nft_image_7.png"
import nft8 from "../../images/nft_image_8.png"
import ggu from "../../images/GGU.png"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

class MainPage2 extends Component
{
    render(){
    return (
        <div className="bg-gray-50">
          <br></br>
          <br></br>
      <div className="relative overflow-visible ">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Here's SW token from GGU company
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new GGU Token will be the best SW and make it profit. Invest to GGU SW and GGU Token. 
                Moreover, GGU is named by name of cat.              </p>
                <p className="mt-4 text-xl text-gray-500">
                GGU 토큰은 2022년 최고의 가치를 지닌 토큰을 목표로 합니다. 또한, GGU Token 이름은 고양이에 의해 이름으로 지어졌습니다.             </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src={main1}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src={main2}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src={main3}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src={ggu}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src={Logo_orange}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src={nft7}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src={main4}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src={nft8}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  

              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default MainPage2;
