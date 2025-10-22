import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProvisioningComponent } from '../../components/user-provisioning/user-provisioning.component';

@Component({
  selector: 'app-users',
  imports: [CommonModule, UserProvisioningComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

}
