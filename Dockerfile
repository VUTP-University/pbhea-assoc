# =========================
# Stage 1: Frontend Build
# =========================
FROM node:20 AS frontend

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend ./
RUN npm run build

# =========================
# Stage 2: Backend Build
# =========================
FROM python:3.11-slim AS backend

# Set working directory
WORKDIR /app

# Install dependencies
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend files
COPY backend .

# Copy frontend build output
COPY --from=frontend /app/frontend/dist ./frontend_dist

# Expose port
EXPOSE 5000

# Set environment variables
ENV FLASK_APP=app.py
ENV FLASK_ENV=production
ENV PYTHONUNBUFFERED=1

# Start Flask app with Gunicorn (prod server)
CMD ["gunicorn", "app:create_app()", "-b", "0.0.0.0:5000"]