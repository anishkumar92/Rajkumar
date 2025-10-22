# Windows Setup Guide - SaaS User Provisioning System

## 🪟 Setup for Windows (MINGW64/PowerShell/CMD)

### Prerequisites Check

Before starting, make sure you have:

1. **Node.js & npm**
   ```cmd
   node --version
   npm --version
   ```
   Should show v18+ and npm 9+

2. **Angular CLI**
   ```cmd
   ng version
   ```
   Should show Angular CLI 19+

### Option 1: Quick Start (Recommended)

Simply double-click **`RUN.bat`** in the project folder. It will:
- Check if dependencies are installed
- Install them if needed
- Start the development server
- Open the app in your browser

### Option 2: Manual Setup

#### Step 1: Open Command Prompt or PowerShell

Navigate to the project folder:
```cmd
cd C:\code\Rajkumar\saas-user-provisioning
```

#### Step 2: Install Dependencies

```cmd
npm install
```

**If you get permission errors:**
```cmd
npm install --legacy-peer-deps
```

**If npm cache is corrupt:**
```cmd
npm cache clean --force
npm install
```

#### Step 3: Start Development Server

```cmd
ng serve -o
```

This will:
- Start the development server
- Automatically open http://localhost:4200
- Enable hot reload (changes appear instantly)

### Troubleshooting Windows Issues

#### Issue 1: Port 4200 Already in Use

Use a different port:
```cmd
ng serve -o --port 4300
```

#### Issue 2: Permission Denied Errors

**Solution A: Run as Administrator**
1. Right-click Command Prompt or PowerShell
2. Select "Run as Administrator"
3. Navigate to project folder
4. Run npm install

**Solution B: Use --force flag**
```cmd
npm cache clean --force
npm install --legacy-peer-deps
```

**Solution C: Clear node_modules**
```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
```

#### Issue 3: ng command not found

Make sure Angular CLI is installed globally:
```cmd
npm install -g @angular/cli
```

#### Issue 4: esbuild platform mismatch

Clear cache and reinstall:
```cmd
npm cache clean --force
rmdir /s /q node_modules
del package-lock.json
npm install
```

#### Issue 5: Module not found errors

Restart development server:
```cmd
Ctrl+C  (to stop)
ng serve -o  (to restart)
```

### Build for Production

To create a production build:

```cmd
ng build --configuration production
```

The build files will be in `dist/saas-user-provisioning/` folder.

### Development Server Commands

```cmd
# Start with auto-open browser
ng serve -o

# Start on specific port
ng serve --port 4300 -o

# Build production
ng build --configuration production

# Run tests
ng test

# Check project issues
ng lint
```

### Project Paths on Windows

```
C:\code\Rajkumar\saas-user-provisioning\
├── src\
│   ├── app\
│   │   ├── components\
│   │   │   ├── header\
│   │   │   ├── footer\
│   │   │   ├── sidebar\
│   │   │   ├── dashboard\
│   │   │   └── user-provisioning\
│   │   └── services\
│   │       └── user.service.ts
│   └── styles.css
├── RUN.bat               (Double-click to start!)
├── QUICKSTART.md         (Quick reference)
├── FEATURES.md          (Detailed features)
├── README.md            (Full documentation)
└── SETUP_WINDOWS.md     (This file)
```

### File Editing on Windows

You can edit the files with any code editor:

- **Visual Studio Code** (Recommended)
  ```cmd
  code C:\code\Rajkumar\saas-user-provisioning
  ```

- **Open in File Explorer**
  ```cmd
  explorer .
  ```

- **Edit in Notepad** (Not recommended, but works)

### Hot Reload / Live Editing

While `ng serve` is running:
1. Make changes to `.ts` or `.html` files
2. Save the file (Ctrl+S)
3. Browser automatically refreshes
4. Changes appear instantly

### Browser Tools

Press **F12** in your browser to open Developer Tools:
- **Console** - See any JavaScript errors
- **Elements** - Inspect HTML structure
- **Network** - Check API calls (when added)
- **Application** - View local storage, cookies
- **Device Toolbar** - Test mobile responsiveness (Ctrl+Shift+M)

### Common Windows Commands

```cmd
# List files
dir

# Change directory
cd folder-name

# Go to parent directory
cd ..

# Go to root
cd \

# Clear console
cls

# Check port usage
netstat -ano | findstr :4200

# Kill process on port 4200 (PowerShell as Admin)
Stop-Process -Id XXXX -Force
```

### VS Code Extensions (Recommended)

Install these extensions in VS Code for better development:

1. **Angular Language Service**
2. **TypeScript Vue Plugin**
3. **Prettier** (code formatter)
4. **ES7+ React/Redux/React-Native snippets**
5. **Rainbow Brackets**

### Git Integration

If you want to use Git:

```cmd
# Initialize git
git init

# Check status
git status

# Add files
git add .

# Create commit
git commit -m "Initial commit"
```

### Performance Tips

- **Save files often** (Ctrl+S) for incremental builds
- **Use Chrome/Edge** for better development experience
- **Close unused apps** to save RAM
- **Use `ng serve` not `npm start`** for better control

### Getting Help

**Error in Console?**
1. Read the error message carefully
2. Google the error
3. Check Angular docs: https://angular.dev

**Port Already in Use?**
```cmd
ng serve --port 4300 -o
```

**Stuck? Reset Everything:**
```cmd
rmdir /s /q node_modules
del package-lock.json
del .angular  (if it exists)
npm install
ng serve -o
```

### Next Steps

1. Start the server (double-click `RUN.bat`)
2. Open http://localhost:4200
3. Explore the application
4. Try the 3 dropdowns to manage users
5. Read FEATURES.md for full details

### Windows-Specific Notes

- **Paths use backslashes** (C:\folder\file)
- **npm is case-insensitive** but Angular components are case-sensitive
- **Line endings:** Windows uses CRLF, Linux uses LF (usually auto-handled)
- **Permissions:** May need admin for global npm installs

---

**Happy coding on Windows! 🚀**

For complete documentation, see **README.md**
