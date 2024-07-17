import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
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
            <swiper-slide>
              <div class="style-slide">
                <h2>HolaMundo</h2>
                <h4>HolaMundo</h4>
                <button>Más info</button>
              </div>
             
            </swiper-slide>
            <swiper-slide>
              <div class="style-slide">
                <h2>HolaMundo</h2>
                <h4>HolaMundo</h4>
                <button>Más info</button>
              </div>
             
            </swiper-slide>
            <swiper-slide>
              <div class="style-slide">
                <h2>HolaMundo</h2>
                <h4>HolaMundo</h4>
                <button>Más info</button>
              </div>
             
            </swiper-slide>
            <swiper-slide>
              <div class="style-slide">
                <h2>HolaMundo</h2>
                <h4>HolaMundo</h4>
                <button>Más info</button>
              </div>
             
            </swiper-slide>
        </swiper-container>
    </header>
  `,
  styleUrl: './servicios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosComponent {



  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  
}
