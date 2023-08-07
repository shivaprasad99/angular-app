import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USERINFO } from '../../models/user-info.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private AUTHAPI: string = "https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d";
  private USERINFOAPI: string = "https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2";

  constructor(private httpClient: HttpClient) { }

  public isAuthenticated() {
    return this.httpClient.get(this.AUTHAPI);
  }

  public getUserProfile() {
    return this.httpClient.get<USERINFO>(this.USERINFOAPI);
  }
}
