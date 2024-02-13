import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import imgData from "UI/images/carousel/beach1.jpg";
import data from 'tempData/collection.json'

const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }
];


const SeasonListDesc = () => {
    // console.log(data);
    return ( <div>
        {data.map(({season, collections}, index) => {
return ( 
    <div key={index} style={{display: 'block'}}>
<h3>{season}</h3>
<Slide arrows={false}  slidesToScroll={2} autoplay={false} transitionDuration={500} duration={1000} infinite={false} slidesToShow={2} indicators={false} responsive={responsiveSettings}>
 <a href="/"> <div style={{display: 'flex', flexDirection: 'column', width: '260px', justifyContent: 'center', alignItems: 'center'}}>
    <img style={{maxWidth: '100%'}} src={imgData} alt="" />
 </div>
  <h3>test</h3>
  </a>
     <a href="/"> <div style={{display: 'flex', flexDirection: 'column', width: '260px', justifyContent: 'center', alignItems: 'center'}}>
        <img style={{maxWidth: '100%'}} src={imgData} alt="" />
     </div>
      <h3>test</h3>
     </a>
      <a href="/"> <div style={{display: 'flex', flexDirection: 'column', width: '260px', justifyContent: 'center', alignItems: 'center'}}>
        <img style={{maxWidth: '100%'}} src={imgData} alt="" />
      </div>
       <h3>test</h3>
      </a>
     <a href="/"> <div style={{display: 'flex', flexDirection: 'column', width: '260px', justifyContent: 'center', alignItems: 'center'}}>
        <img style={{maxWidth: '100%'}} src={imgData} alt="" />
     </div>
      <h3>test</h3>
     </a>
       </Slide>
       </div>)
})}
   
    </div> );
}
 
export default SeasonListDesc;