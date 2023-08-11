import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  id = ''
  utm_name = ''
  message = 'Es la pagina del deep link by Home o sin parametros'
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || ''
    this.utm_name = this.route.snapshot.queryParamMap.get('utm_name') || ''
    if (this.id !== ''){
      this.message = 'Es la pagina del deep link by id in URL -> ' + this.id
    }
    if (this.utm_name !== ''){
      this.message = 'Es la pagina del deep link con parametro UTM -> ' + this.utm_name
    }
  }

}
