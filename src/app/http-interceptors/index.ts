import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GetDataInterceptor } from 'src/app/http-interceptors/get-data-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: GetDataInterceptor, multi: true }
];
