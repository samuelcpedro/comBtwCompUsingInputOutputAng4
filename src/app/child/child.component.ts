import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-child',
	//templateUrl: './child.component.html',
	template:`
		<h2>Child Tutorials Component</h2>
		<label>Enter Child ChildComponent Value</label>
		<input type="text" #childtext (keyup)="onChange(childtext.value)">
		<p>Value from Parent ParentComponent is </p>
		{{parentData}}
	`,
	styleUrls: ['./child.component.css']
})
export class ChildComponent {

	@Input() parentData: string;
	@Output() childEvent = new EventEmitter();

	onChange(value:string){
		this.childEvent.emit(value);
	}

}
