# Restaurando um Backup da NAND

::: danger

ATENÇÃO! Isso é _**perigoso**_. Mesmo seguindo essas etapas, exatamente ainda tem potencial para brickar o DSi, pois a NAND é de qualidade muito baixa, especialmente se você flashear várias vezes! Isso só deve ser usado como último recurso!

:::

::: tip

Não pule _nada_ nesta página, qualquer erro aumenta muito a chance de bricar seu DSi.

:::

Primeiro, algumas alternativas mais seguras para o porquê de você querer fazer isto:

- Instalar o DSiWare pode ser feito usando hiyaCFW ou o Menu do TWiLight ++
- Recuperar imagens pode ser feito usando [ninfs](https://github.com/ihaveamac/ninfs/releases), em combinação com hiyaCFW ou TWiLight Menu++ se você quiser elas no console. A versão mais recente do HiyaCFW ajuda a copiar suas fotos da sua NAND para a SDNAND durante a configuração
- Restaurar uma configuração de botões
  do Unlaunch pode ser feita a partir do menu do Unlaunch, que pode ser acessado segurando <kbd class="face">A</kbd> + <kbd class="face">B</kbd> enquanto liga o console
- Ligar o console no Unlaunch está resultando em um erro? Tire o seu cartão SD e tente iniciar o sistema novamente. Se funcionar, então a falha é no seu cartão SD e a restauração de um backup da NAND não consertará isso
- "`An error has occured`"... na inicialização é provavelmente um erro no hiyaCFW e não está relacionado à sua NAND, veja [hiyaCFW FAQ & Troubleshooting](https://wiki.ds-homebrew.com/hiyacfw/faq) na DS-Homebrew Wiki para obter mais informações
- Quaisquer erros no TWiLight Menu++ não são relacionados e você deve tentar reinstalar o TWiLight Menu++ ou pedir ajuda no [Discord](https://ds-homebrew.com/discord)
- A desinstalação do Unlaunch, seja através da NAND ou usando o seu desinstalador, deve ser evitada, a menos que seja absolutamente necessário, Você pode definir as teclas de inicialização automática para "Launcher" e seu DSi será como se fosse original

A única coisa que você deve fazer com sua NAND é instalar o Unlaunch. De outra forma, use as alternativas.

## Requisitos

- Seu backup da NAND **do mesmo DSi**
- A versão mais recente de [SafeNANDManager](https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds)
- Uma maneira de rodar homebrew com acesso da NAND, como Unlaunch ou Memory Pit
- [no$gba](https://problemkaputt.de/gba.htm), para verificar o backup da sua NAND (Baixar a versão de jogos do Windows)
  - usuários de macOS e Linux podem usar [WINE](https://winehq.org) para executar sem$gba
- [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z)

## Fazer dump da BIOS para uso no no$gba

1. Extraia UNLAUNCH.DSI do arquivo dsibiosdumper.nds e coloque-o em qualquer lugar no seu cartão SD
2. Ligue o seu console enquanto segura <kbd class="face">A</kbd> e <kbd class="face">B</kbd>
   - Isto deve iniciar o Menu de Arquivos do Unlaunch
3. Inicie o dsibiosdumper do menu de arquivos do Unlaunch
4. Aperte <kbd class="face">A</kbd> para fazer um dump da BIOS para o cartão SD
5. Pressione <kbd>STAR</kbd> para sair do dsibiosdumper

## Testando seu backup da NAND

É muito importante testar que o backup da NAND está funcionando antes de tentar restaurá-lo para o console, Se ele mostrar um erro de brick no$gba provavelmente ele também irá brickar seu console.

1. Extraia `NO$GBA.EXE` de `no$gba-w.zip` para uma pasta no seu computador
2. Copie seu backup da NAND para a pasta que você colocou `NO$GBA.EXE` e renomeie-o para `DSI-1.MMC`
3. Copie o `bios7i.bin` e o `bios9i.bin` para a pasta que você colocou `NO$GBA.EXE`, chamado `BIOSDSI7.ROM` e `BIOSDSI9.ROM`, respectivamente.
4. Execute `NO$GBA.EXE`
5. Clique em `Opções` > `Configuração de emulação` para abrir a janela de configuração de emulação
6. Altere `Reset/Startup Entrypoint` para `GBA/NDS BIOS (Nintendo logo)`
7. Mude o `NDS Mode/Colors` para `DSi (varejo/16MB)`
8. Clique em `Salvar Agora`
9. Inicie qualquer Nintendo DS ROM (arquivo `.nds`)

Se no$gba não carregar o menu DSi (ou o menu Desativa o Arquivo), então continue para a próxima seção. Se mostrar algum tipo de erro _**não instale esse backup**_!

## Desinstalando o Unlaunch do backup da NAND (opcional)

Siga isto se você copiou o backup da sua NAND depois de instalar o Unlaunch e você gostaria de desinstalar o Unlaunch do seu sistema. Se você não estiver tentando desinstalar o Unlaunch, você **não** precisa fazer esta seção.

1. Baixe a versão mais recente do [Unlaunch](https://problemkaputt.de/unlaunch.zip)
2. Extraia `UNLAUNCH.DSI` do `unlaunch.zip`
3. Abra o `UNLAUNCH.DSI` no no$gba e inicie-o no slot do Cartão do Jogo
   - Isso deve iniciar o instalador do Unlaunch, que parece similar ao menu de Arquivos do Unlaunch
4. Escolha `Uninstall`
5. Uma vez concluído, escolha `Desligar`
6. Abra qualquer ROM Nintendo DS novamente e certifique-se de que seu menu DSi carrega e está funcionando corretamente

Se o no$gba mostrar algum tipo de erro ao invés de carregar o menu DSi, _**não instale esse backup**_! Se você tiver um backup mais antigo da NAND, você pode tentar usá-lo em vez disso. **Não** tente desinstalar o Unlaunch usando o desinstalador no console, pois é muito provável que ele faça isso brickará seu DSi.

## Instalando seu backup da NAND (Software)

::: danger

Certifique-se de que você leu os passos acima, pois é aqui que ele fica perigoso. Se você foi vinculado diretamente aqui sem seguir o exemplo acima, então volte para o topo e leia esta página inteira.

:::

::: danger

Certifique-se de que o seu sistema Nintendo DSi está bem carregado antes de iniciar esta seção.

:::

1. Com o osey cartão SD inseido, ligue o seu Nintendo DSi enquanto segura <kbd class="face">A</kbd> e <kbd class="face">B</kbd>
2. Inicie SafeNANDManager
3. Pressione o botão para `iniciar a restauração da NAND`
4. Quando a restauração terminar, pressione <kbd>START</kbd> para desligar seu DSi

Sua NAND agora deve ser restaurada.

## Instalando o backup da NAND (Hardmod)

Se você não puder inicializar seu Nintendo DSi, um hardmod é a única maneira de restaurar um backup da NAND. O melhor guia que existe atualmente é o [guia hardmod do Nintendo DSi no DS-Homebrew Wiki](https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi).
