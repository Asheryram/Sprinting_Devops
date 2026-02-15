// Task Manager Frontend Application
const API_URL = '/api/tasks';

// DOM Elements
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const submitBtn = document.getElementById('submitBtn');

// State
let editingTaskId = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    taskForm.addEventListener('submit', handleSubmit);
});

// Load all tasks
async function loadTasks() {
    try {
        taskList.innerHTML = '<p class="loading">Loading tasks...</p>';
        const response = await fetch(API_URL);
        const data = await response.json();
        renderTasks(data.tasks);
    } catch (error) {
        console.error('Error loading tasks:', error);
        taskList.innerHTML = '<p class="error">Failed to load tasks</p>';
    }
}

// Render tasks to DOM
function renderTasks(tasks) {
    if (!tasks || tasks.length === 0) {
        taskList.innerHTML = '<p class="empty-state">No tasks yet. Create your first task!</p>';
        return;
    }

    taskList.innerHTML = tasks.map(task => `
        <div class="task-card" data-id="${task.id}">
            <div class="task-header">
                <span class="task-title">${escapeHtml(task.title)}</span>
                <span class="task-status status-${task.status}">${task.status}</span>
            </div>
            ${task.description ? `<p class="task-description">${escapeHtml(task.description)}</p>` : ''}
            <div class="task-actions">
                ${task.status !== 'completed' ? 
                    `<button class="btn-complete" onclick="updateStatus('${task.id}', 'completed')">Complete</button>` : 
                    `<button class="btn-complete" onclick="updateStatus('${task.id}', 'pending')">Reopen</button>`
                }
                <button class="btn-edit" onclick="editTask('${task.id}')">Edit</button>
                <button class="btn-delete" onclick="deleteTask('${task.id}')">Delete</button>
            </div>
        </div>
    `).join('');
}

// Handle form submission
async function handleSubmit(e) {
    e.preventDefault();
    
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (!title) {
        alert('Title is required');
        return;
    }

    try {
        submitBtn.disabled = true;
        submitBtn.textContent = editingTaskId ? 'Updating...' : 'Adding...';

        const taskData = { title, description };
        
        if (editingTaskId) {
            await updateTask(editingTaskId, taskData);
            editingTaskId = null;
            submitBtn.textContent = 'Add Task';
        } else {
            await createTask(taskData);
        }

        taskForm.reset();
        await loadTasks();
    } catch (error) {
        console.error('Error saving task:', error);
        alert('Failed to save task');
    } finally {
        submitBtn.disabled = false;
        if (!editingTaskId) submitBtn.textContent = 'Add Task';
    }
}

// Create new task
async function createTask(taskData) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create task');
    }

    return response.json();
}

// Update existing task
async function updateTask(id, taskData) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update task');
    }

    return response.json();
}

// Update task status
async function updateStatus(id, status) {
    try {
        await updateTask(id, { status });
        await loadTasks();
    } catch (error) {
        console.error('Error updating status:', error);
        alert('Failed to update task status');
    }
}

// Edit task - populate form
async function editTask(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const task = await response.json();
        
        titleInput.value = task.title;
        descriptionInput.value = task.description || '';
        editingTaskId = id;
        submitBtn.textContent = 'Update Task';
        
        titleInput.focus();
    } catch (error) {
        console.error('Error loading task for edit:', error);
        alert('Failed to load task');
    }
}

// Delete task
async function deleteTask(id) {
    if (!confirm('Are you sure you want to delete this task?')) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Failed to delete task');
        }

        await loadTasks();
    } catch (error) {
        console.error('Error deleting task:', error);
        alert('Failed to delete task');
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
