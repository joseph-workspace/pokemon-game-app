import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  url = 'https://pokeapi.co/api/v2/pokemon?limit=1000';
  list: any[] = [];
  filteredList: any[] = [];
  isLoading = false;
  avatarButtonStyle = {
    'height': '60vw',
    'width': '60vw',
    'max-height': '200px',
    'max-width': '200px',
    'margin': '0 auto',
    'background-color': 'white',
    'border-radius': '50%',
    'box-shadow': '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3)'
  };

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.http.get<any>(this.url)
      .pipe(take(1))
      .subscribe(pokeData => {
        this.list = pokeData.results;
        this.list.sort((a: any, b: any) => a.name > b.name ? 1 : -1);
        this.filteredList = [...this.list];
        this.isLoading = false;
        console.log(this.filteredList)
      });
      
  }

  filterItems(event: any) {
    this.isLoading = true;
    const text = event.srcElement.value.trim().toLowerCase();
    this.filteredList = text
      ? this.list.filter(item => item.name.toLowerCase().includes(text))
      : [...this.list];
    this.isLoading = false;
  }

}
