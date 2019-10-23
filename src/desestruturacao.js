export function desestruturacaoFunction() {
    const arr = [5, 10, 8, 4, 11, 105];

    /**
     * Desestruturação
     */
    console.log('Desestruturação');
    const usuario = {
        nome: "Adir",
        idade: 41,
        endereco : {
            cidade: 'Salvador',
            estado: 'BA',
        }
    }
    const {nome, idade, endereco: { cidade } } = usuario;
    console.log(`nome: ${nome}, idade: ${idade}, cidade: ${cidade}`);
    function mostrarNome({nome, idade}) {
        return `nome: ${nome}, idade: ${idade}`;
    }
    console.log(mostrarNome(usuario));
}