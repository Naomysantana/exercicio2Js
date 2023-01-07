/*

1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor, e um gasto médio de combustível por kilometro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível, nos dê o valor
gasto em reais para realizar este percurso.

*/

class Carro{
    marca;
    cor;
    GastoCombustivelPorKm;

    constructor(marca, cor, GastoCombustivelPorKm){

        this.marca = marca;
        this.cor = cor;
        this.GastoCombustivelPorKm = GastoCombustivelPorKm;
    }
    calcularGastoDePercurso(distanciaEmKm,precoCombustivel){

        return distanciaEmKm * this.GastoCombustivelPorKm * precoCombustivel;
    }
}
const hb20 = new Carro('honda', 'bege', 1/13)

const kicks = new Carro('nissan', 'preto', 1/12)


console.log(hb20.calcularGastoDePercurso(70,6));
console.log(kicks.calcularGastoDePercurso(70,6));