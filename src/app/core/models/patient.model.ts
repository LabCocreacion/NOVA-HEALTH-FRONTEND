export interface Patient {
    id: number;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: Date;
    edad: number;
    tipo_documento: string;
    num_identificacion: string;
    eapb: string;
    regimen: string;
    // telefono: string;
}