export interface Instituto {
    id: number;
    nombre: string;
    nombre_ips: string;
    codigo_ips: string;
    direccion: string;
    tipo_servicio: string;
    caracter_juridico: string;
    telefono_gerencia: string;
    telefono_enlace_tecnico: string;
    zona: string;
    fecha_creacion: Date;
    creation_user: string;
    latitud: number;
    longitud: number;
}