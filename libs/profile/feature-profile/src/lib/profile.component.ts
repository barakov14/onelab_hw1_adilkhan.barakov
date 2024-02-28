import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ProfileFacade} from '../../../data-access/src/lib/profile.facade'
import {ProgressSpinnerModule} from 'primeng/progressspinner'
import {AvatarModule} from 'primeng/avatar'
@Component({
  selector: 'onelab-profile',
  standalone: true,
  imports: [CommonModule, ProgressSpinnerModule, AvatarModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  private readonly profileFacade = inject(ProfileFacade)

  public status = this.profileFacade.selectProfileStatus
  public user = this.profileFacade.selectUser

  ngOnInit() {
    this.profileFacade.loadUser()
  }
}
