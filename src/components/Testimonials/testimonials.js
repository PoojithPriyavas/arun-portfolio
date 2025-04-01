// import React, { useRef, useState } from 'react';
// import './testimonials.css';
// import SwiperCore, { Navigation, Pagination ,Autoplay} from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// SwiperCore.use([Navigation, Pagination,Autoplay]);


// export default function App() {
//   return (
//     <div className='testimonial'>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination,Autoplay]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }


import React from 'react';
import './testimonials.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    rtl: false,
    centerMode: false,
    focusOnSelect: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]

  }
  const testimonialDetails = [
    {
      id: 1,
      name: 'Marry Jenefer',
      quote: '“That will need careful attention To begin to identify aspects of students’ own portfolios To identify key portfolio features, varied styles, and organizational schemes.”'
    },
    {
      id: 2,
      name: 'Elezabeth Marvel',
      quote: '“To identify key portfolio features, varied styles, and organizational schemes; to begin to identify aspects of students’ own portfolios that will need careful attention.”'
    },
    {
      id: 3,
      name: 'Marry Jenefer',
      quote: '“That will need careful attention To begin to identify aspects of students’ own portfolios To identify key portfolio features, varied styles, and organizational schemes.”'
    },
    {
      id: 4,
      name: 'Elezabeth Marvel',
      quote: '“To identify key portfolio features, varied styles, and organizational schemes; to begin to identify aspects of students’ own portfolios that will need careful attention.”'
    }
  ]

  return (
    <div className="tstml" style={{padding:'60px 0'}}>
    <div className="container">
      <div className="tstml-main">
        <div className="tstml-text">
          <p className="tstml-title">Testimonials</p>
          <h1 style={{ color: '#fff' }}>What My Client Say.</h1>
        </div>
        <Slider {...settings}>
          {testimonialDetails.map((item, i) => (
            <div className="custom-slide-div">
            <div className="custom-slide" key={i}>
              <p style={{ color: '#fff' }}>{item.quote}</p>
              <h3 style={{ color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="line"></span>
                <img
                  src="/assets/about/user.jpg"
                  alt="User"
                  className="name-img"
                  style={{ width: '30px', height: '30px', marginRight: '10px',borderRadius:'50%' }}
                />
                {item.name}
                {/* <img
                  src='/assets/icons/quote.png'
                  alt="Quote"
                  className="quote-img"
                  style={{ width: '30px', height: '30px', marginLeft: '10px' }}
                /> */}
              </h3>
            </div>
            </div>
          ))}
        </Slider>
        {/* <div className="tstml-bg"><h1>Review</h1></div> */}
      </div>
    </div>
  </div>


  )
}

