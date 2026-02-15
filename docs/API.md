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

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request - Validation error |
| 404 | Not Found |
| 500 | Internal Server Error |
