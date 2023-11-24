import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex flex-col items-center m-8">
      <div className="flex flex-col items-center mb-8">
        <p className="text-amber-400 text-3xl">
          02. <span className="text-white">Projects</span>
        </p>
      </div>
      <div className="flex flex-col items-center celllg: max-w-md">
        <p className="text-amber-400 text-3xl mb-4">CozyCupid</p>
        <Image
          className="border-yellow-400 border-4 rounded-lg max-w-xs max-h-xs cellsm:max-w-sm cellsm:max-h-sm tablet:max-w-md tablet:max-h-md lapsm:max-w-lg lapsm:max-h-lg lapxl:max-w-xl lapxl:max-h-xl desksm:max-w-2xl desksm:max-h-2xl desklg:max-w-3xl desklg:max-h-3xl"
          layout="responsive"
          height={500}
          width={500}
          src="/images/cozyCupidWebsite.png"
          alt="CozyCupid Website"
        />
        <p className="text-gray-500 text-2xl indent-8 py-4">
          Lead meetings with client to help create the brand of the company's
          product. Collaborated with client to build a responsive website that
          fulfilled all of the company's buisness needs.
        </p>
      </div>
    </div>
  );
}
