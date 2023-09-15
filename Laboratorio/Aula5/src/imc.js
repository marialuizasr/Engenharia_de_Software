function calcularIMC(peso, altura) {
    if (altura === 0) {
        return 'NaN';
    }

    const alturaMetros = altura / 100;

    return ((peso / (alturaMetros * alturaMetros)).toFixed(2));
}

function imcSaudavel(peso, altura) {
    const imc = calcularIMC(peso, altura);
    return imc >= 18.5 && imc <= 24.9;
}

function classificarIMC(peso, altura) {
    const imc = calcularIMC(peso, altura);

    if (imc < 16) {
        return 'Magreza grave';
    } else if (imc >= 16 && imc < 17) {
        return 'Magreza moderada';
    } else if (imc >= 17 && imc < 18.5) {
        return 'Magreza leve';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        return 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 40) {
        return 'Obesidade Grau II (severa)';
    } else {
        return 'Obesidade Grau III (mórbida)';
    }
}

module.exports = { calcularIMC, imcSaudavel, classificarIMC };
