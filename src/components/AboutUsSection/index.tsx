import React from 'react'

export function AboutUsSection() {
  return (
    <section id="sobre-nos" className="mb-16 sm:mb-8">
      <h2 className="text-black font-sigmar text-xl text-center mb-16 sm:text-lg sm:mb-8">
        Sobre Nós
      </h2>

      <div className="flex items-center sm:flex-col">
        <div className="flex flex-col gap-6 sm:text-xs">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada velit fermentum nam fermentum, amet sed ultrices duis. 
          </p>

          <p>
            Volutpat tincidunt sagittis porta ultricies mus ac commodo sed tristique. Aliquam posuere mauris volutpat iaculis purus rhoncus amet mi. Sem ut magna tortor, lorem sit tincidunt sit.
          </p>

          <p>
            Ut nisl risus tincidunt sollicitudin et, a at. Aliquam ac elit et, maecenas. Nam massa quis neque, ullamcorper in nibh.
          </p>
        </div>

        <img src="/office.png" alt="Office picture" className="sm:hidden" />
      </div>
    </section>
  )
}