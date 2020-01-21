import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LogoffButtonComponent } from './logoff-button/logoff-button.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { AddCourseButtonComponent } from './add-course-button/add-course-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { LoadMoreComponent } from './load-more/load-more.component';
import { CourseHighlightDirective } from './course-highlight.directive';
import { DurationPipe } from './duration.pipe';
import { ArrayOrderPipe } from './order.pipe';
import { SearchFilterPipe } from './search-filter.pipe';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginModule } from './login/login.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TokenInterceptor } from './token.interceptor';
import { OverlayComponent } from './overlay/overlay.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './login.reducer';
import { coursesReducer } from './courses.reducer';
import { addCourseReducer } from './add-course.reducer';
import { CourseDateComponent } from './course-date/course-date.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


const appRoutes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent},
  { path: 'courses', component: HomePageComponent, canActivate: [AuthGuard]},
  { path: 'courses/new', component: AddCourseComponent, canActivate: [AuthGuard]},
  { path: 'courses/:id', component: AddCourseComponent, canActivate: [AuthGuard]},
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    CoursesListComponent,
    CourseItemComponent,
    LogoComponent,
    FooterComponent,
    LoginButtonComponent,
    LogoffButtonComponent,
    SearchSectionComponent,
    AddCourseButtonComponent,
    HomePageComponent,
    LoadMoreComponent,
    CourseHighlightDirective,
    DurationPipe,
    ArrayOrderPipe,
    SearchFilterPipe,
    AddCourseComponent,
    ErrorPageComponent,
    OverlayComponent,
    CourseDateComponent,
    CourseDurationComponent,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), LoginModule,  HttpClientModule,
    NgxPaginationModule, OwlDateTimeModule, OwlNativeDateTimeModule, BrowserAnimationsModule, ReactiveFormsModule,
    StoreModule.forRoot({ login: loginReducer, courses: coursesReducer, addCourse: addCourseReducer}),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
