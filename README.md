# Indonesio Total

Aplicacion web local para aprender bahasa Indonesia con ruta BIPA 1-7, referencia UKBI, input comprensible, practica activa y biblioteca ampliada de contenido.

Para instrucciones dirigidas al cliente final, consulta `INSTRUCCIONES-DE-USO.md`.

## Ejecucion local

### Panel ejecutable recomendado

Abre con doble clic:

- `PANEL-LOCALHOST.exe`
- `PANEL-LOCALHOST.lnk`

El panel nativo tiene un unico boton:

- Verde: ejecuta el inicio de localhost.
- Rojo: ejecuta el apagado de localhost.

Mientras cambia el estado muestra `INICIANDO...` o `APAGANDO...` sin bloquear la ventana. El panel comprueba el estado mediante los marcadores locales del proceso, evitando peticiones de red continuas.

La aplicacion se abre en:

```text
http://localhost:5173/
```

### Scripts disponibles

```powershell
.\start-localhost.ps1
.\stop-localhost.ps1
.\toggle-localhost.ps1
```

O mediante los scripts de `package.json`:

```powershell
npm run localhost:on
npm run localhost:off
npm run localhost:toggle
```

El servidor tambien puede iniciarse directamente:

```powershell
node server.js
```

## Arquitectura

| Archivo | Responsabilidad |
| --- | --- |
| `index.html` | Estructura de la interfaz y secciones de la aplicacion. |
| `styles.css` | Diseno responsive, herramientas y lector ampliado del tutor. |
| `app.js` | Estado de la aplicacion, interacciones, progreso, audio, tutor y fallback local. |
| `content-library.js` | Generacion de vocabulario, frases, tests, lecturas, temas y piezas del constructor. |
| `daily-reset.js` | Reinicio de tareas diarias cuando cambia la fecha local. |
| `server.js` | Servidor HTTP estatico local y endpoint de salud. |
| `start-localhost.ps1` | Inicia el servidor y espera confirmacion de disponibilidad. |
| `stop-localhost.ps1` | Detiene procesos gestionados y limpia marcadores. |
| `toggle-localhost.ps1` | Alterna el estado de localhost. |
| `panel-localhost.ps1` | Version PowerShell del panel. |
| `PanelLocalhost.cs` | Codigo fuente del panel nativo compilado. |
| `PANEL-LOCALHOST.exe` | Ejecutable del panel para el cliente. |
| `build-panel-exe.ps1` | Compila de nuevo el panel ejecutable. |

## Servidor y control de procesos

`server.js` sirve los archivos de la carpeta del proyecto en `127.0.0.1` y usa el puerto `5173` por defecto. Puede cambiarse con la variable `PORT` o pasando un puerto al proceso.

Endpoint de comprobacion:

```text
GET /health
```

Respuesta esperada:

```json
{"ok":true,"app":"indonesio-total","port":5173}
```

Marcadores temporales:

- `.localhost.pid`: proceso iniciado por el script de Windows.
- `.localhost.node.pid`: proceso Node que sirve la pagina.
- `.localhost.ready`: confirma que el servidor ha empezado a escuchar.

Los scripts validan archivos de PID vacios o antiguos antes de intentar usarlos, para evitar fallos durante el encendido o apagado.

## Interfaz y funcionamiento interactivo

La pagina se organiza en:

- `Marco`: presentacion de los niveles BIPA.
- `Plan`: duracion, objetivo y tareas diarias.
- `Input`: lecturas, escucha, traduccion, glosario, dictado y retell.
- `Herramientas`: tarjetas, test, constructor de frases, shadowing, diario y tutor.
- `UKBI`: referencia de medicion externa.
- `Localhost`: comandos informativos de control local.

La navegacion y el estado se gestionan desde `app.js`. Si Alpine no se carga desde CDN, la aplicacion activa un renderizador local de respaldo para mantener funcionales los enlaces de datos, botones, campos y plantillas principales.

## Biblioteca de aprendizaje

`content-library.js` genera contenido organizado por los siete niveles BIPA. Tarjetas, test, shadowing, diario, lecturas y tutor se filtran por el nivel activo; el alumno no mezcla material de otros niveles durante la practica.

