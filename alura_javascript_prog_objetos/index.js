import {Cliente} from "./Cliente.js"
import {Conta_corrente} from "./Conta_corrente.js"

const cliente_ricardo = new Cliente(11122233309, "Ricardo");
const cliente_alice = new Cliente(13222233309, "Alice");

const conta_ricardo = new Conta_corrente(1001, cliente_ricardo);
const conta_alice = new Conta_corrente(1001, cliente_alice);

conta_ricardo.deposito(500);

let valor = 200;
conta_ricardo.transferir(valor, conta_alice);


console.log(conta_ricardo);

console.log(Conta_corrente.numero_contas);