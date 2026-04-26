import { Caso, GasField } from '@/Types/gasometria'

export const gasFields: GasField[] = [
  { key: 'ph', label: 'pH', ref: '7,35–7,45', unit: '' },
  { key: 'paCO2', label: 'PaCO₂', ref: '35–45 mmHg', unit: 'mmHg' },
  { key: 'HCO3', label: 'HCO₃', ref: '22–26 mEq/L', unit: 'mEq/L' },
  { key: 'EB', label: 'EB', ref: '-3 a +3', unit: '' },
  { key: 'PaO2', label: 'PaO₂', ref: '> 80 mmHg', unit: 'mmHg' },
  { key: 'SatO2', label: 'SatO₂', ref: '> 95%', unit: '' },
]

export const casos: Caso[] = [
  {
    titulo: 'Caso 1',
    idade: 18,
    gasometria: { ph: '7,30', paCO2: '49', HCO3: '18', EB: '-3', PaO2: '68', SatO2: '89%', FiO2: '36% (0,36)' },
    resposta: {
      achados: [
        { parametro: 'pH', valor: '7,30', indica: 'abaixo de 7,35 → acidose', tipo: 'alterado' },
        { parametro: 'PaCO₂', valor: '49 mmHg', indica: 'acima de 45 → componente respiratório', tipo: 'alterado' },
        { parametro: 'HCO₃', valor: '18 mEq/L', indica: 'abaixo de 22 → componente metabólico', tipo: 'alterado' },
        { parametro: 'PaO₂', valor: '68 mmHg', indica: 'hipoxemia leve (60–80 mmHg)', tipo: 'alterado' },
      ],
      diagnostico: 'Acidose Mista com Hipoxemia Leve',
    },
  },
  {
    titulo: 'Caso 2',
    idade: 46,
    gasometria: { ph: '7,40', paCO2: '46', HCO3: '30', EB: '+3', PaO2: '54', SatO2: '78%', FiO2: '40% (0,4)' },
    resposta: {
      achados: [
        { parametro: 'HCO₃', valor: '30 mEq/L', indica: 'acima de 26 → alcalose metabólica primária', tipo: 'alterado' },
        { parametro: 'EB', valor: '+3', indica: 'componente metabólico positivo', tipo: 'alterado' },
        { parametro: 'pH', valor: '7,40', indica: 'normal → alcalose compensada', tipo: 'normal' },
        { parametro: 'PaCO₂', valor: '46 mmHg', indica: 'levemente elevado → compensação respiratória', tipo: 'alterado' },
        { parametro: 'PaO₂', valor: '54 mmHg', indica: 'hipoxemia moderada (40–60 mmHg)', tipo: 'alterado' },
      ],
      diagnostico: 'Alcalose Metabólica Compensada com Hipoxemia Moderada',
    },
  },
  {
    titulo: 'Caso 3',
    idade: 60,
    gasometria: { ph: '7,38', paCO2: '49', HCO3: '26', EB: '+2', PaO2: '92', SatO2: '97%', FiO2: '50% (0,50)' },
    resposta: {
      achados: [
        { parametro: 'PaCO₂', valor: '49 mmHg', indica: 'acima de 45 → hipercapnia', tipo: 'alterado' },
        { parametro: 'pH', valor: '7,38', indica: 'normal → sem desequilíbrio ácido-base', tipo: 'normal' },
        { parametro: 'HCO₃', valor: '26 mEq/L', indica: 'normal', tipo: 'normal' },
        { parametro: 'PaO₂', valor: '92 mmHg', indica: 'adequada para FiO₂ de 50%', tipo: 'normal' },
      ],
      diagnostico: 'Hipercapnia (sem desequilíbrio ácido-base)',
    },
  },
  {
    titulo: 'Caso 4',
    idade: 86,
    gasometria: { ph: '7,48', paCO2: '32', HCO3: '20', EB: '-3', PaO2: '78', SatO2: '93%', FiO2: '21% (0,21)' },
    resposta: {
      achados: [
        { parametro: 'pH', valor: '7,48', indica: 'acima de 7,45 → alcalose', tipo: 'alterado' },
        { parametro: 'PaCO₂', valor: '32 mmHg', indica: 'abaixo de 35 → alcalose respiratória primária', tipo: 'alterado' },
        { parametro: 'HCO₃', valor: '20 mEq/L', indica: 'reduzido → compensação metabólica em curso', tipo: 'alterado' },
        { parametro: 'PaO₂', valor: '78 mmHg', indica: 'adequada para 86 anos (esperada ≈ 72 mmHg)', tipo: 'normal' },
      ],
      diagnostico: 'Alcalose Respiratória Em Compensação sem hipoxemia (devido à idade)',
    },
  },
  {
    titulo: 'Caso 5',
    idade: 73,
    gasometria: { ph: '7,32', paCO2: '36', HCO3: '20', EB: '-3', PaO2: '74', SatO2: '92%', FiO2: '21% (0,21)' },
    resposta: {
      achados: [
        { parametro: 'pH', valor: '7,32', indica: 'abaixo de 7,35 → acidose', tipo: 'alterado' },
        { parametro: 'HCO₃', valor: '20 mEq/L', indica: 'abaixo de 22 → acidose metabólica primária', tipo: 'alterado' },
        { parametro: 'EB', valor: '-3', indica: 'componente metabólico negativo', tipo: 'alterado' },
        { parametro: 'PaCO₂', valor: '36 mmHg', indica: 'normal → sem compensação respiratória', tipo: 'normal' },
        { parametro: 'PaO₂', valor: '74 mmHg', indica: 'adequada para 73 anos (esperada ≈ 78 mmHg)', tipo: 'normal' },
      ],
      diagnostico: 'Acidose Metabólica Não Compensada sem hipoxemia (devido à idade)',
    },
  },
]
