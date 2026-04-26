import { useState } from 'react'
import { gasFields, casos } from '@/data/gasometria'

export default function Gasometria() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const caso = casos[currentIndex]

  const handleChange = (index: number) => {
    setCurrentIndex(index)
    setShowAnswer(false)
  }

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Header */}
      <div className='bg-primary_darker px-5 pt-10 pb-6'>
        <p className='text-white/60 text-xs font-semibold uppercase tracking-widest mb-1'>
          Caso {currentIndex + 1} de {casos.length}
        </p>
        <h1 className='text-2xl font-bold text-white leading-tight'>
          Exercícios de{'\n'}Gasometria Arterial
        </h1>

        {/* Tabs */}
        <div className='flex gap-2 mt-5'>
          {casos.map((_, i) => (
            <button
              key={i}
              onClick={() => handleChange(i)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95 ${
                currentIndex === i
                  ? 'bg-white text-primary_darker shadow'
                  : 'bg-white/20 text-white'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className='px-4 py-5 space-y-3'>
        {/* Patient chip */}
        <div className='rounded-2xl shadow-sm overflow-hidden'>
          <div className='bg-primary_darker px-4 py-2.5'>
            <p className='text-xs font-bold text-white/70 uppercase tracking-wider'>
              Dados do Paciente
            </p>
          </div>
          <div className='bg-white px-4 py-4'>
            <span className='bg-primary/10 text-primary_darker text-xs font-semibold px-3 py-1.5 rounded-full'>
              {caso.idade} anos
            </span>
          </div>
        </div>

        {/* Gasometry values */}
        <div className='bg-white rounded-2xl p-4 shadow-sm'>
          <p className='text-xs font-bold text-amber-500 uppercase tracking-wider mb-3'>
            Gasometria Arterial
          </p>
          <div className='grid grid-cols-2 gap-2'>
            {gasFields.map(({ key, label, ref, unit }) => (
              <div key={key} className='bg-amber-50 rounded-xl p-3'>
                <div className='flex justify-between items-start mb-1'>
                  <p className='text-xs text-amber-600 font-bold'>{label}</p>
                  <p className='text-[10px] text-amber-400 font-medium text-right leading-tight'>
                    {ref}
                  </p>
                </div>
                <p className='text-gray-800 font-bold text-base'>
                  {caso.gasometria[key]}
                  {unit && (
                    <span className='text-xs font-normal text-gray-400 ml-1'>
                      {unit}
                    </span>
                  )}
                </p>
              </div>
            ))}

            {/* FiO2 full width */}
            <div className='col-span-2 bg-amber-50 rounded-xl p-3'>
              <div className='flex justify-between items-start mb-1'>
                <p className='text-xs text-amber-600 font-bold'>FiO₂</p>
                <p className='text-[10px] text-amber-400 font-medium'>
                  fração de O₂ inspirado
                </p>
              </div>
              <p className='text-gray-800 font-bold text-base'>
                {caso.gasometria.FiO2}
              </p>
            </div>
          </div>
        </div>

        {/* Answer button */}
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className='w-full py-4 rounded-2xl font-bold text-base transition-all bg-primary_darker text-white shadow-md active:scale-95'
        >
          {showAnswer ? '▲ Ocultar Resposta' : '▼ Ver Resposta'}
        </button>

        {/* Answer */}
        {showAnswer && (
          <div className='bg-white rounded-2xl p-4 shadow-sm border-t-4 border-green-400'>
            <p className='text-xs font-bold text-green-600 uppercase tracking-wider mb-4'>
              Interpretação
            </p>
            <div className='space-y-4'>
              {/* Achados */}
              <div>
                <p className='text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2'>
                  Achados-chave
                </p>
                <div className='space-y-1.5'>
                  {caso.resposta.achados.map((a, i) => {
                    const bg = {
                      alterado: 'bg-red-50 border-red-100',
                      normal: 'bg-gray-50 border-gray-200',
                      positivo: 'bg-green-50 border-green-100',
                    }[a.tipo]
                    const chip = {
                      alterado: 'bg-red-100 text-red-700',
                      normal: 'bg-gray-200 text-gray-600',
                      positivo: 'bg-green-100 text-green-700',
                    }[a.tipo]
                    return (
                      <div
                        key={i}
                        className={`flex items-center gap-2 border rounded-xl px-3 py-2.5 ${bg}`}
                      >
                        <span className='text-xs font-bold text-gray-600 shrink-0 w-16'>
                          {a.parametro}
                        </span>
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded-lg shrink-0 ${chip}`}
                        >
                          {a.valor}
                        </span>
                        <span className='text-gray-400 shrink-0'>→</span>
                        <span className='text-gray-600 text-xs leading-tight'>
                          {a.indica}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Diagnosis */}
              <div>
                <p className='text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1'>
                  Diagnóstico
                </p>
                <p className='text-gray-800 font-bold text-base leading-snug'>
                  {caso.resposta.diagnostico}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className='flex gap-3 pb-8'>
          <button
            onClick={() => handleChange(currentIndex - 1)}
            disabled={currentIndex === 0}
            className='flex-1 py-4 rounded-2xl font-semibold transition-all bg-white text-gray-600 shadow-sm disabled:opacity-30 active:scale-95'
          >
            ← Anterior
          </button>
          <button
            onClick={() => handleChange(currentIndex + 1)}
            disabled={currentIndex === casos.length - 1}
            className='flex-1 py-4 rounded-2xl font-semibold transition-all bg-primary text-white shadow-sm disabled:opacity-30 active:scale-95'
          >
            Próximo →
          </button>
        </div>
      </div>
    </div>
  )
}
