# Extraindo a NAND

Esta página explica o processo para realizar um backup da NAND, que é uma cópia dos dados no armazenamento interno do Nintendo DSi. Ela pode ser utilizada para configurar o hiyaCFW, assim como o no$gba e o melonDS para emulação de DSi.

::: tip

Certifique-se de que o cartão SD possui pelo menos 250 MB de espaço livre, caso contrário, você terá uma mensagem de erro no dumpTool.

:::

::: tip

É altamente recomendado que você faça isso. Um backup da NAND pode ser usado como um ponto de restauração no futuro, em caso de um brick.

:::

## Seção I - Configuração do cartão SD

::: tip

Se você já baixou o dumpTool de outra seção deste guia, você pode pular esta seção.

:::

1. Baixe a última versão de [dumpTool](https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds)
2. Coloque `dumpTool.nds` em qualquer lugar do cartão SD

## Seção II - Extraindo a NAND

1. Launch `dumpTool` through the menu you have installed
   - If you've used an exploit to launch it, and you're already in dumpTool, ignore this step
   - If Unlaunch is already installed and you we're directed to this page from the [Get Started](get-started.html#section-ii-checking-if-unlaunch-is-already-installed) page, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting
2. Pressione o botão <kbd class="face">A</kbd> no seu Nintendo DSi para começar a extrair a sua NAND
   - Um backup da NAND normalmente leva cerca de 7 minutos
3. Quando o backup da NAND estiver concluído, aperte o botão <kbd>START</kbd> no seu Nintendo DSi para sair do dumpTool
4. Desligue o seu console e insira o cartão SD de volta no seu dispositivo
5. On the SD card, go to where `dumpTool.nds` is placed, and you'll see a new folder called `DT######...` which contains the NAND backup
   - If dumpTool is downloaded from the [Get Started](get-started.html) page, it'll be named `boot.nds`
   - Inside the folder is `nand.bin` which is the backup itself, and `nand.bin.sha1` which is the SHA1 hash of the backup
6. Store the `DT######...` folder somewhere safe, where you won't lose it
   - Se possível, faça vários backups em diferentes dispositivos de armazenamento
   - Depois de ter guardado o backup em algum outro lugar, você pode excluí-lo do cartão SD

::: warning

A hash SHA1 do `nand.bin` não vai se igualar a hash arquivada em `nand.bin.sha1`. Isso é porquê dumpTool adiciona data adicional conhecida como um footer no$gba para o arquivo `nand.bin` depois que o hash SHA1 hash foi calculado. Você pode usar o [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) pra criar uma cópia sem o footer.

:::

::: tip

Continue to [Choosing a Menu](choosing-a-menu.html)

:::
