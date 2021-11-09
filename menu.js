
//aparecer menu --> cliente vai digitar qual prato e tempo-->vai imprimir o resultado -->  começa de novo

const { Console } = require("console");
const readline = require("readline"); 
const rl = readline.createInterface
({
    input: process.stdin,                             
    output: process.stdout                             
});

const ImprimirMenu = function() 
{
      console.log("MENU DO MICROONDAS:")
      console.log("1 - Pipoca – 10 segundos (padrão)");
      console.log("2 - Macarrão – 8 segundos (padrão)");
      console.log("3 - Carne – 15 segundos (padrão)");
      console.log("4 - Feijão – 12 segundos (padrão)");
      console.log("5 - Brigadeiro – 8 segundos (padrão)");
}


const tempoPratoOpcao = function(op) 
{
      let tempoPrato;
      if(op==1) tempoPrato = 10
      else if (op==2) tempoPrato = 8
      else if (op==3) tempoPrato = 15
      else if (op==4) tempoPrato = 12
      else if (op==5) tempoPrato = 8
      else tempoPrato = -1

      return tempoPrato;
}

const resposta = function(tempo, tempoPrato) 
{
      if(tempoPrato == -1) {console.log("Prato inexistete!")}

      else if (tempo < tempoPrato) {console.log(`tempo insuficiente!`);}

      else if(tempo >= tempoPrato*3) {console.log(`KABUMMMMMM!!!!!!!!!!`);} 

      else if(tempo > tempoPrato*2) {console.log(`Prato queimou!`);} 

      else {console.log("Prato pronto, bom apetite!!!")}
}

ImprimirMenu()

rl.question("Qual opção deseja? ", function(op)
{ rl.question("Quanto tempo de microondas? ", function(tempo) 
      {
            console.log(`Opcao escolhida: ${op} e tempo escolhido: ${tempo}`);
            

            let tempoPrato = tempoPratoOpcao(op)

            resposta(tempo, tempoPrato);

            rl.close();
      })
});


/* Professor, para cada prato, basta digitar no terminal integrado a opção que deseja, quando selecionar suas opções, ele te dará uma resposta para cada prato e tempo, conforme sua opção de prato e tempo mude, a resposta imprimida será diferente. Exemplo:

                        Qual opção deseja? 5
                        Quanto tempo de microondas? 30
                        Opcao escolhida 5 e tempo escolhido 30
                        KABUMMMMM!!!!!!!!!!
*/