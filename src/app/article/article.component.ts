import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../models/article';
import { ArticleService } from '../article.service';
import { Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
	id: number | null; 

	constructor(private articleService: ArticleService, 
		private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.id = this.route.snapshot.params['id'];
		if(this.id){
			this.articleService.getArticle(this.id).subscribe(data=>{
				this.article = data;
			});
		}
	}

	removeArticle(){
		if(this.id){
			this.articleService.deleteArticle(this.article.id).subscribe((data)=>{
				this.router.navigate(['/articles']);
			});
		}else this.deleteArticle.emit(this.article);
	}
}
