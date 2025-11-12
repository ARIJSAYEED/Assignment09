# 🎮 GameHub - A Game Library

**GameHub** is an engaging online platform for discovering and supporting indie game developers.  
Users can browse games, view detailed information, and download or install them if they like.

---

## 🌐 Live URL
🔗 [https://luminous-cheesecake-c202bd.netlify.app/](https://luminous-cheesecake-c202bd.netlify.app/)  



## 🎯 Purpose

The purpose of **GameHub** is to create a vibrant and interactive library where gamers can explore popular and emerging indie games in one place.  
It also demonstrates modern web development concepts like authentication, protected routes, dynamic JSON data rendering, and responsive UI using React and Firebase.



## ✨ Key Features

- 🧩 **Single Page Application (SPA)** with React Router  
- 🖼️ **Dynamic Homepage** featuring:
  - Interactive **banner slider**
  - **Popular games** section sorted by ratings
  - **Newsletter subscription** section
- 🧠 **Game Details Page (Protected Route)** — only accessible to logged-in users  
- 🔐 **Authentication System**
  - Email & password-based login and registration
  - Profile update feature (name & photo URL)
  - Password validation rules (uppercase, lowercase, 6+ chars)
- ⚙️ **Firebase Integration** for secure authentication  
- 📁 **JSON-based Game Data** (includes title, rating, developer, and download links)  
- 🌈 **Responsive Design** for tablet, and desktop  
- 🚀 **Error Page (404)** for invalid routes  
- 👤 **User Profile Page** with update information option  



## 🧰 NPM Packages Used

| Package | Purpose |
|----------|----------|
| **react-router-dom** | Client-side routing |
| **firebase** | Authentication & backend services |
| **framer-motion** | Animations and motion effects |
| **react-icons** | Icons used across UI |
| **react-toastify** | Toast notifications for user feedback |
| **swiper / react-slick** *(if used)* | Banner or game slider |
| **dotenv** | To secure Firebase keys via environment variables |



## 🧑‍💻 Developer Notes

- **Environment Variables:** Firebase configuration keys are secured in a `.env` file.  
- **Deployment:** Hosted on Netlify.  



## 🏁 Conclusion

GameHub demonstrates core web development concepts such as authentication, routing, API/JSON handling, and responsive design — wrapped in a modern, game-centric user experience.



