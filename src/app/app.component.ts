import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardListComponent } from './features/card-list/card-list.component';
import { ProfileComponent } from './features/profile/profile.component';
import { LibraryComponent } from './features/library/library.component';
import { WishlistComponent } from './features/wishlist/wishlist.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardListComponent, ProfileComponent, LibraryComponent, WishlistComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mtg';
}
