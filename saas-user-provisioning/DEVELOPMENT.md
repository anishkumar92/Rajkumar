# Development Guide - SaaS User Provisioning System

## 👨‍💻 Development Workflow

### 1. Starting Development

```bash
cd saas-user-provisioning
ng serve -o
```

The app opens at `http://localhost:4200` with hot reload enabled.

---

## 📝 Making Changes

### Adding a New Component

```bash
ng generate component components/component-name
# or
ng g c components/component-name --skip-tests
```

This creates:
- `component-name.component.ts` (TypeScript)
- `component-name.component.html` (Template)
- `component-name.component.css` (Styles)

### Adding a New Service

```bash
ng generate service services/service-name
# or
ng g s services/service-name --skip-tests
```

This creates:
- `service-name.service.ts` (Service class)

### Generated Files Structure

```typescript
// Example component
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-name',
  imports: [CommonModule, FormsModule],
  templateUrl: './component-name.component.html',
  styleUrl: './component-name.component.css'
})
export class ComponentNameComponent {
  // Component logic here
}
```

---

## 🎨 Styling Guide

### Using Global Theme Variables

All colors, spacing, and sizes are defined in `src/styles.css`:

```css
/* In your component CSS */
.my-element {
  color: var(--primary-color);
  padding: var(--spacing-lg);
  font-size: var(--font-size-md);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-normal);
}
```

### Common Pattern: Card

```html
<div class="card">
  <h2>Title</h2>
  <p>Content</p>
</div>
```

```css
.card {
  background: var(--white);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: box-shadow var(--transition-normal);
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}
```

### Color Quick Reference

```css
/* Primary Actions (Buttons, Links) */
background: var(--primary-color);           /* #1e88e5 */

/* Success (Add, Approve) */
background: var(--success-color);           /* #4caf50 */

/* Danger (Delete, Remove) */
background: var(--danger-color);            /* #f44336 */

/* Backgrounds */
background: var(--gray-50);                 /* Light background */
background: var(--white);                   /* White */

/* Text */
color: var(--gray-900);                     /* Dark text */
color: var(--gray-600);                     /* Medium text */
color: var(--gray-500);                     /* Light text */
```

---

## 🔄 State Management with RxJS

### Observable Pattern (Used in UserService)

```typescript
import { BehaviorSubject, Observable } from 'rxjs';

export class MyService {
  private dataSubject = new BehaviorSubject<Data[]>([]);
  data$ = this.dataSubject.asObservable();

  // Get data
  getData(): Observable<Data[]> {
    return this.data$;
  }

  // Update data
  updateData(newData: Data[]): void {
    this.dataSubject.next(newData);
  }
}
```

### Subscribing in Component

```typescript
export class MyComponent implements OnInit {
  data$: Observable<Data[]>;

  constructor(private service: MyService) {
    this.data$ = this.service.getData();
  }

  // In template:
  // <div *ngFor="let item of data$ | async">
}
```

### Using async Pipe (Recommended)

```html
<!-- Automatically subscribes and unsubscribes -->
<div *ngFor="let user of users$ | async">
  {{ user.name }}
</div>
```

---

## 📋 Angular Syntax Quick Reference

### Two-Way Data Binding

```html
<input [(ngModel)]="selectedValue">
```

```typescript
export class Component {
  selectedValue: string = '';
}
```

### Event Binding

```html
<button (click)="onClick()">Click Me</button>
<select (change)="onDropdownChange()">
```

### Conditional Rendering

```html
<!-- If condition -->
<div *ngIf="isVisible">Visible</div>

<!-- If-else -->
<div *ngIf="isVisible; else notVisible">Visible</div>
<ng-template #notVisible>Not Visible</ng-template>

<!-- For loop -->
<div *ngFor="let item of items">{{ item.name }}</div>
```

### Class Binding

```html
<div [class.active]="isActive">
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">
```

### Property Binding

```html
<img [src]="imageUrl">
<a [href]="linkUrl">Link</a>
<input [value]="inputValue">
```

---

## 🧪 Testing Your Changes

### Manual Testing Checklist

- [ ] Component renders without errors
- [ ] Styles apply correctly
- [ ] Responsive on mobile (F12 → Device Toolbar)
- [ ] Buttons/inputs are clickable
- [ ] No console errors (F12 → Console)
- [ ] Hover states work
- [ ] Data updates in real-time

### Browser DevTools (F12)

**Console Tab:**
```javascript
// Check if service is working
ng.getComponent(document.querySelector('app-user-provisioning'))._serviceProperty
```

**Elements Tab:**
- Right-click → Inspect Element
- See HTML structure
- Toggle CSS classes
- Test styles live

