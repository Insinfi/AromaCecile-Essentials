import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Huiles essentiels'
      },
      { label: 'Huiles végétale' },
      { label: 'Synergie' },
      { label: 'Calcule Prix' }
    ]
  }

}
