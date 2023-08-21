import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Card  = (product,img, alt) => () => {
  const [features, setFeatures] = useState(null);
  const [feature,setFeature] = useState(null);
  const [audio, setAudio] = useState(null);
  useEffect(()=>{
    async function fetchData()
    {
      const response = await fetch('/api/features',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product })
      });
      const docs = await response.json();
      setFeatures(docs.data);
    }
    fetchData()
  },[])
  
  const fetchAudio = async (transcript) =>
  {
    setAudio(null);
    const response = await fetch('/api/audio',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: transcript })
    });
    const data = await response.json();
    setAudio(data.file)
  }

  const handleClick = async (feature) => 
  {
    setFeature('loading')
      const response = await fetch('/api/podcast',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feature: feature })
      });
      const data = await response.json();
      setFeature(data);
      fetchAudio(data.transcript);
  };
  console.log(feature)

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="container">
        <div className=" flex flex-row pb-8 border-b-2 border-slate-800">
          <Image
            src={img}
            alt={alt}
            className="mr-4"
            width={80}
            height={80}
            priority
          />
          <h2 className="text-8xl font-bold text-slate-900">{product}</h2>
        </div>

        <div className=" mt-24 flex flex-row">
          <div className="w-1/2 flex flex-col">
            <div>
              <h3 className="text-4xl">{features ? "Features" : "Loading"}</h3>
            </div>
            <div>
              {features && <>
              {
                features.map(({Feature, Description}) => <>
                <div className="p-8">
                <button
                  onClick={() => {if(!feature || feature != "loading" ) handleClick(Feature)}}
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                >
                  <h2 className="text-2xl">{Feature}</h2>
                </button>
                <p className="mt-8">{Description}</p>
              </div></>)
              }
              </>}

              
            </div>
          </div>
          {feature &&  feature !=  "loading" && <div className="w-1/2 bg-slate-50 p-16 rounded-md focus:drop-shadow-md">
            <h3 className="text-2xl font-medium mb-8">{feature.episode}</h3>
            {audio && <audio src={`audio/${audio}`} controls/>}
            <div>{feature.transcript}</div>           
          </div>}
          {feature &&  feature ==  'loading' && <div className="w-1/2 bg-slate-50 p-16 rounded-md flex flex-col items-center focus:drop-shadow-md">
            <div>loading</div>           
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
