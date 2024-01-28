import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials () {
    const settings ={
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, 
      slidesToScroll: 1
    };
    return (
    <div>
          <div align="center">
           <h2>TESTIMONIALS</h2>
           <p>WHAT PEOPLE SAY ABOUT US</p>
          </div>  
        
      <div className='w-3/4 m-auto'>
        <div clasName='mt-20'>
        <Slider {...settings}>    
            {data.map((d) => (
              <div className='bg-white h-[450px] text-black rounded-xl'>
                <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                 <img src={d.img} alt="/" className='h-44 w-44 rounded-full'/>  
                </div>
     
               <div className='flex flex-col justify-center items-center gap-4 p-4'>
                 <p className='text-xl font-semibold'>{d.name}</p>
                 <p>{d.review}</p>
                <button className='text-white text-lg'>Read More</button>
               </div>
              </div>              
         ))}
        </Slider>
          </div>
         </div>  
       </div>   
    );
}

const data = [
   {
    name:'Bryan P.',
    img:'/clients/male1.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing', 
   },
   {
    name:'Stella R.',
    img:'/clients/female1.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing', 
   },
   {
    name:'Roy D.',
    img:'/clients/male2.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
   }, 
   {
    name:'Marion C.',
    img:'/clients/female2.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing', 
   },
   {
    name:'William T.',
    img:'/clients/male3.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
   },
   {
    name:'Grace L.',
    img:'/clients/female3.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
   }, 
]

export default Testimonials;