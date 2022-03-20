import { RegisterService } from './../services/register.service';
import { NgForm } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errors = '';

  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const { name } = form.value;
    if (!name) return;
    this.registerService.createAccount(name).subscribe(
      (res) => {
        const navLink: string[] = ['/chat'];
        this.router.navigate(navLink);
      },
      (error) => {
        this.errors = error;
        console.log(this.errors);
      },
    );
  }
}
