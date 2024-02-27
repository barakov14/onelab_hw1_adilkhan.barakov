import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'onelab-hw1-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {}
