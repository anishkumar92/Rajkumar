import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface Group {
  id: string;
  name: string;
  users: User[];
  permissions: string[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private groupsSubject = new BehaviorSubject<Group[]>([
    {
      id: '1',
      name: 'Administrators',
      users: [
        { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' }
      ],
      permissions: ['read', 'write', 'delete']
    },
    {
      id: '2',
      name: 'Developers',
      users: [
        { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Developer' }
      ],
      permissions: ['read', 'write']
    },
    {
      id: '3',
      name: 'Viewers',
      users: [],
      permissions: ['read']
    }
  ]);

  private usersSubject = new BehaviorSubject<User[]>([
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Developer' },
    { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'Viewer' },
    { id: '5', name: 'Charlie Davis', email: 'charlie@example.com', role: 'Viewer' }
  ]);

  groups$ = this.groupsSubject.asObservable();
  users$ = this.usersSubject.asObservable();

  constructor() { }

  getGroups(): Observable<Group[]> {
    return this.groups$;
  }

  getUsers(): Observable<User[]> {
    return this.users$;
  }

  addUserToGroup(groupId: string, user: User): void {
    const groups = this.groupsSubject.getValue();
    const group = groups.find(g => g.id === groupId);
    if (group && !group.users.find(u => u.id === user.id)) {
      group.users.push(user);
      this.groupsSubject.next([...groups]);
    }
  }

  removeUserFromGroup(groupId: string, userId: string): void {
    const groups = this.groupsSubject.getValue();
    const group = groups.find(g => g.id === groupId);
    if (group) {
      group.users = group.users.filter(u => u.id !== userId);
      this.groupsSubject.next([...groups]);
    }
  }

  getUnassignedUsers(groupId: string): Observable<User[]> {
    return new Observable(observer => {
      this.groups$.subscribe(groups => {
        const group = groups.find(g => g.id === groupId);
        const groupUserIds = group ? group.users.map(u => u.id) : [];
        const unassignedUsers = this.usersSubject.getValue()
          .filter(user => !groupUserIds.includes(user.id));
        observer.next(unassignedUsers);
      });
    });
  }
}
