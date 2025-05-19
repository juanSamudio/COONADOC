import { Component, OnInit } from '@angular/core';

interface Formato {
  title: string;
  description: string;
  img: string;
  url: string;
}

@Component({
  selector: 'app-formatos',
  templateUrl: './formatos.component.html',
  styleUrls: ['./formatos.component.scss']
})
export class FormatosComponent implements OnInit {
  formatos: Formato[] = [
    { title: 'Solicitud de crédito', description: 'Formato solicitud de crédito.', img: 'assets/img/Solicitud_credito.png' ,url: 'assets/img/SOLICITUD DE CRÉDITO.pdf'},
    { title: 'Solicitud de asociación', description: 'Formato solicitud de asociación y actualización de datos.', img: 'assets/img/Solicitud_asociacion.png' ,url: 'assets/img/DATOS.pdf' },
    { title: 'Solicitud auxilio educativo', description: 'Formato solicitud auxilio educativo.', img: 'assets/img/Solicitud_auxilio.png' ,url: 'assets/img/Solicitud auxilio educativo.pdf' },
    { title: 'Registro de novedades', description: 'Formato registro de novedades.', img: 'assets/img/Formato_registro.png' ,url: 'assets/img/REGISTRO DE NOVEDADES.pdf' },
    { title: 'Solicitud de retiro voluntario', description: 'Formato solicitud de retiro voluntario.', img: 'assets/img/Solicitud_retiro.png' ,url: 'assets/img/Solicitud de retiro voluntario.PNG' },
    { title: 'Presentación de familiares', description: 'Formato presentación de familiares.', img: 'assets/img/Presentacion_familiares.png' ,url: 'assets/img/Presentación de familiares.PNG' },
    { title: 'Solicitud auxilio solidaridad', description: 'Formato Solicitud auxilio solidaridad.', img: 'assets/img/auxilio_solidaridad.png' ,url: 'assets/img/SOLICITUD AUXILIO SOLIDARIDAD.pdf' },
    { title: 'Autorización de menores', description: 'Autorización para la asociación de menores  de edad', img: 'assets/img/asociar_menores.png' ,url: 'assets/img/formato_asociación_menores.pdf' },
    { title: 'Ingresos nuevos socios', description: 'Formato de vinculación de nuevos socios.', img: 'assets/img/actualizacion.png' ,url: 'assets/img/actualizacion_datos.pdf' },
    { title: 'Actualización de datos', description: 'Formato de actualización de nuevos socios.', img: 'assets/img/actualizacion1.png' ,url: 'assets/img/actualizacion_datos (1).pdf' },
  ];

  abrirPDF(url: string): void {
    window.open(url, '_blank');
  }


  constructor() {}

  ngOnInit(): void {}
}
