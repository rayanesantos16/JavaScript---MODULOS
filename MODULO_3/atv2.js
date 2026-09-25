//=====================================//=========================================//
//#region Atividade 1 - Sistema de aluno
//=====================================//=========================================//

const aluno = {
    nome: "Rayane",
    idade: 17,
    curso: "Análise e Desenvolvimento de Sistemas",
    endereco: {
        cidade: "Santa Rita Do Passa Quatro",
        estado: "SP"
    },
    ativo: true,
    apresentar() {
        console.log(`Aluno: ${this.nome}`);
    }
};

// 1 - Mostrar dados
console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Curso: ${aluno.curso}`);
console.log(`Cidade: ${aluno.endereco.cidade}`);
console.log(`Estado: ${aluno.endereco.estado}`);

// 2 - Alterar a cidade
aluno.endereco.cidade = "Araraquara";

// 3 - Adicionar email
aluno.email = "rayane@email.com";

// 4 - Destructuring
const { curso, endereco: { estado } } = aluno;
console.log(`Curso extraído: ${curso}, Estado extraído: ${estado}`);

// 5 - Cópia com Spread (Deep copy do endereço)
const alunoAtualizado = { ...aluno, endereco: { ...aluno.endereco } };

// 6 - Objeto para JSON
const alunoJSON = JSON.stringify(aluno);
console.log("JSON Aluno:", alunoJSON);

// 7 - JSON para objeto
const alunoObjeto = JSON.parse(alunoJSON);
console.log("Objeto Aluno restaurado:", alunoObjeto);

//#endregion

//=====================================//=========================================//
//#region Atividade 2 - Usuario
//=====================================//=========================================//

const usuario = {
    id: 1,
    nome: "Rayane Santos",
    email: "rayane@email.com",
    idade: 17,
    endereco: {
        cidade: "Santa Rita Do Passa Quatro",
        estado: "SP",
        numero: 514
    }
};

// 1 - Acessar o nome
const nomeUsuario = usuario.nome;
console.log(`Nome do Usuário: ${nomeUsuario}`);

// 2 - Acessar a cidade
const cidadeUsuario = usuario.endereco.cidade;
console.log(`Cidade do Usuário: ${cidadeUsuario}`);

// 3 - Alterar a idade
usuario.idade = 26;

// 4 - Adicionar telefone
usuario.telefone = "(11) 99999-9999";

// 6 - Criar uma cópia do usuário (Feito ANTES do delete para manter o histórico se necessário)
const copiaUsuario = { ...usuario, endereco: { ...usuario.endereco } };

// 5 - Remover o email do objeto original
delete usuario.email;

// 7 - Extrair somente nome e cidade (com nicknames para evitar conflitos de escopo)
const { nome: uNome, endereco: { cidade: uCidade } } = usuario;
console.log(`Extraído - Nome: ${uNome}, Cidade: ${uCidade}`);

// 8 - Transformar em JSON
const usuarioJSON = JSON.stringify(usuario);
console.log("JSON Usuário:", usuarioJSON);

// 9 - Transformar JSON em objeto
const usuarioObjeto = JSON.parse(usuarioJSON);
console.log("Objeto Usuário restaurado:", usuarioObjeto);

//#endregion
