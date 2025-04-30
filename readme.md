📝 Memoir – A Personal Blogging Platform
Memoir is a full-stack web application that enables users to create, manage, and share personal blog posts. Built with a React frontend and a Django backend, it offers a seamless experience for users to document and reflect on their thoughts and experiences.

🛠️ Tech Stack
-Frontend: React, Vite

-Backend: Django, Django REST Framework

-Database: SQLite (default), with support for PostgreSQL

-API Communication: RESTful APIs using Django REST Framework

📁 Project Structure

memoir/
├── memoir-frontend/          # React frontend
│   ├── public/               # Static files
│   ├── src/                  # React source files
│   │   ├── components/       # UI components
│   │   ├── pages/            # Page components
│   │   ├── services/         # API service calls
│   │   ├── hooks/            # Custom React hooks
│   │   ├── App.jsx           # Main application component
│   │   └── main.jsx          # Entry point
│   ├── .env                  # Environment variables
│   ├── package.json          # npm package file
│   └── vite.config.js        # Vite configuration
├── memoir-backend/           # Django backend
│   ├── memoir/               # Django project folder
│   │   ├── settings.py       # Project settings
│   │   ├── urls.py           # Project URLs
│   │   └── wsgi.py           # WSGI application
│   ├── blog/                 # Django app for blog logic
│   │   ├── migrations/       # Database migrations
│   │   ├── admin.py          # Admin configuration
│   │   ├── models.py         # Database models
│   │   ├── views.py          # Views / Controllers
│   │   ├── serializers.py    # Data serializers
│   │   └── urls.py           # App URLs
│   └── manage.py             # Django management script
└── README.md                 # Project documentation

🚀 Features
User Authentication: Secure login and registration system.

Create & Edit Posts: Users can write new blog posts and edit existing ones.

Delete Posts: Option to remove unwanted posts.

Responsive Design: Mobile-friendly interface for seamless user experience.

RESTful API: Backend APIs to handle CRUD operations.

🧪 Getting Started
#Prerequisites
- Node.js and npm installed
- Python 3.x and pip installed
- Virtualenv for Python environment management

#Backend Setup
1. Navigate to the backend directory:
```
cd memoir/memoir-backend
```
2. Create and activate a virtual environment:
```
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate
```
3. Install dependencies:
```
pip install -r requirements.txt
```
4. Apply migrations:
```
python manage.py migrate
```
5. Start the Django development server:
```
python manage.py runserver
```

#Frontend Setup
1. Navigate to the frontend directory:
```
cd memoir/memoir-frontend
```
2. Install dependencies:
```
npm install
```
3. Start the React development server:
```
npm run dev
```
