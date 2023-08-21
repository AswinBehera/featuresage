import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group mr-8 rounded-lg border border-transparent px-5 py-4 transition-colors bg-white border-slate-400 hover:border-gray-300 hover:bg-indigo-200 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/react.png"
              alt="react logo"
              className=" mb-8 mx-auto"
              width={128}
              height={128}
            />
            <h2 className={`mb-3 text-2xl font-semibold`}>
              React{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on components
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className=" group mr-8 rounded-lg border border-transparent px-5 py-4 transition-colors bg-white border-slate-400 hover:border-gray-300 hover:bg-indigo-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/godot.png"
              alt="godot logo"
              className="mb-8 mx-auto"
              width={128}
              height={128}
            />
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Godot{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Godot is a cross-platform, free and open-source game engine.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
