function calcularIMC(peso, altura) {
    if (altura === 0) {
        return 'NaN';
    }

    const alturaMetros = altura / 100;

    return ((peso / (alturaMetros * alturaMetros)).toFixed(2));
}

module.exports = { calcularIMC };