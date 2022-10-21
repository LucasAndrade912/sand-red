import React from 'react'
import Slider from 'react-slick'

export function GamesSection() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    centerMode: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: 'linear'
  }

  return (
    <section id="jogos" className="mb-16 sm:mb-8">
      <h2 className="text-black font-sigmar text-xl text-center mb-16 sm:text-lg sm:mb-8">
        Jogos
      </h2>

      <Slider {...settings} className="m-0 mx-auto max-w-[1670px] sm:h-auto">
        <div>
          <img src="/game1.png" alt="Game 1" className="object-cover" />
        </div>
        <div>
          <img src="/game2.png" alt="Game 2" className="object-cover" />
        </div>
        <div>
          <img src="/game3.png" alt="Game 3" className="object-cover" />
        </div>
        <div>
          <img src="/game4.png" alt="Game 4" className="object-cover" />
        </div>
        <div>
          <img src="/game5.png" alt="Game 5" className="object-cover" />
        </div>
      </Slider>
    </section>
  )
}