import { useState, useEffect } from 'react'
import { FlashcardType } from '@/Types/flashcards'
import { flashcards, categoriaStyle } from '@/data/flashcards'

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const FLIP_MS = 500

export default function FlipCards() {
  const [shuffled, setShuffled] = useState<FlashcardType[]>([])
  const [index, setIndex] = useState(0)
  const [showBack, setShowBack] = useState(false)
  const [flipping, setFlipping] = useState(false)

  useEffect(() => {
    setShuffled(shuffleArray(flashcards))
  }, [])

  const card = shuffled[index]
  const total = shuffled.length

  const flip = () => {
    if (flipping) return
    setFlipping(true)
    setShowBack(s => !s)
    setTimeout(() => setFlipping(false), FLIP_MS)
  }

  const go = (dir: number) => {
    setIndex(i => i + dir)
    setShowBack(false)
    setFlipping(false)
  }

  if (!card) return null

  const progress = ((index + 1) / total) * 100

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Header */}
      <div className='bg-primary_darker px-5 pt-10 pb-6'>
        <p className='text-white/60 text-xs font-semibold uppercase tracking-widest mb-1'>
          {index + 1} de {total}
        </p>
        <h1 className='text-2xl font-bold text-white'>Flashcards</h1>
        <p className='text-white/60 text-xs mt-1'>Fisioterapia Respiratória II</p>
        <div className='mt-4 h-1.5 bg-white/20 rounded-full overflow-hidden'>
          <div
            className='h-full bg-white rounded-full transition-all duration-300'
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className='px-4 py-6 flex flex-col gap-5'>
        <div
          className='cursor-pointer select-none'
          onClick={flip}
          style={{ perspective: '1400px' }}
        >
          <div
            style={{
              transformStyle: 'preserve-3d',
              transform: showBack ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transition: `transform ${FLIP_MS}ms cubic-bezier(0.45, 0, 0.55, 1)`,
              display: 'grid',
            }}
          >
            {/* Frente */}
            <div
              style={{ backfaceVisibility: 'hidden', gridRow: 1, gridColumn: 1 }}
              className='bg-primary_darker rounded-3xl p-6 shadow-2xl min-h-[300px] flex flex-col'
            >
              <div className='flex items-center justify-between mb-5'>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${categoriaStyle[card.categoria]}`}>
                  {card.categoria}
                </span>
                <span className='text-white/30 text-xs font-medium'>{index + 1}/{total}</span>
              </div>
              <div className='flex-1 flex items-center justify-center px-1'>
                <p className='text-white font-semibold text-[16px] leading-relaxed text-center'>
                  {card.question}
                </p>
              </div>
              <div className='mt-5 flex items-center justify-center gap-1.5'>
                <svg className='w-3.5 h-3.5 text-white/30' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                  <path d='M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8'/><path d='M3 3v5h5'/>
                </svg>
                <span className='text-white/30 text-[11px] font-medium tracking-wide'>toque para revelar</span>
              </div>
            </div>

            {/* Verso */}
            <div
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', gridRow: 1, gridColumn: 1 }}
              className='bg-secondary_darker rounded-3xl p-6 shadow-2xl min-h-[300px] flex flex-col'
            >
              <div className='flex items-center justify-between mb-5'>
                <span className='text-xs font-bold px-3 py-1.5 rounded-full bg-white/20 text-white tracking-wider'>
                  RESPOSTA
                </span>
                <span className='text-white/30 text-xs font-medium'>{index + 1}/{total}</span>
              </div>
              <div className='flex-1 flex items-center justify-center px-1'>
                <p className='text-white text-[15px] leading-relaxed text-center'>
                  {card.answer}
                </p>
              </div>
              <div className='mt-5 flex items-center justify-center gap-1.5'>
                <svg className='w-3.5 h-3.5 text-white/30' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                  <path d='M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8'/><path d='M3 3v5h5'/>
                </svg>
                <span className='text-white/30 text-[11px] font-medium tracking-wide'>toque para voltar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className='flex gap-3 pb-8'>
          <button
            onClick={() => go(-1)}
            disabled={index === 0}
            className='flex-1 py-4 rounded-2xl font-semibold bg-white text-gray-500 shadow-sm disabled:opacity-30 active:scale-95 transition-all text-[15px]'
          >
            ← Anterior
          </button>
          <button
            onClick={() => go(1)}
            disabled={index === total - 1}
            className='flex-1 py-4 rounded-2xl font-semibold bg-primary_darker text-white shadow-sm disabled:opacity-30 active:scale-95 transition-all text-[15px]'
          >
            Próximo →
          </button>
        </div>
      </div>
    </div>
  )
}
