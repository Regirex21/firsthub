---
titulo: "Systemcore: qué cambia en tu código WPILib y qué todavía no sabemos (3/3)"
resumen: "GradleRIO, NetworkTables v4, funciones y hardware que desaparecen, y todo lo que FIRST aún no ha confirmado sobre Systemcore: precio, fecha de venta y el texto final de las reglas. Guía práctica de qué hacer mientras tanto."
fecha: 2026-09-09
categoria: frc
autor:
  nombre: Nick
tags: ["systemcore", "serie-systemcore", "frc", "temporada-2027", "wpilib", "control-system"]
destacado: false
borrador: false
---

Cerramos la serie de Systemcore con la parte más técnica: qué cambia realmente en el código que escriben los programadores del equipo, y qué preguntas siguen sin respuesta oficial. Si te perdiste las notas anteriores, empieza por [la historia completa de por qué el roboRIO desaparece](/blog/systemcore-historia-completa-roborio) y [la cronología oficial de anuncios](/blog/systemcore-cronologia-oficial-first).

**Todo lo de esta nota corresponde a versiones Alpha de WPILib 2027 — es software de prueba y puede seguir cambiando antes de kickoff.**

## Lo primero: tus proyectos de 2026 no van a abrir directo

WPILib describe este cambio de control system como el más grande desde la introducción del cRIO, hace más de una década — y eso se refleja en el software. Por cambios internos en GradleRIO, cualquier proyecto de 2026 necesita pasar por el proceso de importación antes de ser compatible con WPILib 2027. No es opcional ni cosmético: es un paso obligatorio.

## NetworkTables v3 desaparece

Si tu equipo todavía depende de NetworkTables v3 en algún rincón del código (por ejemplo, algún dashboard viejo o alguna librería de terceros sin actualizar), va a dejar de funcionar. Hay que migrar a **NetworkTables v4**, y quienes usan `pynetworktables` en Python deben cambiar a `pyntcore`.

## Hardware y funciones que se eliminan

Como Systemcore tiene una arquitectura de hardware distinta al roboRIO, varias funciones de WPILib ligadas a hardware específico del roboRIO simplemente dejan de tener sentido y se eliminan:

- Relay
- Salida analógica (Analog Output)
- SPI, y los IMUs/sensores SPI específicos (ADIS16448, ADIS16470, ADXL345, ADXRS450)
- Giroscopio analógico
- DMA
- Acelerómetro integrado
- Digital Glitch Filter
- Interrupts
- Counter
- Ultrasonic
- Analog Trigger
- Soporte para motores/controladores Nidec Brushless, Servo y Jaguar

Si tu robot usa alguno de estos, es buen momento para empezar a investigar el reemplazo recomendado antes de que llegue kickoff 2027.

## Cambios de estilo y APIs

- **Python:** funciones y variables pasan de camelCase a snake_case, para alinearse con las convenciones normales de Python.
- **Constantes:** todas las constantes (incluyendo valores enumerados) cambian a estilo ALL_CAPS.
- **SmartDashboard, SendableChooser y Sendable:** se reemplazan por las nuevas APIs de Telemetry y Tunables. El reemplazo de SendableChooser se llama **Selectable**.
- **Compilador C++:** para poder dar mejor seguimiento a las características del compilador, WPILib 2027 solo soporta la distribución de Linux más reciente con soporte a largo plazo (Ubuntu LTS), dejando atrás versiones anteriores.

## CAN: lo que sí funciona hoy (en Alpha) y lo que todavía no

Systemcore soporta múltiples buses CAN nativos, pero al momento de esta publicación, las versiones Alpha reportan que **los buses CAN de MotionCore todavía no son compatibles** — solo funcionan los buses CAN nativos de Systemcore y los CANivore. Como mencionamos en nuestra nota sobre [los cambios de reglas 2027](/blog/frc-2027-systemcore-y-cambios-de-reglas), el uso de CANivore para agregar buses adicionales será legal como medida temporal durante 2027, hasta que Systemcore tenga soporte CAN-FD nativo completo.

También está confirmado (aunque no implementado todavía en todas las librerías) que **el sistema de coordenadas de campo cambiará en 2027** — algo a tener en cuenta si tu equipo tiene código de autónomo o de swerve que asume el sistema de coordenadas actual.

## Lo que FIRST todavía NO ha confirmado

Siendo honestos sobre los huecos: al momento de escribir esta nota, varias piezas clave siguen sin anuncio oficial:

- **Precio exacto de Systemcore.** FIRST solo ha dicho que la meta es que cueste menos que un roboRIO nuevo.
- **Fecha exacta de venta al público.** Se ha mencionado informalmente en la comunidad una ventana cercana a octubre de 2026, pero esto **no ha sido confirmado directamente por FIRST** en un blog oficial — trátalo como rumor hasta que aparezca en una fuente oficial.
- **Detalles finales del Kit of Parts 2027** que incluirán Systemcore.
- **El texto exacto de la regla** que retira al roboRIO como controlador legal — eso se confirma normalmente hasta el Game Manual y el Team Update 00 en kickoff.

## Qué puede hacer tu equipo mientras tanto

- **No inviertas en un roboRIO nuevo** salvo que lo necesites para terminar la temporada 2026 o algún proyecto de verano — con WPILib 2027 apuntando exclusivamente a Systemcore, ese dinero rinde más guardado para 2027.
- **Revisa el repositorio de pruebas en GitHub** (`wpilibsuite/SystemcoreTesting`) para ver el progreso real, sin esperar al siguiente blog oficial.
- Si tu equipo programa en **Python**, empieza a familiarizarte con snake_case ahora — es un cambio de hábito, no solo de sintaxis.
- Si usas **NetworkTables v3** en algo (dashboards personalizados, herramientas de scouting), planea la migración a v4 con tiempo.
- Ten presente que todo esto sigue en fase Alpha/Beta — evita construir código de producción alrededor de detalles que "hoy funcionan así" en Alpha, porque pueden cambiar antes de kickoff.

## Una nota importante

Esta nota refleja el estado de WPILib 2027 y Systemcore en fase Alpha, a la fecha de esta publicación. Es software y hardware de prueba: varios detalles pueden cambiar antes de kickoff 2027. Antes de tomar decisiones importantes, confirma siempre con las fuentes oficiales:

- [New for 2027 — WPILib Changelog](https://docs.wpilib.org/en/2027/docs/yearly-overview/yearly-changelog.html)
- [Systemcore Introduction — WPILib Docs](https://docs.wpilib.org/en/2027/docs/software/systemcore-info/systemcore-introduction.html)
- [Repositorio de pruebas Alpha/Beta — GitHub](https://github.com/wpilibsuite/SystemcoreTesting)
- [Releases de WPILib 2027 — GitHub](https://github.com/wpilibsuite/allwpilib/releases)
