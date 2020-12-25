import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isCorSelected = false;
  isPopSelected = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('Window', window.location.pathname);
    if (window.location.pathname.includes('corona')) {
      this.isCorSelected = true;
    }
  }

  btnClicked(selectedBtn: string) {
    if (selectedBtn === 'corona') {
      this.isCorSelected = true;
      this.isPopSelected = false;
      this.router.navigateByUrl('corona');
    } else {
      this.isCorSelected = false;
      this.isPopSelected = true;
    }
  }
}
