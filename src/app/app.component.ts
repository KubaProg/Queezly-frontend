import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  isHomePage: Boolean = true;
  isSolvingPage: Boolean = false;
  isCreatingPage: Boolean = false;
  navigateToCreatePage(isCreatePage: Boolean) {
    this.isCreatingPage = isCreatePage;
    this.isHomePage = false;
    this.isSolvingPage = false;
  }

  navigateToHomePage(isCreatePage: Boolean) {
    this.isCreatingPage = false;
    this.isHomePage = isCreatePage;
    this.isSolvingPage = false;
  }

  navigateToSolvingPage(isSolvingPage: Boolean) {
    this.isCreatingPage = false;
    this.isHomePage = false;
    this.isSolvingPage = isSolvingPage;
  }

}
