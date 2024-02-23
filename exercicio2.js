// EXERCÍCIO #2
    // Faça um programa que leia a idade do usuário e retorne se ele pode votar
    // e se o voto é obrigatório ou não (no Brasil, voto obrigatório para 
    // eleitores alfabetizados entre 18 e 70 anos e facultativo acima dos 16).

// Selecionar idade abaixo e true/false para "alfabetizado":
let idade = 15
let alfabetizado = true

if ((idade >= 18) && (idade < 70) && (alfabetizado = true)){
    console.log("Voto obrigatório");
}
else if ((idade >= 18) && (idade < 70) && (alfabetizado = false)){
    console.log("Voto facultativo");
}
else if (idade < 16){
    console.log("Não pode votar");
}
else console.log("Voto facultativo");
