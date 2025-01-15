import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './pages/user/user.module';
import { HeaderComponent } from './shared/header/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { IndexModule } from './pages/index/index.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IndexModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    FullCalendarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
