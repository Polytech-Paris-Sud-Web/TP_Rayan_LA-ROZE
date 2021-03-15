import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import { ArticleService } from '../article.service';
import {Observable} from "rxjs";


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private articleService: ArticleService) {}

  articles: Article[];


  ngOnInit() {
    this.getArticles();
  }

  getArticles(){
    this.articleService.getArticles().subscribe((data)=>{
      this.articles = data;
    });
  }

  deleteArticle(article: Article){
    this.articleService.deleteArticle(article.id).subscribe((data)=>{
      this.getArticles();
    });
  }
}
