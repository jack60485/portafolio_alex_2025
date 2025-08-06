#!/usr/bin/env bash

# 1. Build del frontend con Vite
echo "🔧 Building frontend with Vite..."
cd frontend
npm install
npm run build
echo "✅ Frontend build complete"

# 2. Copiar el build al backend/staticfiles/frontend/
echo "📦 Copying frontend build to Django staticfiles..."
rm -rf ../backend/staticfiles/frontend
mkdir -p ../backend/staticfiles/frontend
cp -r dist/* ../backend/staticfiles/frontend/

# 3. Instalar dependencias de Django
echo "🐍 Installing backend Python dependencies..."
cd ../backend
pip install -r requirements.txt

# 4. Colectar archivos estáticos en Django
echo "📁 Collecting static files with Django..."
python manage.py collectstatic --noinput

echo "🚀 Build script completed successfully!"
