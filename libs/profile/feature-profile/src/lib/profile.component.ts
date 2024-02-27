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
  // public user = this.profileFacade.selectUser
  public user = {
    first_name: 'Adilkhan',
    last_name: 'Barakov',
    study: 'Suleyman Demirel University',
    profession: 'Frontend Angular Developer',
    image:
      'https://i.pinimg.com/736x/aa/dd/b2/aaddb2cd8cb0c1aa7870c8e333be8e5e.jpg',
  }

  public status = this.profileFacade.selectProfileStatus

  ngOnInit() {
    this.profileFacade.loadUser()
  }
}
