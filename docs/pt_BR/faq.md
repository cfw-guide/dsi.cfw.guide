# Perguntas Frequentes

## Eu deveria fazer uma atualização do sistema?

**Não** é recomendado atualizar seu DSi, exceto se você saiba que tenha DSiWare comprados. Embora ainda seja possível seguir este guia se você fizer isso, o único benefício para atualização é a habilidade de acessar a Nintendo DSi Shop para baixar jogos já adquiridos novamente. Todos os outros benefícios, como a integração com o Facebook no aplicativo de Câmera do Nintendo DSi, já não são utilizáveis ou não são significativos o suficiente para justificar as desvantagens:

- Sabe-se que a instalação de atualizações do sistema ocasionalmente **bricka** consoles, com aproximadamente a mesma frequência de quando se instala o Unlaunch
- Exploits mais antigos não são mais possíveis de usar, o que pode ser necessário se você for incapaz de usar os exploits recomendados
- A compatibilidade com Flashcards (por exemplo, R4 ou Acekard) é reduzida, no entanto, isso pode ser contornado se você instalar o Unlaunch

The only exception is an Unlaunch installation on a DSi with System Version 1.4.2 – this version is currently unsupported by Safe Unlaunch Installer (due to a bug), and requires updating your DSi console to 1.4.5.

## Qual é o melhor exploit?

O Unlaunch é, em geral, o melhor exploit para o DSi, com a única desvantagem é que há um pequeno risco de brickagem durante a instalação. Em geral, é recomendado usar o Pit de Memória para instalar o Unlaunch. Se você quer evitar qualquer risco é recomendado usar o Flipnote Lenny, já que ele tem mens problemas com homebrew que o Memory Pit ainda sendo igualmente seguro e simples de remover. Abaixo está está a lista de Prós e Contras de cada exploit:

### Memory Pit

Prós:

- Rápido e fácil de usar
- Não há risco de danificar o console, a desinstalação é tão simples quanto remover o Cartão SD ou excluir um arquivo
- Compatível com todos os Consoles DSi exceto se eles têm uma câmera quebrada e também não tenham completado o tutorial da câmera

Contras:

- Requer Abrir o aplicativo da câmera do DSi toda vez que você quiser acessar Homebrew
- Incompatível com alguns jogos do modo DSi e Homebrew devido a WRAM apenas estar aberta para a CPU ARM7
- O acesso ao Slot-1 (o cartucho do DS) é bloqueado no homebrew
- O acesso ao DSP é bloqueado, resultando em som pior no GBARunner2
- As Fotos no cartão SD não podem ser vistas no aplicativo da câmera do DSi enquanto o Memory Pit estiver instalado, devido a esse ser o ativador do exploit
  - A única maneira de ver fotos do cartão SD enquanto o Memory Pit estiver instalado, é iniciando uma ROM do aplicativo da câmera do DSi usando o  TWiLight Menu++  para iniciá-lo via nds-bootstrap (v0.61.3 ou posterior)

### stylehax

Prós:

- Melhor Compatibilidade com jogos do modo DSi e Homebrew que o Memory Pit
- Fácil de usar
- Nenhum risco de danificar o console
- Usável nos consoles com a câmera quebrada
- Melhor Som no GBARunner2

Contras:

- Requer acesso a internet
- Requer iniciar o Navegador do DSi toda vez que você quiser usar Homebrew, um pouco mais demorado que o Memory Pit
- O acesso ao Slot-1 (o cartucho do DS) é bloqueado no homebrew

### Flipnote Lenny

Prós:

- Melhor Compatibilidade com jogos do modo DSi e Homebrew que o Memory Pit
- Sem risco de danificar o console, desinstalar é tão simples quanto remover o SD ou excluir uma pasta
- Usável nos consoles com a câmera quebrada
- Melhor Som no GBARunner2

Contras:

- Requer iniciar o Flipnote Studio toda vez que você quiser usar Homebrew, um pouco mais demorado que o Memory Pit
- O acesso ao Slot-1 (o cartucho do DS) é bloqueado no homebrew

### Unlaunch

Prós:

- Permite carregar Homebrew e DSiWare imediatamente ao ligar o sistema, com atalhos de botão adicionais
- Acesso total ao sistema sem restrições, incluindo:
  - Acesso ao Slot-1, permitindo que você faça dump dos cartuchos de jogos e use flashcards incompatíveis
  - Melhor Som no GBARunner2
