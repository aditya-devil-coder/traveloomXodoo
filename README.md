# 🚀 Traveloop – Smart Travel Planning Platform

Traveloop is a modern and intelligent travel planning platform that helps users create personalized multi-city itineraries, manage travel budgets, organize activities, and share travel experiences seamlessly.

Built for travelers who want a smooth and interactive trip-planning experience, Traveloop combines itinerary management, budgeting, collaboration, and travel organization into a single platform.

---

# 🌟 Features

## 🔐 Authentication System

* Secure Login & Signup
* User Authentication
* Protected User Data

---

## 🏠 Dashboard

* Personalized travel dashboard
* View recent and upcoming trips
* Quick access to trip planning

---

## ✈️ Trip Planning

* Create custom trips
* Multi-city itinerary support
* Add travel dates and descriptions
* Manage destinations easily

---

## 🗺️ Itinerary Builder

* Day-wise travel planning
* Add multiple travel stops
* Organize activities
* Reorder destinations dynamically

---

## 🌍 City & Activity Search

* Explore destinations
* Discover activities and attractions
* Search and filter cities

---

## 💰 Budget Management

* Automatic trip cost estimation
* Expense breakdown
* Budget tracking system

---

## 🧳 Packing Checklist

* Manage travel essentials
* Add/remove checklist items
* Track packed items

---

## 📝 Travel Notes

* Save reminders and notes
* Store important travel information
* Day-specific journaling

---

## 🔗 Public Trip Sharing

* Share itineraries publicly
* Generate shareable links
* View-only travel plans

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Tailwind CSS

## Backend

* Django REST Framework

## Database

* PostgreSQL

## Authentication

* JWT Authentication

---

# 📂 Project Structure

```bash
traveloop/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── users/
│   ├── trips/
│   ├── activities/
│   ├── budgets/
│   └── manage.py
│
└── README.md
```

---

# ⚙️ Installation & Setup

```

---

# 🔧 Frontend Setup

## Install Dependencies

```bash
cd frontend
npm install
```

## Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# ⚡ Backend Setup

## Create Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Linux/Mac

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## Install Backend Dependencies

```bash
cd backend
pip install -r requirements.txt
```

---

## Configure Database

Update `settings.py`

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'traveloop',
        'USER': 'postgres',
        'PASSWORD': 'yourpassword',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

---

## Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## Start Backend Server

```bash
python manage.py runserver
```

Backend runs on:

```bash
http://127.0.0.1:8000/
```

---

# 📡 API Endpoints

## Authentication

```bash
/api/auth/login/
/api/auth/register/
```

## Trips

```bash
/api/trips/
/api/trips/<id>/
```

## Activities

```bash
/api/activities/
```

## Budget

```bash
/api/budget/
```

---

# 📸 Application Modules

* Login & Signup
* Dashboard
* Create Trip
* Itinerary Builder
* Budget Breakdown
* Packing Checklist
* Notes & Journal
* Public Itinerary Sharing

---

# 🎯 Objectives

* Simplify trip planning
* Improve itinerary organization
* Help users manage travel expenses
* Enable collaborative travel planning
* Provide an interactive travel experience

---

# 🚀 Future Improvements

* AI-powered itinerary generation
* Real-time weather integration
* Group collaboration
* Smart recommendations
* Route optimization

---

# 👨‍💻 Team

Add your team member names here.

* Aditya Kakauriya
* Satish Chandra Yadav
* Siddhartha Kushwaha
* Aryan Jain
---

# 📄 License

This project is developed for educational and hackathon purposes.

---


