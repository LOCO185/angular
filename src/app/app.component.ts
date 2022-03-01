import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './components/favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true,
  };
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('favorite changed', eventArgs);
  }
}
