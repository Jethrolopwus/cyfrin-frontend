
// import govirtual from "../images/govirtual.png";
// import uj from "./assets/uj.jpg";
// import ya from "../images/ya.png";
// import sterling from "../images/sterling.png";
// import tic from "../images/tic.png";
// import vesti from "../images/vesti.jpg";
import gps from "./assets/gps.jpg";
import giz from "./assets/giz.jpg";
import jtg from "./assets/jtg.png";
import itf from "./assets/itf.jpg";
import gdg from "./assets/gdg.png";
// import cp from "../images/cp.png";
// import pictda from "./assets/pictda.png";
// import Client10 from "../images/client-10.svg";
// import Carousel from "../Components/Carousel";

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/bundle';

const Carousel = () => {
     

  return (
    <section className="bg-geen-600 mt-0">
      <div className="py-12 md:py-20">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 className="h2 font-cabinet-grotesk text-gray-600 text-xl">
           Our students have been hired by the top companies in Web3
          </h2>
        </div>

        {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
        {/* * Custom styles in src/css/additional-styles/theme.scss */}
        <Swiper
            autoplay={{delay:100, disableOnInteraction:false}}
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={0}
          className="flex"
          >
          {/* <SwiperSlide className="bg-slate-900 ">
             <div className="!h-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 w-full group-hover:opacity-100 rounded-2xl transform duration-500 ease-in-out"
                src={uj}
                alt="Client 02"
              />
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 !h-32 !w-32 rounded-2xl transform duration-500 ease-in-out"
                src={gps}
                alt="Client 07"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
                src={gdg}
                alt="Client 11"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 rounded-2xl transform duration-500 ease-in-out"
                src={itf}
                alt="Client 10"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 transform rounded-2xl duration-500 ease-in-out"
                src={jtg}
                alt="Client 09"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
             <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
                src={giz}
                alt="Client 08"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 transform rounded-2xl duration-500 ease-in-out"
                src={jtg}
                alt="Client 09"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Carousel;
