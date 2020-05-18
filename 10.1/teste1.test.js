const exercicio1 = require('./exercicio1');

test('soma a e b para dar 3', () => {
   expect(exercicio1(4, 5)).toEqual(9)
})