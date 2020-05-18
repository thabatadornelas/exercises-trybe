const exercicio3 = require('./exercicio3');

test('soma a e b para dar c', () => {
   expect(exercicio3(2, 2)).toEqual(4)
   expect(exercicio3).not.toContain(' ');
});