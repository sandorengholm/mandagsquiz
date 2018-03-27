import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    styleUrls: ['../styles/common.scss'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None //Reach files outside component folder
})
export class AppComponent {
}