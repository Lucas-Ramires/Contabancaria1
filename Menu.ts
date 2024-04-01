import leia = require('readline-sync');
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupança } from './src/model/ContaPoupança';
import { ContaController } from './src/controller/ContaController';
import { readlinkSync } from 'fs';


export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta Corrente','Conta Poupanca'];

    //instancia da classe contacontroller
    let contas: ContaController = new ContaController();


    const cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 456, 1, "Lucasr", 10000, 1000);
    contas.cadastrar(cc1);

    const cc2: ContaPoupança = new ContaPoupança(contas.gerarNumero(), 456, 1, "Pamela", 30000, 1000);
    contas.cadastrar(cc2);

    // let c1: Conta = new Conta(123, 12, 2,"Lucas Ramires", 100000);
    // c1.visualizar();
    // c1.sacar(20000000);
    // c1.visualizar();
    // c1.depositar(50000)
    // c1.visualizar();
    
    // const cc1: ContaCorrente = new ContaCorrente(2, 456, 1, "Yasmine", 500000, 1000);
    // cc1.visualizar();
    // cc1.sacar(1000);
    // cc1.visualizar();
    // cc1.depositar(5000);
    // cc1.visualizar();

    // const ccc1: ContaPoupança = new ContaPoupança(2, 456, 1, "Luis", 5000,12);
    // ccc1.visualizar();
    

    while (true) {

        console.log(colors.bg.black, colors.fg.cyanstrong,
                    "******************************************************\n");
        console.log("                BANCO DO BRAZIL COM Z\n               ");
        console.log("******************************************************\n");
        console.log(" 1 - Criar Conta ");
        console.log(" 2 - Listar todas as Contas");
        console.log(" 3 - Buscar Conta por Numero");
        console.log(" 4 - Atualizar Dados da Conta");
        console.log(" 5 - Apagar Conta");
        console.log(" 6 - Sacar");
        console.log(" 7 - Depositar");
        console.log(" 8 - Transferir valores entre Contas");
        console.log(" 9 - Sair \n");
        console.log("*******************************************************",
        colors.reset);    

        console.log("Entre com a opcao desejada: \n");
        opcao = leia.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!\n");
            sobre();
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

                console.log("Digite o Numero da agencia: ")
                agencia = leia.questionInt("")

                console.log("Digite o Nome do Titular: ")
                titular = leia.question("")

                console.log("Informe o tipo da Conta: ")
                tipo = leia.keyInSelect(tipoContas, "", {cancel: false}) + 1

                console.log("Digite o saldo da conta: ")
                saldo = leia.questionFloat("")

                switch(tipo){
                    case 1:
                        console.log("Digite o limite da conta: ")
                        limite = leia.questionFloat("")
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        )
                    break;
                    case 2:
                        console.log("Digite o dia do aniversario da conta: ")
                        aniversario = leia.questionInt("")
                        contas.cadastrar(
                            new ContaPoupança(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )
                        break;

                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);
                contas.listarTodas();
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                console.log("Digite o Numero da conta: ")
                numero = leia.questionInt("")
                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);
               
                console.log("Digite o Numero da conta: ")
                numero = leia.questionInt("")

                let conta = contas.buscarNoArray(numero)

                if(conta !== null){
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

                console.log("Digite o Numero da agencia: ")
                agencia = leia.questionInt("")

                console.log("Digite o Nome do Titular: ")
                titular = leia.question("")

                tipo = conta.tipo

                console.log("Digite o saldo da conta: ")
                saldo = leia.questionFloat("")

                switch(tipo){
                    case 1:
                        console.log("Digite o limite da conta: ")
                        limite = leia.questionFloat("")
                        contas.atualizar(
                            new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                        )
                    break;
                    case 2:
                        console.log("Digite o dia do aniversario da conta: ")
                        aniversario = leia.questionInt("")
                        contas.cadastrar(
                            new ContaPoupança(numero, agencia, tipo, titular, saldo, aniversario)
                        )
                        break;
                }

                }else{
                    console.log("A conta nao foi encontrada!")
                }


                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);

                console.log("Digite o Numero da conta: ")
                numero = leia.questionInt("")
                contas.deletar(numero);


                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

                console.log("Digite o numero da conta: ")
                numero = leia.questionInt("");

                console.log("Digite o valor do Saque: ")
                valor = leia.questionFloat("");

                contas.sacar(numero, valor);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);
                console.log("Digite o numero da conta: ")
                numero = leia.questionInt("");

                console.log("Digite o valor do Saque: ")
                valor = leia.questionFloat("");

                contas.depositar(numero, valor);
                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);
                console.log("Digite o numero da conta que ira transferir o valor: ")
                numero = leia.questionInt("")
                console.log("Digite a conta que irá receber o valor")
                numeroDestino = leia.questionFloat("")
                console.log("Digite o valor que irá transferir: ")
                valor = leia.questionFloat("")

                contas.transferir(numero, numeroDestino, valor);
                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }
}

function sobre(): void{
    console.log(colors.bg.black, colors.fg.greenstrong,
                "                                                       ");
    console.log("*******************************************************");
    console.log("Projeto Desenvolvidor por: Lucas Ramires");
    console.log("E-mail: kotecbr@outlook.com");
    console.log("https://github.com/Lucas-Ramires");
    console.log("*******************************************************")
    console.log("                                                       ",
    colors.reset);
}
function keyPress(): void{
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}
    main();


