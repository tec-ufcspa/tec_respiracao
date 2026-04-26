import { QuestionType } from '@/Types/Props'
import { useEffect, useState } from 'react'
import { quizQuestions } from '@/data/quiz'

function shuffleArray(array: QuestionType[]) {
  const a = [...array]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [status, setStatus] = useState<('correct' | 'incorrect' | 'pending')[]>(
    new Array(quizQuestions.length).fill('pending')
  )
  const [userAnswers, setUserAnswers] = useState<string[]>(
    new Array(quizQuestions.length).fill('')
  )
  const [shuffled, setShuffled] = useState<QuestionType[]>([])

  useEffect(() => {
    setShuffled(shuffleArray(quizQuestions))
  }, [])

  const handleAnswer = (selectedOption: string) => {
    const current = shuffled[currentIndex]
    const isCorrect = selectedOption === current.answer
    const newStatus = [...status]
    const newAnswers = [...userAnswers]

    newStatus[currentIndex] = isCorrect ? 'correct' : 'incorrect'
    newAnswers[currentIndex] = selectedOption
    setStatus(newStatus)
    setUserAnswers(newAnswers)
    if (isCorrect) setScore(s => s + 1)

    if (currentIndex + 1 < shuffled.length) {
      setCurrentIndex(i => i + 1)
    } else {
      setDone(true)
    }
  }

  const restart = () => {
    setShuffled(shuffleArray(quizQuestions))
    setCurrentIndex(0)
    setScore(0)
    setDone(false)
    setStatus(new Array(quizQuestions.length).fill('pending'))
    setUserAnswers(new Array(quizQuestions.length).fill(''))
  }

  const current = shuffled[currentIndex]
  const total = shuffled.length
  const progress = done ? 100 : (currentIndex / total) * 100

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Header */}
      <div className='bg-primary_darker px-5 pt-10 pb-6'>
        <p className='text-white/60 text-xs font-semibold uppercase tracking-widest mb-1'>
          {done ? 'Resultado' : `Questão ${currentIndex + 1} de ${total}`}
        </p>
        <h1 className='text-2xl font-bold text-white'>Quiz</h1>
        <p className='text-white/60 text-xs mt-1'>Técnicas Manuais Respiratórias</p>
        <div className='mt-4 h-1.5 bg-white/20 rounded-full overflow-hidden'>
          <div
            className='h-full bg-white rounded-full transition-all duration-300'
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className='px-4 py-5 space-y-3'>
        {done ? (
          <>
            {/* Score card */}
            <div className='bg-white rounded-2xl p-5 shadow-sm text-center'>
              <p className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-2'>
                Pontuação
              </p>
              <p className='text-5xl font-bold text-primary_darker'>
                {score}
                <span className='text-2xl text-gray-400'>/{total}</span>
              </p>
              <p className='text-gray-500 text-sm mt-2'>
                {Math.round((score / total) * 100)}% de acertos
              </p>
              <button
                onClick={restart}
                className='mt-4 w-full py-3 rounded-2xl bg-primary_darker text-white font-bold active:scale-95 transition-all'
              >
                Tentar novamente
              </button>
            </div>

            {/* Review */}
            {shuffled.map((q, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-4 shadow-sm border-l-4 ${
                  status[i] === 'correct' ? 'border-green-400' : 'border-red-400'
                }`}
              >
                <div className='flex items-center gap-2 mb-2'>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      status[i] === 'correct'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {status[i] === 'correct' ? '✓ Correta' : '✗ Incorreta'}
                  </span>
                  <span className='text-xs text-gray-400'>Questão {i + 1}</span>
                </div>
                <p className='text-gray-800 text-sm font-semibold mb-2'>{q.question}</p>
                {status[i] === 'incorrect' && (
                  <div className='bg-red-50 rounded-xl p-3 mb-2'>
                    <p className='text-xs text-red-500 font-semibold mb-0.5'>Sua resposta</p>
                    <p className='text-red-700 text-sm'>{userAnswers[i]}</p>
                  </div>
                )}
                <div className='bg-green-50 rounded-xl p-3 mb-2'>
                  <p className='text-xs text-green-600 font-semibold mb-0.5'>Resposta correta</p>
                  <p className='text-green-800 text-sm'>{q.answer}</p>
                </div>
                <p className='text-gray-500 text-xs leading-relaxed'>{q.explanation}</p>
              </div>
            ))}
          </>
        ) : (
          current && (
            <>
              {/* Question */}
              <div className='bg-white rounded-2xl p-5 shadow-sm'>
                <p className='text-gray-800 text-[15px] font-semibold leading-relaxed'>
                  {current.question}
                </p>
              </div>

              {/* Options */}
              <div className='space-y-2'>
                {current.options.map(option => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className='w-full text-left bg-white rounded-2xl px-4 py-4 shadow-sm text-gray-700 text-sm font-medium leading-snug active:scale-[0.98] transition-all hover:bg-primary/5 border border-transparent hover:border-primary/20'
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Dot progress */}
              <div className='flex gap-1 justify-center pt-2 pb-6 flex-wrap'>
                {Array.from({ length: total }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all ${
                      i === currentIndex
                        ? 'w-5 bg-primary_darker'
                        : status[i] === 'correct'
                        ? 'w-2 bg-green-400'
                        : status[i] === 'incorrect'
                        ? 'w-2 bg-red-400'
                        : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </>
          )
        )}
      </div>
    </div>
  )
}

export default Quiz
