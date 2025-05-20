# Analizador Sintáctico - Proyecto Node.js (ANTLR4)

Este repositorio contiene el proyecto de un analizador sintáctico desarrollado con Node.js y ANTLR4

---

## 📦 Estructura del Repositorio

- `index.js`: Archivo principal que ejecuta el analizador.
- `CustomLenguajeVisitor.js`: Implementación personalizada del visitante para recorrer el árbol sintáctico.
- `Lenguaje.g4`: Archivo con la gramática en ANTLR4.
- `generated/`: Carpeta que contiene los archivos generados automáticamente por ANTLR.
- `input.txt`: Archivo de entrada por defecto usado por el analizador.
- `input_correcto_1.txt`, `input_correcto_2.txt`: Ejemplos de entradas válidas.
- `input_incorrecto_1.txt`, `input_incorrecto_2.txt`: Ejemplos de entradas inválidas.
- `arbol.json`: Representación del árbol de derivación (opcional).
- `README.md`: Este archivo.
- `antlr-4.13.2-complete.jar`: JAR de ANTLR usado para generar los analizadores (si aplica).
- `package.json`, `package-lock.json`: Archivos de configuración de dependencias del proyecto Node.js.

---

## 🛠 Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/valentinapaz4/51029.git
   cd 51029
