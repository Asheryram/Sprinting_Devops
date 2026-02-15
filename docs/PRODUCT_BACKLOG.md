# Product Backlog

## User Stories

### US1: Create Task
**As a** user  
**I want to** create a new task  
**So that** I can track work that needs to be done

**Acceptance Criteria:**
- [ ] POST /api/tasks endpoint exists
- [ ] Task must have a title (required)
- [ ] Task can have an optional description
- [ ] Task is created with status "pending" by default
- [ ] API returns the created task with a unique ID
- [ ] API returns 400 if title is missing

---

### US2: View Tasks
**As a** user  
**I want to** view all my tasks  
**So that** I can see what work needs to be completed

**Acceptance Criteria:**
- [ ] GET /api/tasks endpoint returns all tasks
- [ ] GET /api/tasks/:id returns a single task
- [ ] API returns 404 if task ID not found
- [ ] Response includes task id, title, description, status, createdAt

---

### US3: Update Task
**As a** user  
**I want to** update an existing task  
**So that** I can modify task details or mark progress

**Acceptance Criteria:**
- [ ] PUT /api/tasks/:id endpoint updates a task
- [ ] Can update title, description, and status
- [ ] API returns 404 if task ID not found
- [ ] API returns 400 if validation fails
- [ ] Response includes the updated task

---

### US4: Delete Task
**As a** user  
**I want to** delete a task  
**So that** I can remove completed or cancelled work

**Acceptance Criteria:**
- [ ] DELETE /api/tasks/:id endpoint deletes a task
- [ ] API returns 404 if task ID not found
- [ ] API returns 200 with success message on deletion
- [ ] Deleted task no longer appears in GET /api/tasks

---

### US5: Health Check
**As an** operator  
**I want to** check the API health status  
**So that** I can monitor system availability

**Acceptance Criteria:**
- [ ] GET /api/health endpoint exists
- [ ] Returns status "healthy" when API is running
- [ ] Returns uptime information
- [ ] Response time is under 100ms

---

### US6: Web Interface
**As a** user  
**I want to** manage tasks through a web interface  
**So that** I can interact with the system without using API calls directly

**Acceptance Criteria:**
- [ ] Web page displays all tasks
- [ ] Form to create new tasks
- [ ] Ability to mark tasks as complete
- [ ] Ability to delete tasks
- [ ] UI updates without page refresh

---

## Backlog Summary (Prioritized & Estimated)

| Priority | ID | Title | Story Points | Sprint | Status |
|----------|-----|-------|--------------|--------|--------|
| 1 | US1 | Create Task | 3 | Sprint 1 | To Do |
| 2 | US2 | View Tasks | 2 | Sprint 1 | To Do |
| 3 | US5 | Health Check | 1 | Sprint 1 | To Do |
| 4 | US3 | Update Task | 3 | Sprint 2 | To Do |
| 5 | US4 | Delete Task | 2 | Sprint 2 | To Do |
| 6 | US6 | Web Interface | 5 | Sprint 2 | To Do |

### Story Point Reference (Fibonacci Scale)
- **1 point** - Very simple, few hours of work
- **2 points** - Simple, less than a day
- **3 points** - Medium complexity, 1-2 days
- **5 points** - Complex, multiple days
- **8 points** - Very complex, needs breakdown

### Sprint Capacity
- **Sprint 1:** 6 story points (US1 + US2 + US5)
- **Sprint 2:** 10 story points (US3 + US4 + US6)

### Prioritization Rationale
1. **US1, US2, US5** prioritized first as they form the MVP (create, view, monitor)
2. **US3, US4** scheduled for Sprint 2 to complete CRUD operations
3. **US6** scheduled last as it builds on top of the API
