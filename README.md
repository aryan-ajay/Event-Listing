# Event Listing Web Application

## 📌 Overview
This project is a React-based web application that displays upcoming events in Sydney. Users can search for events, view details, and proceed to get tickets by entering their email.


## 📁 Repository Structure
```
├── public/              # Public assets
├── src/                 # Source code
│   ├── components/      # Reusable components (if applicable)
│   ├── App.js           # Main component
│   ├── index.js         # Entry point
├── .gitignore           # Git ignored files
├── package.json         # Dependencies and scripts
├── README.md            # Project documentation
```

## 🛠 Setup Instructions
### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```sh
# Install dependencies
npm install

# Start the development server
npm start
```

Open `http://localhost:3000` in the browser.

## ✨ Features
- **Event Filtering:** Search for events by title.
- **Event Details:** Displays event title, date, venue, and description.
- **Ticket Purchase Modal:** Users enter their email before redirecting to the ticket page.
- **Modern UI:** Styled with CSS for an elegant and responsive layout.

## 🔥 Technologies Used
- React (Vite setup)
- CSS (custom styling)
- JavaScript (ES6+ features)

## 🏆 Approach
- Implemented a **searchable event list** to enhance user experience.
- Used **React state management** for dynamic filtering and modal interactions.
- Styled the application with **modern and minimalistic UI**.

## 🚧 Challenges Faced
- Ensuring smooth **search filtering** without performance issues.
- Handling **modal interactions** efficiently.
- Creating a **responsive layout** that looks good across devices.

## 📌 Future Improvements
- Implement **event categories and filters** (e.g., music, sports, comedy).
- Add **backend integration** to fetch live event data.
- Implement **user authentication** for personalized recommendations.
