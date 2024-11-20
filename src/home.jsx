import React from 'react'
import { useState } from 'react'


const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    // Slides data
    const slides = [
      {
        id: 1,
        title: "Slide 1",
        description: "This is the first slide.",
        bgColor: "bg-red-500",
      },
      {
        id: 2,
        title: "Slide 2",
        description: "This is the second slide.",
        bgColor: "bg-blue-500",
      },
      {
        id: 3,
        title: "Slide 3",
        description: "This is the third slide.",
        bgColor: "bg-green-500",
      },
    ];

    const prevSlide = ()=>{
      setCurrentSlide((prev)=>(prev===0 ? slides.length - 1 : prev-1))
    };

    const nextSlide = ()=>{
      setCurrentSlide((prev)=>(prev ===slides.length - 1 ? 0 : prev + 1));
    }
  return (
    <div className="bg-slate-300 min-h-screen ">
    <div className="bg-gradient-to-r from-purple-500 to-blue-400 flex justify-between items-center p-4">
   <h1 className="text-white  font-bold text-xl"> Get the NEW 2024 Google Ads Benchmarks for your industry </h1>
    <button className='bg-white text-blue-700 font-bold p-2 rounded-2xl bg-opacity-85'>
      Get my free report
    </button>
    </div>
    <div className="flex justify-between items-center p-4">
   <h1 className=" font-bold text-sm"> Get the NEW 2024 Google Ads Benchmarks for your industry </h1>
   <button className='bg-orange-500 text-white text-xl font-bold p-2 rounded-2xl bg-opacity-85'>
      Get a demo
    </button>
    </div>
    <div className="bg-gradient-to-br pt-32 pb-48 from-blue-950 to-blue-500 flex justify-center items-start pl-6   flex-col text-white">
        <h1 className="text-sm pb-10"><span className='underline'>Home — Blog </span> — 7 Ways to Write More Engaging, Compelling Website Copy</h1>
        <h1 className="font-bold text-3xl">7 Ways to Write More Engaging, Compelling Website Copy</h1>
        <h1 className="flex flex-col pt-10">
          <span className="text-xs ">Author: <span className='underline'>Dan Shewan</span> </span>
          <span className="text-xs ">Last Updated: November 20, 2023 | Copywriting, Websites & Online Presence</span>
        </h1>
    </div>

    <div className="flex flex-col items-center mt-10">
      <div className="relative max-w-screen-lg w-full  overflow-hidden rounded-lg shadow-lg">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`min-w-full h-full flex flex-col justify-center items-center text-white ${slide.bgColor} p-10`}
            >
              <h1 className="text-2xl font-bold">{slide.title}</h1>
              <p className="text-lg mt-2">{slide.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full shadow-md hover:bg-gray-900"
          onClick={prevSlide}
        >
          ◀
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full shadow-md hover:bg-gray-900"
          onClick={nextSlide}
        >
          ▶
        </button>
      </div>

      {/* Indicators */}
      <div className="flex mt-4 space-x-10">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              currentSlide === index
                ? "bg-blue-600 scale-125"
                : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
    <button className="btn">Hello daisyUI</button>

    
</div>
  )
}

export default Home