import { MyComponentParentComponent } from './my-component-parent/my-component-parent.component';
import { MyComponentChildComponent } from './my-component-child/my-component-child.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [MyComponentParentComponent,MyComponentChildComponent],
    exports: [MyComponentParentComponent, MyComponentChildComponent],
    imports: [CommonModule, RouterModule]
  })
  export class CoreModule {}