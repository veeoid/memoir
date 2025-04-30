📝*Memoir – A Personal Blogging Platform*
Memoir is a full-stack web application that enables users to create, manage, and share personal blog posts. Built with a React frontend and a Django backend, it offers a seamless experience for users to document and reflect on their thoughts and experiences.

🛠️ Tech Stack
-Frontend: React, Vite

-Backend: Django, Django REST Framework

-Database: SQLite (default), with support for PostgreSQL

-API Communication: RESTful APIs using Django REST Framework

📁 Project Structure

memoir/
├── memoir-frontend/                # React frontend (Vite)
│   ├── public/                     # Static files
│   ├── src/                        # Source code
│   │   ├── components/             # Reusable UI components
│   │   ├── pages/                  # Page-level components
│   │   ├── services/               # API interaction logic
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── App.jsx                 # App root component
│   │   └── main.jsx                # Entry point
│   ├── .env                        # Environment variables
│   ├── package.json                # npm dependencies
│   └── vite.config.js              # Vite config
│
├── memoir-backend/                # Django backend
│   ├── memoir/                    # Django project config
│   │   ├── settings.py            # Django settings
│   │   ├── urls.py                # Project-level routes
│   │   └── wsgi.py                # WSGI entrypoint
│   ├── blog/                      # Core blog app
│   │   ├── migrations/            # Django migrations
│   │   ├── admin.py               # Admin config
│   │   ├── models.py              # DB models
│   │   ├── views.py               # API views
│   │   ├── serializers.py         # DRF serializers
│   │   └── urls.py                # Blog-specific routes
│   └── manage.py                  # Django CLI utility

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
