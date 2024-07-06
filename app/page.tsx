import PreLoader from "@/components/preloader";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <PreLoader />
      <section className="flex h-screen w-full justify-center items-center py-20 text-[#191815]">
        <h1 className="flex flex-col xl:text-[20rem] xl:leading-[16rem] lg:text-[16rem] lg:leading-[13rem] md:text-[12rem] md:leading-[10rem] sm:text-[10rem] sm:leading-[8.5rem] text-[7rem] leading-[6rem] font-bold uppercase tracking-tighter">
          <span>kaiden</span>
          <span>riley</span>
        </h1>
        <div className="absolute left-0 top-0 flex translate-x-[3.2rem] translate-y-[2.7rem] items-center gap-x-2">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <p className="opacity-75">
            looking for position as <span className="text-green-500">junior software engineer</span>
          </p>
        </div>
      </section>
      <section className="grid h-fit w-screen grid-cols-2 gap-3 p-3">
        {Array.from({length: 6}, (_, i) => i + 1).map((num) => (
          <div
            key={num}
            className={`relative w-full ${
              num === 3 ? "col-span-2 aspect-video" : num === 5 ? "row-span-2" : "aspect-square"
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
