/* This example requires Tailwind CSS v2.0+ */
import React, { Component, Fragment } from 'react';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Token Fund',
    description:
      '단일 Token 투자가 아닌 Major Token에 대한 Fund를 조성하여 안정적 투자, Token Fund의 투자 및 상품 수수료에 대한 수익일부 GGU Token에 대한 바이백',
    icon: GlobeAltIcon,
  },
  {
    name: '부동산',
    description:
      'Token을 이용한 수익형 부동산 투자로 수익 지급 및 상품 수수료에 대한 수익일부 GGU Token에 대한 바이백',
      icon: ScaleIcon,
  },
  {
    name: 'NFT',
    description:
      '가치 있는 NFT를 선정 후 NFT 구매에 대한 Token 투자 및 NFT 가치 상승에 따른 수익률 배분',
      icon: LightningBoltIcon,
  },
  {
    name: 'SW Coperation',
    description:
      'GGU Coperation의 SW 개발 Project에 대한 투자 및 수익 지급 및 수익일부 GGU Token에 대한 바이백',
      icon: AnnotationIcon,
  },
]

class MainPage3 extends Component
{
    render(){
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">GGU Token</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to earn Profit
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Token Fund, 부동산, NFT, SW Coperation 투자
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
}
export default MainPage3;