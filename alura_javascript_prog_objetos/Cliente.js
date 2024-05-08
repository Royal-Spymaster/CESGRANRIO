export class Cliente
{
    nome;
    _cpf;

    get cpf()
    {
        this._cpf;
    }

    constructor(cpf,nome)
    {
        this.nome = nome;
        this._cpf = cpf;
    }
}