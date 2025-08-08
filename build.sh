#!/usr/bin/env bash

echo "🔧 Building frontend with Vite..."
npm install
npm run build
echo "✅ Frontend build complete"

# 1️⃣ Mover assets de Vite a staticfiles_build/frontend
rm -rf backend/staticfiles_build/frontend
mkdir -p backend/staticfiles_build/frontend/assets
mv dist/assets/* backend/staticfiles_build/frontend/assets/

# 2️⃣ Copiar index.html a templates
mkdir -p backend/templates
cp dist/index.html backend/templates/index.html

# 3️⃣ Instalar dependencias Python
echo "🐍 Installing backend Python dependencies..."
pip install -r backend/requirements.txt

# 4️⃣ Recolectar archivos estáticos
echo "📁 Collecting static files with Django..."
python backend/manage.py collectstatic --noinput

echo "🚀 Build script completed successfully!"
