---
titulo: "FRC 2027: Systemcore y los cambios de reglas del primer adelanto"
resumen: "FIRST publicó la 'Parte 1' de su adelanto de reglas para la temporada 2027 de FRC: CANivore legal como medida temporal, límite de 18 motores por robot y ajustes a la lista de hardware legal. Esto es lo que confirmó FIRST y por qué está conectado con la llegada de Systemcore."
fecha: 2026-09-09
categoria: frc
autor:
  nombre: Rex
tags: ["systemcore", "frc", "temporada-2027", "reglas"]
destacado: false
borrador: false
---

En agosto de 2026, FIRST publicó la "Parte 1" de su adelanto de reglas de robot y evento para la temporada 2027. No es el Game Manual completo —eso llega hasta kickoff—, pero adelanta varios cambios que los equipos van a querer tener en el radar desde ahora: unos conectados directamente con la llegada de Systemcore como nuevo control system, y otros de limpieza de la lista de hardware legal.

> **Ojo con el año.** FIRST nombra las temporadas de FRC con un solo año, así
> que la **temporada 2027** es la que arranca con el kickoff del **9 de enero de
> 2027** — no la que está corriendo ahora. En FIRST Tech Challenge, Systemcore
> llega un año después, en la temporada **2027-2028**.

> **¿Quieres el detalle completo de Systemcore?** Escribimos una serie de tres notas dedicadas: [1. La historia completa de por qué el roboRIO desaparece](/blog/systemcore-historia-completa-roborio), [2. Cronología oficial de todos los anuncios de FIRST](/blog/systemcore-cronologia-oficial-first), y [3. Cambios de código en WPILib y qué falta por confirmarse](/blog/systemcore-codigo-wpilib-que-falta-por-saber).

## El cambio grande: llega Systemcore

El eje de este adelanto de reglas es la transición del roboRIO a Systemcore como controlador oficial de FRC a partir de la temporada 2027. Es el cambio de control system más grande que ha tenido el programa en más de una década, y varios de los ajustes de reglas que siguen existen específicamente para suavizar esa transición mientras el nuevo hardware termina de madurar.

## CANivore: legal de forma temporal para sumar buses CAN

Mientras Systemcore termina de tener soporte CAN-FD nativo completo, FIRST confirmó que el **CANivore** será legal durante la temporada 2027 como medida temporal para que los equipos puedan agregar buses CAN adicionales al robot. No es una solución permanente —es un puente— pero le da margen a los equipos con builds más complejos (muchos mecanismos, muchos motores) para no quedarse cortos de buses mientras el ecosistema de Systemcore se estabiliza.

Ojo con la fecha de caducidad: FIRST fue explícito en que **para la temporada 2028 esa regla desaparece** y todos los buses CAN tendrán que originarse en los buses nativos de Systemcore. El CANivore seguirá siendo legal como nodo dentro de un bus nativo (por ejemplo, para un coprocesador), pero ya no para crear buses adicionales.

## Límite de 18 motores por robot

Se confirma un límite de **18 motores** por robot para la temporada 2027. Para la mayoría de los equipos esto no cambia nada en la práctica, pero vale la pena revisarlo si tu diseño de temporadas anteriores se acercaba a ese número, sobre todo si estás pensando en sumar mecanismos adicionales aprovechando la mayor capacidad de Systemcore. FIRST calcula que el límite afecta a alrededor del **10% de los equipos de 2026**, y lo plantea también como una reducción de costo en controladores de motor y distribución de energía.

## Otros ajustes a la lista de hardware legal

El resto de los cambios de este primer adelanto son de limpieza: FIRST retira de la lista hardware que ya está descontinuado.

- **Controladores de motor:** salen el Talon original (`CTRE_Talon`, `CTRE_Talon_SR`, `am-2195`) y el VictorSP. Según FIRST, cada uno lo usa menos del 0.5% de los equipos.
- **Motores:** salen el VEX BAG (217-3351) y el Mini-CIM (217-3371) de la lista explícita de motores legales. Son productos descontinuados, y pueden seguir usándose bajo la regla general de motores con escobillas en breakers de 20A.
- **Baterías USB:** la regla pierde el requisito de voltaje y corriente. Ahora se permite cualquier batería USB comercial de 100 Wh o menos.

FIRST anunció que viene una **Parte 2** de este adelanto con más cambios de reglas.

## Qué hacer con esto por ahora

- Si tu equipo usa o piensa usar CANivore, revisa cómo encaja en tu arquitectura eléctrica actual — ahora tienes la confirmación de que seguirá siendo una opción legal en la temporada 2027 — y solo en esa.
- Si tu robot ronda los 16-18 motores, ten el límite presente al planear el diseño de la próxima temporada.
- Este es un adelanto, no el Game Manual: el texto final de las reglas —incluyendo cualquier ajuste— se confirma hasta el Team Update 00 en kickoff.

## Una nota importante

Este adelanto de reglas es parcial y preliminar. El texto oficial y definitivo de las reglas de la temporada 2027 se publica en el Game Manual, con actualizaciones vía Team Updates a partir de kickoff. Confirma siempre los detalles vigentes en las fuentes oficiales:

- [2027 Event & Robot Rule Preview – Part 1 — FIRST Community Blog (ago. 2026)](https://community.firstinspires.org/2026-event-robot-rule-preview-for-2027-season-part-1)
- [Systemcore Introduction — WPILib Docs](https://docs.wpilib.org/en/2027/docs/software/systemcore-info/systemcore-introduction.html)
