class Funcionarios {
    nome: string;
    salario: number
    
    constructor(nome: string, salario:number){
        this.nome = nome,
        this.salario = salario
    }

    calcularSalario(): number{
        return this.salario
    }

}

class Programador extends Funcionarios {


    constructor(nome: string, salario: number){
        super(nome, salario)
    }

    calcularSalario(): number {
        return super.calcularSalario() + 4500
    }

}

class Barbeiro  extends Funcionarios {

    constructor(nome: string, salario: number){
        super(nome, salario)
    }

    calcularSalario(): number {
        return super.calcularSalario() + 2000
    }

}

class Medico  extends Funcionarios{

    constructor(nome: string, salario: number){
        super(nome, salario)
    }

    calcularSalario(): number {
        return super.calcularSalario() + 18000
    }

}

const dev = new Programador ("Thiago", 5000)
const barbeiro = new Barbeiro ("Isac", 3000)
const medico = new Medico ("Ricardo", 10000)

console.log("nome:", dev.nome)
console.log("Salario:",dev.salario)

console.log("nome:", barbeiro.nome)
console.log("Salario:",barbeiro.salario)

console.log("nome:", medico.nome)
console.log("Salario:",medico.salario)