import shoe from "/src/assets/howitwork.png"
import arrow1 from "/src/assets/img-a-1.png"
import arrow2 from "/src/assets/img-a-2.png"
import arrow3 from "/src/assets/img-a-3.png"


function HowItWorks() {
  return (
    <section>
      <h1 className="text-white mt-28 xs:mt-28 sm:mt-24 text-center text-[16px] sm:text-xl md:text-3xl  font-bold w-80 xs:w-96 mx-auto ">Have they finally made the perfect workout shoe?</h1>
      <div className=" w-full mt-6 xs:mt-6 flex justify-center  ">

      <div className="w-[240px] rotate-[30deg] ml-8 xs:ml-0  mt-14 xs:mt:0 xs:rotate-0 xs:w-[280px] sm:w-[340px] md:w-[480px] md:ml-6 lg:ml-0 lg:w-[540px] relative ">
        <img src={shoe} alt="" />
      </div>


      <div className="absolute left-4 mt-0 xs:mt-10 sm:mt-2 xs:left-8 sm:left-8  lg:left-12 xl:left-40 text-white ">
        <div className="w-24 xs:w-24 sm:w-28 md:w-40 lg:w-48  ">
        <h1 className="font-bold text-[15px] sm:text-lg md:text-xl lg:text-2xl">THE HEEL</h1>
        <p className=" text-xs md:text-lg">The heel is well-built, has appropriate elevation and is not too rigid.</p>

        </div>
        <div className="w-16 md:w-32 lg:w-32 ml-4  xl:-mt-4 ">
        <img src={arrow1} alt="" />
        </div>
      </div>


      <div className="absolute mt-28 xs:mt-12 right-4 xs:right-4 sm:right-2 md:-right-2 lg:right-12 xl:right-36 ">
      <div className="w-20 sm:w-24  md:w-32 lg:w-36  ml-2 xs:-ml-10 sm:-ml-16 md:-ml-20 -mb-48 xs:mb-8 md:-mb-0  xs:mt-1 sm:mt-10 rotate-[140deg] xs:rotate-0">
          <img className="" src={arrow2} alt="" />
        </div>

        <div className="text-white w-24 xs:w-24  sm:w-36 md:w-56 xs:-mt-12  mt-4 ">
          <h1 className="font-bold text-[15px] sm:text-lg md:text-2xl">THE FRONT</h1>
          <p className="text-xs md:text-lg">The front is comfortable and adjusts well to the shape of your foot.</p>
        </div>
      </div>


      <div className="absolute left-20 bottom-8 xs:bottom-20 sm:left-20 sm:bottom-8 md:left-36 md:-bottom-40 lg:-bottom-36 lg:left-36 xl:-bottom-2 xl:left-75 flex ">
        <div className="text-white w-16  xs:w-24 sm:w-36 md:w-56">
          <h1 className="font-bold  text-[15px] sm:text-lg md:text-2xl">TRACTION</h1>
          <p className="text-xs md:text-lg" >The shoe has good traction and doesn't slip easily.</p>
        </div>
        <div className="w-16 ml-4 xs:ml-0  sm:w-20   md:w-32 lg:w-32"> 
          <img src={arrow3} alt="" />
        </div>
      </div>
      </div>
    </section>
  )
}

export default HowItWorks
