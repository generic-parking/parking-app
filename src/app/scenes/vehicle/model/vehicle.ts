export class Proprietario {
  id: number;
}
export class Vehicle {
  cor: string;
  modelo: string;
  placa: string;
  proprietario: Proprietario = new Proprietario();
}
