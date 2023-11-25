import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center m-8 lapxl:mx-52 desksm:mx-80 desksm:mt-80 desklg:mr-96 desklg:ml-96">
      <p className="text-amber-400 text-3xl mb-8">
        02. <span className="text-white">Projects</span>
      </p>
      <div className="grid lapsm:grid-rows-2 lapsm:grid-cols-2 gap-8 laplg:gap-16 desksm:gap-32">
        <div className="flex flex-col items-center">
          <p className="text-amber-400 text-3xl mb-4">CozyCupid</p>
          <Image
            className="border-yellow-400 border-4 rounded-lg mb-8 max-w-xs max-h-xs cellsm:max-w-sm cellsm:max-h-sm tablet:max-w-md tablet:max-h-md lapsm:max-w-lg lapsm:max-h-lg laplg:max-w-xl laplg:max-h-xl lapxl:max-w-2xl lapxl:max-h-2xl desksm:max-w-3xl desksm:max-h-3xl desklg:max-w-6xl desklg:max-h-6xl"
            layout="responsive"
            height={500}
            width={500}
            src="/images/cozyCupidWebsite.png"
            alt="CozyCupid Website"
          />
          <div className="mb-8">
            <Link
              href="https://www.cozycupid.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 border-yellow-400 p-2 border-4 rounded-lg hover:bg-yellow-700"
            >
              Live Site
            </Link>
          </div>
          <p className="text-gray-500 text-2xl indent-8 mb-4 celllg:max-w-sm tablet:max-w-md lapsm:max-w-lg desksm:max-w-2xl desklg:max-w-3xl">
            Lead meetings with client to help create the brand of the
            company&apos;s product. Collaborated with client to build a
            responsive website that fulfilled all of the company&apos;s buisness
            needs.
          </p>
          <div className="flex flex-wrap">
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              React
            </p>
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              Next.js
            </p>
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              Vercel
            </p>
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              Tailwind
            </p>
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              FormSubmit
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-amber-400 text-3xl mb-4">Poke To The Moon</p>
          <Image
            className="border-yellow-400 border-4 rounded-lg mb-8 max-w-xs max-h-xs cellsm:max-w-sm cellsm:max-h-sm tablet:max-w-md tablet:max-h-md lapsm:max-w-lg lapsm:max-h-lg laplg:max-w-xl laplg:max-h-xl lapxl:max-w-2xl lapxl:max-h-2xl desksm:max-w-3xl desksm:max-h-3xl desklg:max-w-6xl desklg:max-h-6xl"
            layout="responsive"
            height={500}
            width={500}
            src="/images/portfolioPttM.png"
            alt="Poke To The Moon"
          />
          <div className="mb-8">
            <Link
              href="https://www.poketothemoon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 border-yellow-400 p-2 border-4 rounded-lg hover:bg-yellow-700"
            >
              Live Site
            </Link>
          </div>
          <p className="text-gray-500 text-2xl indent-8 mb-4 celllg:max-w-sm tablet:max-w-md lapsm:max-w-lg desksm:max-w-2xl desklg:max-w-3xl">
            Collaborated with resturant owners to create
          </p>
          <div className="flex flex-wrap">
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              React
            </p>
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              Next.js
            </p>
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              Vercel
            </p>
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              Tailwind
            </p>
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              FormSubmit
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-amber-400 text-3xl mb-4">
            Poseidon&apos;s Dashboard
          </p>
          <Image
            className="border-yellow-400 border-4 rounded-lg mb-8 max-w-xs max-h-xs cellsm:max-w-sm cellsm:max-h-sm tablet:max-w-md tablet:max-h-md lapsm:max-w-lg lapsm:max-h-lg laplg:max-w-xl laplg:max-h-xl lapxl:max-w-2xl lapxl:max-h-2xl desksm:max-w-3xl desksm:max-h-3xl desklg:max-w-6xl desklg:max-h-6xl"
            layout="responsive"
            height={500}
            width={500}
            src="/images/portfolioDashboard.png"
            alt="Personal Dashboard"
          />
          <div className="mb-8">
            <Link
              href="https://dashboard-kappa-blue.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 border-yellow-400 p-2 border-4 rounded-lg hover:bg-yellow-700"
            >
              Live Site
            </Link>
          </div>
          <p className="text-gray-500 text-2xl indent-8 mb-4 celllg:max-w-sm tablet:max-w-md lapsm:max-w-lg desksm:max-w-2xl desklg:max-w-3xl">
            Lead meetings with client to help create the brand of the
            company&apos;s product. Collaborated with client to build a
            responsive website that fulfilled all of the company&apos;s buisness
            needs.
          </p>
          <div className="flex flex-wrap">
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              React
            </p>
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              Next.js
            </p>
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              Vercel
            </p>
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              Tailwind
            </p>
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              FormSubmit
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-amber-400 text-3xl mb-4">Blog Website</p>
          <Image
            className="border-yellow-400 border-4 rounded-lg mb-8 max-w-xs max-h-xs cellsm:max-w-sm cellsm:max-h-sm tablet:max-w-md tablet:max-h-md lapsm:max-w-lg lapsm:max-h-lg laplg:max-w-xl laplg:max-h-xl lapxl:max-w-2xl lapxl:max-h-2xl desksm:max-w-3xl desksm:max-h-3xl desklg:max-w-6xl desklg:max-h-6xl"
            layout="responsive"
            height={500}
            width={500}
            src="/images/portfolioBlog.png"
            alt="Blog Website"
          />
          <div className="mb-8">
            <Link
              href="https://react-typescript-blog-peach.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 border-yellow-400 p-2 border-4 rounded-lg hover:bg-yellow-700"
            >
              Live Site
            </Link>
          </div>
          <p className="text-gray-500 text-2xl indent-8 mb-4 celllg:max-w-sm tablet:max-w-md lapsm:max-w-lg desksm:max-w-2xl desklg:max-w-3xl">
            Lead meetings with client to help create the brand of the
            company&apos;s product. Collaborated with client to build a
            responsive website that fulfilled all of the company&apos;s buisness
            needs.
          </p>
          <div className="flex flex-wrap">
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              React
            </p>
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              Next.js
            </p>
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              Vercel
            </p>
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              Tailwind
            </p>
            <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
              FormSubmit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
