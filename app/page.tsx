"use client";

import PreLoader from "@/components/preloader";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <main className="hidden md:block">
      <PreLoader isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      <section className="flex h-screen w-full items-center py-20 text-[#191815]">
        <h1 className="flex flex-col px-20 text-[18rem] font-bold uppercase leading-[14rem] tracking-tighter">
          <span>kaiden</span>
          <span>riley</span>
        </h1>
        <div className="absolute left-0 top-0 flex translate-x-[6.25rem] translate-y-[3rem] items-center gap-x-2">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <p className="opacity-75">looking for position as</p>
          <p className="text-green-500">junior software engineer</p>
        </div>
      </section>
      <section className="grid h-fit w-screen grid-cols-2 gap-3 p-3">
        {Array.from({ length: 6 }, (_, i) => i + 1).map((num) => (
          <div
            key={num}
            className={`relative w-full ${
              num === 3
                ? "col-span-2 aspect-video"
                : num === 5
                  ? "row-span-2"
                  : "aspect-square"
            }`}>
            <Image
              src="https://images.unsplash.com/photo-1627133833133-adbd0b0e0e50?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={`img-${num}`}
              quality={95}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </section>
    </main>
  );
}
