# Sprint 2 Review

## Sprint Overview

Sprint 2 focused on completing the Task Management API with full CRUD functionality and delivering a web-based user interface.

---

## Sprint Details

| Attribute | Value |
|-----------|-------|
| Sprint Number | 2 |
| Total Story Points | 10 |
| Completed Points | 10 |
| Start Date | Friday, February 20, 2026 |
| End Date | Thursday, February 26, 2026 |

---

## Completed User Stories

### ✅ US3: Update Task (3 points)
**Acceptance Criteria Met:**
- [x] PUT /api/tasks/:id endpoint implemented
- [x] Can update title, description, and status
- [x] Status validation (pending, in-progress, completed)
- [x] Returns 404 for non-existent tasks
- [x] Unit tests with >80% coverage

**Demo:** Update task via API or web interface

### ✅ US4: Delete Task (2 points)
**Acceptance Criteria Met:**
- [x] DELETE /api/tasks/:id endpoint implemented
- [x] Returns success message with deleted task ID
- [x] Returns 404 for non-existent tasks
- [x] Unit tests with >80% coverage

**Demo:** Delete task via API or web interface

### ✅ US6: Web Interface (5 points)
**Acceptance Criteria Met:**
- [x] HTML page displays all tasks
- [x] Create tasks via form
- [x] Update task status (Complete/Reopen)
- [x] Edit task details
- [x] Delete tasks with confirmation
- [x] Responsive design with CSS styling

**Demo:** Access http://localhost:3000 for full web interface

---

## Sprint Improvements Implemented

### From Sprint 1 Retrospective:

1. **Centralized Error Handling**
   - Created ApiError class for consistent error responses
   - Implemented global error handler middleware
   - Added not-found handler for undefined routes

2. **Better Code Organization**
   - Separated validation logic into utils/validation.js
   - Structured error middleware in dedicated file

---

## Sprint Metrics

| Metric | Value |
|--------|-------|
| Velocity | 10 story points |
| Test Coverage | 90%+ |
| Tests Passing | 28/28 |
| CI Pipeline | All green |

---

## Stakeholder Feedback

- Full CRUD API complete
- Web interface functional and user-friendly
- Professional styling
- Good error handling

---

## Next Steps / Future Enhancements

1. Add request logging middleware
2. Database persistence (replace in-memory storage)
3. User authentication
4. Task filtering and search
5. Due dates and priorities
