import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Configuration } from '../configuration';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileUrl: string = '';  // API'den gelen profileUrl varsa buraya yerleştirilecek
  userName: string = '';
  userJob: string = '';
  userLocation: string = '';
  userEmail: string = '';
  userDateOfBirth: string = '';
  userAddress: string = '';
  userPhone: string = '';

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getProfileData();
  }

  getProfileData(): void {
    this.profileService.getProfile().subscribe(data => {
      // API'den gelen veri ile Angular bileşenindeki değişkenleri eşleştiriyoruz
      this.profileUrl = Configuration.profileUrl || '';  // Eğer profileUrl varsa alıyoruz
      this.userName = `${data.name} ${data.surname}`;  // API'den gelen isim ve soyadı birleştiriyoruz
      this.userJob = data.title;
      this.userLocation = `${data.city}, ${data.district}`;  // Şehir ve ilçe bilgilerini birleştiriyoruz
      this.userEmail = data.mail;
      this.userDateOfBirth = data.birth;
      // userAddress ve userPhone bilgisi API'de olmadığı için boş bırakılabilir
      this.userAddress = '';  // API'den gelmediği için boş bırakıyoruz
      this.userPhone = '';  // API'den gelmediği için boş bırakıyoruz
    }, error => {
      console.error('Veri alma hatası:', error);
    });
  }
}

