import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './core/navigation-bar/navigation-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './core/footer/footer.component';
import { ContainerComponent } from './core/container/container.component';
import { ReadingJsonFilesComponent } from './core/reading-json-files/reading-json-files.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    ContainerComponent,
    ReadingJsonFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
