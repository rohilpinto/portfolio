"use client";

import Image from "next/image";

// https://codepen.io/jh3y/pen/XWGrGJL

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center bg-black h-screen text-white p-4">
      <div className="flex flex-col-reverse lg:flex-row gap-10 justify-center items-center">
        <div className="max-w-[800px] flex flex-col gap-2 text-center lg:text-left">
          <h1 className="text-4xl font-bold">Hello! I&lsquo;m Rohil</h1>
          <p className="m-auto font-light">
            A seasoned React and Next.js developer based in India. I specialize in creang efficient web applications, incorporating smooth animations with Framer Motion. My skills encompass React.js, Next.js, Framer Motion, UI design, and seamless API integration. <br /> <br /> Let&lsquo;s
            collaborate to elevate your project with my expertise and commitment to excellence!
          </p>
        </div>

        <Image src="/profile-picture.jpg" width={250} height={250} alt="profile picture" className="rounded" />
      </div>

      {/* <div className="w-full flex justify-center items-center gap-5 ">
        <div className="w-[250px] h-[300px] bg-gray-400 rounded-xl p-2">
          <h2>About Me</h2>
        </div>
        <div className="w-[250px] h-[300px] bg-gray-400 rounded-xl p-2">
          <h2>Resume</h2>
        </div>
      </div> */}
    </main>
  );
}
