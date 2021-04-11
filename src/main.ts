import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  /**
   * Disable Angular's development mode, which turns off assertions and other checks within the framework. One important assertion this disables verifies that a change detection pass does not result in additional changes to any bindings (also known as unidirectional data flow).
   */
  enableProdMode();
}
/**
 * platformBrowserDynamic - loads the rootmodule by invoking the bootstrapmodule and giving it the reference to the Root module
 *
 * The app can be loaded in many ways and in many platforms
 * @example: loading with nativescript, for a monile application, it would be something like this:
 * platformNativeScriptDynamic().bootstrapModule(AppModule)
 *
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


