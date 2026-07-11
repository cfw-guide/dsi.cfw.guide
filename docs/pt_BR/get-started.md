# Vamos começar

We'll begin with downloading some homebrew tool(s), in preparation for the exploit steps.

## Requisitos

- Uma maneira de copiar arquivos baixados para seu cartão SD
- Uma aplicação que pode extrair arquivos, como [7-Zip](https://www.7-zip.org/) (Windows), [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353) (macOS), ou [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) (Chromebook)
  - Aconselhamos você a não usar o WinRAR, pois é conhecido por quebrar os arquivos.
  - Se você estiver usando o Windows 11, também recomendamos que não use um extrator interno (Windows Explorer), pois isso causará um erro dizendo que o nome do arquivo é muito longo ou não é válido
- A good quality name-brand SD card (or name-brand MicroSD with SD adapter). **This is important as you may encounter compatibility issues and loss of data using an off-brand or counterfeit SD card!** For more information, [please see this article](https://www.flashcarts.net/microsd-fakes) on fake MicroSD cards, the information it has also applies to full size SD cards.

## Seção I - Trabalho Preparatório

::: warning

Ensure your SD card is [formatted correctly with this guide](sd-card-setup.html). You may encounter compatibility problems with homebrew or an SD Card with the wrong filesystem by skipping this step.

:::

1. Insira seu cartão SD em seu PC
2. Download the latest release of [dumpTool](https://dsi.cfw.guide/assets/files/dumptool/boot.nds) as `boot.nds`
3. Copy the `boot.nds` file to the root of your SD card
   - Make sure it is specifically named `boot.nds` instead of `boot (1).nds` or any other name

::: tip

Não tem certeza o que é a "raiz" do seu cartão SD? [Veja esta imagem](/assets/images/sdroot/en_US.png)

:::

## Seção II - Verificando se o Unlaunch já está instalado

Unlaunch is a bootcode exploit which gets installed onto the DSi console itself, allowing full control of the console on boot, and as a result, allows homebrew applications full access to the hardware without restrictions from DSi system apps or DSiWare titles.

Alguns consoles DSi que são vendidos como usado/renovado podem já ter o Unlaunch instalado.

To check, press the <kbd class="face">POWER</kbd> button and immediately hold the <kbd class="face">A</kbd> + <kbd class="face">B</kbd> buttons.

- Se você vir um menu que mostre `Nocash Unlaunch. si` na tela superior, isto significa que o Unlaunch já está instalado e você pode continuar com [dumping do NAND](dumping-nand.html).
- Se o DSi inicia normalmente com o Menu DSi aparecendo, prossiga com a Seção III.

## Section III - Memory Pit

Memory Pit is an exploit utilizing the DSi Camera, compatible with all firmware versions.

If using the exploit without installing Unlaunch, compatibility with some homebrews could be limited. If you encounter issues with DSi homebrews and/or the camera function in DSi-Enhanced games, you can return to this guide and set up an [alternate exploit](alternate-exploits.html) instead.

::: tip

Continuar para [Iniciando o Exploit](launching-the-exploit.html)

:::
