import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
import { HeaderLoginComponent } from './shared/header/header-login/header-login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterLoginComponent } from './shared/footer/footer-login/footer-login.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { provideLottieOptions } from 'ngx-lottie';
// Importing animations components
import { MamographyComponent } from './shared/animations/mamography/mamography.component';
import { PatientXRayComponent } from './shared/animations/patient-x-ray/patient-x-ray.component';
import { DoctorComponent } from './shared/animations/doctor/doctor.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NosotrosComponent,
        HeaderLoginComponent,
        NavbarComponent,
        FooterLoginComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        GoogleMapsModule,
        UserModule,
        BrowserAnimationsModule,
        IndexModule,
        CarouselModule.forRoot(),
        ReactiveFormsModule,
        FullCalendarModule,
        FormsModule,
        MamographyComponent,
        PatientXRayComponent,
        DoctorComponent], 
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideLottieOptions({
            player: () => import('lottie-web'),
        }),
    ] })
export class AppModule { }
