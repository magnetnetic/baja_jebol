import Image from 'next/image'
import titan from '/public/saint-14-stuff.webp'

export default function CarouselBackground() {
  return (
    <Image
      alt='Titan Logo'
      src={titan}
      placeholder='blur'
      quality={100}
      fill
      style={{
        objectFit: 'cover'
      }}
    />
  )
}
