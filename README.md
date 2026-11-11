# Task Management Application

A full-stack Task Management Application built using ASP.NET Core Web API, React, Entity Framework Core, and SQLite.

## Features

- Create Tasks
- Update Tasks
- Delete Tasks
- View Task List
- Search Tasks by Title
- Filter Tasks by Status
- Change Task Status
- SQLite Database Persistence
- Swagger API Documentation
- Form Validation

---

## Technologies Used

### Backend

- ASP.NET Core Web API
- Entity Framework Core
- SQLite
- Swagger

### Frontend

- React
- Axios
- Bootstrap

---

## Task Model

Each task contains:

| Field | Type |
|---------|---------|
| Id | Integer |
| Title | String |
| Description | String |
| Status | Pending / InProgress / Completed |
| CreatedAt | DateTime |

---

## Project Structure

```text
TaskManagementApp
│
├── TaskManagement.API
│   ├── Controllers
│   ├── Models
│   ├── Data
│   ├── Migrations
│   └── Program.cs
│
└── frontend
    ├── src
    ├── services
    └── App.jsx
```

---

## Prerequisites

Install the following:

- .NET SDK
- Node.js
- npm
- Visual Studio Code

---

## Backend Setup

Navigate to the backend project:

```bash
cd TaskManagement.API
```

Restore packages:

```bash
dotnet restore
```

Apply migrations:

```bash
dotnet ef database update
```

Run the API:

```bash
dotnet run
```

Backend URL:

```text
http://localhost:5218
```

Swagger URL:

```text
http://localhost:5218/swagger
```

---

## Frontend Setup

Navigate to the frontend project:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the React application:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## API Endpoints

### Get All Tasks

```http
GET /api/tasks
```

### Get Task By Id

```http
GET /api/tasks/{id}
```

### Create Task

```http
POST /api/tasks
```

Request Body:

```json
{
  "title": "Learn ASP.NET",
  "description": "Practice Web API",
  "status": "Pending"
}
```

### Update Task

```http
PUT /api/tasks/{id}
```

### Delete Task

```http
DELETE /api/tasks/{id}
```

### Search Tasks

```http
GET /api/tasks?search=React
```

### Filter Tasks By Status

```http
GET /api/tasks?status=Completed
```

---

## Validation Rules

- Title is required.
- Title maximum length is 100 characters.
- Status values:
  - Pending
  - InProgress
  - Completed

---

## Assumptions

The following assumptions were made during development:

- A task can have only one status at a time.
- Status values are limited to:
  - Pending
  - InProgress
  - Completed
- Task title is mandatory and cannot exceed 100 characters.
- Description is optional.
- Authentication and authorization are outside the scope of this assessment.
- The application is intended for a single-user environment.
- SQLite is sufficient for local development and assessment purposes.

---

## Known Limitations

- No authentication or authorization functionality.
- Search functionality is limited to the task title field.
- No pagination has been implemented.
- No sorting functionality is available.
- Filtering and searching are performed in memory after retrieving data from the database due to SQLite enum translation limitations encountered during implementation.
- No automated unit or integration tests have been added.
- Basic error handling and user feedback mechanisms are implemented.
- No soft-delete or task recovery functionality.
- SQLite is suitable for development but not ideal for large-scale production environments.

---

## Improvements With More Time

### Backend Improvements

- Implement Repository Pattern and Service Layer architecture.
- Introduce DTOs and AutoMapper.
- Add FluentValidation for request validation.
- Implement global exception handling middleware.
- Add structured logging using Serilog.
- Add unit and integration tests using xUnit.
- Optimize filtering and searching at the database level.
- Add support for task priority levels.
- Add due dates and reminder functionality.

### Frontend Improvements

- Enhance UI/UX using Material UI or advanced Bootstrap components.
- Add toast notifications for task operations.
- Implement loading indicators during API requests.
- Improve validation messages and error handling.
- Add task sorting by title, date, and status.
- Implement color-coded status badges.
- Improve responsive design for mobile devices.

### Security Enhancements

- Implement JWT Authentication and Authorization.
- Add role-based access control.
- Implement API rate limiting.
- Add additional input validation and sanitization.

### Deployment Improvements

- Containerize the application using Docker.
- Create CI/CD pipelines using GitHub Actions or Azure DevOps.
- Deploy to Microsoft Azure App Service.
- Migrate from SQLite to SQL Server or PostgreSQL for production use.

---

## Screenshots

Add screenshots of the application before submission.

Example:

```text
screenshots/homepage.png
screenshots/swagger.png
```

---

## Assessment Summary

The application successfully meets the core assessment requirements:

- ✅ Display Tasks
- ✅ Create Task
- ✅ Update Task
- ✅ Delete Task
- ✅ Search by Title
- ✅ Filter by Status
- ✅ Change Task Status
- ✅ ASP.NET Core Web API
- ✅ React Frontend
- ✅ SQLite Database
- ✅ Swagger Documentation
- ✅ Data Persistence
- ✅ Basic Validation

---

## Author

**Nitin Chandela**

Developer | .NET Full Stack Developer

### Technologies

- C#
- ASP.NET Core
- React
- SQL
- Entity Framework Core
- Azure
- Azure DevOps