function soma(a: number, b: number){
    return a + b;
}

console.log(soma(1, 2));

//types

//interfaces

interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

console.log(animal.executarRugido(1));

const felino: IFelino = {
    nome: 'Leao',
    tipo:  'terrestre',
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}