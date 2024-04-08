const removeNonDigits = (cpf) => cpf.replace(/\D/g, '');

const isKnownInvalidCPF = (cpf) => {
    const knownInvalids = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ];
    return knownInvalids.includes(cpf);
};

const calculateCheckDigit = (cpf, factor) => {
    const sum = cpf
        .substr(0, factor - 1)
        .split('')
        .reduce((acc, cur, index) => acc + parseInt(cur) * (factor - index), 0);
    let digit = 11 - (sum % 11);
    return digit >= 10 ? 0 : digit;
};

const isValidCPF = (cpf) => {
    cpf = removeNonDigits(cpf);
    if (!cpf || cpf.length !== 11 || isKnownInvalidCPF(cpf)) return false;

    const digit1 = calculateCheckDigit(cpf, 10);
    const digit2 = calculateCheckDigit(cpf, 11);

    return digit1 === parseInt(cpf.charAt(9)) && digit2 === parseInt(cpf.charAt(10));
};

module.exports = isValidCPF;
