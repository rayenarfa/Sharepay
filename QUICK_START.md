

## ⚡ Quick Start



### Start
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
