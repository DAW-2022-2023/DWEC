import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hello-world-login',
  templateUrl: './hello-world-login.component.html',
  styleUrls: ['./hello-world-login.component.css'],
})
export class HelloWorldLoginComponent implements OnInit {
  isOk: boolean | null;

  login = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,private route: Router) {
    this.isOk = null;
  }

  onSubmit() {
    this.isOk =
      this.login.value.name == 'Rafael' &&
      this.login.value.password == 'Alamañac';
      this.route.navigateByUrl("/profile");
  }

  ngOnInit(): void {}
}
