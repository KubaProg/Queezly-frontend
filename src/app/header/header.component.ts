import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output('createPage') chosenCreatePage = new EventEmitter<Boolean>();
  @Output('homePage') chosenHomePage = new EventEmitter<Boolean>();

  navigateToCreatePage(isCreateSectionClicked: Boolean){
    this.chosenCreatePage.emit(isCreateSectionClicked)
  }

  navigateToHomePage(isHomePageClicked: boolean) {
    this.chosenHomePage.emit(isHomePageClicked)
  }
}
