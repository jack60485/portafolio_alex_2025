#!/usr/bin/env bash

# 1. Build del frontend con Vite (desde raíz)
echo "🔧 Building frontend with Vite..."
npm install
npm run build
echo "✅ Frontend build complete"

# 2. Copiar build a staticfiles/frontend
rm -rf backend/staticfiles/frontend
mv dist backend/staticfiles/frontend

# 3. Copiar index.html a carpeta de templates para que Django pueda encontrarlo
mkdir -p backend/templates
cp backend/staticfiles/frontend/index.html backend/templates/index.html

# 4. Instalar dependencias de backend
echo "🐍 Installing backend Python dependencies..."
pip install -r backend/requirements.txt

# 5. Recolectar archivos estáticos
echo "📁 Collecting static files with Django..."
python backend/manage.py collectstatic --noinput

echo "🚀 Build script completed successfully!"
