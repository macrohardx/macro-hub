import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { randomBetween } from '../../shared/helper-functions';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  private modalProfilePic: NgbModalRef

  public user: any = {}

  public version: any = new Date().getTime();

  public profilePicUrl: string = `${environment.chat_api}/user/profile-pic`;

  constructor(private modalService: NgbModal, private http: HttpClient) {
  }

  ngOnInit() {
    this.loadUserData()
  }

  private loadUserData() {
    this.http.get(`${environment.chat_api}/user/me`, { withCredentials: true }).subscribe((response) => {
      this.user = response;
    })
  }

  public imageCropped(img) {
    this.modalProfilePic.close()
    this.saveProfilePic(img)
  }

  public openModal(modalContent) {
    this.modalProfilePic = this.modalService.open(modalContent, { size: 'lg' })
    this.modalProfilePic.result
      .then((result) => {
        //close
      }, (reason) => {
        //dismiss
      });
  }

  private saveProfilePic(img) {
    this.http.put(`${this.profilePicUrl}/${this.user.id}`, { base64: img }, { withCredentials: true })
      .subscribe((response) => {
        this.version += 1;
      })
  }

  public saveProfile() {

  }

  public savePasswordTip() {

  }

  public changePassword() {
    
  }
}
