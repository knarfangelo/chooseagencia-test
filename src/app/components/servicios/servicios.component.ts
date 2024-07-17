import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { isPlatformBrowser } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
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
        <swiper-container>
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
export class ServiciosComponent {


  swiperObjects: IServicios[] = serviciosJSON;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  
}
