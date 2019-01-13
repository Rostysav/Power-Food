import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'pf-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public popupMenu = false;
  callForm: FormGroup;

  constructor(
      private router: Router,
      private http: HttpClient
  ) { }

  ngOnInit() {
    this.callForm = new FormGroup({
      'name': new FormControl('', [Validators.required,  Validators.minLength(3)]),
      'mobile': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      'honeypot': new FormControl('')
    });
  }

  validateHuman(honeypot) {
    if (honeypot) {  //if hidden form filled up
      console.log("Robot Detected!");
      return true;
    } else {
      console.log("Welcome Human!");
    }
  }

  callSubmit(form) {
    if (this.validateHuman(this.callForm.get('honeypot').touched)) {  //if form is filled, form will not be submitted
      return false;
    }
    console.log("Form Submitted!");
    let array_new = {};
    array_new['phone'] = form.value.mobile;
    array_new['name_customer'] = form.value.name;
    console.log(array_new);
    const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');

    this.http.post('http://127.0.0.1:3000/callback', JSON.stringify(array_new), {
      headers: headers
    })
        .subscribe(data => {
          console.log('form data: ', data);
        });

    form.reset();
    alert('Менеджер зателефонує вам найближчим часом!');
    setTimeout(this.router.navigate(['/']), 5000);
  }

  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0)
        ? null : event.charCode >= 48 && event.charCode <= 57;
  }

}
