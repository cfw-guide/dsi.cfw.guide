# Solución de problemas

## Unlaunch
### ¿Unlaunch se congela y muestra el mensaje `MISMATCH IN FAT COPIES`?
twlnf tiene un error critico en el que no actualiza correctamente toda la NAND después de modificarla, lo que hace que ciertos homebrew (como el instalador de Unlaunch) tire error.

Si bien se puede solucionar, el método no es exacto y varia en gran medida según el sistema. Un posible método es eliminar todos los títulos DSiWare instalados a través de twlnf, pero también ha habido reportes de que mover *todos* los títulos DSiWare a la tarjeta SD y luego de vuelta al sistema puede ayudar en algunos casos.

Si has hecho un downgrade del firmware de tu consola en el pasado, actualizarlo a la versión 1.4.5 (o 1.4.6 si la región de tu consola es China o Corea), también podría solucionar el error.

### No hay audio o pantalla de inicio al ejectar el menú original de DSi usando Unlaunch.

El desarrollador de Unlaunch (nocash) intencionalmente parchea el sonido de fondo y la pantalla de inicio por defecto. Puedes recuperar estos efectos reinstalando [Unlaunch](/installing-unlaunch) usando TWiLight Menu++.
