import { Component } from '@angular/core';

@Component({
  selector: 'app-form-control-calidad',
  standalone: false,
  templateUrl: './form-control-calidad.component.html',
  styleUrl: './form-control-calidad.component.css'
})
export class FormControlCalidadComponent {
  today: string = new Date().toISOString().substring(0, 10);
  preguntas: string[] = [
    '1. ¿La unidad mamográfica es mecánicamente estable?',
    '2. ¿Todas las partes móviles se desplazan y rotan suavemente, sin obstrucciones?',
    '3. ¿Todos los seguros y paradas de emergencia funcionan adecuadamente?',
    '4. ¿El movimiento del conjunto del tubo de RX y receptor de imagen se realiza suavemente sin obstrucciones  y  se  fija  correctamente  en  todas  las  posiciones  para  las  que  está diseñado?',
    '5. ¿Indicadores  de  angulación,  fuerza  de  compresión  y  espesor  comprimido  funcionan correctamente?',
    '6. ¿Movimiento  arriba/abajo  del  conjunto  del  tubo  de  RX  y  receptor  de  imagen  funciona correctamente?',
    '7. ¿La unidad cuenta con protector facial?',
    '8. ¿El ensamble del receptor de imagen está libre de vibraciones durante la exposición?',
    '9. ¿El  casete  CR  se  desliza  suavemente  en  el  receptor  y  es  detenido  de  forma  segura  en alguna orientación?',
    '10. ¿La descompresión automática puede ser reemplazada para mantener la compresión?',
    '11. ¿La compresión puede ser manual o automáticamente liberada en caso de una falla?',
    '12. ¿La escala de compresión de la mama es exacta y reproducible?',
    '13. ¿La paciente y el operador se encuentran protegidos de superficies ásperas, bordes agudos u otros peligros que incluyen peligros eléctricos?',
    '14. ¿El blindaje de radiación para el operador es adecuado?',
    '15. ¿Tablas de factores técnicos, para una operación manual, actualizadas y publicadas?',
    '16. ¿El panel de interruptores, indicadores de luces y medidores trabajan adecuadamente?',
    '17. ¿Fuerza de compresión automática menor a 200 Newtons?',
    '18. ¿Fuerza de compresión manual menor a 300 Newtons?',
    '19. ¿Las imágenes contienen la identificación de la institución, de la paciente, la hora y fecha de la adquisición de la imagen, factores técnicos, etc.?',
    '20. ¿El encabezado DICOM contiene la identificación de la institución,  de la paciente, la hora y fecha de la adquisición de la imagen, factores técnicos, etc.?'
  ];
}
