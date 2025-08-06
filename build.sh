#!/usr/bin/env bash

# 1. Build del frontend con Vite (desde raíz)
echo "🔧 Building frontend with Vite..."
npm install
npm run build
echo "✅ Frontend build complete"

# 2. Instalar dependencias del backend
echo "🐍 Installing backend Python dependencies..."
pip install -r backend/requirements.txt

# 3. Recolectar archivos estáticos
echo "📁 Collecting static files with Django..."
python backend/manage.py collectstatic --noinput

echo "🚀 Build script completed successfully!"
