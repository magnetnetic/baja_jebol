'use client'

import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className='mx-auto flex h-full w-auto flex-col justify-start gap-1'>
      <div className='border-l-2 border-amber-300 ps-4 '>
        <h4 className='mb-16 font-light tracking-wide'>ABOUT HIM</h4>
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
          />
          <p className='font-semibold'>warduck23</p> <p>/ dia lanang mazzeh</p>
        </div>
      </div>
      <div className='mt-2 flex h-full flex-col border border-l-2 border-transparent ps-4'>
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
        <motion.div
          className='bg my-6 mt-auto flex w-5/6 flex-row gap-6'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          variants={{
            offscreen: { y: 100, opacity: 0 },
            onscreen: { y: 0, opacity: 1 }
          }}
        >
          <p className='text-pretty leading-relaxed tracking-wide'>
            Seekor kera, terkurung, terpenjara dalam gua <br /> Di gunung
            tinggi, sunyi tempat hukuman para dewa <br /> Bertindak sesuka hati
            loncat ke sana ke sini <br /> Hiraukan semua masalah di muka bumi
            ini <br /> Dengan sehelai bulu dan rambut dari tubuhnya <br /> Dia
            merubah, menerpa, menerjang segala apa yang ada <br />
          </p>
          <p className='text-pretty leading-relaxed tracking-wide'>
            Walau halangan, rintangan semakin panjang membentang <br /> Tak jadi
            masalah dan takkan jadi beban pikiran <br /> Berkelana setiap hari
            demi mendapat kitab suci <br /> Dengan dukungan dari gurunya temukan
            jati diri <br /> Semua &apos;kan dihadapi dengan gagah berani <br />
            Walau aral rintangan setiap saat datang &apos;tuk menguji
          </p>
        </motion.div>
      </div>
    </div>
  )
}
