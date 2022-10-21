import React from 'react'
import { FacebookLogo, LinkedinLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'

export function Footer() {
  return (
    <footer id="contato" className="px-16 py-8 flex items-center justify-between bg-black -ml-[64px] w-screen text-white sm:-ml-6 sm:w-screen sm:p-6">
      <img src="/sand-red-logo.svg" alt="SandRed Logo" className="sm:w-5 sm:h-10" />

      <span className="text-md sm:text-xs">
        © 2022 - SandRed
      </span>

      <nav>
        <ul className="flex gap-3">
          <li>
            <a href="#">
              <FacebookLogo weight="fill" className="w-8 h-8 sm:w-5 sm:h-5" />
            </a>
          </li>
          <li>
            <a href="#">
              <LinkedinLogo weight="fill" className="w-8 h-8 sm:w-5 sm:h-5" />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramLogo weight="fill" className="w-8 h-8 sm:w-5 sm:h-5" />
            </a>
          </li>
          <li>
            <a href="#">
              <TwitterLogo weight="fill" className="w-8 h-8 sm:w-5 sm:h-5" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}