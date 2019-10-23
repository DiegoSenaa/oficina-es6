export function arrysFunction() {
    const arr = [5, 10, 8, 4, 11, 105];

    /**
     * Map: Percorre todo o vetor, executando a função passada como parâmetro, gerando um novo vetor.
     * item é o conteúdo da posição
     * index é a posição no array
     */
    console.log('Exemplo com map:');
    const newMap = arr.map((item, index) => `item ${index} é ${(item % 2 === 0) ? 'Par' : 'Ímpar'}`);
    console.log(newMap);
    var a = [].map.call('Hello World', x => x );
    console.log(a);

    /**
     * reduce: Consumir todo o vertor e transformar em uma única informação.
     * Ele percorre todo arry e executar a função de callback, onde:
     * previuosValue: é o valor gerado na iteração anterior
     * currentValue: é o valor na iteração atual
     */
    console.log('Exemplo com reduce:');
    const sum = arr.reduce(function(previuosValue, currentValue) {
    return previuosValue + currentValue;
    });
    console.log(sum);
    // Pegando a maior palavra usando reduce
    var teste = 'O burro nunca aprende o inteligente aprende com sua própria experiência e o sábio aprende com a experiência dos outros';
    var resultado = teste.split(' ').reduce((previuosCount,current) => previuosCount > current.length ? previuosCount : current.length);
    console.log(resultado);
    // Pegando o número total de palavras
    resultado = {};
    teste.split(' ').reduce(function(obj, current){
        return resultado[current] ? resultado[current]++ : resultado[current] = 1;
    });
    console.log(resultado);

    /**
     * filter: filtra o array e retorna um novo array
     * item: o item atual a iteração
     */
    // retornar as palavras que o total de letras é um número par
    resultado = teste.split(' ').filter(function(item) {
        return item.length % 2 == 0 ? true : false;
    });
    console.log(resultado);

    // retornar se existe a palavra experiência
    resultado = teste.split(' ').find(function(item) {
        return item.toLocaleLowerCase() === 'experiência';
    });
    console.log(resultado);

    const lista = [
        {
            id: 1,
            nome: 'Monza'
        },
        {
            id: 2,
            nome: 'Passat'
        },
        {
            id: 3,
            nome: 'Brasilia'
        },
    ];
    // retornar se existe um objeto com código 2
    resultado = lista.find(function(item) {
        return item.id == 2;
    });
    console.log(resultado);
}