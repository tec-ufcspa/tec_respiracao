import { Exercicio } from '@/Types/espirometria'

export const exercicios: Exercicio[] = [
  {
    titulo: 'Espirometria 1',
    paciente:
      'Paciente masculino, 72 anos · Peso: 81 kg · Altura: 1,76 m\nFumo: ex-tabagista — 30 cigarros/dia durante 30 anos, há 20 anos sem fumar.',
    descricao:
      'Realizou espirometria simples com prova de broncodilatador (salbutamol).',
    tabela: {
      colunas: ['', 'Predito', 'Obs1', '%Obs1/Prev', 'Obs2', '%O2-O1/pred'],
      linhas: [
        { parametro: 'CVF', valores: ['4,27', '2,56', '60%', '3,99', '8%'] },
        { parametro: 'VEF1', valores: ['3,38', '1,58', '47%', '2,05', '17%'] },
        { parametro: 'VEF1/CVF', valores: ['79,27', '53,95', '50,6%', '65,93', '19,6%'] },
        { parametro: 'PEF', valores: ['473', '231', '71,2', '348', '21,8'] },
      ],
    },
    resposta: {
      achados: [
        { parametro: 'VEF1/CVF', valor: '53,95', indica: 'abaixo de 70 → padrão obstrutivo', tipo: 'alterado' },
        { parametro: 'VEF1', valor: '47% prev.', indica: 'grau moderado', tipo: 'alterado' },
        { parametro: 'CVF', valor: '60% prev.', indica: 'CVF reduzida (CVF - VEF1 >= 13)', tipo: 'alterado' },
        { parametro: 'VEF1 pós-BD', valor: '+17%', indica: 'resposta ao broncodilatador', tipo: 'positivo' },
      ],
      spirometria:
        'Distúrbio ventilatório obstrutivo moderado com redução da CVF e com resposta ao broncodilatador.',
    },
  },
  {
    titulo: 'Espirometria 2',
    paciente:
      'Paciente masculino, 52 anos · Peso: 73 kg · Altura: 1,75 m\nFumo: tabagista — 10 cigarros/dia durante 20 anos.',
    descricao:
      'Realizou espirometria simples com prova de broncodilatador (salbutamol).',
    tabela: {
      colunas: ['Parâmetro', 'Previsto', 'LLN', 'Pré-BD', '% Previsto', 'Pós-BD', '% Prev. Pós', 'Variação'],
      linhas: [
        { parametro: 'CVF (L)', valores: ['4,20', '3,40', '3,85', '92%', '3,95', '94%', '+0,10 L (+2%)'] },
        { parametro: 'VEF1 (L)', valores: ['3,40', '2,75', '2,15', '63%', '2,55', '75%', '+0,40 L (+18%)'] },
        { parametro: 'VEF1/CVF (%)', valores: ['81', '70', '56', '—', '65', '—', '+9 pontos'] },
        { parametro: 'PFE (L/s)', valores: ['8,20', '6,50', '5,60', '68%', '6,20', '76%', '+11%'] },
        { parametro: 'FEF25-75% (L/s)', valores: ['3,60', '2,10', '1,10', '31%', '1,70', '47%', '+54%'] },
      ],
    },
    resposta: {
      achados: [
        { parametro: 'VEF1/CVF', valor: '56%', indica: 'abaixo do LLN (70) → padrão obstrutivo', tipo: 'alterado' },
        { parametro: 'VEF1', valor: '63% prev.', indica: 'grau leve', tipo: 'alterado' },
        { parametro: 'FEF25-75%', valor: '31% prev.', indica: 'obstrução de vias aéreas periféricas', tipo: 'alterado' },
        { parametro: 'VEF1 pós-BD', valor: '+18%', indica: 'resposta ao broncodilatador', tipo: 'positivo' },
      ],
      spirometria:
        'Distúrbio ventilatório obstrutivo leve com resposta ao broncodilatador.',
    },
  },
  {
    titulo: 'Espirometria 3',
    paciente:
      'Paciente masculino, 66 anos · Peso: 72 kg · Altura: 1,80 m\nFumo: ex-tabagista — 30 cigarros/dia durante 30 anos, há 20 anos sem fumar.',
    descricao:
      'Comparece a uma consulta no ambulatório de pneumologia referindo dispneia aos mínimos esforços, tosse improdutiva e cansaço. Faz uso regular de broncodilatador e está em avaliação para uso de O₂ domiciliar. Ao exame físico: sinais claros de hiperinsuflação pulmonar relacionados à DPOC na ausculta pulmonar, mobilidade torácica e expansibilidade pulmonar. Realizou espirometria simples com prova de BD (salbutamol) e gasometria arterial.',
    tabela: {
      colunas: ['', 'Predito', 'Obs1', '%Obs1/Prev', 'Obs2', '%O2-O1/pred'],
      linhas: [
        { parametro: 'CVF', valores: ['4,74', '1,46', '31', '1,62', '3,31'] },
        { parametro: 'FEV1', valores: ['3,65', '0,57', '16', '0,68', '3,01'] },
        { parametro: 'FEV1/CVF', valores: ['77,06', '38,96', '51', '41,98', '3,92'] },
        { parametro: 'PEF', valores: ['8,62', '2,60', '48', '2,80', '2,23'] },
      ],
    },
    gasometria: {
      ph: '7,32',
      paCO2: '59 mmHg',
      HCO3: '30 mEq/L',
      EB: '+3',
      PaO2: '60 mmHg',
      SaO2: '87%',
    },
    questoes: [
      'Quais alterações você espera no exame físico?',
      'Interprete a espirometria e a gasometria arterial.',
      'Existe relação entre os exames complementares e a semiologia?',
    ],
    resposta: {
      achados: [
        { parametro: 'FEV1/CVF', valor: '38,96%', indica: 'muito abaixo de 70 → padrão obstrutivo', tipo: 'alterado' },
        { parametro: 'FEV1', valor: '16% prev.', indica: 'grau muito grave', tipo: 'alterado' },
        { parametro: 'CVF', valor: '31% prev.', indica: 'CVF muito reduzida (CVF - VEF1 >= 13)', tipo: 'alterado' },
        { parametro: 'FEV1 pós-BD', valor: '+3%', indica: 'sem resposta ao broncodilatador', tipo: 'alterado' },
        { parametro: 'pH', valor: '7,32', indica: 'acidose', tipo: 'alterado' },
        { parametro: 'PaCO₂', valor: '59 mmHg', indica: 'hipercapnia — retenção de CO₂', tipo: 'alterado' },
        { parametro: 'PaO₂', valor: '60 mmHg', indica: 'hipoxemia leve', tipo: 'alterado' },
      ],
      spirometria:
        'Distúrbio ventilatório obstrutivo grave com redução da CVF, sem resposta ao broncodilatador.',
      exameFisico: [
        'Mobilidade e expansibilidade diminuídas bilateralmente.',
        'Murmúrio vesicular diminuído difusamente, possível presença de sibilos.',
        'Sinais de esforço ventilatório: tiragem, padrão muscular respiratório apical e tórax em barril.',
      ],
      gasometria: 'Acidose respiratória em compensação com hipoxemia leve.',
      relacao:
        'Sim. A espirometria confirma distúrbio obstrutivo grave e a gasometria evidencia retenção de CO₂ com acidose respiratória compensada. Esses achados são consistentes com o quadro de DPOC grave e com as queixas de dispneia e cansaço.',
    },
  },
  {
    titulo: 'Espirometria 4',
    descricao:
      'Considerando apenas os valores, interprete a espirometria simples com prova broncodilatadora abaixo:',
    tabela: {
      colunas: ['Parâmetro', 'Previsto', 'Pré-BD (Val.)', 'Pré-BD (%)', 'Pós-BD (Val.)', 'Pós-BD (%)', 'Var. (abs)', 'Var. (%)'],
      linhas: [
        { parametro: 'CVF (L)', valores: ['4,20', '2,31', '55%', '2,35', '56%', '+0,04 L', '+2%'] },
        { parametro: 'VEF1 (L)', valores: ['3,50', '1,96', '56%', '2,01', '57%', '+0,05 L', '+3%'] },
        { parametro: 'VEF1/CVF', valores: ['>0,75', '0,85', '-', '0,86', '-', '-', '-'] },
        { parametro: 'FEF 25-75%', valores: ['3,80', '3,20', '84%', '3,30', '87%', '+0,10 L/s', '+3%'] },
      ],
    },
    resposta: {
      achados: [
        { parametro: 'VEF1/CVF', valor: '0,85', indica: 'acima de 0,75 → sem obstrução', tipo: 'normal' },
        { parametro: 'CVF', valor: '55% prev.', indica: 'reduzida → padrão restritivo moderado', tipo: 'alterado' },
        { parametro: 'VEF1', valor: '56% prev.', indica: 'redução proporcional à CVF', tipo: 'alterado' },
        { parametro: 'VEF1 pós-BD', valor: '+3%', indica: 'sem resposta ao broncodilatador', tipo: 'alterado' },
      ],
      spirometria:
        'Distúrbio ventilatório restritivo moderado, sem resposta ao broncodilatador.',
    },
  },
]
