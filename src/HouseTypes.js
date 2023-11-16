import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {memo} from 'react'
// const Filters=()=>{
//     return(
//         <div>
//             <div id='filter'>
//                 <span><i class="bi bi-filter"></i></span>
//                 <span>Filters</span>
//             </div>
//             <div id='tax-filter'>
//                 <span>Display total before taxes</span>
//                 <span><i class="bi bi-toggle-off"></i></span>
//             </div>
//         </div>
//     )
// }
const HouseTypes=memo((props)=>{
    const {handleClick}=props
    
    let types=[
        {
            type:"bi bi-house-door",
            name:"Amazing"
        },
        {
            type:"bi bi-house",
            name:"Beach"
        },
        {
            type:"bi bi-house-add",
            name:"Cabins"
        },
        {
            type:"bi bi-house-check",
            name:"Country"
        },
        {
            type:"bi bi-house-check-fill",
            name:"Garden"
        },
        {
            type:"bi bi-house-dash",
            name:"Golfing"
        },
        {
            type:"bi bi-house-dash-fill",
            name:"Iconic"
        },
        {
            type:"bi bi-house-door",
            name:"Lake"
        },
        {
            type:"bi bi-house-door-fill",
            name:"Lux"
        },
        {
            type:"bi bi-house-down",
            name:"OMG"
        },
        {
            type:"bi bi-house-down",
            name:"Park"
        },
        {
            type:"bi bi-house-down",
            name:"Pool"
        },
        {
            type:"bi bi-house-down",
            name:"Room"
        },
        {
            type:"bi bi-house-down",
            name:"Small"
        },
        {
            type:"bi bi-house-down",
            name:"Trending"
        },
        {
            type:"bi bi-house-down",
            name:"Tropical"
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:15,
        slidesToScroll: 10,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:12,
              slidesToScroll: 8,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 300,
            settings: {
              slidesToShow:3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
        ],
      };
    
    return(
        <div id="types">
            <Slider {...settings} id="house-types">
                {types.map((item) => (
                    <div id="house-types" key={item.name} onClick={()=>{handleClick(item.name)}}>
                        <p className={item.type}></p>
                        <p>{item.name}</p>
                    </div>
                ))}
            </Slider>  
        </div>
    )
})
export default HouseTypes;