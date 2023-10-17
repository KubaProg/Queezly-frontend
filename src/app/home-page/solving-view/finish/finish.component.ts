import {Component, OnInit} from '@angular/core';
import {SolvingService} from "../../../solving.service";

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit{

  constructor(private solvingService: SolvingService) {}

  result: number;
  ngOnInit(): void {
    this.result = this.solvingService.percentageResult*100;
  }

  onRefreshClick() {
    window.location.reload(); // Reload the application
  }

}
