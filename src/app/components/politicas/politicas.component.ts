import { Component, OnInit } from '@angular/core';

interface politicas{ title: string;
  img: string;
  url: string;
}


@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.scss']
})
export class PoliticasComponent implements OnInit {
  politicas: politicas[] = [
    { title: 'Reglamento del fondo de solidaridad', img: 'assets/img/politica1.jpg' ,url: 'assets/img/POLITICA1.pdf'},
    { title: 'Reglamento de auxilio educativo', img: 'assets/img/politica2.jpg' ,url: 'assets/img/POLITICA2.pdf' },
    { title: 'Reglamento de aportes sociales', img: 'assets/img/politica3.jpg' ,url: 'assets/img/POLITICA3.pdf' },
    { title: 'Política y procedimiento de protección de datos personales', img: 'assets/img/politica4.jpg' ,url: 'assets/img/POLITICA4.pdf' },
    { title: 'Política integral', img: 'assets/img/politica5.jpg' ,url: 'assets/img/POLITICA5.pdf' },
    { title: 'Política de no alcohol y drogas', img: 'assets/img/politica6.jpg' ,url: 'assets/img/POLITICA6.pdf' },
    { title: 'Código de buen gobierno', img: 'assets/img/politica7.jpg' ,url: 'assets/img/POLITICA7.pdf' },
  ];

  abrirPDF(url: string): void {
    window.open(url, '_blank');
  }


  constructor() {}

  ngOnInit(): void {}
}