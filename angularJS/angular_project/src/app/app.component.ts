import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_project';
  topic = '1 tahun'
  jumlah = 10;
  harga = 45000;
  nama ={namaDepan : "wahyu", namaBelakang: "wahyuni", umur: 25}
  nomor= [1,2,3,4,5,6,7,8,9]
}
