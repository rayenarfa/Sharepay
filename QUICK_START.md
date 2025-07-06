# 🚀 SharePay Quick Start Guide

Welcome to SharePay! Your application has been professionally reorganized into a clean client-server architecture.

## 📁 New Project Structure

```
pfeapp-main/
├── client/              # React Frontend Application
│   ├── src/            # React components and pages
│   ├── public/         # Static assets (logo, icons)
│   ├── package.json    # Client dependencies
│   └── README.md       # Client documentation
├── server/              # Node.js Backend Server
│   ├── server.js       # Main server file
│   ├── server-utils.js # Server utilities
│   ├── functions/      # Firebase functions
│   ├── package.json    # Server dependencies
│   └── README.md       # Server documentation
├── .env.local          # Environment variables (secure)
├── start.ps1           # Quick start script
├── package.json        # Root package.json with scripts
└── README.md           # Main documentation
```

## ⚡ Super Quick Start

### Option 1: Use the Start Script (Windows)
```powershell
.\start.ps1
```

### Option 2: Manual Start
```bash
# Install all dependencies
npm run install:all

# Start both client and server
npm run dev:full
```

## 🔧 Manual Setup (Step by Step)

### 1. Install Dependencies
```bash
# Client dependencies
cd client
npm install

# Server dependencies  
cd ../server
npm install

# Back to root
cd ..
```

### 2. Environment Configuration
- Copy `.env.example` to `.env.local` (if not already done)
- Fill in your credentials in `.env.local`

### 3. Start Development Servers
```bash
# Start client (React) - Port 5173
cd client && npm run dev

# Start server (Node.js) - Port 3001  
cd server && npm run dev
```

## 🌐 Access Your Application

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3001

## 📚 Documentation

- **Main Project**: [README.md](./README.md)
- **Client (React)**: [client/README.md](./client/README.md)
- **Server (Node.js)**: [server/README.md](./server/README.md)

## 🎯 Available Scripts

```bash
# Development
npm run dev:client      # Start React dev server
npm run dev:server      # Start Node.js dev server  
npm run dev:full        # Start both servers

# Production
npm run build:client    # Build React for production
npm run start:server    # Start production server

# Utilities
npm run install:all     # Install all dependencies
npm run clean          # Clean node_modules and build files
```

## ✅ What's Been Secured

- ✅ All hardcoded credentials removed
- ✅ Environment variables properly configured
- ✅ Gmail and Stripe keys secured
- ✅ Professional project structure
- ✅ Comprehensive documentation

## 🚀 Ready for Production

Your SharePay application is now:
- **Secure** - No exposed credentials
- **Organized** - Clean client-server separation
- **Documented** - Comprehensive README files
- **Professional** - Ready for sale or deployment

---

**Happy coding! 🎁✨** 