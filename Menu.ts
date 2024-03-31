import leia = require('readline-sync');
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupança } from './src/model/ContaPoupança';


export function main() {

    let opcao: number;

    // let c1: Conta = new Conta(123, 12, 2,"Lucas Ramires", 100000);
    // c1.visualizar();
    // c1.sacar(20000000);
    // c1.visualizar();
    // c1.depositar(50000)
    // c1.visualizar();
    
    const cc1: ContaCorrente = new ContaCorrente(2, 456, 1, "Yasmine", 500000, 1000);
    cc1.visualizar();
    cc1.sacar(1000);
    cc1.visualizar();
    cc1.depositar(5000);
    cc1.visualizar();

    const ccc1: ContaPoupança = new ContaPoupança(2, 456, 1, "Luis", 5000,12);
    ccc1.visualizar();
    

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
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);

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



