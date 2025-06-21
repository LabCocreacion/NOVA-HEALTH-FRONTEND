import { Component } from '@angular/core';

@Component({
  selector: 'app-form-hoja-radar',
  standalone: false,
  templateUrl: './form-hoja-radar.component.html',
  styleUrl: './form-hoja-radar.component.css'
})
export class FormHojaRadarComponent {
  preguntasInfraestructura: string[] = [
    'Infraestructura',
    'Recurso humano para prestación de servicio',
    'Organización del servicio',
    'Mapa de procesos',
    'Información de satisfacción del cliente',
    'Gestión de quejas y reclamos',
    'Software Ris Pacs'
  ];

  preguntasTalento: string[] = [
    'Recurso humano necesario para el servicio según la demanda',
    'Recurso humano necesario para la gestión de los equipos',
    'Manual de funciones',
    'Formación básica académica',
    'Programas de reentrenamiento a partir del seguimiento a resultados',
    'Educación continua'
  ];

  preguntasTecnicos: string[] = [
    'Política de compra, uso y desuso de equipos',
    'Implementación de protocolos de control de la calidad de equipos',
    'Verificación rutinaria del control de calidad',
    'Acceso a instrumentos apropiados para el control de la calidad',
    'Dosimetría ocupacional',
    'Dosimetría de las exposiciones médicas',
    'Registro de las dosis de radiación en el informe radiológico y número de imágenes',
    'Niveles típicos de dosis',
    'Control de las desviaciones de dosis'
  ];

  preguntasClinicos: string[] = [
    'Identificación del paciente',
    'Invitación y agendamiento',
    'Entrega de resultados',
    'Comunicación de resultados clínicos',
    'Seguimiento a la canalización para el tratamiento clínico',
    'Preservación de historia e imágenes',
    'Protocolo de atención',
    'Protocolo de toma de estudios',
    'Control de las exposiciones médicas',
    'Gestión de eventos de seguridad del paciente',
    'Tiempos de oportunidad de atención',
    'Indicador de tasa de rechazo de imágenes',
    'Proporción de Birads',
    'Indicador de calidad de imagen clínica',
    'Control de rellamados',
    'Reporte de número de biopsias y sus resultados'
  ];

  preguntasSeguimiento: string[] = [
    'Mecanismos de monitoreo: estrategias internas y externas',
    'Cuenta con proceso de aplicación de Paciente trazador Sistema trazador',
    'Cuenta con proceso de aplicación de Implementación de auditoría',
    'Informe de cumplimiento de indicadores y Planes de mejoramiento'
  ];

  respuestasInfraestructura: string[] = Array(this.preguntasInfraestructura.length).fill('');
  respuestasTalento: string[] = Array(this.preguntasTalento.length).fill('');
  respuestasTecnicos: string[] = Array(this.preguntasTecnicos.length).fill('');
  respuestasClinicos: string[] = Array(this.preguntasClinicos.length).fill('');
  respuestasSeguimiento: string[] = Array(this.preguntasSeguimiento.length).fill('');

  grupos = [
    { nombre: 'Infraestructura', icon: 'fas fa-building' },
    { nombre: 'Talento humano', icon: 'fas fa-users' },
    { nombre: 'Procedimientos técnicos', icon: 'fas fa-tools' },
    { nombre: 'Procedimientos clínicos', icon: 'fas fa-stethoscope' },
    { nombre: 'Seguimiento y monitoreo', icon: 'fas fa-chart-line' }
  ];
  grupoActivo = 0;
}
