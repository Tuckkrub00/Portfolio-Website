import { HeroContent } from "../sub/HeroContent";

const b = async () => {
  const res = await fetch("http://localhost:3000/api/gimini", {
    method: "GET",
  });
  const data = await res.json();
  console.log(data);
};

const Hero = async () => {
  // await fet();
  await b();
  return (
    <div className="relative  flex flex-col  h-full w-full">
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        // className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
        // className="transform scale-x-[-1] absolute  left-0 z-[1] w-full h-full object-cover"
        className="transform scale-x-[-1] fixed  left-0 z-[-1] w-full h-full object-cover"
      >
        <source
          src="/webm/tendou-alice-blue-archive-1-moewalls-com.mp4"
          type="video/mp4"
        />
      </video>
      <HeroContent></HeroContent>
    </div>
  );
};

export default Hero;
