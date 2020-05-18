const exercicio5 = require('./exercicio5');

//Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
//Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado

test('testando MyIndexOf', () => {
    expect(myIndexOf([1, 2, 3, 4], 3)).toEqual(-1)
    expect(myIndexOf([1, 2, 3, 4], 5)).toEqual(-1)
})