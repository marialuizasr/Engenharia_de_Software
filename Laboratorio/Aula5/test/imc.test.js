const { expect } = require('chai');
const { calcularIMC, imcSaudavel, classificarIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {
    it('Calculadora deve rodar tranquilo', () => {
        const peso = 80;
        const altura = 180;

        const imcEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
        const imcCalculado = calcularIMC(peso, altura);

        expect(imcCalculado).to.equal(imcEsperado);
    });

    it('altura = 0, entrada inadequada', () => {
        const peso = 70;
        const altura = 0;

        const imcCalculado = calcularIMC(peso, altura);

        expect(imcCalculado).to.equal('NaN');
    })

    it('Avaliar se o IMC é saudável', () => {
        const peso = 70;
        const altura = 170;

        const resultado = imcSaudavel(peso, altura);

        expect(resultado).to.be.true;
    });

    it('Classificar o IMC', () => {
        const peso = 90;
        const altura = 175;

        const categoria = classificarIMC(peso, altura);

        expect(categoria).to.equal('Sobrepeso');
    });
});