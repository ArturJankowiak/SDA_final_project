import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyComponentParentComponent } from './core/my-component-parent/my-component-parent.component';
import { MyComponentChildComponent } from './core/my-component-child/my-component-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentParentComponent,
    MyComponentChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
