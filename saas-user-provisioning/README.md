# SaaS User Provisioning System

A modern, professional Angular-based SaaS application for managing user access and provisioning to groups with an intuitive interface.

## Features

✨ **Key Features:**
- **Header Component** - Professional sticky navigation bar with logo, main menu, and user controls
- **Responsive Sidebar** - Collapsible navigation menu with emoji icons for quick access
- **Dashboard** - Comprehensive overview with key metrics and statistics
- **User Provisioning** - Advanced user access management with:
  - 3 Dropdown Filters (Department, Role, Group selection)
  - Real-time user assignment/removal from groups
  - Split-view showing assigned and available users
  - Live member count badges
- **Footer** - Multi-column footer with product, company, legal, and social links
- **Light Blue Professional Theme** - Fully customizable CSS variables for easy theming
- **Responsive Design** - Mobile-friendly layout that works on all device sizes

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/           # Header navigation component
│   │   ├── footer/           # Footer component
│   │   ├── sidebar/          # Side navigation menu
│   │   ├── dashboard/        # Main dashboard with stats
│   │   └── user-provisioning/ # User access management component
│   ├── services/
│   │   └── user.service.ts   # User and group management service
│   ├── app.component.ts      # Root component
│   └── app.component.html    # Root template
├── styles.css                # Global theme and styling (customizable)
└── index.html               # HTML entry point
```

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19 or higher)

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd saas-user-provisioning
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Development Server

To start the development server with live reload:

```bash
ng serve -o
```

The application will automatically open in your default browser at `http://localhost:4200/`.

## Building for Production

To create a production build:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## Usage

### Dashboard
The main dashboard displays:
- Total Users count
- Active Groups count
- Pending Access requests
- Provisioning percentage

### User Provisioning
1. **Select Department** - Choose the department (Engineering, Marketing, Sales, Finance, HR)
2. **Select Role** - Choose the role level (Administrator, Manager, Standard User, Viewer)
3. **Select Group** - Choose the group to manage access for

Once a group is selected:
- **Left Panel** - Shows current group members with Remove buttons
- **Right Panel** - Shows available users with Add buttons
- Real-time updates as you add/remove users

### Theming

The application uses CSS custom properties for easy customization. Edit `src/styles.css` to change:

#### Color Variables
```css
--primary-color: #1e88e5;        /* Main blue color */
--primary-dark: #1565c0;         /* Darker blue */
--primary-light: #64b5f6;        /* Light blue */
--primary-lighter: #bbdefb;      /* Very light blue */
--secondary-color: #0097a7;      /* Teal color */

/* Status Colors */
--success-color: #4caf50;        /* Green */
--warning-color: #ff9800;        /* Orange */
--danger-color: #f44336;         /* Red */
--info-color: #2196f3;           /* Info blue */
```

#### Spacing Variables
```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
```

#### Font Sizes
```css
--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-md: 16px;
--font-size-lg: 18px;
--font-size-xl: 24px;
```

Simply update these values in `src/styles.css` to customize the entire application theme globally.

## Service: UserService

The `UserService` manages all user and group operations:

### Methods
- `getGroups()` - Returns Observable of all groups
- `getUsers()` - Returns Observable of all users
- `addUserToGroup(groupId, user)` - Add a user to a group
- `removeUserFromGroup(groupId, userId)` - Remove a user from a group
- `getUnassignedUsers(groupId)` - Get users not assigned to a specific group

### Interfaces
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface Group {
  id: string;
  name: string;
  users: User[];
  permissions: string[];
}
```

## Responsive Breakpoints

- **Desktop** - Full sidebar and multi-column layout (> 768px)
- **Tablet** - Optimized sidebar width (≤ 768px)
- **Mobile** - Hidden sidebar, stacked layout (≤ 480px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **Angular** 19.x - Frontend framework
- **TypeScript** - Programming language
- **RxJS** - Reactive programming
- **CSS3** - Styling with CSS custom properties

## Development Notes

### Generated with Angular CLI
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

### Code Generation
To generate new components:
```bash
ng generate component components/component-name
```

To generate new services:
```bash
ng generate service services/service-name
```

## Future Enhancements

- API integration for backend data
- User authentication and authorization
- Advanced role-based access control (RBAC)
- Audit logging and activity tracking
- Email notifications for access changes
- Bulk user import/export
- Permission templates
- Group hierarchy and inheritance

## License

MIT License - This project is open source and available for commercial use.

## Support

For issues or questions, please create an issue in the project repository.
