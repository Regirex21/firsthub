# Correos del boletín

HTML de los correos que manda Brevo. No forman parte del build de Astro
(Astro solo compila `src/` y `public/`): viven aquí para tenerlos
versionados y poder pegarlos en Brevo cuando haga falta.

## bienvenida.html

Correo que recibe quien confirma su suscripción, configurado en Brevo como
*E-mail de confirmación final* en los ajustes del formulario.

Para usarlo en Brevo hay que crear una plantilla nueva eligiendo la opción de
**pegar código HTML** — las plantillas predeterminadas usan el editor de
arrastrar y soltar y no aceptan HTML importado. Después, en el paso 4 del
formulario, se selecciona esa plantilla en vez de la predeterminada.

### Cosas que no hay que romper

- **El logo va en PNG, no en SVG.** La mayoría de los clientes de correo no
  renderizan SVG. El archivo está en `public/images/firsthub_logo_email.png`,
  sobre el fondo oscuro de la marca porque el logotipo es blanco y sobre fondo
  claro sería invisible. La línea del `<img>` está marcada con un comentario.
- **El enlace de baja usa `{{ unsubscribe }}`**, que es la etiqueta que Brevo
  sustituye. Sin ella el correo no cumple con los requisitos de Gmail y Yahoo.
- **Ese buzón no recibe respuestas.** El correo lo dice y manda a Instagram.
  Si algún día se habilitan las respuestas, hay que cambiar también
  `/boletin/confirmado`, que dice lo mismo.
