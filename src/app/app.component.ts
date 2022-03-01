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
  tweet = {
    body: '....',
    likesCount: 10,
    isLiked: true,
  };
  courses = [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
    { id: 3, name: 'course 3' },
  ];
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('favorite changed', eventArgs);
  }

  onAdd() {
    this.courses.push({ id: 4, name: 'course 4' });
  }
  onRemove(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onChange(course: any) {
    course.name = 'UPDATED';
  }
}
