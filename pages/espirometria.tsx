import { useState } from 'react'
import { exercicios } from '@/data/espirometria'

export default function Espirometria() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const exercicio = exercicios[currentIndex]

  const handleChange = (index: number) => {
    setCurrentIndex(index)
    setShowAnswer(false)
  }

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Header */}
      <div className='bg-primary_darker px-5 pt-10 pb-6'>
        <p className='text-white/60 text-xs font-semibold uppercase tracking-widest mb-1'>
          Caso {currentIndex + 1} de {exercicios.length}
        </p>
        <h1 className='text-2xl font-bold text-white leading-tight'>
          Exercícios de{'\n'}Espirometria
        </h1>

        {/* Tabs */}
        <div className='flex gap-2 mt-5'>
          {exercicios.map((_, i) => (
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
        {/* Patient info */}
        {exercicio.paciente && (() => {
          const [demo, smoking] = exercicio.paciente!.split('\n')
          const chips = demo.split(' · ')
          return (
            <div className='rounded-2xl shadow-sm overflow-hidden'>
              <div className='bg-primary_darker px-4 py-2.5'>
                <p className='text-xs font-bold text-white/70 uppercase tracking-wider'>
                  Dados do Paciente
                </p>
              </div>
              <div className='bg-white px-4 py-4 space-y-3'>
                <div className='flex flex-wrap gap-2'>
                  {chips.map((item, i) => (
                    <span
                      key={i}
                      className='bg-primary/10 text-primary_darker text-xs font-semibold px-3 py-1.5 rounded-full'
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {smoking && (
                  <p className='text-gray-500 text-xs leading-relaxed border-t border-gray-100 pt-3 italic'>
                    {smoking}
                  </p>
                )}
              </div>
            </div>
          )
        })()}

        {/* Description */}
        {exercicio.descricao && (
          <div className='rounded-2xl shadow-sm overflow-hidden'>
            <div className='bg-primary_darker px-4 py-2.5'>
              <p className='text-xs font-bold text-white/70 uppercase tracking-wider'>
                Descrição
              </p>
            </div>
            <div className='bg-white px-4 py-4'>
              <p className='text-gray-600 text-[14.5px] leading-[1.75]'>
                {exercicio.descricao}
              </p>
            </div>
          </div>
        )}

        {/* Spirometry table */}
        <div className='bg-white rounded-2xl p-4 shadow-sm'>
          <p className='text-xs font-bold text-primary_darker uppercase tracking-wider mb-3'>
            Espirometria
          </p>
          <div className='overflow-x-auto'>
            <table className='text-xs border-collapse'>
              <thead>
                <tr>
                  {exercicio.tabela.colunas.map((col, i) => (
                    <th
                      key={i}
                      className='bg-primary text-white px-3 py-2 text-left font-semibold whitespace-nowrap first:rounded-tl-lg last:rounded-tr-lg'
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {exercicio.tabela.linhas.map((linha, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className='font-bold px-3 py-2.5 text-gray-800 whitespace-nowrap'>
                      {linha.parametro}
                    </td>
                    {linha.valores.map((val, j) => (
                      <td
                        key={j}
                        className='px-3 py-2.5 text-gray-600 whitespace-nowrap text-center'
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className='text-xs text-gray-400 mt-2 text-right'>
            deslize para ver mais →
          </p>
        </div>

        {/* Gasometry */}
        {exercicio.gasometria && (
          <div className='bg-white rounded-2xl p-4 shadow-sm'>
            <p className='text-xs font-bold text-amber-500 uppercase tracking-wider mb-3'>
              Gasometria Arterial
            </p>
            <div className='grid grid-cols-3 gap-2'>
              {(
                [
                  ['pH', exercicio.gasometria.ph],
                  ['PaCO₂', exercicio.gasometria.paCO2],
                  ['HCO₃', exercicio.gasometria.HCO3],
                  ['EB', exercicio.gasometria.EB],
                  ['PaO₂', exercicio.gasometria.PaO2],
                  ['SaO₂', exercicio.gasometria.SaO2],
                ] as [string, string][]
              ).map(([label, value]) => (
                <div key={label} className='bg-amber-50 rounded-xl p-3'>
                  <p className='text-xs text-amber-500 font-semibold'>
                    {label}
                  </p>
                  <p className='text-gray-800 font-bold text-sm mt-0.5'>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reflection questions */}
        {exercicio.questoes && (
          <div className='bg-white rounded-2xl p-4 shadow-sm'>
            <p className='text-xs font-bold text-orange-500 uppercase tracking-wider mb-3'>
              Para Reflexão
            </p>
            <div className='space-y-2'>
              {exercicio.questoes.map((q, i) => (
                <div key={i} className='flex gap-3 bg-orange-50 rounded-xl p-3'>
                  <span className='text-orange-400 font-bold text-sm shrink-0'>
                    {i + 1}.
                  </span>
                  <p className='text-gray-700 text-sm leading-relaxed'>{q}</p>
                </div>
              ))}
            </div>
          </div>
        )}

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
              {/* Achados-chave */}
              {exercicio.resposta.achados.length > 0 && (
                <div>
                  <p className='text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2'>
                    Achados-chave
                  </p>
                  <div className='space-y-1.5'>
                    {exercicio.resposta.achados.map((a, i) => {
                      const bg = { alterado: 'bg-red-50 border-red-100', normal: 'bg-gray-50 border-gray-200', positivo: 'bg-green-50 border-green-100' }[a.tipo]
                      const chip = { alterado: 'bg-red-100 text-red-700', normal: 'bg-gray-200 text-gray-600', positivo: 'bg-green-100 text-green-700' }[a.tipo]
                      return (
                        <div key={i} className={`flex items-center gap-2 border rounded-xl px-3 py-2.5 ${bg}`}>
                          <span className='text-xs font-bold text-gray-600 shrink-0 w-20'>{a.parametro}</span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-lg shrink-0 ${chip}`}>{a.valor}</span>
                          <span className='text-gray-400 shrink-0'>→</span>
                          <span className='text-gray-600 text-xs leading-tight'>{a.indica}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              <div>
                <p className='text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1'>
                  Espirometria
                </p>
                <p className='text-gray-800 font-semibold text-sm leading-relaxed'>
                  {exercicio.resposta.spirometria}
                </p>
              </div>

              {exercicio.resposta.exameFisico && (
                <div>
                  <p className='text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2'>
                    Exame Físico Esperado
                  </p>
                  <div className='space-y-2'>
                    {exercicio.resposta.exameFisico.map((item, i) => (
                      <div
                        key={i}
                        className='flex gap-2.5 bg-green-50 rounded-xl p-3'
                      >
                        <span className='text-green-500 font-bold shrink-0'>
                          •
                        </span>
                        <p className='text-gray-700 text-sm leading-relaxed'>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {exercicio.resposta.gasometria && (
                <div>
                  <p className='text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1'>
                    Gasometria
                  </p>
                  <p className='text-gray-800 font-semibold text-sm leading-relaxed'>
                    {exercicio.resposta.gasometria}
                  </p>
                </div>
              )}

              {exercicio.resposta.relacao && (
                <div>
                  <p className='text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1'>
                    Relação entre os Exames
                  </p>
                  <p className='text-gray-700 text-sm leading-relaxed'>
                    {exercicio.resposta.relacao}
                  </p>
                </div>
              )}
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
            disabled={currentIndex === exercicios.length - 1}
            className='flex-1 py-4 rounded-2xl font-semibold transition-all bg-primary text-white shadow-sm disabled:opacity-30 active:scale-95'
          >
            Próximo →
          </button>
        </div>
      </div>
    </div>
  )
}
