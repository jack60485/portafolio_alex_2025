# Asegúrate de estar en la raíz del proyecto

# 1. Construir frontend
echo "🔧 Building frontend with Vite..."
npm install
npm run build
echo "✅ Frontend build complete"

# 2. Mover dist/ a staticfiles/frontend
rm -rf backend/staticfiles/frontend
mv dist backend/staticfiles/frontend

# 3. Copiar index.html a templates (¡esta parte es clave!)
mkdir -p backend/templates
cp backend/staticfiles/frontend/index.html backend/templates/index.html

# 4. Instalar dependencias de backend
echo "🐍 Installing backend Python dependencies..."
pip install -r backend/requirements.txt

# 5. Recolectar archivos estáticos
echo "📁 Collecting static files with Django..."
python backend/manage.py collectstatic --noinput

echo "🚀 Build script completed successfully!"
