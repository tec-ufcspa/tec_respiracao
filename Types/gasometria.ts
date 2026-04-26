export interface GasometriaValues {
  ph: string
  paCO2: string
  HCO3: string
  EB: string
  PaO2: string
  SatO2: string
  FiO2: string
}

export interface Achado {
  parametro: string
  valor: string
  indica: string
  tipo: 'alterado' | 'normal' | 'positivo'
}

export interface RespostaGasometria {
  achados: Achado[]
  diagnostico: string
}

export interface Caso {
  titulo: string
  idade: number
  gasometria: GasometriaValues
  resposta: RespostaGasometria
}

export interface GasField {
  key: keyof Omit<GasometriaValues, 'FiO2'>
  label: string
  ref: string
  unit: string
}
