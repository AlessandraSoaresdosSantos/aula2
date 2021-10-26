const contador = document.getElementById("contador");

contador.addEventListener(
  "click", // tipo do evento
  (event) => {
    event.target.innerHTML++;
  }
);
/*
- adiciona um "escutador" ao evento de click
  do elemento contador

- o tipo do evento "click"

- o objeto do "event" vem por parametro
  contém informações do evento

- target é o elemento "alvo"
  que sofreu o evento

- innerHTML é o conteúdo do target

- ++ é um operador que soma 1
  a uma variavel numerica
  ou a uma string de numeros

*/
