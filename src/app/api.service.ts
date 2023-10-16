import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {QuizFullDto} from "./shared/QuizFull.model";
import {QuizInfo} from "./shared/QuizInfo.model";
import {CreateQuiz} from "./shared/CreateQuiz.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getQuizzes() : Observable<QuizInfo[]>{
    return this.http.get<QuizInfo[]>(`${this.baseUrl}/quizzes`);
  }

  getQuizById(quizId: number): Observable<QuizFullDto> {
    return this.http.get<QuizFullDto>(`${this.baseUrl}/quizzes/${quizId}`);
  }

  createQuiz(createQuiz: CreateQuiz): any {
    return this.http.post<QuizFullDto>(`${this.baseUrl}/quizzes`, createQuiz);
  }

  // You can add more methods for other API endpoints
}
