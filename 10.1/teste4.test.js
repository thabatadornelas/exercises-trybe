const exercicio4 = require('./exercicio4');

test('soma a e b para dar c', () => {
   expect(exercicio4(2, 2)).toEqual(4)
   expect(exercicio4).not.toContain(' ');
});

test(('5'), () => {
    expect(exercicio4).toThrow('parameters must be numbers');
});