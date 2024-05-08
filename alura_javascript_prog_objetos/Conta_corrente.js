import { Cliente } from "./Cliente.js";

export class Conta_corrente
{
    static numero_contas = 0
    agencia;
    _cliente;
    _saldo = 0;
    
    // Assessores
    set cliente(novoValor)
    {
        if (novoValor instanceof Cliente)
            {
                this._cliente = novoValor;
            }
    }

    get cliente()
    {
        this._cliente;
    }

    get saldo()
    {
        return this._saldo;
    } 

// Métodos
    saque(valor_saque)
    {
        if (this._saldo < valor_saque) return;
        this._saldo -= valor_saque;
    }

    deposito(valor_deposito,)
    {
        if (valor_deposito <= 0) return;
        this._saldo += valor_deposito;
    }

    transferir(valor_transferido, conta_alvo)
    {
        const valor_sacado = this.saque(valor_transferido);
        conta_alvo.deposito(valor_sacado);
    }

    constructor(agencia, cliente, saldo)
    {
        this.agencia = agencia;
        this.cliente = cliente;
        Conta_corrente.numero_contas++
    }
}