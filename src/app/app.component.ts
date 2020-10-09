import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {

  }
  title = 'File tools';

  goHome() {
    this.router.navigate(['']);
  }

  goToReplacer() {
    this.router.navigate(['/replacer']);
  }


  goToConverter() {
    this.router.navigate(['/converter']);
  }
}
