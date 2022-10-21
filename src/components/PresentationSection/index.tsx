import React from 'react'

export function PresentationSection() {
  return (
    <section id="#apresentacao" className="flex flex-col gap-[52px] items-center justify-center -ml-[64px] w-screen h-[412px] bg-presentation-cover bg-center text-white mt-10 mb-16 sm:-ml-6 sm:h-[174px] sm:gap-5 sm:my-8">
      <h2 className="text-4xl font-semibold sm:text-3xl">SandRed Studios</h2>

      <span className="text-center font-medium text-xl sm:text-sm">
        Somos um time apaixonado por tecnologia e games<br />
        Venha se divertir com a ente !
      </span>
    </section>
  )
}