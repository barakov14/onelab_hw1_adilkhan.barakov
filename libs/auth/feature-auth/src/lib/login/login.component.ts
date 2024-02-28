import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {CommonModule} from '@angular/common'
import {InputGroupModule} from 'primeng/inputgroup'
import {InputGroupAddonModule} from 'primeng/inputgroupaddon'
import {InputTextModule} from 'primeng/inputtext'
import {ButtonModule} from 'primeng/button'
import {RouterLink} from '@angular/router'
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import {AuthFacade} from '../../../../data-access/src/lib/auth.facade'

@Component({
  selector: 'onelab-hw1-login',
  standalone: true,
  imports: [
    CommonModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly authFacade = inject(AuthFacade)
  public status = this.authFacade.selectAuthStatus

  public formGroup = new FormBuilder().group({
    email: new FormControl('adik@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('123456', [
      Validators.required,
      Validators.min(6),
    ]),
  })

  onLogin() {
    const form = {
      email: this.formGroup.value.email,
      password: this.formGroup.value.password,
    }
    this.authFacade.login(form.email!, form.password!) // ????
  }
}
