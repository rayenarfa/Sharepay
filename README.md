# 🎁 SharePay - Premium Gift Card E-commerce Platform

**Your Complete Solution for Digital Gift Card Sales & Management**

SharePay is a modern, full-stack e-commerce platform specifically designed for selling and managing digital gift cards. Built with the latest technologies, it provides a seamless experience for both customers and administrators.

## 🚀 Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd pfeapp-main

# Install dependencies for both client and server
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Start the development servers
npm run dev:full
```

## 🏗️ Project Structure

```
pfeapp-main/
├── client/          # React Frontend Application
├── server/          # Node.js Backend Server
├── .env.local       # Environment Variables
├── firebase.json    # Firebase Configuration
└── README.md        # This file
```

## 🛠️ Tech Stack

### Frontend (Client)
- **React 19** - Modern UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **Firebase** - Authentication & database
- **Stripe** - Payment processing

### Backend (Server)
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Stripe** - Payment processing
- **Nodemailer** - Email services
- **PDFKit** - Invoice generation

## ✨ Key Features

### 🛍️ Customer Experience
- **Modern UI/UX** - Clean, responsive design
- **Secure Authentication** - Firebase Auth with Google/Email
- **Gift Card Categories** - Organized product browsing
- **Advanced Search** - Find products quickly
- **Secure Payments** - Stripe-powered checkout
- **Instant Delivery** - Digital gift cards delivered via email
- **Order History** - Track all purchases

### 👨‍💼 Admin Management
- **Admin Dashboard** - Complete control panel
- **Product Management** - Add/edit/delete gift cards
- **Order Management** - Track and manage orders
- **User Management** - Monitor user accounts
- **Analytics** - Sales and performance insights

### 🔐 Security & Performance
- **Secure Payment Processing** - PCI DSS compliant
- **Environment Variables** - Secure credential management
- **Rate Limiting** - API protection
- **Data Validation** - Input sanitization
- **Responsive Design** - Mobile-first approach

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Firebase account
- Stripe account
- Gmail account (for email services)

## 🎯 Installation & Setup

### 1. Environment Setup
Create a `.env.local` file with the following variables:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
VITE_STRIPE_SECRET_KEY=your_stripe_secret_key

# Email Configuration
VITE_EMAIL_USER=your_gmail_address
VITE_EMAIL_PASSWORD=your_gmail_app_password
```

### 2. Client Setup
```bash
cd client
npm install
npm run dev
```

### 3. Server Setup
```bash
cd server
npm install
npm run dev
```

## 📚 Documentation

- [Client Documentation](./client/README.md)
- [Server Documentation](./server/README.md)

## 🎯 Why Choose SharePay?

### 💰 Revenue Generation
- **Proven Business Model** - Gift cards are a $160B+ industry
- **High Margins** - Digital products with minimal overhead
- **Recurring Revenue** - Customer retention through gift cards
- **Scalable Platform** - Handle thousands of transactions

### 🚀 Technical Excellence
- **Modern Architecture** - Future-proof technology stack
- **Scalable Design** - Handles growth seamlessly
- **Security First** - Enterprise-grade security
- **Mobile Optimized** - 60%+ of sales happen on mobile

### 🎨 User Experience
- **Beautiful Design** - Convert browsers to buyers
- **Fast Performance** - Sub-second load times
- **Intuitive Interface** - Easy for all age groups
- **Accessibility** - WCAG 2.1 compliant

### 🔧 Developer Friendly
- **Clean Code** - Well-documented and maintainable
- **TypeScript** - Type safety reduces bugs
- **Modern Tools** - Latest development practices
- **Easy Customization** - Brand it as your own

## 🌟 Perfect For

- **E-commerce Businesses** - Add gift cards to existing stores
- **Startups** - Launch a gift card marketplace
- **Agencies** - White-label solution for clients
- **Enterprises** - Corporate gift card programs

## 📞 Support & Contact

For technical support or business inquiries:
- Email: [arfarayen20@gmail.com]
- Live Demo: [https://pfe2025-d05c3.web.app/]

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Ready to launch your gift card empire? Get SharePay today! 🚀**


