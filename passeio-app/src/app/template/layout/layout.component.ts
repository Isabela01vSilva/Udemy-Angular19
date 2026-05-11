import { Component, OnInit } from '@angular/core';
import { LayoutProps } from './layoutprops';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AuthgoogleService } from '../../authgoogle.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    standalone: false
})
export class LayoutComponent implements OnInit {
  props: LayoutProps = {
    titulo: '',
    subTitulo: '',
  };

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private loginService: AuthgoogleService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(() => this.activeRoute.firstChild !== null),
        map(() => this.obterPropriedades()),
      )
      .subscribe((props: LayoutProps) => {
        this.props = props;
      });
  }

  obterPropriedades(): LayoutProps {
    let rotaFilha = this.activeRoute.firstChild;

    while (rotaFilha?.firstChild) {
      rotaFilha = rotaFilha.firstChild;
    }
    return (
      (rotaFilha?.snapshot.data as LayoutProps) || { titulo: '', subTitulo: '' }
    );
  }

  logout(){
    this.loginService.logout();
  }
}
