#!/usr/bin/env bash

# 1. Build del frontend con Vite (desde raíz)
echo "🔧 Building frontend with Vite..."
npm install
npm run build
echo "✅ Frontend build complete"

# 2. Mover build del frontend al lugar correcto
rm -rf backend/staticfiles/frontend
mv dist backend/staticfiles/frontend

# 3. Instalar dependencias del backend
echo "🐍 Installing backend Python dependencies..."
pip install -r backend/requirements.txt

# 4. Recolectar archivos estáticos
echo "📁 Collecting static files with Django..."
python backend/manage.py collectstatic --noinput

echo "🚀 Build script completed successfully!"
