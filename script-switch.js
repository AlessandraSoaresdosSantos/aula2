const resultado = document.getElementById("resultado");

var nome = "Alessandra";
var sobrenome = "Santos";
var nomeCompleto = `${nome}  ${sobrenome}`;
var idade = window.prompt('Digite a sua idade');

    switch(true)
    {
        case idade < 0:
            resultado = "valor da idade é negativo";
            break;
        case idade > 0 && idade < 18:
            resultado ="pessoa menor de idade";
            break;
        case idade >= 18:
            resultado = "pessoa maior de idade";
            break;
        default:
            resultado = "informação inválida";
            break;        
    }

    