**Network Tab:**
- Check API calls (when backend is added)
- Monitor bandwidth
- Check loading times

---

## 🔍 Debugging

### Console Logging

```typescript
export class MyComponent {
  onClick(): void {
    console.log('Button clicked!');
    console.log('Data:', this.data);
    console.error('Error occurred:', error);
    console.warn('Warning:', warning);
  }
}
```

### Browser Debugger

1. Open DevTools (F12)
2. Go to Sources tab
3. Click line number to set breakpoint
4. Trigger the code
5. Step through with controls

### Angular DevTools Extension

Install from Chrome Web Store:
- Inspect component hierarchy
- View component properties
- Check change detection

---

## 📚 Common Patterns

### Form with Validation

```html
<form #form="ngForm">
  <div class="form-group">
    <label for="email">Email</label>
    <input
      #email="ngModel"
      [(ngModel)]="formData.email"
      type="email"
      required
      minlength="5"
    >
    <div *ngIf="email.invalid && email.touched" class="error">
      Invalid email
    </div>
  </div>
  <button [disabled]="form.invalid">Submit</button>
</form>
```

### Conditional List

```html
<div *ngIf="items.length > 0; else emptyState">
  <div *ngFor="let item of items" [key]="item.id">
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
  </div>
</div>

<ng-template #emptyState>
  <p>No items found</p>
</ng-template>
```

### Modal/Dialog Pattern

```typescript
export class ParentComponent {
  showModal = false;

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
```

```html
<button (click)="openModal()">Open</button>

<div *ngIf="showModal" class="modal">
  <div class="modal-content">
    <h2>Modal Title</h2>
    <p>Modal content</p>
    <button (click)="closeModal()">Close</button>
  </div>
</div>
```

---

## 🚀 Performance Tips

### 1. Use OnPush Change Detection

```typescript
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-optimized',
  templateUrl: './optimized.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptimizedComponent {
  // Only updates when @Input changes or events occur
}
```

### 2. Unsubscribe from Observables

```typescript
import { Subscription } from 'rxjs';

export class Component implements OnDestroy {
  private subscription: Subscription;

  constructor(private service: MyService) {
    this.subscription = this.service.data$.subscribe(data => {
      // Handle data
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
```

Or use `async` pipe (handles unsubscribe automatically):

```html
<div *ngFor="let item of items$ | async">
  {{ item.name }}
</div>
```

### 3. Lazy Load Modules

```typescript
// In routing
const routes: Routes = [
  {
    path: 'users',
    loadComponent: () => import('./users/users.component')
      .then(m => m.UsersComponent)
  }
];
```

---

## 📦 Project Structure Best Practices

```
src/app/
├── components/              # UI Components
│   ├── header/
│   ├── footer/
│   ├── dashboard/
│   └── user-provisioning/
├── services/               # Business Logic
│   ├── user.service.ts
│   └── api.service.ts
├── models/                 # TypeScript Interfaces
│   └── user.model.ts
├── guards/                 # Route Guards
│   └── auth.guard.ts
└── app.component.ts        # Root Component
```

---

## 🔗 Useful Links

- **Angular Docs**: https://angular.dev
- **RxJS Docs**: https://rxjs.dev
- **CSS Variables**: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/

---

## 💡 Tips & Tricks

### Quick Component Generation

```bash
# Shorter command
ng g c my-component --skip-tests
# is equivalent to
ng generate component my-component --skip-tests
```

### View Compiled Files

```bash
ng build
# Check dist/ folder for production build
```

### Update Angular

```bash
ng update @angular/cli @angular/core
```

### Install New Package

```bash
npm install package-name
# Then import in component
import { Package } from 'package-name';
```

### Remove Package

```bash
npm uninstall package-name
```

---

## ⚠️ Common Mistakes to Avoid

❌ **Don't:** Forget to import CommonModule for *ngIf/*ngFor
✅ **Do:** `import { CommonModule } from '@angular/common';`

❌ **Don't:** Subscribe to the same observable multiple times
✅ **Do:** Use async pipe or unsubscribe in ngOnDestroy

❌ **Don't:** Directly modify arrays (mutate state)
✅ **Do:** Create new array: `newArray = [...oldArray, item]`

❌ **Don't:** Use any type
✅ **Do:** Use proper TypeScript types

❌ **Don't:** Forget trackBy in *ngFor with large lists
✅ **Do:** `*ngFor="let item of items; trackBy: trackByFn"`

---

## 📖 Next Steps

1. Make a small change to understand the workflow
2. Create a new component
3. Add a new feature
4. Connect to a backend API
5. Add authentication
6. Deploy to production

**Happy Coding! 🚀**
