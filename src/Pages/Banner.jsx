import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation,Autoplay,Pagination } from 'swiper/modules';
const Banner = () => {
  return (
    <div>  
      <Swiper navigation={true} modules={[Navigation,Autoplay, Pagination]}
      autoplay={{
        delay: 2000,
      }}
        pagination={{
          clickable: true,
        }}
      loop={true}>
    <SwiperSlide><div className="my-8">
          <div className="hero h-[80vh] bg-cover object-center rounded-3xl " style={{
          backgroundImage:"url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?cs=srgb&dl=pexels-expect-best-323780.jpg&fm=jpg)",
        }}>
            <div className="hero-content mr-60">
              <div>
                <h1 className="mb-4 text-[#ffffff] w-[500px] text-6xl font-bold">Buy or rent properties </h1>
                <p className="mb-5 w-[550px] text-white">Nestled in a tranquil neighborhood, this charming three-bedroom bungalow boasts a spacious backyard perfect for outdoor gatherings, while its tastefully renovated interior exudes warmth and comfort, offering a haven of relaxation and modern living </p>
              </div>
            </div>
          </div>
      </div></SwiperSlide>

   <SwiperSlide> <div className="my-8">
          <div className="hero h-[80vh] bg-cover object-center rounded-3xl " style={{
          backgroundImage:"url(https://i.im.ge/2024/04/14/ZTicIp.house-1477041-1280.jpeg)",
        }}>
            <div className="hero-content mr-60">
              <div>
                <h1 className="mb-4 text-[#ffffff] w-[500px] text-6xl font-bold">Buy or rent properties </h1>
                <p className="mb-5 w-[550px] text-white">Nestled in a tranquil neighborhood, this charming three-bedroom bungalow boasts a spacious backyard perfect for outdoor gatherings, while its tastefully renovated interior exudes warmth and comfort, offering a haven of relaxation and modern living </p>
              </div>
            </div>
          </div>
      </div></SwiperSlide>

    <SwiperSlide> <div className="my-8">
          <div className="hero h-[80vh] bg-cover object-center rounded-3xl " style={{
          backgroundImage:"url(https://i.im.ge/2024/04/14/ZTi556.hall-621741-1280.jpeg)",
        }}>
           <div className="hero-content mr-60">
              <div>
                <h1 className="mb-4 text-[#ffffff] w-[500px] text-6xl font-bold">Buy or rent properties </h1>
                <p className="mb-5 w-[550px] text-white">Nestled in a tranquil neighborhood, this charming three-bedroom bungalow boasts a spacious backyard perfect for outdoor gatherings, while its tastefully renovated interior exudes warmth and comfort, offering a haven of relaxation and modern living </p>
              </div>
            </div>
          </div>
      </div></SwiperSlide>
      </Swiper>
    </div>
  );
};

// https://i.im.ge/2024/04/14/ZTUFnf.house-2469110-1280-1.jpeg
// https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D
// https://i.im.ge/2024/04/14/ZTicIp.house-1477041-1280.jpeg
export default Banner;
