import React from 'react'

interface OverlayProps {
  onClick?: () => void
}

export function Overlay({ onClick }: OverlayProps) {
  return (
    <div
      onClick={onClick}
      className="fixed top-0 left-0 bg-black-transparent w-screen h-screen"
    />
  )
}