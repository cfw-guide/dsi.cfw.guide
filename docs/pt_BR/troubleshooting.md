# Solução de problemas

## Unlaunch

### Unlaunch congela em `MISMATCH IN FAT COPIES`

twlnf tem um bug crítico onde ele não atualiza corretamente toda a NAND depois de modificá-lo, o que faz com que um certo homebrew (como o instalador Unlaunch ) lance um erro.

Para corrigir isso, abra o [Gerenciador de títulos da NAND (NTM)](https://github.com/Epicpkmn11/NTM/releases) e selecione `Fix FAT copy mismatch`.

### Não há áudio ou imagem de inicialização ao iniciar o "Launcher" usando o Unlaunch

O desenvolvedor do Unlaunch (nocash) alterou intencionalmente o áudio em segundo plano e o inicio por padrão. You can regain these effects by [reinstalling Unlaunch](installing-unlaunch.html) with `Enable sound and splash` turned on, or by using [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Ligar apenas mostra uma tela preta após instalar o Unlaunch

Tente ejetar o cartão SD e ligar o console novamente. If it still only shows a black screen, you may need to flash your NAND via either [ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot) or a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Powering off in the DSi Menu and/or System Settings takes 5-10 seconds

The only solutions are starting the DSi Menu and/or System Settings with the SD card ejected, installing [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing), or uninstalling Unlaunch.

### Depois de instalar o Unlaunch, fiquei preso na inicialização de um aplicativo ou no menu de arquivos do Unlaunch

Isto provavelmente foi causado por escolher o aplicativo errado para a opção `No BUTTON` no Unlaunch. Segure <kbd class="face">A</kbd> + <kbd class="face">B</kbd> enquanto inicia o console, vá para `OPTIONS`, e configure `NO BUTTON` para qual for a sua preferência.

### Outros problemas do Unlaunch

Se o Unlaunch exibir `Clusters too large`, `Bad VBR`, `Bad MBR`, ou não exibe qualquer aplicativo enquanto o cartão SD está inserido, o cartão SD provavelmente não estava formatado corretamente. Reseguir [instalação do cartão SD](sd-card-setup.html).

## TWiLight Menu++

Para solucionar problemas gerais do TWiLight Menu++, consulte a página [FAQ & Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) no DS-Homebrew Wiki.

## AKMenu-Next

For AKMenu-Next troubleshooting, please see the [Troubleshooting Page](https://coderkei.github.io/akmenu-next-docs/guides/troubleshooting) and [FAQ](https://coderkei.github.io/akmenu-next-docs/guides/faq) page on the AKMenu-Next Documentation Website.

## Assistência adicional

Se depararam com um problema que não é resolvido aqui, ou que persiste apesar das soluções dadas, peça assistência no l[DS<sup>(i)</sup> Mode Hacking! ](https://discord.gg/fCzqcWteC4) No Discord.
