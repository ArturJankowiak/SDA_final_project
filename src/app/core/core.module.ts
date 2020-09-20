import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [NavigationBarComponent, ContainerComponent, FooterComponent],
    exports: [NavigationBarComponent, ContainerComponent, FooterComponent],
    imports: [CommonModule, RouterModule]
  })
  export class CoreModule {}