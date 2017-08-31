import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  @Input() employeeName: string;
  @Input() employeeCity: string;
  @Input() employeeSalary: number;
}
