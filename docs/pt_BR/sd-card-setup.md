# Configuração do cartão SD

Esta página é para preparar o seu cartão SD para o seu dispositivo. No processo, vamos formatar o cartão SD e verificar erros no cartão.

::: danger

Certifique-se de fazer backup do conteúdo do cartão SD ANTES de seguir isto. Seu cartão SD será APAGADO no processo.

:::

::::: tabs

:::: tab default Windows

### Section I - Formatting your SD card with sdFormatWindows

::: warning

It is **not** recommended to use the built in default Windows Formatting utility since this can cause compatibility problems with homebrew, as it does not format SD cards to the correct specifications set by the SD Association.

:::

1. Download the latest version of [sdFormatWindows](https://github.com/flashcarts/sdFormatWindows/releases/latest/download/sdFormatWindows.exe)
2. Run the `sdFormatWindows` application (the `.exe` file) from the location you downloaded it to, adminstrator privileges are required
3. Select your SD card drive
   - If your SD card is **32GB or less**, you can use the default settings
   - If your SD card is **64GB or more**, enable the **"Format as FAT32"** and **"Force 32KiB Cluster Size"** options
4. Apertw `Formatar` para iniciar o processo de formatação

### Section II - Checking SD card read/write for errors

1. Baixar e extrair [o arquivo h2testw ](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip) em qualquer lugar do seu computador
   - Se o link acima não funcionar para você, baixe [do archive.org](https://web.archive.org/web/20210912045431/http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)
   - Ele também pode ser extraído em um dispositivo externo, desde que esse dispositivo externo não seja o seu cartão SD
2. Com o seu cartão SD inserido no seu computador, execute `h2testw.exe`
3. Selecione em qual idioma você gostaria de ver h2testw
4. Defina a letra de unidade do seu cartão SD como seu alvo
5. Certifique-se de que `todos os espaços disponíveis` esteja selecionado
6. Click `Write + Verify` (If this option is greyed out, ensure you formatted the SD card with the steps in Section I)

- Aguarde até que o processo seja concluído

::: tip

Se o teste mostrar o resultado `Test finished without errors`, o seu cartão SD está normal e você poderá apagar todos os arquivos `.h2w` do seu cartão SD.

:::

::: danger

Se o teste mostrar quaisquer outros resultados, o seu cartão SD pode estar corrompido ou danificado e você pode ter que substituí-lo!

:::

::::

:::: tab Linux

::: tip

Esta seção formata o cartão SD para as especificações da Associação de Cartão SD. Isso pode corrigir muitos problemas que podem ocorrer com a execução de aplicativos homebrew.

:::

::: danger

Quaisquer cartões SD de 64GB ou maiores serão formatados como `exFAT` neste processo. Você _deve_ seguir ambas seções I e II para reformatar para `FAT32`.

:::

### Section I - Formatting your SD card with sdFormatLinux

1. Certifique-se de que o seu cartão SD **não** está inserido na sua máquina Linux
2. Download and extract the latest version of [sdFormatLinux](https://github.com/profi200/sdFormatLinux/releases/download/v0.2.0/sdFormatLinux_v0.2.0.7z) to your computer
3. Inicie o Terminal do Linux
4. Digite `watch "lsblk"`
5. Insira seu cartão SD no seu Linux
6. Observe a mensgem no terminal. Ela deverá ser semelhante a isso:

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```

1. Lembre-se do nome do dispositivo. In our example above, it was `mmcblk0`
   - Se `RO` estiver com valor 1, certifique-se de que a trava do cartão SD não está para baixo
   - Make sure that you're targetting the **device**, `mmcblk0`, not the partition, `mmcblk0p1`
2. Pressione CTRL + C para sair do menu
3. Navigate to where you have extracted sdFormatLinux
4. Run `sudo ./sdFormatLinux -f -e trim /dev/(device name from above)` to format your SD card

::: tip

If you get an error message stating: `Error: Device is mounted`, you will need to run `sudo umount /dev/(partition name from above)` in order to complete the above step.

:::

### Section II - Formatting your SD card with mkdosfs

Esta seção formata cartões SD que são 64GB ou maiores a FAT32.

::: tip

Se o seu cartão SD tiver 32GB ou menos em capacidade, pule para a Seção III.

:::

1. Certifique-se de que o seu cartão SD **não** está inserido na sua máquina Linux
2. Inicie o Terminal do Linux
3. Digite `watch "lsblk"`
4. Insira seu cartão SD no seu Linux
5. Observe a mensgem no terminal. Ela deverá ser semelhante a isso:

```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0     179:0    0   3,8G  0 disk
└─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
```

1. Take note of the device partition name. No exemplo acima, ele foi `mmcblk0p1`
   - Se `RO` estiver com valor 1, certifique-se de que a trava do cartão SD não está para baixo
   - Make sure you're targetting the **partition**, `mmcblk0p1`, not the device, `mmcblk0`
2. Pressione CTRL + C para sair do menu
3. Run `sudo mkdosfs /dev/(partition name from above) -s 64 -F 32` to format your SD card to FAT32

### Seção III - Usando F3

1. Download and extract [the F3 archive](https://github.com/AltraMayor/f3/archive/v9.0.zip) anywhere on your computer.
2. Inicie o terminal no diretório F3
3. Utilize o comando `make` para compilar o F3
4. Com o seu cartão SD inserido e montado, execute `./f3write <your sd card mount point>`
   - Aguarde até que o processo seja concluído. Veja abaixo um exemplo de resultado.
   ```
   $ ./f3write /media/michel/6135-3363/
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
5. Execute `./f3read <diretório de montagem do seu cartão SD>`

- Aguarde até que o processo seja concluído. Veja abaixo um exemplo de resultado.
  ```
  $ ./f3read /media/michel/6135-3363/
                    SECTORS      ok/corrupted/changed/overwritten
  Validating file 1.h2w ... 2097152/        0/      0/      0
  ...
  Validating file 30.h2w ... 1491904/        0/      0/      0

     Data OK: 29.71 GB (62309312 sectors)
  Data LOST: 0.00 Byte (0 sectors)
              Corrupted: 0.00 Byte (0 sectors)
     Slightly changed: 0.00 Byte (0 sectors)
           Overwritten: 0.00 Byte (0 sectors)
  Average Reading speed: 9.42 MB/s
  ```

___

::: tip

Se o teste mostrar o resultado `Data LOST: 0.00 Byte (0 sectors)` o seu cartão SD não possui erros e você poderá apagar todos os arquivos `.h2w` do seu cartão SD

:::

::: danger

Se o teste mostrar quaisquer outros resultados, o seu cartão SD pode estar corrompido ou danificado e você pode ter que substituí-lo!

:::

::::

:::: tab macOS

### Seção I - Formatando seu cartão SD com SD Formatter

::: tip

Esta seção formata o cartão SD para as especificações da Associação de Cartão SD. Isso pode corrigir muitos problemas que podem ocorrer com a execução de aplicativos homebrew.

:::

::: danger

Quaisquer cartões SD de 64GB ou maiores serão formatados como `exFAT` neste processo. Você _deve_ seguir ambas seções I e II para reformatar para `FAT32`.

:::

1. Baixe a versão mais recente do [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-mac-download/)
   - Aceite o Contrato de Licença do Usuário Final para iniciar o download
2. Execute `Install SD Card Formatter` (o arquivo `.mpkg`) no arquivo `.zip` baixado
3. Execute `SD Card Formatter`
4. Selecione o seu cartão SD
5. Tenha certeza que a caixa de seleção `Formatação Rápida` está marcada
6. Inicie processo de formatação

### Seção II - Formatando o seu cartão SD com o Utilitário de Disco

Esta seção formata cartões SD maiores que 32GB para FAT32.

::: tip

Se o seu cartão SD tiver 32GB ou menos em capacidade, pule para a Seção III.

:::

#### OS X El Capitan (10.11) e posterior

1. Inicie o aplicativo Utilitário de Disco
2. Selecione 'Mostrar Todos os Dispositivos' no painel superior esquerdo 'Exibir'
3. Selecione seu cartão SD na barra lateral
   - Certifique-se de escolher o dispositivo correto, caso contrário você pode apagar a unidade errada acidentalmente!
4. Clique em `Apagar` no topo
5. Certifique-se de que `Formato` está definido como `MS-DOS (FAT32)`
   - Em El Capitan (10.11) através do Catalina (10.15) escolha `MS-DOS (FAT)`
6. Certifique-se de que o "Scheme" está definido como "Master Boot Record"
   - Se "Scheme" não aparecer, clique "Cancel" e certifique-se de escolher o dispositivo ao invés de um volume
7. Clique em `Apagar` e clique em `Fechar`

#### OS X Yosemite (10.10) e anterior

1. Inicie o aplicativo Utilitário de Disco
2. Selecione seu cartão SD na barra lateral
   - Certifique-se de escolher o dispositivo correto, caso contrário você pode apagar a unidade errada acidentalmente!
3. Clique em `Partição` no topo
   - Se 'Partição' não aparecer, certifique-se de escolher o dispositivo em vez de um volume
4. Certifique-se de que o `Layout de Partição` esteja definido como `1 Partição`
5. Certifique-se que `Formato` está definido como `MS-DOS (FAT)`
6. No botão de Opções (abaixo da tabela de partição), selecione `Master Boot Record`.
7. Clique em `OK` -> `Aplicar` -> `Partição`

### Seção III - Usando F3

1. Abrir terminal
2. Instale o F3 do brew executando o `brew install f3`
   - Se você não tem brew, instale-o com as instruções no [brew.sh](https://brew.sh)
3. Com seu cartão SD inserido e montado, execute `f3write <your sd card mount point>`
   - Aguarde até que o processo seja concluído. Veja abaixo um exemplo de resultado.
   ```
   $ f3write /Volumes/SD\ CARD
   Free space: 29.71 GB
   Creating file 1.h2w ... OK!
   ...
   Creating file 30.h2w ... OK!
   Free space: 0.00 Byte
   Average Writing speed: 4.90 MB/s
   ```
4. Execute `f3read <your sd card mount point>`
   - Aguarde até que o processo seja concluído. Veja abaixo um exemplo de resultado.
   ```
   $ f3read /Volumes/SD\ CARD
                     SECTORS      ok/corrupted/changed/overwritten
   Validating file 1.h2w ... 2097152/        0/      0/      0
   ...
   Validating file 30.h2w ... 1491904/        0/      0/      0

      Data OK: 29.71 GB (62309312 sectors)
   Data LOST: 0.00 Byte (0 sectors)
               Corrupted: 0.00 Byte (0 sectors)
      Slightly changed: 0.00 Byte (0 sectors)
            Overwritten: 0.00 Byte (0 sectors)
   Average Reading speed: 9.42 MB/s
   ```

___

::: tip

Se o teste mostrar o resultado `Data LOST: 0.00 Byte (0 sectors)` o seu cartão SD não possui erros e você poderá apagar todos os arquivos `.h2w` do seu cartão SD

:::

::: danger

Se o teste mostrar quaisquer outros resultados, o seu cartão SD pode estar corrompido ou danificado e você pode ter que substituí-lo!

:::

::::

:::::

::: tip

Agora você pode restaurar o conteúdo do seu cartão SD e continuar.

:::

