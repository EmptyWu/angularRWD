import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sqreport',
  templateUrl: './sqreport-list.component.html',
  styleUrls: ['./sqreport-list.component.css']
})
export class SqreportListComponent implements OnInit {
  currentUser: any;
  public orbitUrl:string;

   

  constructor(private notificationService: NotificationService,
    private authService: AuthenticationService,
    private titleService: Title,
    private logger: NGXLogger,
    private sanitizer:DomSanitizer) {
      this.orbitUrl='http://59.125.127.35/SQMobile/';
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
