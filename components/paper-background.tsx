'use client'

import { PaperTexture } from '@paper-design/shaders-react'

export function PaperBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <PaperTexture
        className="h-full w-full"
        width="100vw"
        height="100vh"
        image="https://paper.design/flowers.webp"
        colorBack="#e6e5e5"
        colorFront="#ebd0b7"
        contrast={0.3}
        roughness={0.4}
        fiber={0.3}
        fiberSize={0.2}
        crumples={0.3}
        crumpleSize={0.35}
        folds={0.65}
        foldCount={5}
        drops={0.2}
        fade={0}
        seed={5.8}
        scale={0.6}
        fit="cover"
      />
    </div>
  )
}