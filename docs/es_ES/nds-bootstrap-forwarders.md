---
title: "lanzadores de nds-bootstrap para hiyaCFW"
---

Esta es una sección de complementos que implica crear redireccionadores para nds-bootstrap. Esto le permite lanzar nds roms directamente desde el Menu de Sistema de su SDNAND.

## Requisitos

- Un sistema de Nintendo DSi con [Unlaunch](/installing-unlaunch) & [hiyaCFW](/hiyacfw-setup) instalado
- Un [menú TWiLight ++](launching-the-exploit#twilight-menu) configurado
- La última versión de [MakeForwarder](https://github.com/Ta180m/Make-Forwarder-Dsi/releases)

### Instrucciones

1. Extrae *el contenido de* `MakeForwarder.zip` a la raíz de tu tarjeta SD
1. Iniciar Menú TWiLight ++ a través del menú de Desiniciar
   - Mantén pulsado <kbd class="face">A</kbd> & <kbd class="face">B</kbd> para ir al menú de Desiniciar
1. Lanza tu ROM de Nintendo DS
1. Una vez que la ROM arranca y funciona, apaga la consola
   - Si no funciona, por favor sigue la guía de solución de problemas nds-bootstrap
1. Iniciar hiyaCFW a través del menú de Deslanzamiento
1. Una vez en el Menú del Sistema Nintendo DSi, desenvuelve y ejecuta "Forwarder Maker"
1. Establece tu bootstrap de destino dependiendo de lo que sea tu aplicación:
   - **ROM:** `sd:/_nds/nds-bootstrap-release.nds`
   - **Homebrew:** `sd:/_nds/nds-bootstrap-hb-release.nds`
1. Selecciona "create forwarder" & navega a la ubicación de tu ROM

Repita los pasos 7 y 8 hasta que haya informado de todas sus ROMs creadas como forwarders.
- No es necesario restablecer las versiones de arranque de destino a menos que su selección anterior sea incorrecta a la actual

Una vez que haya creado todas sus ROMs creadas como forwarders, reinicie el sistema y ejecute hiyaCFW. Ahora deberían aparecer en las cajas de regalo.
