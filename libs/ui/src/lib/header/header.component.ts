import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ButtonModule} from 'primeng/button'
import {RouterLink} from '@angular/router'
import {AuthFacade} from '../../../../auth/data-access/src/lib/auth.facade'

@Component({
  selector: 'onelab-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly authFacade = inject(AuthFacade)

  logout() {
    this.authFacade.logout()
  }
}
