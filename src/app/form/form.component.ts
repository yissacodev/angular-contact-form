import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  formUser = new FormGroup(
    {
      'toemail': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'last': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', [Validators.required]),
      'area': new FormControl(''),
      'msg': new FormControl(''),
    }
  );

  get name() {
    return this.formUser.get('name') as FormControl;
  }
  get email() {
    return this.formUser.get('email') as FormControl;
  }
  get toEmail() {
    return this.formUser.get('toemail') as FormControl;
  }
  submit($event: any) {
    console.log($event);
  }

  process( $event: any ){
    $event.preventDefault();
    console.log($event.target)

    let toEmail = this.formUser.get('toemail');

      fetch("https://formsubmit.co/ajax/" + toEmail?.value, {
          method: "POST",
          body: new FormData( $event.target )
      })
      .then( res => (res.ok ? res.json() : Promise.reject(res)) )
      .then( json => {
          console.log(json);
         
      })
      .catch( err => {
          console.log(err);
          let message = err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
          
      })
      .finally(() => {
          setTimeout(() => {
              
          }, 3000);
      })
  }
}

