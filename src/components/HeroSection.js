import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/1.jpg"

const HeroSection = ({ theme }) => {
  return (
    <div>
      <div className="h-screen relative">
        {theme === "dark" ? (
          <iframe
            src="https://my.spline.design/interactiveaistartupheropage-035a8761037253b26ebada7369996153/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        ) : (
          <iframe
            src="https://my.spline.design/interactiveaistartupheropage-dadac4f1d60e730d92b8acb28403a2c6/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        )}
      </div>
      <div className="absolute top-36 md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
        <h1 className="flex flex-col gap-2 md:gap-5 text-2xl sm:text-3xl md:text-[3.2rem] 2xl:text-6xl font-bold">
          <p>We are Providing Hassle</p>
          <p>free Service.</p>
        </h1>
        <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
        Our dedicated team ensures smooth and seamless experiences, allowing you to focus on what truly matters. 
        </p>
        <button className="md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-green-800 hover:bg-white hover:border-green-800 shadow-2xl hover:bg-transparent hover:text-green-800 rounded-full">
          <Link href="https://github.com/NaseemKhan005" target="_blank">
            Explore
          </Link>
        </button>
      </div>
      {/* <section
        className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44 border-2 border-black"
        id="home"
      >
        <div className="w-full relative">
          <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.png')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
            <Image
              src={img1}
              width={1100}
              height={500}
              alt="hero Image"
              className="object-contain mx-auto"
            />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default HeroSection;
