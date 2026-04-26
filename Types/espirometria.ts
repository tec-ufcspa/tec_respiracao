export interface SpirometryRow {
  parametro: string
  valores: string[]
}

export interface SpirometryTable {
  colunas: string[]
  linhas: SpirometryRow[]
}

export interface GasometriaEspiro {
  ph: string
  paCO2: string
  HCO3: string
  EB: string
  PaO2: string
  SaO2: string
}

export interface Achado {
  parametro: string
  valor: string
  indica: string
  tipo: 'alterado' | 'normal' | 'positivo'
}

export interface RespostaEspiro {
  achados: Achado[]
  spirometria: string
  exameFisico?: string[]
  gasometria?: string
  relacao?: string
}

export interface Exercicio {
  titulo: string
  paciente?: string
  descricao?: string
  tabela: SpirometryTable
  gasometria?: GasometriaEspiro
  questoes?: string[]
  resposta: RespostaEspiro
}
