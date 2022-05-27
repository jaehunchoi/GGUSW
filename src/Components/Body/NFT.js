import React, { Component, useEffect } from 'react';
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import * as mintScript from  "../../mintScript";
import nft_image_1 from '../../images/nft_image_1.png';
import nft_image_2 from '../../images/nft_image_2.png';
import nft_image_3 from '../../images/nft_image_3.png';
import nft_image_4 from '../../images/nft_image_4.png';
import nft_image_5 from '../../images/nft_image_5.png';
import nft_image_6 from '../../images/nft_image_6.png';
import nft_image_10 from '../../images/nft_image_10.png';
import nft_image_11 from '../../images/nft_image_11.png';
import nft_image_12 from '../../images/nft_image_12.png';
import nft_image_13 from '../../images/nft_image_13.png';
import nft_image_14 from '../../images/nft_image_14.png';
import nft_image_15 from '../../images/nft_image_15.png';
const NFT =()=>
{
    useEffect(()=>{
        mintScript.check_status();
    });
        return(
            <div className="py-10 h-full w-full bg-blue-100">
            <div className="text-center relative w-full flex-none mb-2 pt-10 text-5xl mb-3 font-bold font-GodoB text-blue-900">
            귀엽지만 못생긴 나만의 메타 캐릭터를 만나보세요</div>
            <h5 class="my-4 mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-grey">P2E 게임 속 나만의 고유한 NFT를 소유해보세요.</h5>

            
        <div className="flex max-h-0 ">

<div className="text-center relative w-full flex-none mb-2 pt-5">
    <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        <div className="w-24 h-24 rounded-full mx-auto transform scale-1 -rotate-6">
            <img src={nft_image_10} alt=""/>
        </div>
        <div
            className=" w-24 h-24 rounded-full mx-auto col-start-1 transform scale-25 rotate-6 translate-x-2 translate-y-15">
            <img src={nft_image_11} alt=""/>
        </div>
        <div className="w-24 h-24 rounded-full mx-auto transform scale-17 translate-y-11">
            <img src={nft_image_12} alt=""/>
        </div>

        <div
            className="w-24 h-24 rounded-full mx-auto  col-start-3 transform scale-25 rotate-46 translate-x-2 translate-y-15">
            <img src={nft_image_13} alt=""/>
        </div>
        <div
            className="w-24 h-24 rounded-full mx-auto transform  row-start-4 col-start-3 col-span-2 translate-y-24">
            <img src={nft_image_14} alt=""/>
        </div>
        <div
            className="w-24 h-24 rounded-full mx-auto row-start-1 col-start-3 col-span-2 transform translate-x-20 translate-y-4">
            <img src={nft_image_15} alt=""/>
        </div>

    </div>
</div>
</div>
            <h2 className="my-8 text-center relative w-full flex-none mb-2 pt-5 text-4xl font-semibold text-grey drop-shadow-2xl">
            NFT INFO</h2>
            <div className="relative mt-6 flex-1 px-100 sm:px-10">
            <div className=" rounded-lg border-dashed border-4 border-black">
            <br></br>
            <p class="mb-3 text-2xl font-bold font-GodoB text-blue-900 ">Klay Meta Zoo NFT 홀더들의 혜택! </p>
            <br></br>
            <p class="mb-3 text-sm font-bold font-GodoB text-grey-800">혜택 1. Klay Meta Zoo NFT를 소유하고 계시면 P2E Game Play시 Player가 획득한 40% 의 GGU Token을 Auto Staking하게 됩니다. </p>
            <p class="mb-3 text-sm font-bold font-GodoB text-grey-800">혜택 2. 3개 이상 Klay Meta Zoo NFT 소유 시, NFT 3개당 GGU Token 100개 지급 - 6/7 기준</p>
            <p class="mb-3 text-sm font-bold font-GodoB text-grey-800">혜택 3. 1개 이상 Klay Meta Zoo NFT 소유 시, 60% 할인 된 1차 Token Presale 화이트 리스트 등록 - 6/14 기준</p>
            <br></br>
            <br></br>
            <br></br>
            
            <p class="mb-3 text-2xl font-bold font-GodoB text-blue-900 ">Klay Meta Zoo NFT 에어드랍 이벤트!!(~5/29까지 100명 추첨) </p>
            <br></br>
            <p class="text-sm font-bold font-GodoB text-grey-800">참여조건 1. 아래 Telegram, Twitter, Discord 중 입장 또는 팔로우 후 ID 공유!!</p>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://t.me/+Fs6UIpRY5lk3YTk1" class="text-gray-500 hover:text-gray-900 dark:hover:text-grey">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229" clip-rule="evenodd" /></svg>
            </a>
            <a href="https://twitter.com/GGUSW1" class="text-gray-500 hover:text-gray-900 dark:hover:text-grey">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </a>
            <a href="https://discord.com/invite/DTYzv8sGee" class="text-gray-500 hover:text-gray-900 dark:hover:text-grey">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M10.076 11c.6 0 1.086.45 1.075 1 0 .55-.474 1-1.075 1C9.486 13 9 12.55 9 12s.475-1 1.076-1zm3.848 0c.601 0 1.076.45 1.076 1s-.475 1-1.076 1c-.59 0-1.075-.45-1.075-1s.474-1 1.075-1zm4.967-9C20.054 2 21 2.966 21 4.163V23l-2.211-1.995-1.245-1.176-1.317-1.25.546 1.943H5.109C3.946 20.522 3 19.556 3 18.359V4.163C3 2.966 3.946 2 5.109 2H18.89zm-3.97 13.713c2.273-.073 3.148-1.596 3.148-1.596 0-3.381-1.482-6.122-1.482-6.122-1.48-1.133-2.89-1.102-2.89-1.102l-.144.168c1.749.546 2.561 1.334 2.561 1.334a8.263 8.263 0 0 0-3.096-1.008 8.527 8.527 0 0 0-2.077.02c-.062 0-.114.011-.175.021-.36.032-1.235.168-2.335.662-.38.178-.607.305-.607.305s.854-.83 2.705-1.376l-.103-.126s-1.409-.031-2.89 1.103c0 0-1.481 2.74-1.481 6.121 0 0 .864 1.522 3.137 1.596 0 0 .38-.472.69-.871-1.307-.4-1.8-1.24-1.8-1.24s.102.074.287.179c.01.01.02.021.041.031.031.022.062.032.093.053.257.147.514.262.75.357.422.168.926.336 1.513.452a7.06 7.06 0 0 0 2.664.01 6.666 6.666 0 0 0 1.491-.451c.36-.137.761-.337 1.183-.62 0 0-.514.861-1.862 1.25.309.399.68.85.68.85z" clip-rule="evenodd" /></svg>
            </a>


        </div>
            <p class="mb-3 text-sm font-bold font-GodoB text-grey-800">참여조건 2. Blog, Twitter, Instagram 홍보 후 Url 공유!!(단, 홍보글 내에 NFT Minting Site URL 공유 필수)</p>
            <p class="mb-3 text-sm font-bold font-GodoB text-grey-800">위 참여조건 중 1개라도 충족 시 아래 Google 설문으로 지갑 주소를 알려주세요!</p>
            <p class="mb-3 text-sm font-bold font-GodoB text-grey-800">참여조건 2번의 경우중복 참여가 가능합니다.</p>
            <div className="my-4 ml-1 inline-flex rounded-md shadow">
                  <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdknUf6GOTqytWLQmr28LKyBBfWMg-4UiyDQ_GKkjI_TW1rZQ/viewform?vc=0&c=0&w=1&flr=0"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-blue hover:bg-indigo-50"
                  >
                    Google 설문
                  </a>
                </div>
            <div className="my-4 ml-1 inline-flex rounded-md shadow">
                  <a
                  href="https://undefined-255.gitbook.io/ggu-software-de-fi-system/ggu-software-projects/1st-project.-klay-meta-zoo"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-blue hover:bg-indigo-50"
                  >
                    KlayMetaZoo Project DOCS
                  </a>
                </div>
            </div>
        </div>

        <div className="flex max-h-0 ">

            <div className="text-center relative w-full flex-none mb-2 pt-5">
                <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
                    <div className="w-24 h-24 rounded-full mx-auto transform scale-1 -rotate-6">
                        <img src={nft_image_1} alt=""/>
                    </div>
                    <div
                        className=" w-24 h-24 rounded-full mx-auto col-start-3 transform scale-25 rotate-6 translate-x-2 translate-y-15">
                        <img src={nft_image_2} alt=""/>
                    </div>
                    <div className="w-24 h-24 rounded-full mx-auto transform scale-17 translate-y-11">
                        <img src={nft_image_3} alt=""/>
                    </div>
    
                    <div
                        className="w-24 h-24 rounded-full mx-auto  col-start-3 transform scale-25 rotate-46 translate-x-2 translate-y-15">
                        <img src={nft_image_4} alt=""/>
                    </div>
                    <div
                        className="w-24 h-24 rounded-full mx-auto transform  row-start-1 col-start-2 col-span-2 translate-y-24">
                        <img src={nft_image_5} alt=""/>
                    </div>
                    <div
                        className="w-24 h-24 rounded-full mx-auto row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
                        <img src={nft_image_6} alt=""/>
                    </div>
    
                </div>
            </div>
        </div>
        <h2 className=" text-center relative w-full flex-none mb-2 pt-5 text-4xl font-semibold text-grey drop-shadow-2xl">
            MINTING INFO</h2>
        <div className="relative mt-6 flex-1 px-100 sm:px-10">
            <div className=" rounded-lg border-dashed border-4 border-black">
                <div className="text-center relative w-full mb-2 pt-5 text-2xl font-semibold text-grey-900 drop-shadow-2xl">
                    <p className="mb-3 text-3sm font-bold font-GodoB text-grey-800" >민팅 시간 : 5/31 9:00PM</p>
                    <p className="mb-3 text-3sm font-bold font-GodoB text-grey-800"  id="mintStartBlockNumber">Meta Zoo 민팅 시작 블록: #91072961</p>
                    <p className="mb-3 text-3sm font-bold font-GodoB text-grey-800"  id="blockNubmer">현재 블록 : #91072961</p>
                    <p className="mb-3 text-3sm font-bold font-GodoB text-grey-800"  id="mintPrice">Klay Meta Zoo 민팅 가격: 45 KLAY</p>
                    <p className="mb-3 text-3sm font-bold font-GodoB text-grey-800"  id="mintLimitPerBlock">1회 최대 신청 수량: 10개</p>
                    <p className="mb-3 text-3sm font-bold font-GodoB text-grey-800"  >최대 NFT 보유 수량: 50개</p>
                    <p className="mb-3 text-3sm font-bold font-GodoB text-grey-800"  >총 민팅 물량: 900개</p>
                </div>
            </div>
        </div>
        <h2 className="my-8 text-center relative w-full flex-none mb-2 pt-5 text-4xl font-semibold text-grey drop-shadow-2xl">
            MINTING 현황</h2>
        <div className="my-15 relative mt-6 flex-1 px-100 sm:px-10">
            <div className=" rounded-lg border-dashed border-4 border-black">
                <div className="text-center relative w-full mb-2 pt-5 text-2xl font-semibold text-grey-900 drop-shadow-2xl">
                    <p id="mintCnt">0 / 0</p>
                    <label className="my-3 text-1xl font-extrabold tracking-tight text-gray-900 sm:text-2xl"  for="amount">Klay Meta Zoo 민팅 수량</label>
                    <input type="number" id="amount" name="amount" min="1" max="3" defaultValue="1"
                        className="mx-3 my-3 text-lg font-GodoB font-bold focus:ring-2 focus:ring-blue-500 focus:outline appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm "/>

                        <button
                        className="mx-1 my-1 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-grey bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pl-30"
                        onClick={mintScript.publicMint}  >Klay Meta Zoo
                        민팅- work</button>
                </div>
            </div>
        </div>

        
        </div>
        )
}

export default NFT;