# DynamicsConsulting.it — Next.js 14 Revamp

## Status: ✅ BUILD SUCCESSFUL — Dev server running on port 7340

## Build output: 24 static pages + 1 API route
- / (homepage) ✅
- /platform ✅
- /services/applied-ai ✅
- /services/cloud-kubernetes ✅
- /services/data-platforms ✅
- /services/enterprise-integration ✅
- /services/microsoft-dynamics ✅
- /services/automation ✅
- /services/blockchain ✅
- /case-studies ✅
- /case-studies/eldy ✅
- /case-studies/federfarma ✅
- /case-studies/dynamics-data ✅
- /about ✅
- /research ✅
- /contact ✅
- /privacy ✅
- /api/contact (Resend) ✅
- /sitemap.xml ✅
- /robots.txt ✅

## Key fixes applied
- ServicePageLayout: icon refactored to iconName: string (icon map inside client component)
- ServiceCard: same iconName pattern
- .eslintrc.json: react/no-unescaped-entities disabled for Italian text
- All 7 service pages: use iconName string, not LucideIcon component reference
- app/page.tsx: uses iconName strings in services array

## Deploy checklist
- vercel.json: regions fra1, security headers ✅
- next.config.mjs: reactStrictMode, security headers ✅
- RESEND_API_KEY: needs to be set in Vercel env vars
- Custom domain: www.dynamicsconsulting.it → Vercel project
