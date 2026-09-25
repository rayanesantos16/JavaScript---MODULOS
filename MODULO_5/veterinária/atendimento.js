const atendimentos = [
    { animalId: 1, nomePet: "Thor", nomeTutor: "Rayray", telefone: "(16)99999999", itens: [{ servicoId: 1, quantidade: 2 }] },
    { animalId: 2, nomePet: "Xureta", nomeTutor: "Rayane", telefone: "(16)999999999", itens: [{ servicoId: 2, quantidade: 1 }] },
    { animalId: 3, nomePet: "Boby", nomeTutor: "Michele", telefone: "(16)999999999", itens: [{ servicoId: 2, quantidade: 2 }] },
    { animalId: 4, nomePet: "Zara", nomeTutor: "Alessandro", telefone: "(16)99999999", itens: [{ servicoId: 3, quantidade: 1 }] }
];

function buscarAtendimentos(animalId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lista = atendimentos.filter(a => a.animalId === animalId);
            if (lista.length > 0) {
                resolve(lista);
            } else {
                reject(new Error("Nenhum atendimento encontrado para este animal."));
            }
        }, 500);
    });
}

module.exports = { buscarAtendimentos, atendimentos };