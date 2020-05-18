const exercicio1 = require('./exercicio1');

test('soma a e b para dar c', () => {
   expect(exercicio1(4, 5)).toEqual(9)
})