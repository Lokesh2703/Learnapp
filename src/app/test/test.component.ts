import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css',
                  './css/style.css']
})
export class TestComponent implements OnInit {

  public listObj = [];
  public specObj;
  public message = 0;
  public defaultId = 3;
  public defaultPk = 4;
  public id = 0;
  public content = "";
  public title = "";
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getMenuList().subscribe(data => this.listObj = data);
    // this._employeeService.getSpecificItem(this.defaultId.toString()).subscribe(data => this.specObj = data.page);
  }

  showmsg(id:number,msg:number){
    this.message=msg;
    this.id = id;
    this._employeeService.getSpecificItem(id.toString()).subscribe(data => {
                                              this.content = data.page.find(p => p.pk===msg).fields.content;
                                              this.title = data.page.find(p => p.pk===msg).fields.title;
                                          });
    console.log(this.title);
    console.log(this.content);
  }


}
