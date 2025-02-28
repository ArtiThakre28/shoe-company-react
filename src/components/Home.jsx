import React from "react";
import BigShoe from "/src/assets/big-shoes.png";
import BgImage from "/src/assets/background-road-edited.jpg";

function Home() {
  return (
    <>
      <section className="block w-full xs:flex justify-between bg-custom-bg bg-right bg-cover  sm:bg-contain bg-no-repeat h-screen px-4 ">
          <div className="text-white font-bold text-3xl md:mt-14  w-8 leading-snug pt-24  xs:mt-14 sm:mt-14 xs:leading-snug xs:text-3xl sm:text-4xl md:text-[50px] sm:leading-snug  md:leading-snug lg:leading-snug lg:text-7xl relative z-5 ">
            <h1>THE SHOE COMPANY</h1>
          </div>

          <div className="">
            <img className=" w-[300px] xs:w-[400px] sm:w-[500px] md:w-[500px] lg:w-[600px] xl:w-[700px]  xl:mt-20 xs:mt-24 sm:mt-24 xs:-ml-2 sm:-ml-20 md:-ml-20 lg:-ml-40 md:mt-24  " src={BigShoe} alt="" />
          </div>
      </section>
    </>
  );
}

export default Home;
