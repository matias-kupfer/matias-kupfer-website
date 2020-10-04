import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './responsive.scss']
})
export class AppComponent implements OnInit {
  title = 'matias-kupfer';
  data;

  view: any[] = [700, 150];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    /*this.http.get('https://api.github.com/repos/matiascfgm/yourpage/languages').subscribe((res) => {
      let total = 0;
      this.data = [];
      for (const key in res) {
        if (key) {
          total += res[key];
          this.data.push({name: key, value: res[key]});
        }
      }
      this.data.forEach((value, index) => {
        this.data[index].value = (this.data[index].value / total) * 100;
      });
    });*/
  }
}
