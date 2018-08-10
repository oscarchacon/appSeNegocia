import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  private relativeUrl: string = "";

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }

  getUsers(): Observable<User[]> {
    return this.get(`${this.relativeUrl}`).map(res => res);
  }
}
