const fs = require('fs'); 
const { buscarAtendimentos } = require('./atendimento'); 
const { buscarServico } = require('./serviços'); 
const { atendimentos } = require('./atendimento'); 

async function fecharConta(nomeTutor) { 
    try { 
        const atendimentoTutor = atendimentos.find(a => a.nomeTutor === nomeTutor); 
        
        if (!atendimentoTutor) { 
            console.log(`Nenhum atendimento encontrado para o tutor(a) ${nomeTutor}`); 
            return; 
        } 
        
        const listaAtendimentos = await buscarAtendimentos(atendimentoTutor.animalId); 
        const registro = listaAtendimentos[0]; 
        
        console.log("==============================="); 
        console.log(`Tutor: ${registro.nomeTutor}`); 
        console.log(`Animal: ${registro.nomePet}`); 
        console.log("===============================\n"); 
        
        let total = 0; 
        let linhasConta = []; 
        
        for (const item of registro.itens) { 
            const servico = await buscarServico(item.servicoId); 
            const subtotal = servico.preco * item.quantidade; 
            total += subtotal; 
            

            const linha = `${item.quantidade} x ${servico.nome} = R$ ${subtotal}`; 
            console.log(linha); 
            linhasConta.push(linha); 
        } 
        
        console.log("===============================\n");
        console.log(`Total do atendimento: R$ ${total}`); 
        console.log("===============================\n");
        
        const dadosParaSalvar = { 
            tutor: registro.nomeTutor, 
            animal: registro.nomePet, 
            itens: linhasConta, 
            total: `R$ ${total}` 
        }; 
        
        fs.writeFileSync('conta.json', JSON.stringify(dadosParaSalvar, null, 2), 'utf-8'); 
        console.log("\n Arquivo 'conta.json' gerado com sucesso!"); 
    } catch (erro) { 
        console.log("\n Erro no processamento:", erro); 
    } 
} 


fecharConta("Rayray");
