# 🚀 SharePay Deployment Guide

## 🌟 **Option 1: Railway (Recommended - FREE)**

Railway is perfect for full-stack apps and offers generous free tier.

### Steps:

1. **Sign up for Railway**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub (recommended)

2. **Create a new project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your GitHub account
   - Select your SharePay repository

3. **Configure environment variables**
   - In Railway dashboard, go to your project
   - Click "Variables" tab
   - Add these variables:
     ```
     VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key
     VITE_STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
     VITE_EMAIL_USER=your-email@gmail.com
     VITE_EMAIL_PASSWORD=your-gmail-app-password
     VITE_FIREBASE_API_KEY=your-firebase-api-key
     VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
     VITE_FIREBASE_PROJECT_ID=your-project-id
     VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
     VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
     VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
     ```

4. **Deploy**
   - Railway will automatically deploy your app
   - You'll get a live URL like: `https://your-app.railway.app`

---

## 🌟 **Option 2: Render (FREE)**

Render is another excellent free option for full-stack apps.

### Steps:

1. **Sign up for Render**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create a new Web Service**
   - Click "New +"
   - Select "Web Service"
   - Connect your GitHub repo

3. **Configure the service**
   - **Build Command**: `npm run postinstall`
   - **Start Command**: `npm start`
   - **Environment**: `Node`

4. **Add environment variables**
   - In the Environment section, add all your env variables
   - Same variables as Railway above

5. **Deploy**
   - Click "Create Web Service"
   - You'll get a URL like: `https://your-app.onrender.com`

---

## 🌟 **Option 3: Vercel (FREE)**

Great for React apps with serverless functions.

### Steps:

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Deploy the frontend**
   - Click "New Project"
   - Select your repo
   - Set root directory to `client`
   - Add all environment variables

3. **Deploy serverless functions**
   - Create `api/` folder in root
   - Convert your Express routes to Vercel functions
   - Deploy

---

## 🌟 **Option 4: Netlify (FREE)**

Excellent for static sites with serverless functions.

### Steps:

1. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Connect GitHub

2. **Deploy frontend**
   - New site from Git
   - Build command: `cd client && npm run build`
   - Publish directory: `client/dist`

3. **Add serverless functions**
   - Create `netlify/functions/` folder
   - Convert your API routes to Netlify functions

---

## 🚀 **Quick Deploy Commands**

### For Railway/Render:
```bash
# Make sure your app is ready
npm run postinstall
npm start

# Should work on localhost:3001
```

### For Vercel:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## 📋 **Pre-deployment Checklist**

- [ ] All environment variables are configured
- [ ] App builds successfully locally
- [ ] API routes work with relative URLs
- [ ] Firebase config is correct
- [ ] Stripe keys are valid
- [ ] Email service is configured
- [ ] No hardcoded localhost URLs

---

## 🎯 **Recommended: Railway**

**Why Railway is the best choice:**
- ✅ **Free tier**: $5/month in credits (covers most small apps)
- ✅ **Full-stack support**: Hosts both frontend and backend
- ✅ **Automatic deployments**: Git push to deploy
- ✅ **Easy environment variables**: Simple dashboard setup
- ✅ **Custom domains**: Free SSL certificates
- ✅ **Database support**: PostgreSQL, Redis, MySQL available
- ✅ **Logs and monitoring**: Built-in debugging tools

**Perfect for client demos and production apps!**

---

## 🔧 **After Deployment**

1. **Test all features**:
   - User registration/login
   - Product browsing
   - Cart functionality
   - Payment processing
   - Email notifications
   - Admin dashboard

2. **Share your live demo**:
   - Copy the deployment URL
   - Share with clients: `https://your-app.railway.app`
   - No more "localhost" issues!

3. **Monitor performance**:
   - Check logs in Railway dashboard
   - Monitor payment processing
   - Track user registrations

---

## 🆘 **Troubleshooting**

**Build fails?**
- Check environment variables
- Verify all dependencies are in package.json
- Check build logs for specific errors

**API not working?**
- Ensure relative URLs are used (`/api/...`)
- Check server logs
- Verify environment variables are set

**Email not sending?**
- Check Gmail app password
- Verify email credentials
- Check server logs for SMTP errors

---

## 🎉 **You're Ready to Go!**

Your SharePay app is now production-ready and can be easily deployed to show clients and users. The live demo will showcase all features professionally!

**Next steps:**
1. Choose Railway (recommended)
2. Set up your environment variables
3. Deploy and get your live URL
4. Share with clients and users
5. Start taking real payments! 💰 