import leia = require('readline-sync');
import { colors } from './src/util/Colors';

export function main() {

    let opcao: number;

    while (true) {

        console.log(colors.bg.black, colors.fg.cyanstrong,
                    "****************************************************\n");
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
                console.log("\nCriar Conta!")
                break;
            case 2:
                console.log("\nListar Todas as Contas")
                break;
            case 3:
                console.log("\nBuscar Conta por Numero")
                break;
            case 4:
                console.log("\nAtualizar Dados da Conta")
                break;
            case 5:
                console.log("\nApagar Conta")
                break;
            case 6:
                console.log("\nSacar")
                break;
            case 7:
                console.log("\nDepositar")
                break;
            case 8:
                console.log("\nTransferir valores entre Contas")
                break;
            case 9:
                console.log("\nBanco do Brazil com Z - O seu futuro começa aqui!");
                break;
            default:
                console.log("\nDigite uma entre as nove opcoes!:")
                break;
        }
    }
}

export function sobre(): void{
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

    main();



