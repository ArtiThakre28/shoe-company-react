import facebook from "/src/assets/facebook.png";
import instagram from "/src/assets/instagram.png";
import twitch from "/src/assets/twitch.png";
import youtube from "/src/assets/youtube.png";
import logo from "/src/assets/logo.png";

function ContactUs() {
  return (
    <>
      <section className=" mt-20 md:mt-20 px-6">
        <div className=" block justify-center md:flex md:justify-between  w-full ">
          <div className=" w-full flex flex-col items-center text-center  justify-center p-6 ">
            <h1 className="text-white  font-bold text-3xl leading-snug  md:mb-6 ">
              Contact Us
            </h1>
            <p className="text-white w-[200px] mb-4">
              THE SHOE COMPANY, Dallas, Texas, USA +1 5590 1120 9910
            </p>
            <div className="flex space-x-4">
              <img
                className="w-[25px] h-[25px] md:w-[35px] md:h-[35px]"
                src={facebook}
                alt="Facebook"
              />
              <img
                className="w-[25px] h-[25px] md:w-[35px] md:h-[35px]"
                src={instagram}
                alt="Instagram"
              />
              <img
                className="w-[25px] h-[25px] md:w-[35px] md:h-[35px]"
                src={twitch}
                alt="Twitch"
              />
              <img
                className="w-[25px] h-[25px] md:w-[35px] md:h-[35px]"
                src={youtube}
                alt="YouTube"
              />
            </div>
          </div>

          <div className="w-full">
            <iframe
              className="  w-full h-[300px] md:w-[400px] lg:w-[500px] md:max-w-[500px]  min-w-[200px]  md:h-[450px] pb-4 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429184.5590119627!2d-97.0617613413357!3d32.81864925609236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1738074723566!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <footer className="flex justify-center ">
          <div>
            <img className="w-[50px] " src={logo} alt="" />
          </div>
          <p className="text-white text-center mt-4">
            Made with 🤍 By Arti Thakre
          </p>
        </footer>
      </section>
    </>
  );
}

export default ContactUs;
