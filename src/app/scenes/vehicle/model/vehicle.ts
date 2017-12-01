export class Proprietario {
  id: number;
  andar: number;
  celular: string;
  dataContemplacao: string;
  dataCriacao: string;
  dataLogin: string;
  gravatar: string;
  nome: string;
  numeroVaga: number;
  participaSorteio: boolean;
  posicao: string;
  ramal: number;
  usuario: string;
  vagaGerencial: boolean;
}
export class Vehicle {
  id: number;
  cor: string;
  modelo: string;
  placa: string;
  proprietario: Proprietario = new Proprietario();
}
