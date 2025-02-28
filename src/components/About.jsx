import aboutImg from "/src/assets/about-shoe.png"
// import back from '/src/assets/about-us-background.png'

function About() {
  return (
    <div className="block md:flex md:space-x-8  mt-24 md:mt-20 w-full px-4 ">
              <h1 className="flex md:hidden mb-4  text-white justify-center md:justify-start text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl  md:mb-4 lg:mb-6 font-bold ">About Us!</h1>

      <div className=" bg-about-bg  bg-no-repeat bg-cover  w-full md:w-[50%] h-[430px] min-h-[300px]">
        <img className="w-[300px] mx-auto  " src={aboutImg} alt="" />
      </div>
      <div className="text-white w-full md:w-[50%] mt-16 md:mt-6">
        <h1 className="hidden md:flex  justify-center md:justify-start text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-2 md:mb-4 lg:mb-6 font-bold ">About Us!</h1>
        <div className="space-y-4 md:text-[14px] lg:text-[16px]">
        <p>For each one of those shoe sweethearts out there, THE SHOE COMPANY offer the one-stop goal to pick the correct match of footwear.</p>
        <p>Gone are the days when you needed to go from store to store to locate the correct style and size for yourself.</p>
        <p>At THE SHOE COMPANY, you can locate a vast accumulation of dashing footwear in all sizes and styles, all inside a couple of snaps.</p>
        <p>Simple right? Not just we are here to spare your time, we are putting forth you the most dazzling footwear alternatives from all the first-rate brands like DAVINCHI, PRINCESS, and SIGNATURE. At ‘Organization Name’, we offer men, ladies, and child’s shoes perfect for any and each event.</p>

        </div>
      </div>
    </div>
  )
}

export default About
