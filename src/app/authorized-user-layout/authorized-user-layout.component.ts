import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HeaderComponent} from '@onelab/ui'
import {RouterOutlet} from '@angular/router'
import {FooterComponent} from '../../../libs/ui/src/lib/footer/footer.component'

@Component({
  selector: 'onelab-authorized-user-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './authorized-user-layout.component.html',
  styleUrl: './authorized-user-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizedUserLayoutComponent {}
