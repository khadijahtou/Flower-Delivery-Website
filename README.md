Flower Delivery Web App

A full-stack flower ordering website built with the MERN stack (MongoDB, Express, React, Node.js).
It includes a user-friendly storefront, a secure admin panel, and Paystack integration for payments.

Tech Stack

Frontend: React.js, Tailwind CSS, Axios, React Router
Backend: Node.js, Express.js, MongoDB, JWT, Multer, Paystack
Hosting: Vercel (Frontend & Admin), Render (Backend), MongoDB Atlas

✨ Features
🛍️ User

Browse and order flowers online

Secure Sign Up / Sign In (password ≥ 8 chars, unique emails only)

Cart access restricted to logged-in users

Paystack integration for payments

Redirects:

Success → Home (cart cleared)

Failed → Cart (items retained)

Admin

View, add, and delete flowers

Upload images with Multer

Confirmation popup on successful actions

Security

JWT Authentication

Password & Email Validation

Protected Routes for sensitive pages (Cart, Checkout, Admin)

Key Highlights

Fully responsive design (mobile, tablet, desktop)

Built following clean MVC structure

Deployed using Vercel + Render

Integrated Paystack for real payment processing

---

## Security Highlights

- Passwords hashed with **bcrypt** + salt before storage
- JWT tokens for stateless authentication
- Environment variables to keep secrets out of code
- Validated and sanitized user input to prevent attacks

---

## License

This project is licensed under the **MIT License**. You are free to use and adapt it for your own projects.

---

## LIVE LINKS

Component Platform URL
Frontend (User Website) Vercel https://flower-delivery-website-omega.vercel.app

Admin Panel Vercel https://flower-delivery-admin.vercel.app

Backend API Render https://flower-delivery-website-w20a.onrender.com
Tech Stack
SERVER: http://localhost:3000

## LOOM VIDEO LINK: https://www.loom.com/share/c5b2ed462e4744f0be4de996053a9ada
