# Deployment Guide

## Overview

This guide covers deploying the IGSB Landing Page to various platforms.

## Pre-Deployment Checklist

Before deploying to production:

- [ ] All TypeScript errors resolved
- [ ] ESLint checks passing
- [ ] Production build successful
- [ ] All environment variables configured
- [ ] SEO metadata verified
- [ ] Mobile responsiveness tested
- [ ] All links checked
- [ ] Images optimized
- [ ] Performance metrics acceptable
- [ ] Security headers configured

## Environment Variables

Create `.env.production` with:
```env
NEXT_PUBLIC_SITE_URL=https://indiragsb.edu.in
NEXT_PUBLIC_SITE_NAME=IGSB Pune
NEXT_PUBLIC_CONTACT_EMAIL=mba.admissions@indiragsb.edu.in
NEXT_PUBLIC_CONTACT_PHONE=+91 9657856103
```

## Build Optimization

### Build for Production
```bash
npm run build
```

This will:
- Optimize code for production
- Generate static and dynamic routes
- Minify assets
- Tree-shake unused code

### Verify Build
```bash
npm start
```

Visit the site and verify all pages load correctly.

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the creator of Next.js and offers seamless integration.

1. **Connect Repository**
   ```bash
   npx vercel login
   ```

2. **Deploy**
   ```bash
   npx vercel
   ```

3. **Configure Environment Variables**
   - Go to Vercel dashboard
   - Navigate to Settings > Environment Variables
   - Add production environment variables

4. **Domain Setup**
   - Add custom domain in Vercel dashboard
   - Configure DNS records

### Option 2: Netlify

1. **Install CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod
   ```

3. **Configure**
   - Set environment variables in Netlify dashboard
   - Configure domain settings

### Option 3: Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY public ./public

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t igsb-landing .
docker run -p 3000:3000 igsb-landing
```

### Option 4: Traditional Server (Node.js)

1. **Build**
   ```bash
   npm run build
   npm install --production
   ```

2. **Transfer to Server**
   ```bash
   scp -r .next node_modules package*.json user@server:/path/to/app
   ```

3. **Run on Server**
   ```bash
   pm2 start npm --name "igsb-landing" -- start
   ```

### Option 5: Cloudflare Pages

1. **Connect Repository**
   - Go to Cloudflare Pages
   - Create new project
   - Connect Git repository

2. **Configure Build**
   - Build command: `npm run build`
   - Build output directory: `.next`

3. **Environment Variables**
   - Add in Cloudflare Pages settings

## SSL/TLS Certificate

### For Custom Domain

1. **Let's Encrypt (Free)**
   - Many hosting providers include this
   - Auto-renewal supported

2. **CloudFlare SSL**
   - Free SSL included with Cloudflare
   - Automatic renewal

3. **AWS Certificate Manager**
   - Free SSL certificates
   - Auto-renewal

## DNS Configuration

### For indiragsb.edu.in

1. **Point to CDN**
   ```
   Address: cdn.example.com (from provider)
   Type: CNAME
   ```

2. **Email Records**
   ```
   MX Record: mail.example.com
   SPF Record: v=spf1 include:example.com ~all
   DKIM: (from email provider)
   ```

## Performance Optimization

### Enable Caching
- Set cache headers in deployment platform
- Cache static assets for 1 year
- Cache dynamic content for shorter periods

### CDN Configuration
- Serve images through CDN
- Enable gzip compression
- Use Next.js Image Optimization

### Core Web Vitals
Monitor in:
- Google PageSpeed Insights
- Vercel Analytics
- Web Vitals API

## Security Headers

Configure headers in `next.config.ts`:
```typescript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ]
}
```

## SSL Configuration

### Vercel
- Automatic SSL certificate
- Auto-renewal
- No configuration needed

### Custom Server
```bash
# Using Let's Encrypt with Certbot
certbot certonly --standalone -d indiragsb.edu.in

# Configure Node.js with HTTPS
# See Node.js docs for SSL setup
```

## Monitoring

### Error Tracking
- Set up Sentry for error monitoring
- Configure alerts

### Analytics
- Google Analytics 4
- Vercel Analytics
- Custom tracking

### Uptime Monitoring
- UptimeRobot
- Pingdom
- StatusCake

## Continuous Integration/Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build
      - uses: vercel/action@main
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Rollback Procedure

### Vercel
- Go to Deployments tab
- Click on previous deployment
- Click "Promote to Production"

### Traditional Server
```bash
# Keep backup of previous build
cp -r .next .next.backup
# Deploy new build
# If issues, restore
cp -r .next.backup .next
```

## Maintenance

### Regular Tasks
- Monitor error logs
- Check performance metrics
- Update dependencies monthly
- Review security advisories
- Backup database (if applicable)

### Version Updates
```bash
# Check for updates
npm outdated

# Update safely
npm update
npm audit fix

# Test thoroughly after updates
npm run build
npm start
```

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Deployment Slow
- Check bundle size
- Optimize images
- Enable compression
- Review DNS resolution time

### High Memory Usage
- Check for memory leaks
- Review middleware
- Optimize database queries
- Use streaming responses

## Support Resources

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Node.js Best Practices](https://nodejs.org/en/docs/)

---

For deployment issues, contact your hosting provider's support team.
