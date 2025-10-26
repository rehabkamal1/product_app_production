// import { Component, inject } from '@angular/core';
// import { RouterLink, RouterLinkActive } from '@angular/router';
// import { CounterService} from '../services/counter.service';
// import { Observable } from 'rxjs';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-header',
//   imports: [RouterLink , RouterLinkActive , CommonModule],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent {
//   cartCount: number = 0; 

//   constructor(private counterService: CounterService) {}

//   ngOnInit() {
//     this.counterService.cartCount$.subscribe((count: number) => {
//       this.cartCount = count;
//     });
//   }
// }


import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CounterService} from '../services/counter.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [RouterLink , RouterLinkActive , CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartCount: number = 0; 

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.cartCount$.subscribe((count: number) => {
      this.cartCount = count;
    });
  }
}
