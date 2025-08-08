#!/usr/bin/env bash
echo "🧹 Limpiando archivos y carpetas innecesarias..."

# 1. Eliminar compilaciones antiguas en backend/staticfiles
rm -rf backend/staticfiles/dist
rm -rf backend/staticfiles/frontend

# 2. Eliminar residuos en backend/staticfiles_build
rm -rf backend/staticfiles_build/dist

# 3. Eliminar carpeta dist raíz (ya movida por build.sh)
rm -rf dist

# 4. Eliminar templates externos que no usa Django
rm -rf templates/assets

# 5. Eliminar imágenes duplicadas en lugares que no corresponden
find . -type f -name "logo-y-nombre.png" -not -path "./src/*" -delete

echo "✅ Limpieza completada."
