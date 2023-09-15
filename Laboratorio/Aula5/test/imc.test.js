const { expect } = require('chai');
const { calcularIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {
    it('Calculadora deve rodar tranquilo', () => {
        const peso = 80;
        const altura = 180;

        const ImcEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
        const ImcCalculado = calcularIMC(peso, altura);

        expect(ImcCalculado).to.equal(ImcEsperado);
    });

    it('altura = 0, entrada inadequada', () => {
        const peso = 70;
        const altura = 0;

        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal('NaN');
    })
});