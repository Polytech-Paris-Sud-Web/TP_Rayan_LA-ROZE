import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../models/article';
import { ArticleService } from '../article.service';
import { Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

	@Input()
	article: Article;
	@Output() 
	deleteArticle: EventEmitter<Article> = new EventEmitter<Article>();

	constructor(private articleService: ArticleService, 
		private route: ActivatedRoute) { }

	ngOnInit() {
		const id = this.route.snapshot.params['id'];
		if(id){
			this.articleService.getArticle(id).subscribe(data=>{
				this.article = data;
			});
		}
	}

	removeArticle(){
		this.deleteArticle.emit(this.article);
	}
}
