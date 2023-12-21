
// import govirtual from "../images/govirtual.png";
// import uj from "./assets/uj.jpg";
// import ya from "../images/ya.png";
// import sterling from "../images/sterling.png";
import polygon from ".//assets/Polygon.png";
// import vesti from "../images/vesti.jpg";
import alchemy from "./assets/alchemy.png";
import metamask from "./assets/MetaMask.png";
import Blur from "./assets/Blur.png";
import cyfrin from "./assets/Cyfrin.png";
import blockfi from "./assets/Blockfi.png";
import consensy from "./assets/consensys.png";
import bitconomy from "./assets/bitconomy.png";
import cryptodotcom from "./assets/cryptodotcom.png";
import gemini from "./assets/Gemini.png";
import thirdweb from  "./assets/Thirdweb.png"

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

        <Swiper
            autoplay={{delay:100, disableOnInteraction:false}}
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={0}
          className="flex"
          >
          
          <SwiperSlide>
            <div className=" !h-32 !w-32 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 !h-10 !w-32 rounded-2xl transform duration-500 ease-in-out"
                src={alchemy}
                alt="Client 07"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="!h-32 !w-32 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 !h-10 !w-32 transform duration-500 ease-in-out"
                src={blockfi}
                alt="Client 11"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="!h-32 !w-32 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 !h-10 !w-32  rounded-2xl transform duration-500 ease-in-out"
                src={bitconomy}
                alt="Client 10"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="!h-32 !w-32 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 !h-10 !w-32 transform rounded-2xl duration-500 ease-in-out"
                src={consensy}
                alt="Client 09"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
             <div className="!h-32 !w-32 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 !h-10 !w-32 transform duration-500 ease-in-out"
                src={cyfrin}
                alt="Client 08"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="!h-32 !w-32  flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 !h-10 !w-32 transform rounded-2xl duration-500 ease-in-out"
                src={cryptodotcom}
                alt="Client 09"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="!h-32 !w-32  flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 !h-10 !w-32 transform rounded-2xl duration-500 ease-in-out"
                src={Blur}
                alt="Client 09"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="!h-32 !w-32  flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 !h-10 !w-32 transform rounded-2xl duration-500 ease-in-out"
                src={metamask}
                alt="Client 09"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="!h-32 !w-32  flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 !h-10 !w-32 transform rounded-2xl duration-500 ease-in-out"
                src={polygon}
                alt="Client 09"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="!h-32 !w-32  flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 !h-10 !w-32 transform rounded-2xl duration-500 ease-in-out"
                src={gemini}
                alt="Client 09"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="!h-32 !w-32  flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 !h-10 !w-32 transform rounded-2xl duration-500 ease-in-out"
                src={thirdweb}
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
