/**
 * Created by lexfaraday on 2/07/2016.
 */
import 'reflect-metadata';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';

@Component({
    selector: 'newsletter',
    templateUrl: '/client/imports/newsletter/newsletter.html'
})
export class LoginPage {
    public loginForm;
    constructor(fb: FormBuilder) {
        this.loginForm = fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    }
    doLogin(event) {
        console.log(this.loginForm.value);
        event.preventDefault();
    }
}
