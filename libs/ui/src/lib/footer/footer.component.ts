import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ButtonModule} from 'primeng/button'
import {RouterLink} from '@angular/router'

@Component({
  selector: 'onelab-footer',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
