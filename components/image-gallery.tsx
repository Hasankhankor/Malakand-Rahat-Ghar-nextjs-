"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const images = [
  {
    src: "https://ik.imagekit.io/os33grffu/ChatGPT%20Image%20Apr%2013,%202025,%2011_47_30%20PM.png?updatedAt=1744570073744",
    alt: "Elderly residents enjoying a meal together",
  },
  {
    src: "https://ik.imagekit.io/os33grffu/ChatGPT%20Image%20Apr%2013,%202025,%2011_43_03%20PM.png?updatedAt=1744569822155",
    alt: "Cultural celebration at Malakand Rahat Ghar",
  },
  {
    src: "https://ik.imagekit.io/os33grffu/WhatsApp%20Image%202025-04-13%20at%2011.59.30%20PM.jpeg?updatedAt=1744570945575",
    alt: "Medical checkup for elderly residents",
  },
  {
    src: "https://ik.imagekit.io/os33grffu/WhatsApp%20Image%202025-04-13%20at%2011.59.31%20PM.jpeg?updatedAt=1744570945833",
    alt: "Volunteers helping with daily activities",
  },
  {
    src: "https://ik.imagekit.io/os33grffu/WhatsApp%20Image%202025-04-13%20at%2011.59.31%20PM%20(1).jpeg?updatedAt=1744570947610",
    alt: "Traditional craft activities with residents",
  },
]

export function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full max-w-4xl mx-auto">
      <div className="h-full w-full relative rounded-xl overflow-hidden">
        <Image
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          fill
          className="object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-stone-800 rounded-full h-8 w-8 sm:h-10 sm:w-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-stone-800 rounded-full h-8 w-8 sm:h-10 sm:w-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              currentIndex === slideIndex ? "bg-amber-600" : "bg-white/70"
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}
