import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'a̱',
  'b',
  'd',
  'dł',
  'dz',
  'e',
  'g',
  'gw',
  'g̱',
  'g̱w',
  'h',
  'i',
  'k',
  'kw',
  'k̕',
  'k̕w',
  'ḵ',
  'ḵw',
  'ḵ̕',
  'l',
  'ł',
  'm',
  'n',
  'o',
  'p',
  'p̕',
  's',
  't',
  't̕',
  'ts',
  't̕s',
  'tł',
  't̕ł',
  'u',
  'w',
  'x',
  'xw',
  'x̱',
  'x̱w',
  'y',
  "'",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
