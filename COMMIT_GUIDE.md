# Task Manager API - Commit Guide ( Commits)

## Project: Task Management API with Frontend
**Tech Stack:** Node.js (Express) + HTML/CSS/JS Frontend

---

## SPRINT 0: PLANNING (8 commits)

### Setup & Documentation
- [ ] **Commit 1:** `init: Initialize repository with README`
- [ ] **Commit 2:** `chore: Add .gitignore`
- [ ] **Commit 3:** `docs: Add product vision statement`
- [ ] **Commit 4:** `docs: Create product backlog with user stories`
- [ ] **Commit 5:** `docs: Add acceptance criteria to user stories`
- [ ] **Commit 6:** `docs: Add story point estimates and prioritization`
- [ ] **Commit 7:** `docs: Define Definition of Done (DoD)`
- [ ] **Commit 8:** `docs: Create Sprint 1 plan`

---

## SPRINT 1: EXECUTION (28 commits)

### Project Setup (6 commits)
- [ ] **Commit 9:** `chore: Initialize Node.js project with package.json`
- [ ] **Commit 10:** `chore: Add Express and dependencies`
- [ ] **Commit 11:** `feat: Create basic server entry point`
- [ ] **Commit 12:** `chore: Add project folder structure`
- [ ] **Commit 13:** `chore: Configure ESLint for code quality`
- [ ] **Commit 14:** `chore: Add npm scripts`

### CI/CD Pipeline (6 commits)
- [ ] **Commit 15:** `ci: Create GitHub Actions workflow file`
- [ ] **Commit 16:** `ci: Add install dependencies step`
- [ ] **Commit 17:** `ci: Add lint step to pipeline`
- [ ] **Commit 18:** `ci: Add test step to pipeline`
- [ ] **Commit 19:** `ci: Add build verification step`
- [ ] **Commit 20:** `ci: Fix pipeline configuration` *(intentional fail then fix)*

### US1: Create Task (6 commits)
- [ ] **Commit 21:** `feat(task): Create task model and data store`
- [ ] **Commit 22:** `feat(task): Add create task route POST /api/tasks`
- [ ] **Commit 23:** `feat(task): Add input validation for task creation`
- [ ] **Commit 24:** `test: Add unit tests for create task`
- [ ] **Commit 25:** `fix: Fix validation edge case for empty title`
- [ ] **Commit 26:** `docs: Add API documentation for create task`

### US2: View Tasks (5 commits)
- [ ] **Commit 27:** `feat(task): Add get all tasks route GET /api/tasks`
- [ ] **Commit 28:** `feat(task): Add get single task GET /api/tasks/:id`
- [ ] **Commit 29:** `test: Add unit tests for get tasks`
- [ ] **Commit 30:** `fix: Handle empty task list response`
- [ ] **Commit 31:** `docs: Update API docs for view tasks`

### US5: Health Endpoint (3 commits)
- [ ] **Commit 32:** `feat(health): Create health check endpoint GET /api/health`
- [ ] **Commit 33:** `test: Add tests for health endpoint`
- [ ] **Commit 34:** `docs: Document health endpoint`

### Sprint 1 Review & Retrospective (2 commits)
- [ ] **Commit 35:** `docs: Add Sprint 1 review document`
- [ ] **Commit 36:** `docs: Add Sprint 1 retrospective`

---

## SPRINT 2: EXECUTION & IMPROVEMENT (30 commits)

### Apply Retrospective Improvements (5 commits)
- [ ] **Commit 37:** `feat: Add global error handler middleware`
- [ ] **Commit 38:** `feat: Add request logging middleware`
- [ ] **Commit 39:** `test: Add tests for error handling`
- [ ] **Commit 40:** `refactor: Improve error messages`
- [ ] **Commit 41:** `docs: Document error handling approach`

### US3: Update Task (6 commits)
- [ ] **Commit 42:** `feat(task): Add update task route PUT /api/tasks/:id`
- [ ] **Commit 43:** `feat(task): Add partial update support PATCH /api/tasks/:id`
- [ ] **Commit 44:** `feat(task): Add validation for update operations`
- [ ] **Commit 45:** `test: Add unit tests for update task`
- [ ] **Commit 46:** `fix: Fix update returning old data`
- [ ] **Commit 47:** `docs: Document update endpoints`

