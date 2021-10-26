const resultado = document.getElementById("resultado");

var nome = "Alessandra";
var sobrenome = "Santos";
var nomeCompleto = `${nome}  ${sobrenome}`;
var idade = window.prompt('Digite a sua idade');

if (isNaN(idade))
{
   resultado.innerHTML = 'não é número';
}
else
{ 
  if(idade >= 18)
  {
    resultado.innerHTML = "O usuário" + nomeCompleto + " é adulto";
   
  }
  else
  {
    resultado.innerHTML = "O usuário" + nomeCompleto + " é menor de idade";
  }
} 
