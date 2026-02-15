# Sprint 2 Plan

## Sprint Goal
Complete the Task Management API with update, delete functionality and a web interface, while incorporating improvements from Sprint 1 retrospective.

## Sprint Duration
- **Start Date:** February 15, 2026
- **End Date:** February 15, 2026 (same-day sprint)

## Team Capacity
- 1 Developer
- Available hours: 8 hours

## Sprint Backlog

### User Stories

| ID | User Story | Story Points | Priority |
|----|------------|--------------|----------|
| US3 | Update Task | 3 | High |
| US4 | Delete Task | 2 | High |
| US6 | Web Interface | 5 | Medium |

### Improvements from Retrospective
- Enhanced error handling with centralized middleware
- Better code organization
- Request logging (stretch goal)

## Acceptance Criteria Summary

### US3 - Update Task
- [ ] PUT /api/tasks/:id endpoint works
- [ ] Can update title, description, status
- [ ] Validates status values (pending, in-progress, completed)
- [ ] Returns 404 for non-existent tasks
- [ ] Unit tests pass with >80% coverage

### US4 - Delete Task
- [ ] DELETE /api/tasks/:id endpoint works
- [ ] Returns success message on deletion
- [ ] Returns 404 for non-existent tasks
- [ ] Unit tests pass with >80% coverage

### US6 - Web Interface
- [ ] HTML page displays tasks
- [ ] Can create tasks via form
- [ ] Can update task status
- [ ] Can delete tasks
- [ ] Responsive design

## Definition of Done
- Code complete and pushed
- All tests passing
- CI pipeline green
- API documentation updated
- Code reviewed (self-review for solo project)

## Sprint Notes
- Feature branch workflow continues from Sprint 1
- Each user story gets its own feature branch
- Merge to main after CI passes
