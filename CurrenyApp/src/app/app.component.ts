import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cost: number=0 ;
  from = 'Dollar';
  to = 'Dollar';
  result?: number=0;

convertUnit: { [name: string]: number } = {"Dollar" :13.60, "Euro": 15.56, "Sterling": 16.5, "Turkish Lira": 1};

  convert(_from: string, _to: string, _cost: number) {
    let multiplier: number = _cost*(this.convertUnit[_from]/this.convertUnit[_to]);

      if (_from==_to ) {
      this.result=this.cost;
    }else{
      this.result= multiplier;
    }
  }

}
