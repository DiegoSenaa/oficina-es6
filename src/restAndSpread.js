export function restAndSpreadFunction() {
    const arr = [5, 10, 8, 4, 11, 105];
    const usuario = {
        nome: "Adir",
        idade: 41,
        endereco : {
            cidade: 'Salvador',
            estado: 'BA',
        }
    }
    /**
    * Rest e Spread
    */
    //Rest Operator
    console.log('Rest and Spread');

    function mostrarResto({nome, ...resto}) {
        return `Rest: ${JSON.stringify(resto)}`;
    }
    console.log(mostrarResto(usuario));
    const [ x, y, ...z ] = arr;
    console.log(z);

    //Spread Operator
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arrx = [...arr1, ...arr2, 7, 8, 9, 10, 11, 12, 13, 14];
    console.log(arrx);
}