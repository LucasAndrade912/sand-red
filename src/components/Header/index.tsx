import React from 'react'
import { List } from 'phosphor-react'

import { Overlay } from '../Overlay'

interface HeaderProps {
  isMenuOpen: boolean
  handleOpenMobileMenu: () => void
  handleCloseMobileMenu: () => void
}

export function Header({ isMenuOpen, handleOpenMobileMenu, handleCloseMobileMenu }: HeaderProps) {
  return (
    <header className="w-full flex sm:flex-row-reverse items-center justify-between relative">
      <div className="flex items-center gap-3">
        <span className="hidden sm:block">
          <img src="/sand-red-logo.svg" alt="SandRed Logo" className="h-10" />
        </span>

        <h1 className="font-sigmar text-3xl sm:text-2xl">
          SandRed
        </h1>
      </div>

      <List className="hidden sm:block w-8 h-8" onClick={handleOpenMobileMenu} />

      { isMenuOpen && <Overlay onClick={handleCloseMobileMenu} /> }

      <nav
        className={`transition-all sm:fixed sm:p-8 sm:z-20 sm:bg-zinc-700 sm:top-0 sm:w-[65vw] sm:h-screen sm:text-white ${isMenuOpen ? 'left-0' : '-left-[100vw]'}`}
      >
        <ul className="flex gap-10 sm:gap-0 sm:flex-col sm:justify-between sm:h-full">
          <li>
            <a href="#" className="hover:underline">Home</a>
          </li>
          <li>
            <a href="#jogos" className="hover:underline">Jogos</a>
          </li>
          <li>
            <a href="#sobre-nos" className="hover:underline">Sobre Nós</a>
          </li>
          <li>
            <a href="#contato" className="hover:underline">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}