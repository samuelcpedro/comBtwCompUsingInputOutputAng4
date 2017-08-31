import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title: string = 'Component Communications';
	
	employeeRecords: any = [
		{ 
			eNameValueFromAppComp: 'A', 
			eCityValueFromAppComp: 'City_1', 
			eSalaryValueFromAppComp: 50000 
		},
		{ 
			eNameValueFromAppComp: 'B', 
			eCityValueFromAppComp: 'City_2', 
			eSalaryValueFromAppComp: 60000 
		},
		{ 
			eNameValueFromAppComp: 'C', 
			eCityValueFromAppComp: 'City_3', 
			eSalaryValueFromAppComp: 70000 
		},
		{ 
			eNameValueFromAppComp: 'D', 
			eCityValueFromAppComp: 'City_4', 
			eSalaryValueFromAppComp: 80000 
		},
	]

	selectedEmployeeData: any = {
		selectedName:	'',
		selectedCity:	'',
		selectedSalary:	''
	};
	
	
	getRecord(data: any): void{
		this.selectedEmployeeData = data;
	}
}
