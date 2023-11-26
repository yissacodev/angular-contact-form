import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name = new FormControl('', Validators.required);
  last = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('');
  area = new FormControl('');
  msg = new FormControl('');

  submit($event: any){
    $event.preventDefault();
    $event.target.

  
    console.log();
  }
}
