import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.css']
})
export class DataComponent {
	@Input('nameAliasForEmployeeName') employeeNameOfObject: string;
	@Input('nameAliasForEmployeeCity') employeeCity: string;
	@Input('nameAliasForEmployeeNumber') employeeSalary: number;
	//'emitSendRecordEvent'
	@Output() sendRecord: EventEmitter<any> = new EventEmitter();

	emitSendRecordEvent(){//emitSendRecordEvent
		let selectedEmployeeObj: any = {
			selectedName: this.employeeNameOfObject,
			selectedCity: this.employeeCity,
			selectedSalary: this.employeeSalary,
		};
		this.sendRecord.emit();
		//this.sendRecord.emit(selectedEmployeeObj);
	}
}
