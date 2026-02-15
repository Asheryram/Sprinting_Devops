# Sprint 1 Plan

## Sprint Goal

Deliver the core MVP functionality: ability to create and view tasks, plus establish CI/CD pipeline and health monitoring.

---

## Sprint Details

| Attribute | Value |
|-----------|-------|
| Sprint Number | 1 |
| Duration | 1 week |
| Total Story Points | 6 |
| Start Date | Friday, February 13, 2026 |
| End Date | Thursday, February 19, 2026 |

---

## Selected User Stories

### US1: Create Task (3 points)
**As a** user, **I want to** create a new task **so that** I can track work that needs to be done.

**Tasks:**
- [ ] Create task model/schema
- [ ] Implement POST /api/tasks endpoint
- [ ] Add input validation
- [ ] Write unit tests
- [ ] Document endpoint

---

### US2: View Tasks (2 points)
**As a** user, **I want to** view all my tasks **so that** I can see what work needs to be completed.

**Tasks:**
- [ ] Implement GET /api/tasks endpoint
- [ ] Implement GET /api/tasks/:id endpoint
- [ ] Handle 404 for missing tasks
- [ ] Write unit tests
- [ ] Document endpoints

---

### US5: Health Check (1 point)
**As an** operator, **I want to** check the API health status **so that** I can monitor system availability.

**Tasks:**
- [ ] Implement GET /api/health endpoint
- [ ] Return status and uptime
- [ ] Write unit tests
- [ ] Document endpoint

---

## Infrastructure Tasks (Non-Story Work)

- [ ] Initialize Node.js project
- [ ] Set up Express server
- [ ] Configure ESLint
- [ ] Set up GitHub Actions CI/CD pipeline
- [ ] Configure Jest for testing

---

## Sprint 1 Success Criteria

1. ✅ CI/CD pipeline running on every push
2. ✅ All tests passing
3. ✅ 3 API endpoints working (create, view, health)
4. ✅ API documentation complete
5. ✅ Sprint review document created
6. ✅ Retrospective completed

---

## Team Capacity

| Role | Allocation |
|------|------------|
| Developer (Solo) | 100% |

*Note: This is an individual project, so all work is self-assigned.*
