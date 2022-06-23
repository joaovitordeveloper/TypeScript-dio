function soma(a: number, b: number){
    return a + b;
}

console.log(soma(1, 2));

//types & interfaces
interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
   domestico: true,
   nome: 'cachorro',
   porte: 'medio',
   tipo: 'terrestre'
}

const felino: IFelino = {
    nome: 'Leao',
    tipo:  'terrestre',
    visaoNoturna: true,
    domestico: false
}

//inputs

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    console.log('Digitei');
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});

//generic types

function adicionaApendiceALista<T>(array: any[], valor: T){
    return array.map(item => item + valor);
}

console.log(adicionaApendiceALista([1, 2, 3], 1));

interface IUsuario {
    id: string;
    email: string;
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';//botando o ? transforma o intem em um dado opcional
}

function redirecione(usuario: IUsuario){

    if(usuario.cargo){
        //redirecionar(usario.cargo);
    }

    //redirecionar para a area do usuario

}