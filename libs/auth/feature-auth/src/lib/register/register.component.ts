import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ButtonModule} from 'primeng/button'
import {InputGroupAddonModule} from 'primeng/inputgroupaddon'
import {InputGroupModule} from 'primeng/inputgroup'
import {InputTextModule} from 'primeng/inputtext'
import {RouterLink} from '@angular/router'
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import {AuthFacade} from '../../../../data-access/src/lib/auth.facade'

@Component({
  selector: 'onelab-hw1-register',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    InputGroupAddonModule,
    InputGroupModule,
    InputTextModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  private readonly authFacade = inject(AuthFacade)
  public status = this.authFacade.selectAuthStatus

  public formGroup = new FormBuilder().group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(6)]),
  })

  onRegister() {
    const form = {
      email: this.formGroup.value.email,
      password: this.formGroup.value.password,
    }
    this.authFacade.register(form.email!, form.password!) // ???
  }
}
