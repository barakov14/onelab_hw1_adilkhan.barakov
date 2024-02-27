import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'onelab-hw1-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {}
