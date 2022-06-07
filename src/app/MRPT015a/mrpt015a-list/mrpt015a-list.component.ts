import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mrpt015a-list',
  templateUrl: './mrpt015a-list.component.html',
  styleUrls: ['./mrpt015a-list.component.css']
})
export class Mrpt015aListComponent implements OnInit {
  currentUser: any;
  public orbitUrl:string;

   

  constructor(private notificationService: NotificationService,
    private authService: AuthenticationService,
    private titleService: Title,
    private logger: NGXLogger,
    private sanitizer:DomSanitizer) {
      this.orbitUrl='http://59.125.127.35/Hurrypass/HurrypassMobile.aspx?id=MRPT015a&userid=0000';
  }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.titleService.setTitle('angular-material-template - Dashboard');
    this.logger.log('Dashboard loaded');

    // setTimeout(() => {
    //   this.notificationService.openSnackBar('Welcome2!');
    // });
  }
}
