import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  import {Component} from '@angular/core';

/**
 * @title Multi-row toolbar
 */
@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html',
  styleUrls: ['styles.css'],
})
export class ToolbarMultirowExample {}
