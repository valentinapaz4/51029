# Proyecto — Analizador de Expresiones CRON con ANTLR4 y Node.js

## Alumna: María Valentina Paz Murgo
**Materia:** Sintaxis y Semántica de los Lenguajes  
**Carrera:** Ingeniería en Sistemas — UTN  
**Comisión:** [2k2]

---

## Descripción del proyecto

Este proyecto implementa un **analizador léxico, sintáctico y semántico** para una gramática tipo CRON, usando **ANTLR4** y **JavaScript (Node.js)**.  

El analizador reconoce expresiones válidas o inválidas según la gramática asignada, muestra el árbol de derivación, la tabla de tokens, e interpreta la expresión cron en lenguaje natural.

---

## Tecnologías utilizadas

- **ANTLR v4.13.2** (archivo `.g4` + código generado)
- **Node.js**
- **Java** (para ejecutar ANTLR desde terminal)
- Visual Studio Code (entorno de desarrollo)

---

## Contenido del repositorio

- `ssl-antlr-recuperacion/` → carpeta con el proyecto Node.js completo
- `CronGrammar.g4` → gramática utilizada
- `input_correcto_1.txt` y `input_correcto_2.txt` → ejemplos válidos
- `input_incorrecto_1.txt` y `input_incorrecto_2.txt` → ejemplos con errores
- `README.md` → este archivo
- `Reglas.pdf` → archivo entregado con la consigna

---

## Instrucciones de ejecución con ejemplos
- Una vez clonado y abierto el proyecto:
1- Copiar el contenido input_correcto_1 y pegarlo en el punto en el proyecto
2- Guardar cambios
3- Luego ejecutar el comando node.index.js en la terminal
4- Resultado esperado:
  ![image](https://github.com/user-attachments/assets/03a87f20-5172-4e39-acc2-2c4dd7b5e544)
