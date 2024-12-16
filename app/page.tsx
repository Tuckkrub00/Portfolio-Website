import Hero from "./components/main/Hero";
import { Project } from "./components/main/Project";
import Skills from "./components/main/Skills";

export default function Home() {
  return (
    <main className="h-full  w-full">
      <div className="flex bg-violet-950  bg-opacity-30 z-[2] flex-col gap-20">
        {/* <video
          autoPlay={true}
          loop={true}
          muted={true}
          // className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
          // className="transform scale-x-[-1] absolute  left-0 z-[1] w-full h-full object-cover"
          className="transform  absolute  left-0 z-[1] w-full h-full object-cover"
        >
          <source
            src="/webm/tendou-alice-blue-archive-1-moewalls-com.mp4"
            type="video/mp4"
          />
        </video> */}
        <Hero></Hero>
        <Skills />
        <Project></Project>
      </div>
    </main>
  );
}
