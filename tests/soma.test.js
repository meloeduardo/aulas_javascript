import { soma } from '../src/soma.js'

test('soma 2 + 3 = 5', () => {
  expect(soma(2, 3)).toBe(5)
})

test('conversão de string', () => {
  expect(soma('10', 1)).toBe(11)
})
