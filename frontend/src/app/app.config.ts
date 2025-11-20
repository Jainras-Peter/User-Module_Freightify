import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import MyLightPreset from './mypreset';
import {  } from 'lucide-angular';
import { MessageService } from 'primeng/api';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    MessageService,
  
     providePrimeNG({
            theme: {
                preset: MyLightPreset
            }
        })
  ]
};