Capacidad disponible aproximadamente en cada nivel:

- `50` palabras base generadas del BIPA, mas ejemplos base curados en `app.js`.
- `54-55` tarjetas SRS visibles de vocabulario del nivel.
- `6.000` practicas de vocabulario contextual.
- `15.412` preguntas de test.
- `3.842` frases para practica oral y shadowing.
- `960` lecturas generadas.
- `4.801` temas de escritura.

La biblioteca generada completa aporta `350` palabras base, `69.230` tarjetas internas, `107.870` preguntas, `26.880` frases, `6.720` lecturas y `33.600` temas antes de sumar los ejemplos base incluidos en `app.js`.

El contenido se consume en tarjetas SRS, tests, shadowing, diario, nuevas lecturas y tutor.

El constructor de frases permite reutilizar piezas fundamentales de niveles previos, pero nunca presenta vocabulario o estructuras marcadas por encima del BIPA seleccionado.

Los contadores visibles de capacidad usan el maximo del BIPA seleccionado. Las tarjetas personales guardadas por el alumno siguen disponibles para repaso, pero no alteran el contador de biblioteca del nivel.
Las tarjetas, preguntas, frases, temas de escritura, correcciones y piezas del constructor se filtran por coincidencia exacta con el BIPA activo, sin incorporar contenidos de niveles anteriores o posteriores.

## Progreso y reinicio diario

El progreso se persiste en `localStorage` bajo la clave:

```text
indonesianTotalState
```

Se guardan, entre otros datos:

- Nivel y configuracion de sesion.
- Tareas completadas.
- Estado de tarjetas y revisiones.
- Puntuacion de test.
- Frases personalizadas.
- Rondas de shadowing y escritura.

`daily-reset.js` compara el dia local almacenado con la fecha actual. Al cambiar de dia reinicia tareas y marcadores diarios, tanto al abrir la pagina como mientras permanece abierta.

## Audio

La aplicacion utiliza `speechSynthesis` del navegador con idioma `id-ID`. Las voces del navegador pueden cargarse de forma diferida: `app.js` escucha `voiceschanged` y mantiene pendiente la primera reproduccion hasta encontrar una voz indonesia (`id-ID`/bahasa Indonesia, por ejemplo Microsoft Andika). No selecciona una voz espanola como sustituta.

## Tutor local

El apartado `Tutor IA` funciona localmente sobre la biblioteca integrada; no requiere un servicio externo de generacion.

Funciones:

- Vocabulario por nivel con ejemplos.
- Generacion de lecturas BIPA.
- Pronunciacion guiada mediante sintesis de voz.
- Correccion guiada a partir de palabras detectadas.
- Texto acumulativo limitado a la biblioteca del BIPA seleccionado.
- Exportacion del corpus del nivel a `indonesio-total-bipa-{nivel}-corpus.txt`.
- Pronunciacion iniciada directamente desde el clic del usuario para que los navegadores externos autoricen el audio, usando voz `id-ID`.

El tutor mantiene una unica actividad activa. Al seleccionar otra funcion, reemplaza la anterior y cancela cualquier reproduccion de voz previa para liberar el espacio de lectura.

## Dependencias visuales

La pagina referencia desde CDN:

- Alpine.js.
- Chart.js.
- Lucide.
- Canvas Confetti.
- Tailwind Browser.

La logica principal y el contenido ampliado permanecen en archivos locales del proyecto.

## Reconstruir el panel EXE

Tras modificar `PanelLocalhost.cs`, genera de nuevo el ejecutable con:

```powershell
powershell -ExecutionPolicy Bypass -File .\build-panel-exe.ps1
```

El archivo resultante es `PANEL-LOCALHOST.exe`.

## Fuentes base

- BIPA Daring: Permendikbud No. 27 Tahun 2017.
- APPBIPA: Standar Kompetensi Lulusan BIPA.
- Repositorio Kemendikdasmen: Sahabatku Indonesia BIPA.
- UKBI: predicados y rangos oficiales.
