// src/main.ts

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Check if you need to enable production mode
// enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
