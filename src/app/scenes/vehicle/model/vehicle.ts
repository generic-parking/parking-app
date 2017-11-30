export class Proprietario {
  id: number;
}
export class Vehicle {
  id: number;
  cor: string;
  modelo: string;
  placa: string;
  proprietario: Proprietario = new Proprietario();
}
