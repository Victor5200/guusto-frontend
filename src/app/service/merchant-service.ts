import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})

export class MerchantService {

  api = `${environment.apiUrl}/api/merchant`

  constructor(protected http: HttpClient) {
  }

  buscarTodas(){
    return this.http.get<any[]>(this.api);
  }

}
