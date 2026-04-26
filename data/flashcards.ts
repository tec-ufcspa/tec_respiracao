import { FlashcardType } from '@/Types/flashcards'

export const categoriaStyle: Record<FlashcardType['categoria'], string> = {
  ASMA: 'bg-blue-100 text-blue-700',
  DPOC: 'bg-teal-100 text-teal-700',
  'DPI/FPI': 'bg-purple-100 text-purple-700',
  IRp: 'bg-orange-100 text-orange-700',
}

export const flashcards: FlashcardType[] = [
  // ── ASMA ──────────────────────────────────────────────────────────────────
  { question: 'O que é Asma?', answer: 'É uma doença heterogênea, caracterizada por inflamação crônica das vias aéreas. É uma doença de VIA AÉREA.', categoria: 'ASMA' },
  { question: 'Quais são os sintomas principais que caracterizam o quadro clínico da Asma?', answer: 'Chiado, dispneia, aperto no peito e tosse, que variam de intensidade ao longo do tempo.', categoria: 'ASMA' },
  { question: 'Qual o achado espirométrico crucial no diagnóstico da Asma?', answer: 'Espirometria obstrutiva, com VEF1 reduzido.', categoria: 'ASMA' },
  { question: 'Quais são exemplos de Fatores do Hospedeiro que predispõem ou protegem os indivíduos de desenvolverem Asma?', answer: 'Genética (atopia e hiperreatividade), obesidade e refluxo gastroesofágico.', categoria: 'ASMA' },
  { question: 'Quais são exemplos de Fatores Ambientais que influenciam a susceptibilidade para o desenvolvimento de Asma ou precipitam as exacerbações?', answer: 'Fumo, poluição e alérgenos.', categoria: 'ASMA' },
  { question: 'Quais são as principais células inflamatórias envolvidas na Asma?', answer: 'Mastócitos, eosinófilos, macrófagos e Linfócitos (Th2).', categoria: 'ASMA' },
  { question: 'Qual é o fenótipo de inflamação predominante?', answer: 'O fenótipo de inflamação predominante é eosinofílica (alta Th2).', categoria: 'ASMA' },
  { question: 'Qual é a consequência do depósito de colágeno na membrana basal das vias aéreas na Asma?', answer: 'Causa remodelamento permanente na via aérea, podendo levar a crises contínuas.', categoria: 'ASMA' },
  { question: 'O que significam as siglas CI, SABA, LABA e LAMA no tratamento farmacológico inalatório da Asma?', answer: 'CI (Corticoide Inalatório), SABA (Beta 2-agonistas inalatórios de curta duração), LABA (β2-agonista de longa duração) e LAMA (Antagonista muscarínico de longa duração).', categoria: 'ASMA' },
  { question: 'Qual dispositivo inalatório é ideal para crianças e idosos e por quê?', answer: 'O Inalador dosimetrado + Espaçador + Máscara, pois facilita o uso, aumenta a disposição do medicamento e diminui a necessidade de coordenação.', categoria: 'ASMA' },
  { question: 'Qual é a recomendação de maior nível de evidência para o tratamento não medicamentoso da Asma em pacientes de todas as idades?', answer: 'Reabilitação Pulmonar e Exercício Físico.', categoria: 'ASMA' },
  { question: 'Na fisiopatologia da asma, qual processo pode se tornar irreversível devido ao depósito de colágeno?', answer: 'O depósito de colágeno na membrana basal.', categoria: 'ASMA' },
  { question: 'Exercícios respiratórios com inspirações e expirações lentas e profundas na asma visam reduzir a ___.', answer: 'Hiperventilação pulmonar.', categoria: 'ASMA' },

  // ── DPOC ──────────────────────────────────────────────────────────────────
  { question: 'Como a DPOC é caracterizada?', answer: 'É uma desordem heterogênea caracterizada por disfunção das vias aéreas (pequenas e grandes) e destruição do parênquima pulmonar e sua vasculatura.', categoria: 'DPOC' },
  { question: 'Qual é a principal diferença entre DPOC e Asma em relação à reversibilidade?', answer: 'A Asma pode ser revertida, mas a DPOC causa limitação ao fluxo aéreo que não é totalmente reversível.', categoria: 'DPOC' },
  { question: 'Qual o principal fator de risco associado à DPOC?', answer: 'Tabagismo.', categoria: 'DPOC' },
  { question: 'Qual o achado funcional crucial no diagnóstico da DPOC?', answer: 'Espirometria sempre alterada, com VEF1/CVF < 70.', categoria: 'DPOC' },
  { question: 'Qual o mecanismo fisiopatológico principal que causa as repercussões da DPOC?', answer: 'Limitação ao fluxo expiratório, levando à Hiperinsuflação.', categoria: 'DPOC' },
  { question: 'Na fisiopatologia da Bronquite Crônica, o que provoca a hipersecreção de muco?', answer: 'A irritação crônica por substâncias inaladas leva à hipertrofia das glândulas da submucosa e ao aumento das células caliciformes.', categoria: 'DPOC' },
  { question: 'No Enfisema Pulmonar, como o tabaco causa a lesão da rede elástica do pulmão?', answer: 'O tabaco e radicais oxidantes inativam inibidores da elastase (como a α1-AT), resultando na lesão da rede elástica, dilatação dos espaços aéreos e ruptura de paredes alveolares.', categoria: 'DPOC' },
  { question: 'Quais são as principais queixas clínicas na DPOC?', answer: 'As principais queixas são Dispneia e Fadiga.', categoria: 'DPOC' },
  { question: 'Quais são os achados no exame físico comuns na DPOC?', answer: 'Os achados no exame físico são: murmúrio vesicular diminuído, mobilidade e expansibilidade reduzidas e aumento do diâmetro anteroposterior do tórax.', categoria: 'DPOC' },
  { question: 'Qual técnica respiratória que pode amenizar a hiperinsuflação dinâmica na DPOC?', answer: 'Freno labial (P+).', categoria: 'DPOC' },
  { question: 'Qual estratégia de suporte ventilatório possui Nível A de evidência para pacientes em exacerbação de DPOC?', answer: 'A Ventilação Não Invasiva (VNI), no modo bilevel.', categoria: 'DPOC' },
  { question: 'Qual é a principal causa da bronquite crônica no contexto da DPOC?', answer: 'Irritação crônica por substâncias inaladas, como a fumaça do cigarro.', categoria: 'DPOC' },
  { question: 'Na bronquite crônica, o que acontece com as glândulas da submucosa e as células caliciformes?', answer: 'Ocorre hipertrofia das glândulas da submucosa e aumento das células caliciformes.', categoria: 'DPOC' },

  // ── DPI/FPI ───────────────────────────────────────────────────────────────
  { question: 'O que causa o processo de fibrose nas Doenças Pulmonares Intersticiais (DPIs)?', answer: 'Uma injúria ao epitélio alveolar/endotélio vascular desencadeia inflamação (alveolite), ativando FIBROBLASTOS que depositam colágeno, resultando em progressiva cicatrização e um "pulmão duro".', categoria: 'DPI/FPI' },
  { question: 'O que é a Fibrose Pulmonar Idiopática (FPI) e qual é a sua causa?', answer: 'É a mais comum das pneumonias intersticiais idiopáticas (cerca de 50% a 60% dos casos), sendo uma doença crônica e progressiva de causa desconhecida.', categoria: 'DPI/FPI' },
  { question: 'Qual o prognóstico típico da FPI?', answer: 'O prognóstico é ruim, podendo ocorrer o óbito cerca de 2 anos após o diagnóstico.', categoria: 'DPI/FPI' },
  { question: 'Quais são os achados clínicos característicos no exame físico da FPI?', answer: 'Presença de crepitantes tipo "velcro" em bases e baqueteamento/hipocratismo digital. O quadro clínico é insidioso, com dispneia progressiva e tosse seca.', categoria: 'DPI/FPI' },
  { question: 'Qual é o padrão espirométrico pulmonar encontrado na FPI?', answer: 'Padrão restritivo (diminuição dos volumes pulmonares) e redução da capacidade de difusão do monóxido de carbono (DLCO).', categoria: 'DPI/FPI' },
  { question: 'No Lavado Broncoalveolar (LBA) para avaliação da FPI, qual predomínio celular sugere um pior prognóstico?', answer: 'Predomínio de neutrófilos/eosinófilos.', categoria: 'DPI/FPI' },
  { question: 'Qual é uma importante estratégia farmacológica utilizada no tratamento da FPI que trouxe bons resultados desde 2016?', answer: 'O uso de Antifibróticos.', categoria: 'DPI/FPI' },
  { question: 'Cite dois fatores de risco para a Fibrose Pulmonar Idiopática (FPI).', answer: 'Tabagismo e exposição ambiental.', categoria: 'DPI/FPI' },
  { question: 'Qual achado é encontrado no exame físico da FPI?', answer: 'Crepitantes tipo "velcro" nas bases pulmonares.', categoria: 'DPI/FPI' },
  { question: 'Na radiografia de tórax, qual achado indica fibrose avançada e irreversível?', answer: 'Padrão de "faveolamento".', categoria: 'DPI/FPI' },

  // ── IRp ───────────────────────────────────────────────────────────────────
  { question: 'Como a Insuficiência Respiratória (IRp) é definida pela Gasometria Arterial (em ar ambiente)?', answer: 'Condição clínica onde há desequilíbrio funcional, definida por PaO₂ < 60 mmHg, PaO2/FiO2 < 300 e/ou PaCO₂ > 50 mmHg.', categoria: 'IRp' },
  { question: 'O que caracteriza a Insuficiência Respiratória Hipoxêmica (Tipo I) e quais etapas da função respiratória estão associadas?', answer: 'É a hipoxemia decorrente de alterações da troca gasosa (falha em oxigenar). Está associada às etapas finais: Troca gasosa e Transporte de gases.', categoria: 'IRp' },
  { question: 'O que caracteriza a Insuficiência Respiratória Hipercápnica (Tipo II) e quais etapas da função respiratória estão associadas?', answer: 'É a hipercapnia com acidose respiratória (se aguda); falha na eliminação de CO₂ causada por hipoventilação. Está associada às etapas iniciais: Estímulo elétrico, Transmissão, Expansão da caixa torácica, Passagem do ar.', categoria: 'IRp' },
  { question: 'Quais são os efeitos característicos da hipercapnia elevada no paciente?', answer: 'Aumento da pressão intracraniana, torpor, podendo evoluir para narcose.', categoria: 'IRp' },
  { question: 'Quais são as duas metas principais no tratamento da Insuficiência Respiratória?', answer: 'Restauração das trocas gasosas adequadas para fornecer oxigênio aos órgãos vitais e tratamento dos distúrbios subjacentes (doença de base).', categoria: 'IRp' },
  { question: 'Qual é a principal característica da Insuficiência Respiratória Tipo I?', answer: 'É a hipoxemia, decorrente de alterações na troca gasosa.', categoria: 'IRp' },
  { question: 'Qual é a principal característica da Insuficiência Respiratória Tipo II?', answer: 'É a hipercapnia ou insuficiência ventilatória, causada por falha na ventilação.', categoria: 'IRp' },
  { question: 'Cite uma causa de hipoventilação central que pode levar à IRp Tipo II.', answer: 'Abuso de sedativos ou drogas ilícitas.', categoria: 'IRp' },
  { question: 'O tratamento fisioterapêutico na Insuficiência Respiratória depende primariamente de quê?', answer: 'Da doença de base e do seu processo fisiopatológico.', categoria: 'IRp' },
]
