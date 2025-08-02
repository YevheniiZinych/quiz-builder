# Quiz Builder

A simple full-stack Quiz Builder app using NestJS backend and React frontend.

Clone the repository and enter the project directory:

git clone https://github.com/your-username/quiz-builder.git

Make sure you have PostgreSQL running. Create a database (for example, quizdb)

To /backend/.env set your database credentials

POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_password
POSTGRES_DB=quizdb

PORT=your_port

Start the backend

- npm install
- npm run start:dev

The backend will be running at default http://localhost:3000

Start the frontend:

- npm install
- npm run dev

The frontend will be running at http://localhost:4040

To create a sample quiz, open http://localhost:4040/create in your browser, enter a quiz title, add one or more questions (select type: Boolean, Input, or Checkbox), fill in the question details and correct answers, then click "Create Quiz".

Features:

- Create quizzes with Boolean, Input, or Checkbox questions.
- List all quizzes.
- View quiz details in read-only mode.

Notes:

- Run backend and frontend at the same time.
- CORS is enabled by default for development.
- Database tables are created automatically when you start the backend
