Project Structure

memoir/
│
├── memoir-frontend/ # React frontend
│ ├── public/ # Static files
│ ├── src/ # React source files
│ │ ├── components/ # UI components
│ │ ├── pages/ # Page components
│ │ ├── services/ # Services for API calls
│ │ ├── hooks/ # Custom React hooks
│ │ ├── App.jsx # Main application component
│ │ └── main.jsx # Entry point
│ ├── .env # Environment variables
│ ├── package.json # npm package file
│ └── vite.config.js # Vite configuration
│
├── memoir-backend/ # Django backend
│ ├── memoir/ # Django project folder
│ │ ├── settings.py # Project settings
│ │ ├── urls.py # Project URLs
│ │ └── wsgi.py # WSGI application
│ ├── blog/ # Django app for blog logic
│ │ ├── migrations/ # Database migrations
│ │ ├── admin.py # Admin configuration
│ │ ├── models.py # Database models
│ │ ├── views.py # Views / Controllers
│ │ ├── serializers.py # Data serializers
│ │ └── urls.py # App URLs
│ ├── manage.py # Django management script
│ ├── requirements.txt # Python dependencies
│ └── ...
│
└── README.md # Project documentation
