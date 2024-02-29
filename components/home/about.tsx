import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {
  return (
    <div className='mx-auto flex h-auto w-auto flex-col justify-start gap-1 border-l-2 border-amber-300 ps-4'>
      <h4 className='mb-16 font-light tracking-widest'>ABOUT HIM</h4>
      <div className='w-3/4'>
        <h1 className='text-3xl font-bold'>
          Sanest Destiny 2 Enjoyer and Entertainer
        </h1>
      </div>
      <div className='flex flex-row items-center justify-start gap-4'>
        <FontAwesomeIcon icon={faDiscord} className='fa-icon text-amber-300' />
        <p className='font-semibold'>warduck23</p> <p>/ dia lanang mazzeh</p>
      </div>
    </div>
  )
}
