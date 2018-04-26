import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"

	documents: Document[] = [
		{
			title: "My First Doc",
			description: 'asdfasdfasdf asdfasd',
			file_url: 'http://google.com',
			updated_at: '11/11/16',
			image_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a00dd14dd25d32b799b8e6e0270fd535&auto=format&fit=crop&w=1504&q=80',
		},
		{
			title: "My Second Doc",
			description: 'asdfasdfasdf asdfasd',
			file_url: 'http://google.com',
			updated_at: '11/11/16',
			image_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a00dd14dd25d32b799b8e6e0270fd535&auto=format&fit=crop&w=1504&q=80',
		},
		{
			title: "My Last Doc",
			description: 'asdfasdfasdf asdfasd',
			file_url: 'http://google.com',
			updated_at: '11/11/16',
			image_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a00dd14dd25d32b799b8e6e0270fd535&auto=format&fit=crop&w=1504&q=80',
		}
	]
}