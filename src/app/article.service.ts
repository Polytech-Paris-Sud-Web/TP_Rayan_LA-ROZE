import { Injectable } from '@angular/core';
import { Article, rawArticle } from './models/article';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ArticleService {

  constructor(private http : HttpClient) { }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public deleteArticle(id: number): Observable<Article[]>{
    return this.http.delete<Article[]>("http://localhost:3000/articles/"+id);
  }

  public addArticle(article: rawArticle): Observable<Article>{
    return this.http.post<Article>("http://localhost:3000/articles/", article);
  }

  public getArticle(id: number): Observable<Article> {
    return this.http.get<Article>("http://localhost:3000/articles/"+id);
  }

}