import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles: [
    `
      .glyphicon {
        color: red;
      }
    `,
  ],
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite?: boolean;
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({ newValue: this.isFavorite });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