- Remove bloqueios de região nos Jogos DSi-Enhanced/Exclusivos
- Proteção contra a maioria das maneiras que um DSi poderia brickar
- Jogos DSi-Enhanced podem ser executados no modo DSi sem uma ROM “doadora”
- homebrew antigo pode ser executado via nds-bootstrap-hb

Contras:

- Risco muito pequeno de **brickar** o console quando instalar
- Ninguém, um pouco mais alto, risco de brickar-ló se você decidir [desinstalá-lo](uninstalling-unlaunch.html)
- Não compatível com consoles de desenvolvimento

## Vou perder alguma funcionalidade modificando meu sistema?

Se você instalar o Unlaunch ou usar o Flipnote Lenny, nenhuma funcionalidade será perdida. Se você usar o Memory Pit, não será possível ver fotos no cartão SD usando a Câmera DSi, a menos que você inicie um dump da ROM do aplicativo da Câmera do DSi usando o **TW**i**L**ight Menu++ para inicializá-lo via nds-bootstrap.

- Para recuperar a capacidade de ver as fotos do seu cartão SD ao iniciar a Câmera DSi no Menu DSi instale o Unlaunch ou mude para um exploit diferente, e então, apague o arquivo `pit.bin` que é do Memory Pit
  - Se 'tip.bin' existir na mesma pasta, renomeie-o de volta para 'pit.bin'

## Como posso jogar dumps de cartuchos do Nintendo DS?

Jogar dumps de Cartuchos no console requer o uso de um flashcard ou do nds-bootstrap, um programa que permite que jogos sejam jogados do cartão SD interno, redirecionando a leitura e escrita no Slot-1.

- With TWiLight Menu++ & AKMenu-Next you can navigate your SD card to find ROM files to play with nds-bootstrap. The advantages to using these menus are having a cheat menu, per-game settings, and avoiding the restrictions that forwarders bring. Em outras palavras, você pode soltar os arquivos da sua ROM diretamente e reproduzir sem qualquer configuração. Não há limite de 39 títulos, nem o hiyaCFW ou o Unlaunch são necessários e não há restrições no espaço livre do cartão SD que você poderá ter
- usuários de hiyaCFW podem criar fowarders para o Menu DSi da SDNAND usando o guia [Forwarders Dos Jogos de DS](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) da DS-Homebrew Wiki, mas tem algumas limitações. Há um limite difícil de 39 títulos, e eles são menos convenientes de fazer do que usar o Menu TWiLight + +
  - Se você não tem hiyaCFW e gostaria de usar fowarders, você pode seguir o [guia de instalação do hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing) no DS-Homebrew Wiki

## Como faço para atualizar minha homebrew?

- **Unlaunch** - Siga as instruções na página [Instalando Unlaunch](installing-unlaunch.html)installing-unlaunch.html
  - Você **não** precisa desinstalar o Unlaunch antes de fazer isso
