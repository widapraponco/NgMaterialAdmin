import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.auth.signInWithEmailAndPassword(f.value.username, f.value.password)
    .then(result => {
      console.log(result);
      this.route.navigate(['']);
    });
  }

}
