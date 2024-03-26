'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ROOT_PATH } from '@/lib/data'
import { InventoryItemDefinition } from '@/lib/type'
import Image from 'next/image'
import { useState } from 'react'

export default function FormGame({
  egg,
  weapon
}: {
  egg: InventoryItemDefinition
  weapon: InventoryItemDefinition
}) {
  const [inputValue, setInputValue] = useState('')
  const [answer, setAnswer] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)

  const handleButtonClick = () => {
    setShowAnswer(true)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const lowercaseInputValue = inputValue.toLowerCase()
    const lowercaseExpectedAnswer = weapon.displayProperties.name.toLowerCase()

    if (lowercaseInputValue === lowercaseExpectedAnswer) {
      setAnswer('Adalah Benar')
    } else {
      setAnswer('Adalah Tidak Benar')
    }
  }

  const isCorrect =
    inputValue.toLowerCase() === weapon.displayProperties.name.toLowerCase()

  return (
    <div className='flex h-full items-center space-x-4'>
      <div className='relative h-24 w-24'>
        <Image
          alt='Perk Icon'
          src={`${ROOT_PATH}${egg.displayProperties.icon}`}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex space-x-4'>
          <Input
            type='text'
            placeholder='Apa Hayo?'
            value={inputValue}
            onChange={handleInputChange}
          />
          {isCorrect && <span className='text-green-500'>Correct!</span>}
          {!isCorrect && inputValue && (
            <span className='text-red-500'>Incorrect</span>
          )}
        </div>
        <div className='flex h-full items-center'>
          <Button
            variant='outline'
            className='mt-4'
            onClick={handleButtonClick}
          >
            Sopler
          </Button>
          {showAnswer && (
            <span className='ml-4 text-white'>
              {weapon.displayProperties.name}
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
