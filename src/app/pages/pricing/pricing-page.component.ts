import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'page-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit{
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID)

  ngOnInit(): void {

    // if(isPlatformBrowser(this.platform)) {
    //   document.title = 'Pricing Page';
    // }

    this.title.setTitle('Pricing Page');
    this.meta.updateTag({name: 'description', content: 'Este es mi pricing page'});
    this.meta.updateTag({name: 'og:title', content: 'Pricing Page'});
    this.meta.updateTag({name: 'keyboards', content: 'Hola,Mundo;Manuel,Sánchez,Curso,Angular,PRO'});

  }


 }
