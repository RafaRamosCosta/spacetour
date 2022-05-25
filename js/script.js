function enviar(){
    let nome = document.querySelector("#nomeId");
    let sobrenome = document.querySelector("#sobrenomeId");
    let email = document.querySelector("#emailid");
    let cpf = document.querySelector("#cpfId");
    let genero = document.querySelector("#generoId");
    let dt_nasc = document.querySelector("#dataId");
    let texto = document.querySelector("#motivoId");

   if (nome.value != "" && sobrenome.value != "" && genero.value != "" && dt_nasc.value != "" && texto.value != "" && email.value != "" && cpf.value != ""){
       alert("Obrigado " + nome.value + " os seus dados foram encaminhados com sucesso");
   };
};

document.querySelector('form').addEventListener('submit', enviar);