import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent {
  @Input() public parentData:any;

@Output() public childEvent = new EventEmitter()
sendEvent(){
  this.childEvent.emit("From Child Component")
}

public name = ""
public url = window.location.href
public ID = 'Idelement'
public isDisabled = true
getUser(){
  return "halo " + this.name
} 
public success = 'textgreen'
public error = 'textred'
public bold = 'textbold'

//!kondisi 
public isError = true
public isSuccess = true
public isBold = true

public textStyle ={
  color : 'blue',
  fontStyle: "italic"
}


//! menentukan class berdasarkan kondisi
public message ={
  'textgreen': !this.isError,
  'textred': this.isError,
  'textbold' : this.isBold
}

//!event binding
public nama = ""
onClick(value: any) {
  console.log(value);
  this.nama = value;
}

//!ngIF
public display = true

//!ngswitch
public buah = 'duku'

//!ngFor
public sayuran = ['sawi','wortel','lobak','bayam','bawang','kubis']

public hewan =[
  {nama:"sapi",jenis:"mamalia",makanan:"rumput"},
  {nama:"buaya",jenis:"reptil",makanan:"daging"},
  {nama:"burung",jenis:"unggas",makanan:"bijian"},
  {nama:"arwana",jenis:"ikan",makanan:"cacing"},
]
public tanaman={
  bunga1:"bunga bangkai",
  bunga2:"bunga melati",
  bunga3:"bunga mawar",
  bunga4:"bunga kamboja"
}
public dataPipes = "kalimat contoh untuk pipes"

public today= new Date
}

