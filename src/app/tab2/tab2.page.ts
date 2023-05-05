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
  board: any[] = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]
  pokemonnumberlist: any[] = [4, 1, 7, 95, 25, 18, 92, 99]
  isLoading = false;
  allCards: any[] = []
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    for (let q = 0; q < this.pokemonnumberlist.length; q++) {
      this.isLoading = true
      this.http.get<any>(this.url + this.pokemonnumberlist[q])
        .pipe(take(1))
        .subscribe(pokeData => {
          this.list[q] = pokeData
          this.isLoading = false;
          
        });
    }
    this.makeBaord()
  }

  makeBaord() {
    let y = 0
    setTimeout(() => {
      for (let b = 0; b < this.list.length; b++) {
        let x = 0
        while (x != 2) {
          console.log(this.list)
          this.allCards[y] = this.list[b].sprites.front_default
          y++
          x++
        }
      }
      this.shuffleCards()
    }, 1000)
    
  };

  shuffleCards() {
   
    let cardSet = this.allCards

    for (let i = 0; i < cardSet.length; i++) {

      let j = Math.floor(Math.random() * cardSet.length)
      //swap 
      let temp = cardSet[i]
      cardSet[i] = cardSet[j]
      cardSet[j] = temp
    }
    this.startGame()
  }

  startGame(){
    let cards16 = 0
    for(let rowX = 0; rowX < 4; rowX++){
      for(let colY = 0; colY < 4; colY++){
          this.board[rowX][colY] = this.allCards[cards16] 
          cards16++
      }
    }
  }

  cardClicked(event: any){
    console.log(document.getElementById(event.target.attributes[2].nodeValue)?.parentElement?.parentElement)
    document.getElementById(event.target.attributes[2].nodeValue)?.parentElement?.parentElement?.classList.toggle("is-flipped")
  }
}
