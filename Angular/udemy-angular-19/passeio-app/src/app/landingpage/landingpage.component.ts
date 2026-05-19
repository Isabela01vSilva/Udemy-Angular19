import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';
import { AuthgoogleService } from '../authgoogle.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
  standalone: false,
})
export class LandingpageComponent {
  profile: Profile | undefined;

  constructor(
    private router: Router,
    private loginService: AuthgoogleService,
  ) {}

  navegar() {
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle() {
    this.loginService.login();
  }

  isLoggeIn(): boolean {
    const dadosGoogle = this.loginService.getLoggerProfile();
    console.log('Login Google: ', dadosGoogle);
    this.profile = dadosGoogle;
    return !!this.profile;
  }
}
