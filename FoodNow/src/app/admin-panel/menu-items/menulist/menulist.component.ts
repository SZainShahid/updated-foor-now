import { menu_items } from './../../../shared/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }  

  ngOnInit(): void {
    this.service.listOfMenu();
  }

  populateForm(i: menu_items) {
    this.service.formMenuData = Object.assign({}, i);
  }

  onDelete(id: number) {
    if (confirm('Do you confirm to delete this permanently?')) {
      this.service.deleteMenu(id).subscribe(res => {
        this.service.listOfMenu();
        this.toastr.info('Deleted Successfully');
      });
    }
  }

}
