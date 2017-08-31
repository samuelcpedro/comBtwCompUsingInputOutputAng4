import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Component Communications';
  employeeRecords: any = [
    { eName: 'A', eCity: 'City_1', eSalary: 50000 },
    { eName: 'B', eCity: 'City_2', eSalary: 60000 },
    { eName: 'C', eCity: 'City_3', eSalary: 70000 },
    { eName: 'D', eCity: 'City_4', eSalary: 80000 },
  ]
}
