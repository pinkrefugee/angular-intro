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
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { LoadMoreComponent } from './load-more/load-more.component';
import { CourseHighlightDirective } from './course-highlight.directive';
import { DurationPipe } from './duration.pipe';
import { ArrayOrderPipe } from './order.pipe';
import { SearchFilterPipe } from './search-filter.pipe';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent}
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
    SearchFilterPipe
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
