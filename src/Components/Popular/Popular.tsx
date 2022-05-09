import React, { useEffect, useState } from 'react'
import './Popular.css'
import {Space} from "../../Interface";
import api from "../../api";
import PopularCard from './PopularCard';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Popular() {
    const [spaceList, setSpaceList] = useState<Space[]>([]);
    useEffect(() => {
        api.getPopularSpaces(10).then(fetched => {
            setSpaceList(fetched.data);
        })
        .catch(err => {
            console.log(err);
        });
    },[]);
    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
      };
      const [sliderRef, setSliderRef] = useState<any>(null);
    
  return (
    <div className='container'>
        <div style={{marginTop:"80px"}}>
        <h3 className='mb-2'>Explore the most popular workplaces</h3>
         <div className='controls'>
         <div onClick={sliderRef?.slickPrev} >
            <i className="bi bi-arrow-left-circle-fill arrowCarousel"></i>
         </div>
         <div onClick={sliderRef?.slickNext} >
            <i className="bi bi-arrow-right-circle-fill arrowCarousel"></i>
         </div>
        </div>
        <Slider {...settings} className="slide" ref={setSliderRef} >
            {spaceList.length ? spaceList.map((item)=>(
                <div key={item.id} className="slideDiv">
                    <PopularCard key={item.id} space={item} />
                </div>
                )
            ): ""}
        </Slider>
      </div>
    </div>
  )
}

export default Popular