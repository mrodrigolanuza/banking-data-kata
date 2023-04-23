# Descipción

>**NOTA**: Kata realizada en el curso [Testing Sostenible con TypeScript](https://curso.testingsostenible.com/).

## Enunciado
El objetivo es  desarrollar una aplicación sencilla para la gestión de una cuenta bancaria aplicando outside-in TDD.
La kata permite **practicar el uso de pruebas de aceptación a la hora de guiar el diseño**. Aplicado correctamente será posible llegar a un sistema que evoluciona por sí mismo sin excesivos esfuerzos y sin sorpresas desagradables al final. 
La idea es utilizar la aproximación _outside-in TDD_ para desarrollar un diseño simple sin añadir complejidad accidental.

El enunciado de la kata puede consultarse en la web [Kata Log Rocks](https://kata-log.rocks/banking-kata).

## Principio de prioridad de transformación por Robert C. Martin

Pasos para conseguir la generalización de un código que soluciona un problema usando TDD:

1.  **{} ⇒ nil**: de no haber código a devolver nulo.
2.  **nil ⇒ constant**: de nulo a devolver un valor literal.
3.  **constant ⇒ constant+**: de un valor literal simple a uno más complejo.
4.  **constant ⇒ scalar**: de un valor literal a una variable.
5.  **statement ⇒ statements**: añadir más líneas de código sin condicionales.
6.  **unconditional ⇒ if**: introducir un condicional
7.  **scalar ⇒ array**: de variable simple a colección.
8.  **array ⇒ container**: de colección a contenedor.
9.  **statement ⇒ recursion**: introducir recursión.
10. **if ⇒ while**: convertir condicional en bucle.
11. **expression ⇒ function**: reemplazar expresión con llamada a función.
12. **variable ⇒ assignment**: mutar el valor de una variable.

## Preparación entorno (Typescript + Jest):

1.- Clonar la plantilla only-typescript

	- https://github.com/softwarecrafters-io/only-typescript.git

2.- Instalar dependicias npm

	- npm install

2.- Instalar jest

	- npm i -D jest ts-jest @types/jest

3.- Configurar jest

	- npx ts-jest config:init

4.- Añadir configuración de Jest (cobertura de tests)
        
	verbose: true,
    collectCoverage: true,
    coverageDirectory: "./coverage",
    coverageThreshold: {
        global:{
          statements: 50,
        branches: 50,
        functions: 50,
        lines: 50
        }
    } 

5.- Añadir configuración al fichero de npm para lanzar jest

    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
