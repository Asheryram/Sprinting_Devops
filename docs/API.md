# Task Manager API Documentation

## Base URL
```
http://localhost:3000/api
```

---

## Tasks

### Get All Tasks

Retrieve all tasks.

**Endpoint:** `GET /api/tasks`

**Success Response (200 OK):**
```json
{
  "count": 2,
  "tasks": [
    {
      "id": "uuid",
      "title": "Task 1",
      "description": "Description",
      "status": "pending",
      "createdAt": "2026-02-15T10:30:00.000Z",
      "updatedAt": "2026-02-15T10:30:00.000Z"
    }
  ]
}
```

**Empty Response (200 OK):**
```json
{
  "count": 0,
  "tasks": [],
  "message": "No tasks found. Create your first task!"
}
```

---

### Get Task by ID

Retrieve a single task by its ID.

**Endpoint:** `GET /api/tasks/:id`

**Success Response (200 OK):**
```json
{
  "id": "uuid",
  "title": "Task title",
  "description": "Task description",
  "status": "pending",
  "createdAt": "2026-02-15T10:30:00.000Z",
  "updatedAt": "2026-02-15T10:30:00.000Z"
}
```

**Error Response (404 Not Found):**
```json
{
  "error": "Task not found",
  "id": "requested-id"
}
```

---

### Create Task

Create a new task.

**Endpoint:** `POST /api/tasks`

**Request Body:**
```json
{
  "title": "string (required, max 200 chars)",
  "description": "string (optional, max 1000 chars)"
}
```

**Success Response (201 Created):**
```json
{
  "id": "uuid",
  "title": "Task title",
  "description": "Task description",
  "status": "pending",
  "createdAt": "2026-02-15T10:30:00.000Z",
  "updatedAt": "2026-02-15T10:30:00.000Z"
}
```

**Error Response (400 Bad Request):**
```json
{
  "error": "Validation failed",
  "details": ["Title is required"]
}
```

**Example:**
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries", "description": "Milk, eggs, bread"}'
```

---

### Update Task

Update an existing task.

**Endpoint:** `PUT /api/tasks/:id`

**Request Body:**
```json
{
  "title": "string (optional)",
  "description": "string (optional)",
  "status": "pending | in-progress | completed (optional)"
}
```

**Success Response (200 OK):**
```json
{
  "id": "uuid",
  "title": "Updated title",
  "description": "Updated description",
  "status": "in-progress",
  "createdAt": "2026-02-15T10:30:00.000Z",
  "updatedAt": "2026-02-15T11:00:00.000Z"
}
```

**Error Response (404 Not Found):**
```json
{
  "error": "Task not found",
  "id": "requested-id"
}
```

**Error Response (400 Bad Request):**
```json
{
  "error": "Invalid status",
  "validStatuses": ["pending", "in-progress", "completed"]
}
```

**Example:**
```bash
curl -X PUT http://localhost:3000/api/tasks/uuid-here \
  -H "Content-Type: application/json" \
  -d '{"status": "completed"}'
```

---

## Health

### Health Check

Check the API health status.

**Endpoint:** `GET /api/health`

**Success Response (200 OK):**
```json
{
  "status": "healthy",
  "timestamp": "2026-02-15T10:30:00.000Z",
  "uptime": "3600 seconds",
  "version": "1.0.0"
}
```

**Example:**
```bash
curl http://localhost:3000/api/health
```

---

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request - Validation error |
| 404 | Not Found |
| 500 | Internal Server Error |
