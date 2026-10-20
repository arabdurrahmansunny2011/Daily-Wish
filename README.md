# LoveCraft — Daily Wish

LoveCraft is a premium pastel romantic creation platform built using HTML, CSS, JavaScript, and Supabase.

## Features

- Seven creators: Love Letter, Birthday Gift, Love Story, Digital Surprise, Slideshow, Interactive Card, and Love Coupon
- Anonymous creation flow with secure share links
- Supabase-powered storage and database schema
- Admin panel with protected routes and audit logging
- Theme matches a soft romantic pastel palette

## Project structure

- `/index.html`
- `/assets/css/main.css`
- `/assets/css/components.css`
- `/assets/js/main.js`
- `/assets/js/supabase-client.js`
- `/assets/js/creations.js`
- `/assets/js/share-links.js`
- `/assets/js/editor.js`
- `/assets/js/security-validation.js`
- `/makers/*.html`
- `/share/index.html`
- `/admin/index.html`
- `/admin/assets/admin.css`
- `/admin/assets/admin.js`
- `/supabase/migrations/*.sql`
- `/supabase/functions/**/*.ts`
- `/config.example.js`

## Configuration placeholders

Create a local configuration file using the example and replace the blank values:

- Project name: `[lover]`
- Website domain: `https://dailywish.web.app`
- Supabase Project URL: `https://krtaoicqyvjntpgmtwer.supabase.co`
- Supabase Publishable / Anon Key: `sb_publishable_yFNyCa2IqrKAn2BRmB9eUw_26Ayc2Et`
- Supabase Project Region: `ap-southeast-2`
- Storage Bucket Names: `dailywish`
- Admin Email: `dailywish.admin@gmail.com`

Important: never expose the Supabase service role key in frontend code. Keep all private secrets in server-side environment variables.

## Local setup

1. Copy `config.example.js` to a local config file or set values in your deployment environment.
2. Serve the project with any static host (GitHub Pages, Firebase Hosting, or Netlify).
3. Set up the Supabase project and run the SQL migrations.
4. Configure storage buckets and RLS policies.
5. Deploy admin and anonymous creation Edge Functions.

## Deployment notes

This project is designed to be safe for static hosting while keeping secret data on the backend.

- Frontend uses only the anonymous publishable key.
- Database writes and share resolution occur through server-side or Supabase Edge Functions.
- Admin authentication is enforced with Supabase Auth and server-side checks.

## Security checklist

- No service role key in browser bundles
- No private data in URL query strings
- Only authorized admin access to admin routes
- Strict validation for uploads and text input
- RLS enabled on private tables
- Share links are hashed and verified server-side

## Testing recommendations

- Open each maker and create content
- Save a draft and publish a share link
- Open the share link in a new browser window
- Confirm revoked links fail
- Access admin route as anonymous user and verify denial
- Confirm upload restrictions are enforced

## License

This project is intended for educational and deployment use. Replace branding and legal text as needed before production launch.
