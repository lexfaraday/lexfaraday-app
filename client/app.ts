/**
 * Created by lexfa on 11/06/2016.
 */

import 'reflect-metadata';
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { LoginPage } from './imports/newsletter/neswletter';
import { CountDown } from './imports/countdown/countdown';

@Component({
    selector: 'app',
    templateUrl: '/client/app.html',
    directives: [LoginPage, CountDown]
})
class Socially {


}

bootstrap(Socially);