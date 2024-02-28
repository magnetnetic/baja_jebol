import Image from 'next/image'
import titan from '/public/titan-ghost.jpg'

export default function HeroBackground() {
  return (
    <Image
      alt='Titan and Ghost Shell'
      src={titan}
      placeholder='blur'
      quality={100}
      fill
      sizes='100vw'
      style={{
        objectFit: 'cover'
      }}
    />
  )
}
