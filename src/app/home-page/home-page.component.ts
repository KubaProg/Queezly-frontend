import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  @Output('solvingPage') chosenSolvingPage = new EventEmitter<Boolean>();

  navigateToSolvingView(isSolvingView: Boolean) {
    this.chosenSolvingPage.emit(isSolvingView)
  }

}
