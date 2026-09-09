---
titulo: "Systemcore: la historia completa de por qué el roboRIO desaparece (1/3)"
resumen: "FRC despide al roboRIO en la temporada 2027. Esta es la guía completa de Systemcore: qué es, quién lo hizo, sus especificaciones de hardware, y por qué FIRST decidió reemplazar el control system después de más de una década."
fecha: 2026-09-09
categoria: frc
autor:
  nombre: Rex
tags: ["systemcore", "serie-systemcore", "frc", "temporada-2027", "control-system"]
destacado: true
borrador: false
---

Para la temporada 2027 —la que arranca con el kickoff del 9 de enero de 2027—, FRC va a competir con un "cerebro" distinto al que ha usado por más de una década. El roboRIO —el controlador de National Instruments que prácticamente todo equipo de FRC conoce— será reemplazado por **Systemcore**, un dispositivo diseñado específicamente para FIRST.

Esta es la primera nota de una serie de tres sobre Systemcore. Aquí cubrimos qué es, de dónde salió, y por qué FIRST decidió hacer un cambio de esta magnitud. En la [segunda nota](/blog/systemcore-cronologia-oficial-first) recorremos la cronología completa de anuncios oficiales, y en la [tercera](/blog/systemcore-codigo-wpilib-que-falta-por-saber) cubrimos los cambios de código en WPILib y todo lo que todavía no se sabe.

## De dónde salió Systemcore

A finales de 2023, FIRST abrió una convocatoria de propuestas (RFP) buscando un nuevo controlador de robot para reemplazar tanto el roboRIO (FRC) como el Control Hub (FIRST Tech Challenge). El objetivo declarado era reducir costos y complejidad para ambos programas con un enfoque modular, sin sacrificar la potencia que necesitan los equipos más avanzados.

En noviembre de 2024, FIRST anunció a los socios seleccionados: el desarrollo del controlador se hizo en colaboración con **Raspberry Pi** y **Limelight Vision**, con contribuciones importantes de WPI, REV Robotics y Google. Las piezas centrales se fabrican en Gales, en la planta de Sony UK Technology Centre.

## Qué es Systemcore, en concreto

Systemcore es el componente compartido entre FRC y FIRST Tech Challenge: cada robot usará exactamente uno. Es aproximadamente del tamaño de un smartphone grande — 135.3 x 71.5 x 28.1 mm y unos 215 gramos — y trae una pantalla pequeña integrada que muestra información de diagnóstico.

Por dentro, corre sobre un **Raspberry Pi Compute Module 5 (CM5)**: un procesador ARM Cortex-A76 de cuatro núcleos a 2.4 GHz, con 4 GB de RAM y un GPU VideoCore VII, sobre Linux en tiempo real. Para dimensionar el salto: el roboRIO actual corre un Cortex-A9 de dos núcleos a 667 MHz con solo 256 MB de RAM. No es una actualización incremental — es una generación de hardware completamente distinta.

Además del procesador, Systemcore integra:

- **Tecnología de visión Limelight incorporada** — cualquier equipo puede tener procesamiento de visión avanzado solo conectando una webcam, sin comprar un coprocesador aparte.
- **IMU integrado**, sin necesidad de un sensor externo para odometría.
- **Radio inalámbrico dual-band 2.4GHz/5GHz** integrado.
- **Puerto M.2 A+E compatible con aceleradores de IA** (como el Hailo-8), dejando la puerta abierta a aplicaciones de machine learning en el robot.
- Múltiples puertos **CAN-FD**, puertos **SmartIO** (que pueden funcionar como entrada analógica, entrada digital, PWM o salida digital según se necesite), puertos I2C, USB 3.0, un puerto USB-C para recuperación de emergencia, Ethernet, y un puerto RSL.

Los conectores han ido cambiando durante las pruebas: la versión más reciente reemplazó el conector de alimentación Weidmueller original por un puerto tipo Molex Micro-Fit+ compartido con FIRST Tech Challenge, y los puertos CAN pasaron a conectores Molex SL de 2 pines.

## Por qué FIRST decidió hacer este cambio

FIRST ha sido bastante directo sobre su motivación. Internamente le llaman "Robo-FOMO": la sensación de que los equipos necesitan comprar hardware adicional constantemente solo para no quedarse atrás. Los objetivos declarados del proyecto son:

- Crear paridad tecnológica entre FIRST Tech Challenge y FRC.
- Bajar la barrera de entrada para equipos nuevos.
- Reducir esa sensación de "hardware FOMO".
- Mantener un precio comparable al sistema actual — de hecho, FIRST ha dicho que la meta es que Systemcore cueste **menos** que un roboRIO nuevo.

## MotionCore: la otra mitad de la ecuación (sobre todo para FTC)

Junto con Systemcore, FIRST desarrolló un segundo dispositivo llamado **MotionCore**: un módulo complementario que combina distribución de energía, entradas de encoder y soporte de actuadores en una sola unidad. Es principalmente relevante para FIRST Tech Challenge (que no tenía nada equivalente al PDP/PDH de FRC), pero vale la pena conocerlo si tu equipo compite en ambos programas.

## Panorama general de fechas

- **FRC** empieza a usar Systemcore de forma oficial en la temporada 2027 (kickoff: 9 de enero de 2027).
- **FIRST Tech Challenge** lo adopta un año después, en la temporada 2027-2028.
- Habrá un **período de transición hasta al menos la temporada 2030-31**, en el que el sistema anterior (y un enfoque híbrido) seguirán siendo legales, para que los equipos puedan migrar a su propio ritmo.

Una aclaración que vale la pena, porque se presta a confusión: FIRST nombra las temporadas de FRC con **un solo año** y las de FIRST Tech Challenge con **dos**. La temporada 2027 de FRC es la que arranca en enero de 2027, no la que está corriendo ahora; cuando FIRST habla de esa misma temporada desde el lado de FTC, a veces la escribe como 2026-27.

En la siguiente nota de la serie recorremos, anuncio por anuncio, cómo se fue construyendo todo esto desde noviembre de 2024 hasta hoy — incluyendo qué equipos latinoamericanos ya han probado Systemcore de primera mano.

## Una nota importante

Systemcore sigue en fase de pruebas Alpha/Beta al momento de escribir esto. Los detalles de hardware, software y reglas pueden seguir cambiando antes del kickoff del 9 de enero de 2027. Todo lo descrito aquí refleja lo que FIRST ha confirmado públicamente hasta la fecha de esta publicación — consulta siempre las fuentes oficiales para la información más reciente:

- [Introducing the Future Mobile Robot Controller — FIRST Community Blog (nov. 2024)](https://community.firstinspires.org/introducing-the-future-mobile-robot-controller)
- [Updates on the Future Robot Controller — FIRST Community Blog (mar. 2025)](https://community.firstinspires.org/march-updates-on-the-future-robot-controller)
- [Control System Update: FIRST Tech Challenge Edition (dic. 2025)](https://community.firstinspires.org/control-system-update-first-tech-challenge-edition)
- [Systemcore Introduction — WPILib Docs](https://docs.wpilib.org/en/2027/docs/software/systemcore-info/systemcore-introduction.html)
- [Repositorio de pruebas Alpha/Beta — GitHub](https://github.com/wpilibsuite/SystemcoreTesting)
