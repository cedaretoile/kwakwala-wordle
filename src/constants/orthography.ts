import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'aa',
  'b',
  'c',
  'c̓',
  'č',
  'č̓',
  'd',
  'e',
  'ee',
  'h',
  'i',
  'ii',
  'k',
  'kʷ',
  'k̓',
  'k̓ʷ',
  'l',
  'ł',
  'ƛ',
  'ƛ̓',
  'm',
  'n',
  'o',
  'oo',
  'p',
  'p̓',
  'q',
  'qʷ',
  'q̓',
  'q̓ʷ',
  's',
  'š',
  't',
  't̓',
  'u',
  'uu',
  'w',
  'x',
  'xʷ',
  'x̣',
  'x̣ʷ',
  'ʔ',
  'ʕ',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
