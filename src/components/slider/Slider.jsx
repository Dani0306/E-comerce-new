import React, { useEffect, useState } from 'react'
import SwiperCore,  { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import IndividualSlider from './IndividualSlider'
import 'swiper/css';


const images = [{
  image: "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-e6c75.appspot.com/o/Shoes%2Fairforceone.jpg?alt=media&token=b801cb76-05be-45e4-a3c7-b2487e827211", 
  direction: "left", 
  price: "200.000"
}, 
{ 
  image: "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-e6c75.appspot.com/o/Shoes%2Fairforceoneblack.jpg?alt=media&token=774627cf-320c-4bd9-b270-5ea05a441a4d", 
  direction: "right", 
  price: "900.000"
}
, { 
  image: "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-e6c75.appspot.com/o/Shoes%2Fnikerunning.jpg?alt=media&token=e363935e-d404-488d-85ae-470601450fdf",
  direction: "left",
  price: "700.000" 
}]


const Slider = () => {

    SwiperCore.use([Autoplay])
    const [activeIndex, setActiveIndex] = useState(0)

  return (
        <Swiper style={{ width: "100%", height: "75vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "8vh" }} modules={[Autoplay]}
        grabCursor={true}
        autoplay={{ delay: 4000 }}
        onSlideChange={(e) => setActiveIndex(e.activeIndex)}
        spaceBetween={0}
        slidesPerView={1}>
            {
              images.map((image, index) => (
                <SwiperSlide key={index}>
                    <IndividualSlider src={image.image} buttonDirection={image.direction} price={image.price} />
                </SwiperSlide>
              ))
            }
            <div className='z-10 w-[100px] lg:w-[150px] h-[30px] absolute bottom-5 flex items-center justify-between'>
              <div className={`swiper-circle ${activeIndex === 0 && "w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] opacity-100"}`}></div>
              <div className={`swiper-circle ${activeIndex === 1 && "w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] opacity-100"}`}></div>
              <div className={`swiper-circle ${activeIndex === 2 && "w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] opacity-100"}`}></div>
            </div>
        </Swiper>
  )
}

export default Slider