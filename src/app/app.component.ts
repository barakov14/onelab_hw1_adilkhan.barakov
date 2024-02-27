import {Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FooterComponent, HeaderComponent} from '@onelab/ui'

@Component({
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent],
  selector: 'onelab-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'onelab-hw1'
}
