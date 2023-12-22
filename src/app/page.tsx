"use client";

import { Suspense } from "react";
import { ARR_OF_SOCIAL_MEDIA } from "@/utils/constants";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import SplineLine from "@/components/SplineLine";
import Spline from "@splinetool/react-spline";

// https://codepen.io/jh3y/pen/XWGrGJL

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center bg-black h-screen text-white p-4">
      <div className="realtive z-10 flex flex-col-reverse lg:flex-row gap-10 justify-center items-center backdrop-contrast-[1.4] backdrop-blur-2xl p-5 rounded-2xl">
        <div className="max-w-[800px] flex flex-col gap-5 text-center lg:text-left">
          <h1 className="text-4xl font-bold">Hello! I&lsquo;m Rohil</h1>
          <p className="m-auto font-light">
            A seasoned React and Next.js developer based in India. I specialize in creang efficient web applications, incorporating smooth animations with Framer Motion. My skills encompass React.js, Next.js, Framer Motion, UI design, and seamless API integration. <br /> <br /> Let&lsquo;s
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

      {/* <Suspense fallback={<>Loading...</>}>
        <Canvas shadows flat linear>
          <SplineLine />
        </Canvas>
      </Suspense> */}
      <Spline scene="https://prod.spline.design/oiAuKV4eM6M0QsUQ/scene.splinecode" className="absolute " />
      {/* <Spline scene="https://prod.spline.design/KrZksOZWrKg2VZ2f/scene.splinecode" className="absolute" /> */}
    </main>
  );
}
