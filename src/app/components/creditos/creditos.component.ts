import { Component, OnInit } from '@angular/core';

interface Credito {
  titulo: string;
  descripcion: string;
  imagen: string;
  url: string;
}

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.scss']
})
export class CreditosComponent implements OnInit {
  creditos: Credito[] = [
    {
      titulo: 'Crédito para Arreglos Locativos',
      descripcion: 'Crédito cuya finalidad será realizar arreglos locativos y/o mejoras a su casa o vehículo.',
      imagen: 'assets/img/credito1.jpg',
      url: 'https://srv5.financialsoftware.com.co/OficinaCoonadoc/#/home/'
    },
    {
      titulo: 'Crédito de Consumo',
      descripcion: 'Destinado a satisfacer múltiples necesidades del asociado y su grupo familiar.',
      imagen: 'assets/img/credito2.jpg',
      url: 'https://srv5.financialsoftware.com.co/OficinaCoonadoc/#/home/'
    },
    {
      titulo: 'Crédito Educativo',
      descripcion: 'Para financiar estudios superiores del asociado o familiares.',
      imagen: 'assets/img/credito3.jpg',
      url: 'https://srv5.financialsoftware.com.co/OficinaCoonadoc/#/home/'
    },
    {
      titulo: 'Crédito de Compra de Cartera',
      descripcion: 'Mejorar la liquidez consolidando sus obligaciones financieras.',
      imagen: 'assets/img/credito4.jpg',
      url: 'https://srv5.financialsoftware.com.co/OficinaCoonadoc/#/home/'
    },
    {
      titulo: 'Crédito de Viajes',
      descripcion: 'Para cumplir el sueño de viajar al destino que elijas.',
      imagen: 'assets/img/credito5.jpg',
      url: 'https://srv5.financialsoftware.com.co/OficinaCoonadoc/#/home/'
    },
    {
      titulo: 'Crédito de Emergencia',
      descripcion: 'Apoyo financiero ante situaciones imprevistas.',
      imagen: 'assets/img/credito6.jpg',
      url: 'https://srv5.financialsoftware.com.co/OficinaCoonadoc/#/home/'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}