import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
        HolaMundoPruebaFinal
    </header>
  `,
  styleUrl: './servicios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosComponent implements OnInit {



  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
   
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      register();
    }


  }
  
  
}
