//Crie uma função que recebe um número como string (ex: &#39;12345678901&#39;) e retorna no
//formato de CPF (123.456.789-01) usando slice e concatenação.

const cpf = '12345678901';
const cpfFormatado = formatarCPF(cpf);
console.log(cpfFormatado);



function formatarCPF(cpfDigitado) {

    return cpfDigitado.slice(0, 3) + '.' + cpfDigitado.slice(3, 6) + '.' + cpfDigitado.slice(6, 9) + '-' + cpfDigitado.slice(9);
}