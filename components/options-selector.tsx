"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OptionsSelectorProps {
  images: string[]
}

const OptionsSelector: React.FC<OptionsSelectorProps> = ({ images }) => {
  const [activeOption, setActiveOption] = useState<number>(0)

  if (!images || images.length === 0) return null

  return (
    <div className="flex flex-row w-full h-[350px] lg:h-[450px] gap-2 lg:gap-3">
      {images.map((imgSrc, index) => (
        <div
          key={index}
          onClick={() => setActiveOption(index)}
          className={cn(
            "group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] shadow-sm",
            activeOption === index 
              ? "flex-[4] shadow-md saturate-100" 
              : "flex-[1] saturate-50 hover:saturate-100 hover:flex-[1.2]"
          )}
        >
          <img 
            src={imgSrc} 
            alt={`Gallery image ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className={cn(
            "absolute inset-0 bg-stone-900/10 transition-opacity duration-700",
            activeOption === index ? "opacity-0" : "opacity-100 group-hover:opacity-50"
          )} />
        </div>
      ))}
    </div>
  )
}

export default OptionsSelector
