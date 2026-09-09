---
titulo: "FRC 2027: Systemcore y los cambios de reglas del primer adelanto"
resumen: "FIRST publicó la 'Parte 1' de su adelanto de reglas para la temporada 2027: CANivore legal como medida temporal, límite de 18 motores por robot y ajustes a la lista de hardware legal. Esto es lo que confirmó FIRST y por qué está conectado con la llegada de Systemcore."
fecha: 2026-09-09
categoria: frc
autor:
  nombre: Nick
tags: ["systemcore", "frc", "temporada-2027", "reglas"]
destacado: false
borrador: true
---

En agosto de 2026, FIRST publicó la "Parte 1" de su adelanto de reglas de robot y evento para la temporada 2027. No es el Game Manual completo —eso llega hasta kickoff—, pero adelanta varios cambios que los equipos van a querer tener en el radar desde ahora, la mayoría conectados directamente con la llegada de Systemcore como nuevo control system.

> **¿Quieres el detalle completo de Systemcore?** Escribimos una serie de tres notas dedicadas: [1. La historia completa de por qué el roboRIO desaparece](/blog/systemcore-historia-completa-roborio), [2. Cronología oficial de todos los anuncios de FIRST](/blog/systemcore-cronologia-oficial-first), y [3. Cambios de código en WPILib y qué falta por confirmarse](/blog/systemcore-codigo-wpilib-que-falta-por-saber).

## El cambio grande: llega Systemcore

El eje de este adelanto de reglas es la transición del roboRIO a Systemcore como controlador oficial de FRC a partir de la temporada 2027. Es el cambio de control system más grande que ha tenido el programa en más de una década, y varios de los ajustes de reglas que siguen existen específicamente para suavizar esa transición mientras el nuevo hardware termina de madurar.

## CANivore: legal de forma temporal para sumar buses CAN

Mientras Systemcore termina de tener soporte CAN-FD nativo completo, FIRST confirmó que el **CANivore** será legal durante la temporada 2027 como medida temporal para que los equipos puedan agregar buses CAN adicionales al robot. No es una solución permanente —es un puente— pero le da margen a los equipos con builds más complejos (muchos mecanismos, muchos motores) para no quedarse cortos de buses mientras el ecosistema de Systemcore se estabiliza.

## Límite de 18 motores por robot

Se confirma un límite de **18 motores** por robot para la temporada 2027. Para la mayoría de los equipos esto no cambia nada en la práctica, pero vale la pena revisarlo si tu diseño de temporadas anteriores se acercaba a ese número, sobre todo si estás pensando en sumar mecanismos adicionales aprovechando la mayor capacidad de Systemcore.

## Otros ajustes a la lista de hardware legal

El resto de los cambios de este primer adelanto son menores: ajustes puntuales a qué componentes entran o salen de la lista de hardware legal, en su mayoría relacionados con la compatibilidad del nuevo control system y no con cambios de diseño de juego. FIRST ha dicho que compartirá más detalles conforme se acerque kickoff 2027.

## Qué hacer con esto por ahora

- Si tu equipo usa o piensa usar CANivore, revisa cómo encaja en tu arquitectura eléctrica actual — ahora tienes la confirmación de que seguirá siendo una opción legal en 2027.
- Si tu robot ronda los 16-18 motores, ten el límite presente al planear el diseño de la próxima temporada.
- Este es un adelanto, no el Game Manual: el texto final de las reglas —incluyendo cualquier ajuste— se confirma hasta el Team Update 00 en kickoff.

## Una nota importante

Este adelanto de reglas es parcial y preliminar. El texto oficial y definitivo de las reglas de la temporada 2027 se publica en el Game Manual, con actualizaciones vía Team Updates a partir de kickoff. Confirma siempre los detalles vigentes en las fuentes oficiales:

- [2027 Event & Robot Rule Preview – Part 1 — FIRST Community Blog (ago. 2026)](https://community.firstinspires.org/2026-event-robot-rule-preview-for-2027-season-part-1)
- [Systemcore Introduction — WPILib Docs](https://docs.wpilib.org/en/2027/docs/software/systemcore-info/systemcore-introduction.html)
