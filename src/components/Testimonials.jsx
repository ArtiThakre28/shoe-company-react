import mask1 from "/src/assets/maskimg-1.png";
import mask2 from "/src/assets/maskimg-2.png";
import mask3 from "/src/assets/maskimg-3.png";

function Testimonials() {
  return (
    <section className="bg-testimonials-bg md:h-screen  bg-cover">
      <div className="  pt-24 lg:pt-28  text-white text-center w-full ">
        <h1 className="text-lg  md:text-2xl lg:text-4xl font-bold  w-[320px] md:w-[510px] mx-auto mb-10">
          What People are saying about THE SHOE COMPANY ?
        </h1>

        <div className=" -mt-6 md:-mt-14 lg:-mt-8 xl:-mt-2 block justify-center items-center space-y-6 md:space-y-0 md:flex md:justify-between md:space-x-4  w-full">
          <div className=" w-full md:w-[33.33%]   ">
            <div className=" flex justify-center   ">
              <img className="w-[260px]" src={mask1} alt="" />
            </div>
            <p className="text-white px-8 text-center">
              “Looking for shoes that are built just for you? THE SHOE COMPANY
              is the way to go. Love the design and build quality.”
            </p>
          </div>

          <div className="w-full md:w-[33.33%]">
            <div className="flex justify-center">
              <img className="w-[260px] " src={mask2} alt="" />
            </div>
            <p className="text-white px-8 text-center">
              “I love the shoes, the quality, and everyting. They are worth the
              investment!”
            </p>
          </div>

          <div className="w-full  md:w-[33.33%]">
            <div className="flex justify-center">
              <img className="w-[260px]" src={mask3} alt="" />
            </div>
            <p className="text-white px-8 pb-4 text-center">
              “They make the best and forever lasting shoes. Superb fit and
              confort is literally the next level. Much recommended!”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
