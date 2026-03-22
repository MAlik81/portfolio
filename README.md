# Developer Portfolio Monorepo

This is a simple local starter for a developer portfolio project.

There is no database, authentication, or deployment setup yet.

## Project Structure

```text
portfolio/
  frontend/
  backend/
```

## Frontend

The frontend uses Next.js and starts with a single homepage.

From the project root:

```bash
npm run dev:frontend
```

Or inside the frontend folder:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run at `http://localhost:3000`.

## Backend

The backend uses Express and includes one test route:

- `GET /api/health`

From the project root:

```bash
npm run dev:backend
```

Or inside the backend folder:

```bash
cd backend
npm install
npm run dev
```

The backend will run at `http://localhost:5001` by default.

Test the backend route with:

```bash
curl http://localhost:5001/api/health
```
