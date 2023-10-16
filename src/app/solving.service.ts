import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class SolvingService {

  chosenQuizId: number;

  constructor(private apiService: ApiService) { }


}
