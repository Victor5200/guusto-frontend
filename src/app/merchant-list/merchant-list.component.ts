import { Component, OnInit } from '@angular/core';
import {MerchantService} from "../service/merchant-service";

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.css']
})
export class MerchantListComponent implements OnInit {
  merchants: any[];

  constructor(private merchantService: MerchantService) { }

  ngOnInit(): void {
    this.merchantService.buscarTodas().subscribe(resp => {
      this.merchants = resp;
    })
  }

}
