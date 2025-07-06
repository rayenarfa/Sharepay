# ⚡ SharePay Server - Node.js Backend

**Robust Backend API for Gift Card E-commerce Platform**

The SharePay server is a powerful Node.js backend that handles payment processing, email services, and API management for the gift card e-commerce platform. Built with security, scalability, and performance in mind.

## 🚀 Quick Start

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Setup environment variables (in root directory)
cp ../.env.example ../.env.local

# Start development server
npm run dev

# Start production server
npm start
```

## 🛠️ Tech Stack

### Core Technologies
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **ES Modules** - Modern JavaScript module system
- **TypeScript Support** - Type definitions for better development

### Payment Processing
- **Stripe** - Secure payment processing
- **Payment Intents API** - Modern payment flow
- **Webhook Support** - Real-time payment events
- **Customer Management** - Stripe customer creation

### Email Services
- **Nodemailer** - Email delivery service
- **Gmail Integration** - SMTP email sending
- **HTML Templates** - Rich email formatting
- **PDF Attachments** - Invoice generation and delivery

### PDF Generation
- **jsPDF** - Client-side PDF generation
- **PDFKit** - Server-side PDF creation
- **Invoice Templates** - Professional invoice layouts
- **Dynamic Content** - Order-specific information

### Security & Configuration
- **CORS** - Cross-origin resource sharing
- **Environment Variables** - Secure configuration
- **Input Validation** - Data sanitization
- **Error Handling** - Comprehensive error management

## 📁 Project Structure

```
server/
├── server.js              # Main server file
├── server-utils.js        # Utility functions
├── functions/             # Firebase Cloud Functions
│   ├── index.js          # Functions entry point
│   └── sendInvoice.js    # Invoice sending function
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## ✨ Key Features

### 💳 Payment Processing

#### **Stripe Integration**
- Secure payment intent creation
- Support for multiple payment methods
- Automatic customer creation
- Receipt email delivery
- Currency conversion support
- Error handling and validation

#### **Payment Flow**
```javascript
POST /api/create-payment-intent
{
  "amount": 100.00,
  "items": [...],
  "shippingAddress": {...}
}
```

#### **Security Features**
- PCI DSS compliance through Stripe
- Secure API key management
- Amount validation and sanitization
- Customer data protection
- Transaction logging

### 📧 Email Services

#### **Invoice Delivery**
- Automated invoice generation
- Professional email templates
- PDF invoice attachments
- Gift card key delivery
- Order confirmation emails
- Custom email subjects

#### **Email Templates**
- HTML-formatted emails
- Responsive design
- Brand customization
- Multi-language support
- Rich content formatting

#### **Email Flow**
```javascript
POST /api/send-invoice
{
  "order": {...},
  "subject": "Your SharePay Invoice"
}
```

### 📄 PDF Generation

#### **Invoice Creation**
- Professional invoice layouts
- Company branding
- Order details and itemization
- Tax calculations
- Payment information
- Gift card keys display

#### **Dynamic Content**
- Order-specific information
- Customer details
- Product information
- Pricing and totals
- Terms and conditions

### 🔐 Security Features

#### **Environment Variables**
- Secure credential management
- API key protection
- Database connection strings
- Email configuration
- Development/production configs

#### **Input Validation**
- Request data sanitization
- Type checking
- Required field validation
- Format validation
- SQL injection prevention

#### **Error Handling**
- Comprehensive error logging
- User-friendly error messages
- Security error masking
- Performance monitoring
- Debugging information

## 🔧 Configuration

### Environment Variables
The server uses environment variables from the root `.env.local` file:

```env
# Stripe Configuration
VITE_STRIPE_SECRET_KEY=sk_test_...
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Email Configuration
VITE_EMAIL_USER=your_gmail@gmail.com
VITE_EMAIL_PASSWORD=your_app_password

# Server Configuration
PORT=3001
```

### Gmail App Password Setup
1. Enable 2-factor authentication on your Google account
2. Go to Google Account settings
3. Generate an App Password for "Mail"
4. Use this password in `VITE_EMAIL_PASSWORD`

### Stripe Configuration
1. Create a Stripe account
2. Get your secret key from the dashboard
3. Set up webhooks for payment events
4. Configure payment methods and currencies

## 📡 API Endpoints

### Payment Processing

#### Create Payment Intent
```http
POST /api/create-payment-intent
Content-Type: application/json

{
  "amount": 100.00,
  "items": [
    {
      "id": "gc_001",
      "name": "Amazon Gift Card",
      "quantity": 1,
      "price": 100.00
    }
  ],
  "shippingAddress": {
    "email": "customer@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

**Response:**
```json
{
  "clientSecret": "pi_3N..."
}
```

#### Send Invoice
```http
POST /api/send-invoice
Content-Type: application/json

