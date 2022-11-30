import analisador from "./analisadorLexico.js";
import linguagem from "./linguagem.js";
import fs from 'fs';

let table = {
    fileName: "Resultado",
    headers: ["Classe", "Token", "Linha", "Quantidade"],
    values: []
}

let language = linguagem.JavaScript;
let filePath = "code.txt";
let cColor = '\x1b[33m%s\x1b[0m';

console.log(cColor, '\nLendo o arquivo "code.txt"...');

let code = fs.readFileSync(filePath, 'utf8');
let codeLines = code.split(/\r?\n/);

console.log(cColor, '\nIniciando processo de Análise Léxica');

let result = analisador(codeLines, language);

console.log('\x1b[36m', '\nAnálise:\n');
console.log('\x1b[37m', result[0], "\n");
console.log(result[1], "\n");
let typeCount = {
    'Palavra reservada': 0,
    'Pontuação': 0,
    'Operador': 0,
    'Real': 0,
    'Inteiro': 0,
    'Variável': 0
}
let typeIterator = type => {
    switch (type) {
        case 'Palavra reservada':
            typeCount['Palavra reservada']++;
            break;
        case 'Pontuação':
            typeCount['Pontuação']++;
            break;
        case 'Operador':
            typeCount['Operador']++;
            break;
        case 'Real':
            typeCount['Real']++;
            break;
        case 'Inteiro':
            typeCount['Inteiro']++;
            break;
        case 'Variável':
            typeCount['Variável']++;
            break;

    }
}