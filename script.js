function FormularioCadastramento(){
        const nome = document.getElementById("nome").value;
        const email = document.querySelector("#email").value;
        const senha = document.getElementById("senha").value;
        const confirmacao = document.getElementById("confirmação").value;
        
        //validacao dos campos
        if(nome === ''|| email === ''|| senha ==='' || confirmacao ===''){
            alert("Por favor, preencha os campos vazios!")
        }
        //Validação do campo do email
        const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(emailregex.test()){
            alert("Digite um e-mail válido!")
            return
        }
        //verifica o tam da senha 
        if( senha.length >= 8){
            alert("Sua senha não pode ter menos de oito caracteres")
            return
        }
        if( senha != confirmacao ){
            alert ("Sua senha precisa ser igual nos dois campos")

        }
        alert(" Cadastro realizado com sucesso")
        
        }
