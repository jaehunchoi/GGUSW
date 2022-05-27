


import React, { Component } from 'react';
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import * as mintScript from  "../../mintScript";
import nft_image_9 from '../../images/nft_image_9.png';
class Projects extends Component
{
    render(){
        return(
            <div p className="grid grid-cols-1 gap-4 place-items-center">
           
                <p className="  px-8 py-8 font font-extrabold text-gray-900 sm:text-3xl">1st Project</p>

<div class="mx-10  px-8 py-8  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class=" rounded-t-lg" src={nft_image_9} alt="" />
    </a>
    <div class="">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Klay Meta Zoo P2E Game</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the cutest P2E game of 2022 so far, Play with NFT characters and Earn GGU Token.</p>
        <p class="mb-3 font-x3l font-bold text-gray-700 dark:text-gray-400">To be released in July</p>
        <p class="mb-3 font-x3l font-bold text-gray-700 dark:text-gray-400">7월 출시 예정</p>

        <button type="button" class="my-5 text-white bg-blue-400 dark:bg-grey-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled>Invest by GGU Token</button>
        <br></br>
        <button type="button" class="my-5 text-white bg-blue-400 dark:bg-grey-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled>Get DownLoad</button>
    </div>
</div>
<div className="mx-10 my-10 ">
</div>
</div>
        );
    }
}

export default Projects;