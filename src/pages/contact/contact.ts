import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items: any[];

  constructor(public navCtrl: NavController) {
    this.items = [
      {
        'name':'Pokémon Yellow',
        'deskripsi':'kuning',
        'time':'11.00'
      },
      {
        'name':'Super Metroid',
        'deskripsi':'hijau', 
        'time':'12.00'
      },
      {
        'name':'Mega Man X',
        'deskripsi':'merah',
        'time':'13.00'
      },
      {
        'name':"super mario",
        'deskripsi':"orange", 
        'time':'14.00'
      }
    ];
  }

}
