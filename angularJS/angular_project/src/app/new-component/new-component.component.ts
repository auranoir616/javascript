import { Component } from '@angular/core';

@Component({
  selector: '[app-new-component]',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent {
public name = "wawan"
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

//! menentukan class berdasarkan kondisi
public message ={
  'textgreen': !this.isError,
  'textred': this.isError,
  'textbold' : this.isBold
}
}
