import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { __propKey } from 'tslib';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  url = 'https://pokeapi.co/api/v2/pokemon/';
  list: any[] = [];
  pokemonnumberlist: any[] = [4, 1, 7, 95, 25, 18, 92]
  isLoading = false;


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getData()
    
  }

  getData(){
    for (let q = 0; q < this.pokemonnumberlist.length; q++) {
      this.isLoading = true
      this.http.get<any>(this.url + this.pokemonnumberlist[q])
        .pipe(take(1))
        .subscribe(pokeData => {
          this.list = pokeData
          this.isLoading = false;
          console.log(this.list)
        });
        this.list.sort((a: any, b: any) => a.name > b.name ? 1 : -1);
    }
  }

  filterItems(event: any) {
    this.isLoading = true;
    const text = event.srcElement.value.trim().toLowerCase();
    this.list = text
      ? this.list.filter(item => item.name.toLowerCase().includes(text))
      : [...this.list];
    this.isLoading = false;
  }

}
