import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// export class HeaderComponent {

// }
export class HeaderComponent  {
  inputText: string = 'Buscar en Invorg';

  clearText() {
    if (this.inputText === 'Buscar en Invorg...') {
      this.inputText = '';
    }
  }

  restoreText() {
    if (this.inputText === '') {
      this.inputText = 'Buscar en Invorg...';
    }
  }
}