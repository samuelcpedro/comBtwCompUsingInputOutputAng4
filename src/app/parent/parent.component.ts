import { Component } from '@angular/core';

@Component({
	selector: 'app-parent',
	//templateUrl: './parent.component.html',
	template: `
		<h1>Hello World</h1>
		<h2>Parent App Component</h2>
		<label for="">Enter Parent AppComponent Value</label>
		<input type="text" #ptext (keyup)="0">
		<!-- (keyup)="0" dummie event that refresh Page -->
		<!-- Template variable que faz referencia ao elemento input -->
		<p>Value from Child TutorialsComponent is </p>
		{{ childData }}
		<app-child [parentData]="ptext.value" (childEvent)="childData=$event"></app-child>
	`,
	styleUrls: ['./parent.component.css']
})
export class ParentComponent {

}
