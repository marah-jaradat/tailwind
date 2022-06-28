import React from "react";

import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            The right price for your requestss and workspaces
          </h3>
          <p className="text-3xl">
            If you would like to discover new features, and more request, check
            the programs for the subscription
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              FREE
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                FREE
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">try this for free!</p>
            <div className="text-2xl">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                30 day free live chating
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                free 10 live supporting calls
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                10 free work spaces
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                200 requests and saved history
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                100 url check
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $30
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">try for limited use</p>
            <div className="text-2xl">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />3 months free
                live chating
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                30 days live supporting calls
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                50 work spaces
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                200 requests and saved history
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                500 url check
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Premium
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $99
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Be premium and get ulimited benifits
            </p>
            <div className="text-2xl">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />1 yr free live
                chating
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />1 yr live
                supporting calls
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                1000 work spaces
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                unlimited requests and saved history
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                unlimited url check
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
