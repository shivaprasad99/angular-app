import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user-service';
import { USERINFO } from '../../models/user-info.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  public userInfo$: Observable<USERINFO>

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userInfo$ = this.userService.getUserProfile();
  }

}
