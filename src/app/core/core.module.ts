import { AuthGuardGuard } from './guards/auth-guard.guard';
import { PaginateService } from './services/paginate/paginate.service';
import { ApiFieldService } from './services/ApiField/api-field.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApiServiceService } from './services/Api/api-service.service';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './hero-created.interceptor';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, UserComponent],
  providers: [
    ApiServiceService,
    ApiFieldService,
    PaginateService,
    AuthGuardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