{
  "order": {
    "orderNumber": "ORD-001",
    "customerEmail": "customer@example.com",
    "total": 100.00,
    "items": [...],
    "shippingAddress": {...}
  },
  "subject": "Your SharePay Invoice"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Invoice sent successfully."
}
```

## 🚀 Performance Optimizations

### Server Performance
- Express.js middleware optimization
- Efficient routing
- Connection pooling
- Memory management
- CPU optimization

### API Performance
- Response compression
- Caching strategies
- Database query optimization
- Async/await patterns
- Error boundary handling

### Email Performance
- Connection reuse
- Batch processing
- Queue management
- Retry mechanisms
- Delivery tracking

## 📊 Monitoring & Logging

### Error Tracking
- Comprehensive error logging
- Stack trace capture
- Performance monitoring
- Health checks
- Uptime monitoring

### Analytics
- API usage tracking
- Payment success rates
- Email delivery rates
- Performance metrics
- User behavior analysis

### Debugging
- Development logging
- Debug mode configuration
- Request/response logging
- Performance profiling
- Memory usage tracking

## 🔒 Security Best Practices

### API Security
- CORS configuration
- Rate limiting
- Input validation
- SQL injection prevention
- XSS protection

### Data Protection
- Environment variable security
- API key rotation
- Secure headers
- HTTPS enforcement
- Data encryption

### Payment Security
- PCI compliance
- Secure token handling
- Payment data isolation
- Fraud detection
- Transaction monitoring

## 🧪 Testing Strategy

### Unit Testing
- API endpoint testing
- Function testing
- Error handling testing
- Mock integrations
- Coverage reporting

### Integration Testing
- Stripe integration testing
- Email service testing
- Database integration
- Third-party API testing
- End-to-end workflows

### Load Testing
- Concurrent user testing
- Payment processing load
- Email delivery capacity
- Database performance
- Memory usage testing

## 📈 Scalability Features

### Horizontal Scaling
- Stateless server design
- Load balancer compatible
- Session management
- Database scaling
- Cache distribution

### Vertical Scaling
- CPU optimization
- Memory management
- Database optimization
- Connection pooling
- Resource monitoring

### Cloud Deployment
- Docker containerization
- Kubernetes orchestration
- Auto-scaling groups
- Load balancing
- Health monitoring

## 🌟 Why Choose This Backend?

### 💰 Business Benefits
- **Secure Payments** - PCI DSS compliant through Stripe
- **Automated Processes** - Reduce manual work
- **Professional Invoices** - Brand-consistent communications
- **Scalable Architecture** - Handle growth seamlessly

### 🚀 Technical Benefits
- **Modern Stack** - Latest Node.js and ES modules
- **Type Safety** - TypeScript definitions included
- **Error Handling** - Comprehensive error management
- **Documentation** - Well-documented API endpoints

### 🔧 Developer Experience
- **Easy Setup** - Simple configuration
- **Clear Architecture** - Well-organized code
- **Extensible** - Easy to add new features
- **Maintainable** - Clean, readable code

## 📞 API Documentation

### Swagger/OpenAPI
- Complete API documentation
- Interactive testing interface
- Schema validation
- Example requests/responses
- Authentication documentation

### Postman Collection
- Ready-to-use API collection
- Environment configurations
- Test scripts
- Documentation
- Automated testing

## 🔄 Deployment Options

### Local Development
```bash
npm run dev
```

### Production Deployment
```bash
npm start
```

### Cloud Platforms
- **AWS EC2** - Virtual server hosting
- **Google Cloud** - App Engine deployment
- **Heroku** - Platform-as-a-Service
- **DigitalOcean** - Droplet hosting
- **Firebase Functions** - Serverless deployment

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
```

### Environment-Specific Configs
- Development environment
- Staging environment
- Production environment
- Testing environment
- CI/CD pipeline integration

## 🛡️ Maintenance & Support

### Regular Updates
- Security patches
- Dependency updates
- Performance improvements
- Feature enhancements
- Bug fixes

### Monitoring
- Server health checks
- Performance monitoring
- Error rate tracking
- Uptime monitoring
- Alert notifications

### Backup & Recovery
- Database backups
- Configuration backups
- Disaster recovery
- Data retention policies
- Recovery procedures

---

**Power your gift card platform with a robust, secure backend! 🚀** 