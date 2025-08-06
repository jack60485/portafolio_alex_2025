#!/usr/bin/env bash

# 1. Build del frontend con Vite (desde raíz)
echo "🔧 Building frontend with Vite..."
npm install
npm run build
echo "✅ Frontend build complete"

# 2. Copiar el build al backend/staticfiles/frontend
rm -rf backend/staticfiles/frontend
mv dist backend/staticfiles/frontend

# 🔁 Copiar también el index.html para asegurarse que Django lo encuentre
cp backend/staticfiles/frontend/index.html backend/staticfiles/frontend/index.html

# 3. Instalar dependencias del backend
echo "🐍 Installing backend Python dependencies..."
pip install -r backend/requirements.txt

# 4. Recolectar archivos estáticos de Django
echo "📁 Collecting static files with Django..."
python backend/manage.py collectstatic --noinput

echo "🚀 Build script completed successfully!"