### US4: Delete Task (5 commits)
- [ ] **Commit 48:** `feat(task): Add delete task route DELETE /api/tasks/:id`
- [ ] **Commit 49:** `feat(task): Handle delete non-existent task`
- [ ] **Commit 50:** `test: Add unit tests for delete task`
- [ ] **Commit 51:** `test: Add edge case tests for delete`
- [ ] **Commit 52:** `docs: Document delete endpoint`

### Frontend Implementation (8 commits)
- [ ] **Commit 53:** `feat(frontend): Create HTML structure`
- [ ] **Commit 54:** `feat(frontend): Add CSS styling`
- [ ] **Commit 55:** `feat(frontend): Add task list display`
- [ ] **Commit 56:** `feat(frontend): Add create task form`
- [ ] **Commit 57:** `feat(frontend): Add update task functionality`
- [ ] **Commit 58:** `feat(frontend): Add delete task functionality`
- [ ] **Commit 59:** `feat(frontend): Add loading states and error handling`
- [ ] **Commit 60:** `feat: Serve static frontend from Express`

### Monitoring & Logging (4 commits)
- [ ] **Commit 61:** `feat(monitoring): Add detailed health check with stats`
- [ ] **Commit 62:** `feat(monitoring): Add request timing logs`
- [ ] **Commit 63:** `feat(monitoring): Add uptime tracking`
- [ ] **Commit 64:** `test: Add monitoring tests`

### Sprint 2 Review & Final Retrospective (2 commits)
- [ ] **Commit 65:** `docs: Add Sprint 2 review document`
- [ ] **Commit 66:** `docs: Add final retrospective`

---

## FINAL FOLDER STRUCTURE

```
Sprinting_Devops/
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   ├── routes/
│   │   ├── tasks.js
│   │   └── health.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── logger.js
│   ├── models/
│   │   └── task.js
│   ├── utils/
│   │   └── validation.js
│   └── app.js
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── tests/
│   ├── tasks.test.js
│   └── health.test.js
├── docs/
│   ├── PRODUCT_BACKLOG.md
│   ├── DEFINITION_OF_DONE.md
│   ├── SPRINT1_PLAN.md
│   ├── SPRINT1_REVIEW.md
│   ├── SPRINT1_RETRO.md
│   ├── SPRINT2_REVIEW.md
│   ├── SPRINT2_RETRO.md
│   └── API.md
├── package.json
├── .eslintrc.json
├── .gitignore
├── README.md
└── COMMIT_GUIDE.md
```

---

## USER STORIES REFERENCE

| ID | User Story | Story Points | Priority | Sprint |
|----|------------|--------------|----------|--------|
| US1 | As a user, I can create a task so I can track my work | 3 | High | 1 |
| US2 | As a user, I can view all tasks so I can see what needs to be done | 2 | High | 1 |
| US3 | As a user, I can update a task so I can modify details | 3 | Medium | 2 |
| US4 | As a user, I can delete a task so I can remove completed work | 2 | Medium | 2 |
| US5 | As an operator, I can check API health so I can monitor the system | 1 | High | 1 |
| US6 | As a user, I can use a web interface to manage tasks | 5 | Medium | 2 |

---

## GIT COMMANDS REFERENCE

```bash
# Initialize repo
git init
git add .
git commit -m "init: Initialize repository with README"

# Standard workflow
git add <files>
git commit -m "type: description"

# Push to GitHub
git remote add origin <your-repo-url>
git push -u origin main
```

---

## COMMIT MESSAGE TYPES

- `init:` - Initial setup
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `test:` - Adding tests
- `ci:` - CI/CD changes
- `chore:` - Maintenance tasks
- `refactor:` - Code refactoring

---

## CURRENT PROGRESS

**Last Completed Commit:** ___

**Next Commit:** ___

**Notes:**
- 
