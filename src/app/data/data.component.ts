import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  @Input('nameAliasForEmployeeName') employeeNameOfObject: string;
  @Input('nameAliasForEmployeeCity') employeeCity: string;
  @Input('nameAliasForEmployeeNumber') employeeSalary: number;
}
