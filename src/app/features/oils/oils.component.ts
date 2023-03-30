import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { OilList, OilType } from 'src/app/models/oil';
import { Oil } from '../../models/oil';

@Component({
  selector: 'app-oils',
  templateUrl: './oils.component.html',
  styleUrls: ['./oils.component.scss'],
})
export class OilsComponent implements OnInit {
  ngOnInit(): void {
    this.loading.next(false);
    console.log(this.oilList);
  }

  constructor(private router: Router){}
  
  oils: Oil[] = [
    {
      oilId: 0,
      type: OilType.Essentiel,
      name: 'Cannelle',
      price_fLask: 4.26,
      flask_volume: 10,
      drop_per_ml: 40,
    },
    {
      oilId: 1,
      type: OilType.Essentiel,
      name: 'Clou de girofle',
      price_fLask: 3.73,
      flask_volume: 10,
      drop_per_ml: 40,
    },
    {
      oilId: 2,
      type: OilType.Essentiel,
      name: 'Gingembre',
      price_fLask: 16.49,
      flask_volume: 10,
      drop_per_ml: 40,
    },
  ];

  edit(id: number){
    if(!id)
      console.error('id is needed');

      this.router.navigateByUrl(`oil/${id}`);
  }

  protected loading = new BehaviorSubject<boolean>(true);;
  protected oilList: OilList[] = this.oils;
  protected Oiltypes = OilType;
}
