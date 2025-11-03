# 🎨 Design Courses Site

A responsive website for learning design tools built using **React** + **Vite** and **Tailwind CSS**. It provides course-based learning content with **auth-based routing**, **component-based structure** and focused on **clean UI/UX**.

## Live Preview

Check out the live site here:  
[https://adrianav1999.github.io/design-courses-site/](https://adrianav1999.github.io/design-courses-site/)

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

## Data Handling

- All course data is loaded from the `assets.js` file (mock data)

## App Context Logic

The app uses **React Context API** via `AppContext.js` to manage global state, including:

- Course lists and enrollment
- Educator status toggle
- Course duration calculations (using `humanize-duration`)
- Ratings, number of lectures, and chapter time per course
- Navigation control

## Techologies Used

- **Frontend:** React.js + Vite  
- **Styling:** Tailwind CSS  
- **Authentication:** [Clerk](https://clerk.com/) for user login and registration
- **Routing:** React Router  
- **State Management:** React Context API  
- **Utilities:** [humanize-duration](https://www.npmjs.com/package/humanize-duration) – used to format course durations into a human-readable format

## Installation / How to Run

To run this project locally:

1. Clone the repository:

   #### `git clone https://github.com/AdrianaV1999/design-courses-site.git`

2. Navigate into the project folder:

   #### `cd design-courses-site`

3. Install dependencies:

   #### `npm install`

4. Start the development server:

   #### `npm run dev`

This will start the app locally at: `http://localhost:5173` (default Vite port)

---

This project highlights practical experience with React.js, authentication, routing, state management and responsive design.
