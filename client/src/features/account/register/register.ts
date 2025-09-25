import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds } from '../../../types/registerCreds';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  protected creds = {} as RegisterCreds;

  register(): void {
    console.log(this.creds);
  }

  cancel(): void {
    console.log("Cancel executed");
  }
}