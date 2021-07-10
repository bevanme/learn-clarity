import { Component } from '@angular/core';
import { ClarityIcons, homeIcon } from '@cds/core/icon';

import '@cds/core/icon/register.js';

@Component({
  selector: 'clr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cli';

  constructor() {
    ClarityIcons.addIcons(homeIcon);
  }
}

