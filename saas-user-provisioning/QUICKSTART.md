# Quick Start Guide - SaaS User Provisioning System

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd saas-user-provisioning
npm install
```

### Step 2: Start Development Server
```bash
ng serve -o
```
The application will automatically open in your browser at `http://localhost:4200/`

### Step 3: Explore the Application
- **Header** - Top navigation bar with app title and user menu
- **Sidebar** - Left navigation with 5 main sections
- **Dashboard** - Main content area with stats and provisioning tool
- **User Provisioning** - The core feature with 3 dropdowns

---

## 📋 User Provisioning Guide

### How to Add/Remove Users

1. **Step 1: Select Department**
   - Choose from: Engineering, Marketing, Sales, Finance, Human Resources
   - This helps filter and categorize users

2. **Step 2: Select Role**
   - Choose from: Administrator, Manager, Standard User, Viewer
   - Defines the access level

3. **Step 3: Select Group**
   - Choose the group you want to manage
   - Available groups: Administrators, Developers, Viewers
   - Shows member count next to each group

### Managing Group Members

Once you select a group, you'll see:

**Left Panel - Group Members:**
- Shows all users currently in the selected group
- Click "Remove" to remove a user from the group
- Displays user name, email, and role badge

**Right Panel - Available Users:**
- Shows all users NOT in the selected group
- Click "Add" to add a user to the group
- Changes update in real-time

---

## 🎨 Customizing the Theme

All colors, spacing, and fonts are defined in `src/styles.css` using CSS variables.

### Change Primary Color
Edit `src/styles.css` line 4:
```css
--primary-color: #1e88e5;  /* Change this hex color */
```

### Change Spacing
Edit spacing variables (lines 32-37):
```css
--spacing-md: 16px;  /* Change any spacing value */
```

### Common Theme Changes
- **Dark Blue Sidebar** - Change `--primary-color` and `--primary-dark`
- **Green Theme** - Replace blue hex codes with green equivalents
- **Larger Text** - Increase `--font-size-*` values

---

## 📱 Responsive Behavior

- **Desktop (≥ 768px)** - Full sidebar visible, 2-column user list
- **Tablet (768px - 480px)** - Sidebar width optimized
- **Mobile (≤ 480px)** - Sidebar hidden, single column layout

Test responsiveness by resizing your browser window or using DevTools (F12 → Toggle Device Toolbar).

---

## 🔧 Troubleshooting

### Port 4200 Already in Use
```bash
ng serve --port 4300 -o
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Style Not Updating
- Clear browser cache (Ctrl+Shift+Delete)
- Restart development server
- Hard refresh (Ctrl+Shift+R)

---

## 📂 Project Structure

```
saas-user-provisioning/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   ├── sidebar/
│   │   │   ├── dashboard/
│   │   │   └── user-provisioning/
│   │   ├── services/
│   │   │   └── user.service.ts
│   │   ├── app.component.ts
│   │   └── app.component.html
│   ├── styles.css          (Global theme)
│   └── index.html
├── README.md               (Full documentation)
├── QUICKSTART.md          (This file)
└── package.json
```

---

## 💡 Key Features

✅ **Header** - Professional navigation
✅ **Sidebar** - Quick access menu
✅ **Dashboard** - Overview with metrics
✅ **3 Dropdowns** - Department, Role, Group filters
✅ **User Management** - Add/Remove users from groups
✅ **Real-time Updates** - Instant UI synchronization
✅ **Responsive Design** - Works on all devices
✅ **Light Blue Theme** - Professional appearance

---

## 🎓 Learning Resources

### Angular Concepts Used
- Components and Modules
- Services and Dependency Injection
- RxJS Observables and Operators
- Two-way Data Binding (ngModel)
- Structural Directives (*ngIf, *ngFor)
- Event Binding and Click Handlers

### Further Customization
- Add more groups in `user.service.ts`
- Customize form validation
- Add more filter options
- Connect to backend API
- Add authentication

---

## 📞 Support

For full documentation, see **README.md**

Questions or issues? Refer to the Angular documentation:
- https://angular.io/docs
- https://angular.dev

---

Happy coding! 🚀
