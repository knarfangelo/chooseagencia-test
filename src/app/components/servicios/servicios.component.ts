import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { isPlatformBrowser } from '@angular/common';
import { Swiper, SwiperOptions } from 'swiper/types';
import { serviciosJSON } from './serviciosDB/serviciosJSON';
import { IServicios } from './serviciosDB/IServicios';
register();
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    CommonModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <header>
        <swiper-container init=false>
          @for (item of swiperObjects; track $index) {
            <swiper-slide>
              <div class="style-slide">
                <h2>{{item.title}}</h2>
                <h4>{{item.subtitle}}</h4>
                <button>Más info</button>
                <img [src]="item.img" alt="">
              </div>
            </swiper-slide>
          }
        </swiper-container>
    </header>
  `,
  styleUrl: './servicios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosComponent implements OnInit {

  swiperObjects: IServicios[] = serviciosJSON;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const swiperEl: SwiperContainer | null = document.querySelector('.swiper-container');

      if (swiperEl) {
        const swiperParams: SwiperOptions = {
          slidesPerView: 1,
          spaceBetween: 20,
          breakpoints: {
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
          on: {
            init() {
              // Swiper initialized callback
            },
          },
        };

        Object.assign(swiperEl, swiperParams);
        new Swiper(swiperEl, swiperParams);
      }
    }
  }
}