- **hiyaCFW** - Substitua `hiya.dsi` na raiz do cartão SD da [versão atualizada](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Siga as instruções na [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **AKMenu-Next** - Follow the instructions on the [AKMenu-Next Documentation](https://coderkei.github.io/akmenu-next-docs/guides/akmenu-next/#__tabbed_1_5)
- **nds-bootstrap** - Copie `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` para a pasta `_nds` na raiz do seu cartão SD
  - Se você usa o TWiLight Menu++, há uma alta chance de que a última versão do nds-bootstrap seja incluída com o TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Siga as instruções usadas para baixá-los

Outros homebrews podem usar outros métodos para atualizar.

## Eu sou novo ou gostaria de refazer minha configuração. Por onde eu começo?

- Se você ainda não modificou seu console ou está procurando atualizar o Unlaunch no seu sistema, Recomendamos que se comece desde o início do guia e que se siga pelas páginas. Certifique-se de ler tudo na página inicial
- Se você tiver a versão mais recente do Unlaunch, siga o [guia de instalação do TWiLight Menu++](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) para configurar o TWiLight Menu++ no seu sistema

## Como posso remover o controle parental?

- The [mkey generator](https://mkey.nintendohomebrew.com) can generate the code required to remove parental controls

## Posso mudar minha região do Nintendo DSi?

Sim, há alguns métodos diferentes dependendo do que você deseja alterar:

- O método mais seguro e simples é simplesmente instalar o TWiLight Menu++, ele pode usar qualquer língua oficial e muito mais sem precisar de modificações na NAND
- Se você deseja realmente mudar a região do sistema e está usando hiyaCFW, abra o menu de configuração, e altere a configuração da região (não é possível com NANDs CHN e KOR)
  - Se isto fizer o touch parar de funcionar reverta a configuração de região para o original, e, em vez disso, você pode usar o [hiyalang]de Yoti(https://github.com/Yoti/cli_hiyalang/releases) para sistemas asiáticos DSi. Para os sistemas DSi americanos use [esta versão do hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Por fim, se você deseja alterar a região do sistema atual NAND, você pode usar a [Patcher de Idioma do Mighty Max](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)

## O que aconteceu com o Lazy DSi Downloader? Como faço para instalar o CFW sem ele?

Lazy DSi Downloader era um programa que lhe permitia basicamente ignorar o processo de configuração manual, baixando e colocando os arquivos e pastas necessários em seu cartão SD. No entanto, devido à maneira como foi programado e distribuído, muitos usuários encontraram vários problemas e acabaram tendo que fazer o manual, como foi mais rápido e/ou mais fácil corrigir o que estava causando o problema.

Para evitar que mais usuários encontrem estes problemas, não recomendamos mais o uso do Lazy DSi Downloader, e, em vez disso, [a configuração manual](get-started.html) é a forma recomendada.

- Se você foi vinculado a este guia por um terceiro que recomendou o uso do Lazy DSi Downloader, as instruções que você estava seguindo provavelmente estavam desatualizadas. Por favor use este guia, pois ele é constantemente mantido pelos desenvolvedores desses projetos.

## Que tipo de cartão SD devo usar?

- Você deve comprar um cartão SD de uma marca confiável
- Um cartão SD em tamanho real ou um cartão microSD com um adaptador funcionará
- Qualquer capacidade entre 1 GB e 2 TB funcionará. Para uso geral, 8 GB é suficiente
  - Alguns softwares, como o hiyaCFW, podem experimentar tempos de carregamento incrementalmente mais longos com maiores capacidades de cartão SD
- Recomenda-se a classe de velocidade 8 ou superior
- Read the [Counterfeit MicroSD Cards Guide](https://www.flashcarts.net/microsd-fakes) to ensure you do not end up with a counterfeit SD/MicroSD card

## Posso usar meu cartão SD do DSi em outros sistemas?

Geralmente, sim, com duas exceções:

- hiyaCFW só funcionará no sistema para o qual foi configurado
- Mesmo se você estiver usando o nds-bootstrap ou um flashcard, os friend codes em jogos de NDS online serão redefinidos quando você tentar ficar online usando um console diferente

## Como faço para alternar para um novo cartão SD após configurar o homebrew?

Formate o seu novo cartão SD usando as instruções da [Configuração do Cartão SD](sd-card-setup.html) então simplesmente mova seus dados do cartão SD antigo para o novo.

## Eu ainda posso usar o meu sistema normalmente sem o cartão SD inserido após a configuração do homebrew?

Sim. Se você não instalar o Unlaunch, seu sistema permanecerá completamente não-modificado. Se você _instalou_ o Unlaunch, talvez você precise [Configurar o Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) para iniciar automaticamente o menu DSi original sob condições especificas.

## A [Página do Unlaunch](https://problemkaputt.de/unlaunch.htm) diz que a versão 2.0 não é conhecida por ser segura. Em vez disso, devo usar uma versão anterior?

A página do Unlaunch não foi atualizada desde a versão 2.0 foi lançada em 2019. A grande maioria dos usuários não tem problemas com esta versão, então ela é considerada segura.

## Como eu incio um dump de DSiWare?

O método recomendado é simplesmente inicia-los com o TWiLight Menu++, devido ao método simples de arrastar e soltar e à ausência de limites arbitrários. Quando o nds-bootstrap é definido como o método de execução, ele também ganha os benefícios de cheats e capturas de tela, assim como qualquer outro benefício fornecido pelo menu do jogo.

No entanto, para alguns títulos incompatíveis, você pode usar [NTM](https://github.com/Epicpkmn11/NTM/releases) para instalá-los na memória interna ou [SDNAND] da hiyaCFW (https://wiki.ds-homebrew.com/hiyacfw/installing). Além de não ter os benefícios acima, há também um limite de 39 títulos que não podem exceder 128 MiB/1.024 blocos. Para a SysNAND, existe também um risco muito pequeno de brickar o sistema ao escrever para a NAND interna.
