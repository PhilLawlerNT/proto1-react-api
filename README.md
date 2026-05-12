# Proto1 React API

A full-stack React application with a REST API backend featuring JWT authentication using RSA private key signing.

## Project Structure

- `backend/` - Node.js Express API server with JWT authentication
- `frontend/` - React application

## Setup

1. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Generate RSA keys (already done in backend/keys/)

4. Start the backend:
   ```bash
   cd backend
   npm start
   ```

5. Start the frontend:
   ```bash
   cd frontend
   npm start
   ```

## Usage

- Login with username: `admin`, password: `password`
- Access protected API endpoints with JWT token
- Token is stored in localStorage and included in API requests

## API Endpoints

- `POST /auth/login` - Login and get JWT token
- `GET /api/protected` - Protected route requiring JWT token