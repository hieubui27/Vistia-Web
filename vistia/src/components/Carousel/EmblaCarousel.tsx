import React, { useEffect, useState, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { EmblaOptionsType } from "embla-carousel"
import ClassNames from "embla-carousel-class-names"
import "./embla.css"
import Image from "next/image"

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}
//embla carousel
const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )
  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex gap-1">
        {slides.map((src, index) => (
          <div
            className="embla__slide flex-[0_0_80%] min-w-0 transition-transform duration-0"
            key={index}
          >
            <div
              className={`embla__slide__inner relative w-full aspect-[16/9] rounded-xl overflow-hidden transition-all duration-500 
                            ${ selectedIndex === index ? "scale-110 shadow-2xl" : "scale-80 opacity-70"}`}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 50vw, 90vw"
                className="object-cover w-full h-full"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
      {/* dot status */}
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "bg-blue-500"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default EmblaCarousel
