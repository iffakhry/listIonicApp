import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
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

  itemSelected(item: any) {
    console.log("Selected Item", item.name);
    console.log("Selected Item 1", item.deskripsi);
  }

}
