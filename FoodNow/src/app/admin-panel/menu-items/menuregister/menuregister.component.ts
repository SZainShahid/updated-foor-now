import { menu_items } from './../../../shared/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-menuregister',
  templateUrl: './menuregister.component.html',
  styleUrls: ['./menuregister.component.css']
})
export class MenuregisterComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formMenuData = {
      menuID: null,
      restaurantID: null,
      item1: '',
      item2: '',
      item3: '',
      item4: '',
      item5: ''
    }
  }

  onSubmit(form?: NgForm){
    if(form.value.menuID==null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postMenu(form.value).subscribe(men => {
      this.toastr.success("Submission Successful")
      this.resetForm(form);
      this.service.listOfMenu();  
    });
  }

  updateRecord(form: NgForm){
    this.service.putMenu(form.value).subscribe(men => {
      this.toastr.info("Updated")
      this.resetForm(form);
      this.service.listOfMenu();
    });
  }

}
