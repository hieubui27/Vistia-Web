'use client'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'



const OPTIONS: EmblaOptionsType = { loop: true, align: "center" }

const SLIDES = [
  "/images/Screenshot 2025-10-30 201219.png",
  "/images/Screenshot 2025-10-30 201219.png",
  "/images/Screenshot 2025-10-30 201219.png"
]

const HomeCarousel = () => (
  <>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </>
)

export default HomeCarousel;

