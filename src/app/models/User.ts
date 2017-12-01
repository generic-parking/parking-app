export class User {
    public id: number;
    public usuario: string;
    public nome: string;
    public celular: string;
    public ramal: string;
    public andar: number;
    public posicao: string;
    public gravatar: string;
    public dataCriacao: number;
    public dataLogin: number;
    public participaSorteio: boolean;
    public dataContemplacao: number;
    public vagaGerencial: boolean;
    public numeroVaga: number;

    constructor() {
        
        this.andar = 1;
        this.participaSorteio = false;
    }
}
