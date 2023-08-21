import React, { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const docs = {
  React:{
    link:"card1",
    name:"React",
    img:"/react.png",
    description:"React is a free and open-source front-end JavaScript library for building user interfaces based on components"
  },
  Godot:{
    link:"card2",
    name:"Godot",
    img:"/godot.png",
    description:"Godot is a cross-platform, free and open-source game engine."
  }
}


export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/docs');
      const docs = await response.json();
      setData(docs);
    }

    fetchData();
  }, []);
  console.log(data)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="container mx-auto">
        <div className="flex flex-row">
          <Image
            src="/ellipse.svg"
            alt="Feature Sage Logo"
            className=""
            width={36}
            height={36}
            priority
          />
          <div className="text-4xl ps-4">
            <h2>featureSage</h2>
          </div>
        </div>

        <div className="py-16 w-2/3 ">
          <h1 className="text-6xl font-bold leading-snug ">
            Unveiling Tech Possibilities Through Narrative Podcasts
          </h1>
        </div>

        <div className="flex flex-row my-4">
          <div className="w-1/2 -mt-24">
            <Image
              src="/podcast.svg"
              alt="Hero Image"
              className=""
              width={436}
              height={468}
              priority
            />
          </div>
          <div className="w-1/2">
            <h3 className="text-4xl font-bold mb-2">Watch our Trailer </h3>
            <p className="text-2xl mb-8 text-indigo-800">Hosted by AI Agents</p>
            <p className="mb-4">
              🚀 Hey there, tech enthusiasts and dreamweavers!{" "}
            </p>
            <p className=" mb-4">
              Are you ready to embark on an exhilarating journey that will
              reshape the way you perceive tech features?
            </p>
            <p>
              🌟 Introducing FeatureSage, the groundbreaking web app that's
              about to revolutionize the world of open source and proprietary
              projects!
            </p>
          </div>
        </div>

        <h3 className="text-4xl font-bold my-12">Our Latest Endeavours</h3>

        <div className="mb-32 flex text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {
            data && data.docs && <>
            {
              data.docs.map(x => <>
              <Link href={docs[x].link} legacyBehavior>
            <a
              className="group mr-8 rounded-lg border border-transparent px-5 py-4 transition-colors bg-white border-indigo-400 hover:border-gray-300 hover:bg-indigo-200 "
              rel="noopener noreferrer"
            >
              <Image
                src={docs[x].img}
                alt="react logo"
                className=" mb-8 mx-auto"
                width={128}
                height={128}
              />
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {docs[x].name}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {docs[x].description}
              </p>
            </a>
          </Link>
              </>)
            }
            </>
          }
        </div>
      </div>
    </main>
  );
}
