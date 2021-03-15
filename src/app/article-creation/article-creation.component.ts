import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';
import {Router} from "@angular/router"

@Component({
	selector: 'app-article-creation',
	templateUrl: './article-creation.component.html',
	styleUrls: ['./article-creation.component.scss']
})
export class ArticleCreationComponent implements OnInit {

	articleForm : FormGroup;

	constructor(private fb: FormBuilder, 
		private articleService: ArticleService, 
		private router: Router) {
		this.articleForm = this.fb.group({
			title: ['Fake Title', Validators.required ],
			content : ['', Validators.required ],
			authors : ['', Validators.required ],
		});
	}

	ngOnInit(): void {}


	createArticle(){
		const { title, content, authors } = this.articleForm.value;
		const newArticle = { title, content, authors };
		this.articleService.addArticle(newArticle).subscribe(data=>{
			this.router.navigate(['article', {id: data.id}])
		});
	}
}
