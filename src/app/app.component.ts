import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano';

  ejecutarAudio(numero: Number): void{
    const audio = new Audio();
    // audio.src = '../assets/sonidos/note' + numero + '.wav';
    audio.src = `../assets/sonidos/note${numero}.wav`;
    audio.load();
    audio.play();
  }
}


