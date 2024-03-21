'use client'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

export default function AboutDescription() {
  return (
    <motion.div
      className='text-sky-100'
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      variants={{
        offscreen: { x: -100, opacity: 0 },
        onscreen: { x: 0, opacity: 1 }
      }}
    >
      <div className='relative flex h-full w-auto flex-col justify-start gap-1'>
        <div className='border-l-2 border-amber-300 ps-4 '>
          <h4 className='mb-16 font-light tracking-wide'>BANG JEBOL</h4>
          <div>
            <h1 className='text-3xl font-bold'>
              Sanest Destiny 2 <span className='line-through'>Enjoyer</span>{' '}
              Entertainer
            </h1>
          </div>
          <div className='flex flex-row items-center justify-start gap-2'>
            <FontAwesomeIcon
              icon={faDiscord}
              size='xs'
              className='text-amber-300'
              shake
            />
            <p className='font-semibold'>warduck23</p>{' '}
            <p>/ dia lanang mazzeh</p>
          </div>
        </div>
        <div className='mt-2 flex h-full flex-col border border-l-2 border-transparent ps-4'>
          <Achievement />
        </div>
      </div>
    </motion.div>
  )
}

function Achievement() {
  return (
    <div>
      <div className='flex flex-row items-center justify-start gap-2'>
        <FontAwesomeIcon icon={faBolt} size='xs' className='text-amber-300' />
        <p>XBOX Stress Test Benchmarker ga mati 7 hari</p>
      </div>
      <div className='flex flex-row items-center justify-start gap-2'>
        <FontAwesomeIcon icon={faBolt} size='xs' className='text-amber-300' />
        <p>Lebih baik beli daripada menyesal tidak beli</p>
      </div>
      <div className='flex flex-row items-center justify-start gap-2'>
        <FontAwesomeIcon icon={faBolt} size='xs' className='text-amber-300' />
        <p>Punya kocheng dikasih nama asep</p>
      </div>
      <div className='flex flex-row items-center justify-start gap-2'>
        <FontAwesomeIcon icon={faBolt} size='xs' className='text-amber-300' />
        <p>Jarang makan siang</p>
      </div>
    </div>
  )
}
