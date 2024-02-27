import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ButtonModule} from 'primeng/button'

@Component({
  selector: 'onelab-footer',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
