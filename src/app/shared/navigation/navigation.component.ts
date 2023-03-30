import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Huiles' , routerLink: '/oil'},
      { label: 'Synergie' },
      { label: 'Client' },
      { label: 'Calcule Prix' }
    ]
  }

  constructor(protected authService: AuthService){}

}
