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
        title: 'MULTİSHOP',
        description: 'Sıfırdan geliştirdiğim mikroservis mimarisiyle yapılandırılmış bir E-ticaret platformu. Kullanıcı güvenliği için JWT ve Identity teknolojilerini entegre ettim. Projede veri yönetimi için MS SQL, MongoDB, Redis, PostgreSQL ve Elasticsearch gibi çeşitli veri tabanlarını kullandım. API yönetimi için Ocelot ile mikroservisler arası iletişimi sağladım ve RabbitMQ ile mesajlaşma süreçlerini yönettim. Docker ve Dapper kullanarak sistemin ölçeklenebilirliğini ve verimliliğini artırdım. Mikroservisler sayesinde ürün yönetimi, sipariş işlemleri ve kullanıcı etkileşimlerini bağımsız olarak yöneterek daha verimli ve esnek bir çözüm sundum.(Proje Solid prensipleri ve OOP standartlarına dikkat edilerek geliştirilmiştir.) ',
        images: ['https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg', 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'],
        link: 'https://github.com/abdks/MultiShop'
      },
      {
        id: 2,
        title: 'BİTTEX',
        description: 'Anlık kripto para değerlerini gösteren bir board geliştirdim. Veri kaynağı olarak BtcTürk APIsini kullandım ve verileri her saniyede güncelleyerek yüksek doğruluk sağladım. Anlık veri gösterimi için SignalR teknolojisini kullandım ve kullanıcı arayüzünü geliştirerek deneyimi iyileştirdim. ',
        images: ['assets/projeler/proje2.jpg', 'assets/projeler/proje2_2.jpg'],
        link: 'https://github.com/abdks/Bittex'
      },
      {
        id: 3,
        title: 'PORTFOLYO',
        description: 'Angular ile geliştirdiğim ve .NET ile API kısmını yazdığım, Azure servislerini entegre ettiğim bir portfolyo projesi. Frontend tarafını Angular ile oluşturup, backend kısmında .NET kullanarak API ve veritabanı işlemlerini gerçekleştirdim. Azure servislerini kullanarak, verilerin güvenli bir şekilde yönetilmesini ve projenin bulut ortamında verimli bir şekilde çalışmasını sağladım. ',
        images: ['assets/projeler/proje3.jpg', 'assets/projeler/proje3_2.jpg'],
        link: 'https://github.com/abdks/Portfolio'
      },
      {
        id: 4,
        title: 'Traversal',
        description: 'Bu proje bir tur acentesinin ihtiyacı olan her şeyi içeren bir webprojesidir. İçinde tur rezervasyonlarından excel raporlarına,SignalR ile anlık grafik verilerine kadar bir çok teknolojiiçermektedir.',
        images: ['assets/projeler/proje4.jpg', 'assets/projeler/proje4_2.jpg'],
        link: 'https://github.com/abdks/Traversal'
      },
      {
        id: 5,
        title: 'Carbook',
        description: 'Araç kiralama uygulaması yapmayı amaçlanmıştır. Tasarım olarakGetir Araça benzetilmiştir. Veri tabanı olarak MS SQLkullanılmıştır. Kullanılan Teknolojiler: N katmanlı mimari, MSSQL,Identity, Validation, pagedlist.',
        images: ['assets/projeler/proje5.jpg', 'assets/projeler/proje5_2.jpg'],
        link: 'https://github.com/abdks/MyAcademyCarBook'
      },
      {
        id: 6,
        title: 'Big Data Projesi',
        description: 'Bu projede yaklaşık 650 bin satır içeren Afad deprem verileriniDapper orm’i yoluyla projemizde listeletip bu veriler hakkındagrafikler oluşturulmuştur.',
        images: ['assets/projeler/proje6.jpg', 'assets/projeler/proje6_2.jpg'],
        link: 'https://github.com/abdks/DapperProject'
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
