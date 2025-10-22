@echo off
REM SaaS User Provisioning System - Quick Start Script for Windows

echo.
echo ====================================================
echo   SaaS User Provisioning System - Quick Start
echo ====================================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    echo This may take 2-3 minutes on first run.
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo ERROR: npm install failed
        echo Please try running: npm install
        pause
        exit /b 1
    )
)

echo.
echo Starting development server...
echo The app will open automatically in your browser.
echo Press Ctrl+C to stop the server.
echo.

call ng serve -o

pause
