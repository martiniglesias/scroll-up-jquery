scroll-up-jquery
================

Lo que vamos a hacer en este post es agregar dinámicamente un botón para volver a la parte superior de la web si nuestra página tiene scroll vertical.

Básicamente controlaremos la posición vertical de nuestra página y si ésta supera un tamaño especificado en el código javascript, aparecerá un botón con una flecha apuntando hacia arriba en la parte inferior derecha de nuestra pantalla.

Lo curioso de ésto es que, por una vez, lo haremos sin utilizar ninguna clase de plugin y lo haremos de tal manera que no haga falta escribir el botón en todos los html de nuestra web -aunque en lenguajes dinámicos agregarlo en alguno de los includes que utilices evitaría una línea de javascript-.

Si vamos por partes, lo primero que vemos en el código 1 es que llamamos a jQuery (en este caso la v1.9) y tenemos que tener en cuenta que si utilizas una versión inferior a la 1.7 hay una parte del código que no funcionará (básicamente la del código 3, donde se usa el ON).

El código 2 sirve para personalizar el aspecto y posición del botón. En mi caso tendrá 64px de ancho por 64px de alto, con una imagen de fondo, un texto ubicado fuera de los límites del botón y una opacidad del 60% que se pondrá al 100% al pasar el ratón por encima del mismo.

Y, finalmente, nuestro código 3, es el que hará el juego. La primer línea, como expliqué antes, agregará al BODY de nuestra página el botón (por CSS está marcado que no se vea con un display:none).

La segunda parte, se encargará de controlar el scroll vertical sobre la ventana del navegador y si éste es superior a 70px, realizará un FADE IN del botón (es decir, se mostrará con una pequeña animación de alpha) y, finalmente, la tercera parte será la encargada de controlar la acción de ese botón, ejecutando un desplazamiento superior hasta alcanzar la parte superior de nuestra web.

Post original:
http://www.martiniglesias.eu/blog/scroll-hacia-arriba-sin-utilizar-plugins-en-jquery/192

Demo funcional:
http://www.martiniglesias.eu/demos/scroll/
