// "use client";

import { Suspense } from "react";
import { ARR_OF_SOCIAL_MEDIA } from "@/utils/constants";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import SplineLine from "@/components/SplineAnimation";
import Spline from "@splinetool/react-spline";
import SplineAnimation from "@/components/SplineAnimation";

// https://codepen.io/jh3y/pen/XWGrGJL

export const metadata = {
  title: "Rohil Pinto",
  description: "Welcome to my portfolio website!",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center bg-black h-screen text-white p-4">
      <div className="realtive z-20 flex flex-col-reverse lg:flex-row gap-10 justify-center items-center backdrop-contrast-[1.4] backdrop-blur-2xl p-5 rounded-2xl border border-[5px]">
        <div className="max-w-[800px] flex flex-col gap-5 text-center lg:text-left">
          <h1 className="text-4xl font-bold">Hello! I&lsquo;m Rohil</h1>
          <p className="m-auto font-light">
            A seasoned React and Next.js developer based in India. I specialize in creating efficient web applications, incorporating smooth animations with Framer Motion. My skills encompass React.js, Next.js, Framer Motion, UI design, and seamless API integration. <br /> <br /> Let&lsquo;s
            collaborate to elevate your project with my expertise and commitment to excellence!
          </p>
          <div className="flex gap-2 justify-center lg:justify-start">
            {ARR_OF_SOCIAL_MEDIA.map(({ name, Component, href }) => (
              <a key={name} href={href} target="_blank" className="transition duration-100 ease-in-out hover:scale-105">
                <Component width={30} />
              </a>
            ))}
          </div>
        </div>

        <Image src="/profile-picture.jpg" width={250} height={250} alt="profile picture" className="rounded transition duration-300 ease-in-out hover:scale-[1.02]" />
      </div>

      <SplineAnimation scene="https://prod.spline.design/a6xaoAbhO2StvX-7/scene.splinecode" className="absolute z-10" />
    </main>
  );
}
