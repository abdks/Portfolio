import { Component, OnInit } from '@angular/core';
import { Testimonials } from '../configuration';

@Component({
  selector: 'app-Testimonials',
  templateUrl: './Testimonials.component.html',
  styleUrls: ['./Testimonials.component.scss']
})

  export class TestimonialsComponent implements OnInit {

     // Projeler verisi
     _projects: any[] = [
      {
        id: 1,
        title: 'Proje 1',
        description: 'Proje 1 açıklaması burada yer alacakProje 1 açıklaması burada yer alacakProje 1 açıklaması burada yer alacakProje 1 açıklaması burada yer alacakProje 1 açıklaması burada yer alacakProje 1 açıklaması burada yer alacak.',
        images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg', 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'],
        link: 'https://www.proje1.com'
      },
      {
        id: 2,
        title: 'Proje 2',
        description: 'Proje 2 açıklaması burada yer alacaProje 1 açıklaması burada yer alacakProje 1 açıklaması buradaProje 1 açıklaması burada yer alacakProje 1 açıklaması buradaProje 1 açıklaması burada yer alacakProje 1 açıklaması buradak.',
        images: ['assets/projeler/proje2.jpg', 'assets/projeler/proje2_2.jpg'],
        link: 'https://www.proje2.com'
      },
      {
        id: 3,
        title: 'Proje 3',
        description: 'Proje 2 açıklaması burada yer alacaProje 1 açıklaması burada yer alacakProje 1 açıklaması buradaProje 1 açıklaması burada yer alacakProje 1 açıklaması buradaProje 1 açıklaması burada yer alacakProje 1 açıklaması buradak.',
        images: ['assets/projeler/proje3.jpg', 'assets/projeler/proje3_2.jpg'],
        link: 'https://www.proje3.com'
      },
      {
        id: 4,
        title: 'Proje 4',
        description: 'Proje 2 açıklaması burada yer alacaProje 1 açıklaması burada yer alacakProje 1 açıklaması buradaProje 1 açıklaması burada yer alacakProje 1 açıklaması buradaProje 1 açıklaması burada yer alacakProje 1 açıklaması buradak.',
        images: ['assets/projeler/proje4.jpg', 'assets/projeler/proje4_2.jpg'],
        link: 'https://www.proje4.com'
      },
      {
        id: 5,
        title: 'Proje 5',
        description: 'Proje 2 açıklaması burada yer alacaProje 1 açıklaması burada yer alacakProje 1 açıklaması buradaProje 1 açıklaması burada yer alacakProje 1 açıklaması buradaProje 1 açıklaması burada yer alacakProje 1 açıklaması buradak..',
        images: ['assets/projeler/proje5.jpg', 'assets/projeler/proje5_2.jpg'],
        link: 'https://www.proje5.com'
      },
      {
        id: 6,
        title: 'Proje 6',
        description: 'Proje 2 açıklaması burada yer alacaProje 1 açıklaması burada yer alacakProje 1 açıklaması buradaProje 1 açıklaması burada yer alacakProje 1 açıklaması buradaProje 1 açıklaması burada yer alacakProje 1 açıklaması buradak.',
        images: ['assets/projeler/proje6.jpg', 'assets/projeler/proje6_2.jpg'],
        link: 'https://www.proje6.com'
      },
    ];

  popupImages: string[] = [];
  currentImageIndex: number = 0;

  constructor() { }

  ngOnInit(): void {}

  // Popup'ı açan işlev
  openPopup(projectId: number): void {
    const popup = document.getElementById('popup')!;

    // Projeye ait resimleri almak
    const project = this._projects.find(p => p.id === projectId);
    this.popupImages = project?.images || [];
    this.currentImageIndex = 0;

    popup.style.display = 'flex';
  }

  // Popup'ı kapatan işlev
  closePopup(): void {
    const popup = document.getElementById('popup')!;
    popup.style.display = 'none';
  }

  // Resimleri kaydıran işlev
  nextImage(): void {
    if (this.currentImageIndex < this.popupImages.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  prevImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.popupImages.length - 1;
    }
  }
}
