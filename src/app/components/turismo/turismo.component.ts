import { Component, OnInit } from '@angular/core';

interface Image {
  url: string;
  title: string;
}

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.component.html',
  styleUrls: ['./turismo.component.scss']
})
export class TurismoComponent implements OnInit {

  images: Image[] = [
    { url: 'assets/img/turismo1.jpg', title: 'Avistamiento de Aves' },
    { url: 'assets/img/turismo2.jpg', title: 'Circuito Aéreo' },
    { url: 'assets/img/turismo3.jpg', title: 'Tobía Sky' },
    { url: 'assets/img/turismo4.jpg', title: 'Ruta del Café' },
    { url: 'assets/img/turismo5.jpg', title: 'Escalada en Montaña' },
    { url: 'assets/img/turismo6.jpg', title: 'Circuito Aéreo' },
    { url: 'assets/img/turismo7.jpg', title: 'Tobía Sky' },
    { url: 'assets/img/turismo8.jpg', title: 'Ruta del Café' },
    { url: 'assets/img/turismo9.jpg', title: 'Escalada en Montaña' },
    { url: 'assets/img/turismo10.jpg', title: 'Circuito Aéreo' },
    { url: 'assets/img/turismo11.jpg', title: 'Tobía Sky' },
    { url: 'assets/img/turismo12.jpg', title: 'Ruta del Café' },
    { url: 'assets/img/turismo13.jpg', title: 'Escalada en Montaña' },
    { url: 'assets/img/turismo14.jpg', title: 'Circuito Aéreo' },
    { url: 'assets/img/turismo15.jpg', title: 'Tobía Sky' },
    { url: 'assets/img/turismo16.jpg', title: 'Ruta del Café' },
    { url: 'assets/img/turismo17.jpg', title: 'Escalada en Montaña' },
    { url: 'assets/img/turismo18.jpg', title: 'Circuito Aéreo' },
    { url: 'assets/img/turismo19.jpg', title: 'Tobía Sky' },
    { url: 'assets/img/turismo20.jpg', title: 'Ruta del Café' },
    { url: 'assets/img/turismo21.jpg', title: 'Escalada en Montaña' },
    { url: 'assets/img/turismo22.jpg', title: 'Circuito Aéreo' },
    { url: 'assets/img/23.jpg', title: 'Tobía Sky' },
    { url: 'assets/img/turismo24.jpg', title: 'Ruta del Café' },
  ]; 

  currentImageIndex: number = 0;
  isModalOpen: boolean = false;

  openModal(index: number): void {
    this.currentImageIndex = index;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
  ngOnInit(): void {
      
  }
}
