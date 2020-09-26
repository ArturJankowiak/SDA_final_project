import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [NavigationBarComponent, FooterComponent],
    exports: [NavigationBarComponent, FooterComponent],
    imports: [CommonModule, RouterModule]
  })
  export class CoreModule {}