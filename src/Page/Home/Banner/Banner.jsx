/* eslint-disable no-unused-vars */


const Banner = () => {
  return (
    <div className="carousel w-full overflow-hidden relative flex snap-x snap-mandatory scroll-smooth">
      <div id="slide1" className="carousel-item relative w-full snap-center transition-transform duration-700 ">
        <img
          src="https://i.ibb.co/Gs2Rrkb/4.jpg"
          className="w-full object-cover rounded-xl" />
        <div className="absolute h-full rounded-xl flex justify-start items-center gap-4 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] top-0 left-0 p-8">
          <div className='text-white space-y-7 w-1/2'>
            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
            <p >There are many variations of passages of available, but the majority have suffered alteration in some form</p>
            <div className='flex gap-4'>
              <button className="btn bg-[#FF3811]  hover:bg-[#423f3f] text-silver">Discover More</button>
              <button className="btn text-silver bg-transparent hover:bg-[#464544]">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex justify-end gap-4 transform -translate-y-1/2">
          <a href="#slide4" className="btn btn-circle bg-[#FF3811]">❮</a>
          <a href="#slide2" className="btn btn-circle bg-[#FF3811]">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full snap-center transition-transform duration-700">
        <img
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
          className="w-full object-cover rounded-xl" />
    <div className="absolute h-full rounded-xl flex justify-start items-center gap-4 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] top-0 left-0 p-8">
        <div className='text-white space-y-7 w-1/2'>
            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
            <p >There are many variations of passages of available, but the majority have suffered alteration in some form</p>
            <div className='flex gap-4'>
              <button className="btn bg-[#FF3811]  hover:bg-[#423f3f] text-silver">Discover More</button>
              <button className="btn text-silver bg-transparent hover:bg-[#464544]">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex justify-end gap-4 transform -translate-y-1/2">
          <a href="#slide1" className="btn btn-circle bg-[#FF3811]">❮</a>
          <a href="#slide3" className="btn btn-circle bg-[#FF3811]">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full snap-center transition-transform duration-700">
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
          className="w-full object-cover rounded-xl" />
    <div className="absolute h-full rounded-xl flex justify-start items-center gap-4 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] top-0 left-0 p-8">
        <div className='text-white space-y-7 w-1/2'>
            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
            <p >There are many variations of passages of available, but the majority have suffered alteration in some form</p>
            <div className='flex gap-4'>
              <button className="btn bg-[#FF3811]  hover:bg-[#423f3f] text-silver">Discover More</button>
              <button className="btn text-silver bg-transparent hover:bg-[#464544]">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex justify-end gap-4 transform -translate-y-1/2">
          <a href="#slide2" className="btn btn-circle bg-[#FF3811]">❮</a>
          <a href="#slide4" className="btn btn-circle bg-[#FF3811]">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full snap-center transition-transform duration-700">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
          className="w-full object-cover rounded-xl" />
    <div className="absolute h-full rounded-xl flex justify-start items-center gap-4 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] top-0 left-0 p-8">
        <div className='text-white space-y-7 w-1/2'>
            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
            <p >There are many variations of passages of available, but the majority have suffered alteration in some form</p>
            <div className='flex gap-4'>
              <button className="btn bg-[#FF3811]  hover:bg-[#423f3f] text-silver">Discover More</button>
              <button className="btn text-silver bg-transparent hover:bg-[#464544]">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex justify-end gap-4 transform -translate-y-1/2">
          <a href="#slide3" className="btn btn-circle bg-[#FF3811]">❮</a>
          <a href="#slide1" className="btn btn-circle bg-[#FF3811]">❯</a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
