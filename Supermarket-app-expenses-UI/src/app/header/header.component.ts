import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { languages, notifications, userItems } from './header-dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;
  selectedLanguage: any;

  languages = languages;
  notifications = notifications;
  userItems = userItems;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth)

  }

ngOnInit(): void {
  this.checkCanShowSearchAsOverlay(window.innerWidth);
  this.selectedLanguage = this.languages[0];
}

  getHeadClass() {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    }
      else {
        styleClass = 'head-md-screen';
      }

      return styleClass;
    
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if(innerWidth < 845) {
      this.canShowSearchAsOverlay = true;

    }
    else {
      this.canShowSearchAsOverlay = false;
    }
  }

  

  constructor(private router: Router) { }

  navigateToNotificationPage() {
    this.router.navigate(['/kart']); // Replace '/notification' with the actual route path you want to navigate to.
  }

  navigateToProfile(label: string) {

  
    if (label === 'Profile') {
      console.log(label);
      this.router.navigate(['/profile']); // Navigate to the "Profile" component
    }
  }
   
}
