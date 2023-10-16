export interface CivilStatusFormModel {
    nombres: string;
    apellidos: string;
    fumas: boolean;
    actualmentePracticasLectura: boolean;
    librosLeidosUltimosTresMeses?: string[];
    estadoCivil?: string;
}