---
titulo: "Cronología oficial de Systemcore: todos los anuncios de FIRST, en orden (2/3)"
resumen: "Desde la convocatoria de propuestas en 2023 hasta el adelanto de reglas de agosto 2026: un recorrido completo, anuncio por anuncio, de cómo FIRST construyó Systemcore — con dos equipos mexicanos y uno brasileño entre los primeros en probarlo."
fecha: 2026-09-09
categoria: frc
autor:
  nombre: Rex
tags: ["systemcore", "serie-systemcore", "frc", "temporada-2027", "control-system"]
destacado: false
borrador: false
---

Esta es la segunda nota de nuestra serie sobre Systemcore. Si no has leído la primera, empieza por [Systemcore: la historia completa de por qué el roboRIO desaparece](/blog/systemcore-historia-completa-roborio) — ahí explicamos qué es el dispositivo y por qué existe. Aquí nos enfocamos en la cronología: cada anuncio oficial de FIRST, en orden, con lo que aportó cada uno.

## Finales de 2023 — Se abre la convocatoria

FIRST publica una Request for Proposal (RFP) buscando un controlador de robot que sirviera tanto para FRC como para FIRST Tech Challenge, buscando reducir costos y complejidad para ambos programas.

## Noviembre 2024 — Se anuncian los socios

FIRST anuncia que trabajará con Raspberry Pi y Limelight Vision (con apoyo de WPI, REV Robotics y Google) para desarrollar el nuevo sistema. Se revela el nombre del componente compartido, **Systemcore**, y se adelantan sus especificaciones principales: Raspberry Pi CM5, procesamiento de visión Limelight integrado, múltiples buses CAN, puertos SmartIO flexibles, IMU integrado, radio dual-band, y compatibilidad con aceleradores de IA. También se presenta **MotionCore**, el módulo complementario para FIRST Tech Challenge.

## Marzo 2025 — Primeros detalles técnicos completos

FIRST comparte el primer desglose detallado de los puertos de entrada/salida de Systemcore (en ese momento: 5 puertos CAN-FD, 6 SmartIO, 2 I2C, 4 USB 3.0-A, 1 USB-C, Ethernet, y más), confirma que las pruebas Alpha para FRC comenzarían en junio, y muestra un primer video de un robot de prueba corriendo con el Field Management System (FMS) en un evento real, con todos los sistemas funcionando correctamente.

## Junio 2025 — Primera oleada de pruebas Alpha

De más de 400 solicitudes, FIRST selecciona **50 equipos** para la primera oleada de pruebas Alpha, priorizando diversidad geográfica y de lenguaje de programación. Entre los seleccionados hay tres equipos latinoamericanos:

- **Equipo 1156, Under Control** (Rio Grande do Sul, Brasil)
- **Equipo 9134, Tecmilenio - DEVOLT** (Chihuahua, México)
- **Equipo 9593, Rhinos** (Ciudad de México, México)

Este anuncio también confirma las dimensiones exactas del dispositivo (135.3 × 71.5 × 28.1 mm, ~215 g) y revela la pantalla de diagnóstico integrada.

## Octubre 2025 — Recordatorio de avance

FIRST reporta que los equipos Alpha llevaron Systemcore a numerosos eventos de fuera de temporada, reportando avances y fallas a través de un proyecto público en GitHub. Se reafirma la meta de que Systemcore cueste menos que un roboRIO nuevo (aunque el precio exacto sigue sin publicarse), y se anuncia que **Emerson/National Instruments** trabajará para dar soporte a LabVIEW Community Edition sobre Systemcore — buena noticia para los equipos que programan en LabVIEW.

## Diciembre 2025 — Enfoque en FIRST Tech Challenge

FIRST publica el desglose más completo hasta ahora, mostrando los cinco componentes que tendrá el nuevo sistema de control para FIRST Tech Challenge: Systemcore, MotionCore, el nuevo motor **FIRST A301**, un paquete de batería tipo herramienta eléctrica de 18V, y una aplicación de escritorio como estación de conducción temporal. Se confirma que Systemcore lleva más de **1,000 partidos de competencia** jugados en fuera de temporada con retroalimentación positiva, y se detallan varios cambios de conectores derivados de la primera oleada Alpha (se elimina el conector Weidmueller de alimentación, los puertos CAN pasan a Molex SL de 2 pines). También se confirma el calendario de adopción: FRC en la temporada 2027, FIRST Tech Challenge en la 2027-2028, con transición legal hasta al menos 2030-31.

## Agosto 2026 — Primer adelanto de reglas para 2027

FIRST publica la "Parte 1" de su adelanto de reglas para la temporada 2027: el CANivore queda legal de forma temporal para sumar buses CAN, aparece un límite de 18 motores por robot, y sale de la lista hardware descontinuado. Es el primer documento oficial que aterriza la llegada de Systemcore en reglas concretas.

**El desglose completo, regla por regla, está en su propia nota:** [FRC 2027: Systemcore y los cambios de reglas del primer adelanto](/blog/frc-2027-systemcore-y-cambios-de-reglas). FIRST anunció que viene una Parte 2 del adelanto.

## Lo que viene

FIRST ha dicho que compartirá más actualizaciones conforme se acerque la temporada 2027 — incluyendo, eventualmente, precio, fecha de venta y los detalles finales del Kit of Parts. En la [tercera nota de esta serie](/blog/systemcore-codigo-wpilib-que-falta-por-saber) cubrimos los cambios de código en WPILib y todo lo que, a la fecha de esta publicación, sigue sin confirmarse.

## Fuentes

- [Introducing the Future Mobile Robot Controller (nov. 2024)](https://community.firstinspires.org/introducing-the-future-mobile-robot-controller)
- [Updates on the Future Robot Controller (mar. 2025)](https://community.firstinspires.org/march-updates-on-the-future-robot-controller)
- [SystemCore Alpha Testing – First Wave (jun. 2025)](https://community.firstinspires.org/systemcore-alpha-testing-first-wave)
- [2027 Control System Testing Reminder (oct. 2025)](https://community.firstinspires.org/2025-control-system-testing-reminder-for-2027)
- [Control System Update: FIRST Tech Challenge Edition (dic. 2025)](https://community.firstinspires.org/control-system-update-first-tech-challenge-edition)
- [2027 Event & Robot Rule Preview – Part 1 (ago. 2026)](https://community.firstinspires.org/2026-event-robot-rule-preview-for-2027-season-part-1)
- [Repositorio de pruebas Alpha/Beta — GitHub](https://github.com/wpilibsuite/SystemcoreTesting)
