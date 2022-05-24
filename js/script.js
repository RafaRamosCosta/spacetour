function enviar(){
    let nome = document.querySelector("#nomeId");
    let sobrenome = document.querySelector("#sobrenomeId");
    let genero = document.querySelector("#generoId");
    let dt_nasc = document.querySelector("#dataId");
    let texto = document.querySelector("#motivoId");

   if (nome.value != "" && sobrenome.value != "" && genero.value != "" && dt_nasc.value != "" && texto.value != ""){
       alert("Obrigado " + nome.value + " os seus dados foram encaminhados com sucesso");
   };
};

document.querySelector('form').addEventListener('submit', enviar);