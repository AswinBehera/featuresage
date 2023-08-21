import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const Card1 = () => {
  const handleClick = () => {};

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="container">
        <div className=" flex flex-row pb-8 border-b-2 border-slate-800">
          <Image
            src="/react-black.svg"
            alt="React Logo"
            className="mr-4"
            width={80}
            height={80}
            priority
          />
          <h2 className="text-8xl font-bold text-slate-900">React</h2>
        </div>

        <div className=" mt-24 flex flex-row">
          <div className="w-1/2 flex flex-col">
            <div>
              <h3 className="text-4xl">Features</h3>
            </div>
            <div>
              <div className="p-8">
                <button
                  onClick={handleClick}
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                >
                  <h2 className="text-2xl">Feature 1</h2>
                </button>
                <p className="mt-8">This is the description of the feature.</p>
              </div>

              <div className="p-8">
                <button
                  onClick={handleClick}
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                >
                  <h2 className="text-2xl">Feature 2</h2>
                </button>
                <p className="mt-8">This is the description of the feature.</p>
              </div>

              <div className="p-8">
                <button
                  onClick={handleClick}
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                >
                  <h2 className="text-2xl">Feature 3</h2>
                </button>
                <p className="mt-8">This is the description of the feature.</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-slate-50">
            <div>render the output podcast transcript here</div>
            <div>embed the podcast here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
