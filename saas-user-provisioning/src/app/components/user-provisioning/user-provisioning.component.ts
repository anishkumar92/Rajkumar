import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService, User, Group } from '../../services/user.service';

@Component({
  selector: 'app-user-provisioning',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-provisioning.component.html',
  styleUrl: './user-provisioning.component.css'
})
export class UserProvisioningComponent implements OnInit {
  selectedDepartment: string = '';
  selectedRole: string = '';
  selectedGroup: string = '';
  searchQuery: string = '';
  expandedIndex: string | null = null;

  groups$: Observable<Group[]>;
  currentGroupUsers$: Observable<User[]>;
  availableUsers$: Observable<User[]>;
  filteredGroupUsers$: Observable<User[]>;
  filteredAvailableUsers$: Observable<User[]>;

  constructor(private userService: UserService) {
    this.groups$ = this.userService.getGroups();
    this.currentGroupUsers$ = new Observable();
    this.availableUsers$ = new Observable();
    this.filteredGroupUsers$ = new Observable();
    this.filteredAvailableUsers$ = new Observable();
  }

  ngOnInit(): void {
    this.currentGroupUsers$ = this.groups$.pipe(
      map(groups => {
        const selectedGroup = groups.find(g => g.id === this.selectedGroup);
        return selectedGroup ? selectedGroup.users : [];
      })
    );
  }

  onDepartmentChange(): void {
    console.log('Department selected:', this.selectedDepartment);
    // Department-based filtering logic can be added here
  }

  onRoleChange(): void {
    console.log('Role selected:', this.selectedRole);
    // Role-based filtering logic can be added here
  }

  onGroupChange(): void {
    if (this.selectedGroup) {
      this.currentGroupUsers$ = this.groups$.pipe(
        map(groups => {
          const selectedGroup = groups.find(g => g.id === this.selectedGroup);
          return selectedGroup ? selectedGroup.users : [];
        })
      );

      this.availableUsers$ = this.userService.getUnassignedUsers(this.selectedGroup);
      this.updateFilteredUsers();
    }
  }

  onSearchChange(): void {
    this.updateFilteredUsers();
  }

  private updateFilteredUsers(): void {
    this.filteredGroupUsers$ = this.currentGroupUsers$.pipe(
      map(users => this.filterUsersBySearch(users))
    );
    this.filteredAvailableUsers$ = this.availableUsers$.pipe(
      map(users => this.filterUsersBySearch(users))
    );
  }

  private filterUsersBySearch(users: User[]): User[] {
    if (!this.searchQuery.trim()) {
      return users;
    }
    const query = this.searchQuery.toLowerCase();
    return users.filter(user =>
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.role.toLowerCase().includes(query)
    );
  }

  toggleDetails(index: string): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  addUserToGroup(user: User): void {
    if (this.selectedGroup) {
      this.userService.addUserToGroup(this.selectedGroup, user);
      this.onGroupChange(); // Refresh the lists
    }
  }

  removeUserFromGroup(userId: string): void {
    if (this.selectedGroup) {
      this.userService.removeUserFromGroup(this.selectedGroup, userId);
      this.onGroupChange(); // Refresh the lists
    }
  }
}
