import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds } from '../../../types/registerCreds';
import { User } from '../../../types/user';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  protected creds = {} as RegisterCreds;
  membersFromHome = input.required<User[]>();
  cancelRegister = output<boolean>();

  register(): void {
    console.log(this.creds);
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }
}