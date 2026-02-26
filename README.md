# 📚 EduLearn — Full-Stack Learning Management System

A production-ready e-learning platform where students can browse, purchase, and track courses, and educators can publish and manage their own course content — all backed by real payment processing and cloud media storage.

**Live Demo:** _Add your deployed URL here_  
**Backend API:** _Add your API URL here_

---

## 🖼️ Screenshots

> _Add screenshots of Home page, Course Details, Educator Dashboard, and Player here_

---

## ✨ Features

### 👩‍🎓 Student Side
- Browse all published courses with search and filtering
- View detailed course pages with chapter/lecture breakdown and free previews
- Purchase courses securely via **Stripe Checkout**
- Track lecture-by-lecture progress in an interactive video player
- Rate enrolled courses (1–5 stars)
- Personal "My Enrollments" dashboard

### 👨‍🏫 Educator Side
- Apply to become an educator with a single click (role stored in Clerk metadata)
- Create courses with rich text descriptions using the **Quill** editor
- Upload course thumbnails directly to **Cloudinary**
- Organize content into chapters and lectures with YouTube video links
- Set pricing with percentage-based discounts
- Mark individual lectures as free previews
- Full dashboard showing total earnings, enrolled students, and course count

### 🔐 Auth & Payments
- Authentication powered by **Clerk** (sign-up, sign-in, social login)
- User data synced to MongoDB automatically via **Clerk Webhooks** (svix)
- Stripe Checkout for one-time course purchases
- **Stripe Webhooks** handle payment success/failure and automatically enroll students

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, Vite, Tailwind CSS |
| **Routing** | React Router v7 |
| **State Management** | React Context API |
| **Auth** | Clerk |
| **HTTP Client** | Axios |
| **Rich Text Editor** | Quill |
| **Video Player** | react-youtube |
| **Payments** | Stripe |
| **Backend** | Node.js, Express.js (ES Modules) |
| **Database** | MongoDB with Mongoose |
| **Media Storage** | Cloudinary |
| **File Uploads** | Multer |
| **Webhooks** | Svix (Clerk), Stripe |
| **Deployment** | Vercel (both client & server) |

---

## 📁 Project Structure

```
lms-full-stack/
├── client/                        # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── educator/          # Educator Navbar, Sidebar, Footer
│   │   │   └── student/           # Hero, CourseCard, SearchBar, Testimonials, etc.
│   │   ├── context/
│   │   │   └── AppContext.jsx     # Global state (courses, user, auth)
│   │   ├── pages/
│   │   │   ├── educator/          # Dashboard, AddCourse, MyCourses, StudentsEnrolled
│   │   │   └── student/           # Home, CourseDetails, CoursesList, Player, MyEnrollments
│   │   └── App.jsx                # Route definitions
│   └── vercel.json
│
└── server/                        # Express.js backend
    ├── configs/
    │   ├── mongodb.js             # DB connection
    │   ├── cloudinary.js          # Cloudinary setup
    │   └── multer.js              # File upload config
    ├── controllers/
    │   ├── courseController.js    # Public course endpoints
    │   ├── educatorController.js  # Educator CRUD + dashboard
    │   ├── userController.js      # User data, purchases, progress, ratings
    │   └── webhooks.js            # Clerk & Stripe webhook handlers
    ├── middlewares/
    │   └── authMiddleware.js      # Clerk JWT protection
    ├── models/
    │   ├── Course.js              # Course schema (chapters > lectures)
    │   ├── User.js                # User schema
    │   ├── Purchase.js            # Purchase schema (pending/completed/failed)
    │   └── CourseProgress.js      # Per-user lecture completion tracking
    ├── routes/
    │   ├── courseRoute.js
    │   ├── educatorRoutes.js
    │   └── userRoutes.js
    └── server.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account
- Clerk account
- Stripe account
- Cloudinary account

### 1. Clone the repository

```bash
git clone https://github.com/MrPratyushKumar/LMS-ElearningWebsite.git
cd lms-full-stack
```

### 2. Set up the Server

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```env
CURRENCY="USD"

# MongoDB
MONGODB_URI="your_mongodb_connection_string"

# Cloudinary
CLOUDINARY_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_SECRET_KEY="your_secret_key"

# Clerk
CLERK_WEBHOOK_SECRET="your_clerk_webhook_secret"
CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

# Stripe
STRIPE_WEBHOOK_SECRET="your_stripe_webhook_secret"
STRIPE_PUBLISHABLE_KEY="your_stripe_publishable_key"
STRIPE_SECRET_KEY="your_stripe_secret_key"
```

Start the server:

```bash
npm run server     # development (nodemon)
npm start          # production
```

### 3. Set up the Client

```bash
cd client
npm install
```

Create a `.env` file in the `client/` directory:

```env
VITE_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
VITE_BACKEND_URL="http://localhost:5000"
VITE_CURRENCY="$"
```

Start the client:

```bash
npm run dev
```

### 4. Configure Webhooks

**Clerk Webhook:**
- Go to Clerk Dashboard → Webhooks → Add endpoint
- URL: `https://your-backend.vercel.app/clerk`
- Events: `user.created`, `user.updated`, `user.deleted`

**Stripe Webhook:**
- Go to Stripe Dashboard → Developers → Webhooks → Add endpoint
- URL: `https://your-backend.vercel.app/stripe`
- Events: `payment_intent.succeeded`, `payment_intent.payment_failed`

---

## 🔌 API Reference

### Public Course Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/course/all` | Get all published courses |
| GET | `/api/course/:id` | Get course details (previews only for unenrolled users) |

### User Routes _(requires Clerk JWT)_
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user/data` | Get current user data |
| POST | `/api/user/purchase` | Initiate Stripe checkout for a course |
| GET | `/api/user/enrolled-courses` | Get user's enrolled courses |
| POST | `/api/user/update-course-progress` | Mark a lecture as completed |
| POST | `/api/user/get-course-progress` | Get progress for a course |
| POST | `/api/user/add-rating` | Rate an enrolled course |

### Educator Routes _(requires Clerk JWT + educator role)_
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/educator/update-role` | Upgrade user to educator |
| POST | `/api/educator/add-course` | Create a new course (with thumbnail upload) |
| GET | `/api/educator/courses` | Get educator's own courses |
| GET | `/api/educator/dashboard` | Get earnings, students, course count |
| GET | `/api/educator/enrolled-students` | Get all enrolled students list |

### Webhook Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/clerk` | Sync Clerk user events to MongoDB |
| POST | `/stripe` | Handle Stripe payment events |

---

## 🗄️ Database Models

**Course** — `courseTitle`, `courseDescription`, `courseThumbnail`, `coursePrice`, `discount`, `isPublished`, `educator` (ref), `courseContent` (chapters → lectures), `courseRatings`, `enrolledStudents`

**User** — `_id` (Clerk user ID), `name`, `email`, `imageUrl`, `enrolledCourses`

**Purchase** — `courseId`, `userId`, `amount`, `status` (pending / completed / failed)

**CourseProgress** — `userId`, `courseId`, `lectureCompleted[]`

---

## 🌐 Deployment

Both client and server include `vercel.json` for zero-config Vercel deployment.

```bash
# Deploy server
cd server && vercel --prod

# Deploy client  
cd client && vercel --prod
```

Remember to set all environment variables in your Vercel project settings.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👤 Author

**Pratyush Kumar**  
GitHub: [@MrPratyushKumar](https://github.com/MrPratyushKumar)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).