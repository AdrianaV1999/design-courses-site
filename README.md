# 🎨 Design Courses Site

A responsive website for learning design tools. Built using **React**, **Vite** and **Tailwind CSS**. The platform simulates a frontend for a course-based learning experience with **auth-based routing**, focusing on **clean UI/UX**, a **responsive layout** and a **component-based structure**.

 

**Live Site:** [https://adrianav1999.github.io/design-courses-site/](https://adrianav1999.github.io/design-courses-site/)

---

## Features

- **Authentication with Clerk** for user login and registration
- **Separate routes** for authenticated and unauthenticated users
- **Search functionality** for design courses
- **Watch YouTube tutorials** directly from course pages
- **Rate courses** (frontend-only) to provide feedback
- **Fully responsive design** for all screen sizes
- **Educator Features:**
  - Add new courses
  - View their courses and enrolled students

---

## Project Structure

### User Roles

- **Educator Pages**:
  - `AddCourse.jsx`
  - `Dashboard.jsx`
  - `Educator.jsx`
  - `MyCourses.jsx`
  - `StudentsEnrolled.jsx`

- **Student Pages**:
  - `Home.jsx`
  - `CoursesList.jsx`
  - `CourseDetails.jsx`
  - `Player.jsx`
  - `MyEnrollments.jsx`

### Key Components

- **Educator**:  
  - `Sidebar`, `Navbar`, `Footer`    
- **Student**:  
  - `Hero`, `CourseCard`, `CourseSection`, `CallToAction`, `SearchBar`, `Rating`, `TestimonialsSection`, `Tools`, `Loading`, `Navbar`, `Footer`  

---

## Data Handling

- All course data is loaded from the `assets.js` file (mock data)

---

## App Context Logic

The app uses React Context API via `AppContext.js` to manage global state such as:

- Course lists and enrollment
- Educator status toggle
- Course duration calculations (using `humanize-duration`)
- Ratings, number of lectures, and chapter time per course
- Navigation control

---

## Tech Stack

- **Frontend:** React + Vite  
- **Styling:** Tailwind CSS  
- **Authentication:** Clerk  
- **Routing:** React Router  
- **State Management:** React Context API  
- **Utilities:** [humanize-duration](https://www.npmjs.com/package/humanize-duration) – used to format course durations into a human-readable format

---

## Notes

- This is a **frontend-only demo project**, focused on showcasing clean UI/UX, component organization, and application state handling
- All course data is simulated with local static assets
