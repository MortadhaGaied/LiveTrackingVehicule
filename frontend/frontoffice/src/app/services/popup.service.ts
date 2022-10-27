import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }
  makeCapitalPopup(): string {
    return `` +
      `<div>Capital: test</div>` +
      `<div>State: test</div>` +
      `<div>Population: test</div>`
  }
}
