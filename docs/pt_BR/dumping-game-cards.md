# Extraindo Cartuchos de Jogos

Esta seção explica como fazer um dump de cartões de jogos usando o GodMode9i para que eles possam ser jogadas em emuladores, flashcards ou pelo seu cartão SD através do nds-bootstrap.

## Requisitos

- O cartão do jogo que você gostaria de extrair
- Seu Console Nintendo DSi com [Unlaunch](installing-unlaunch.html) instalado

## Instruções

### Seção I - Configuração do cartão SD

1. Baixe a última versão do [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases)
2. Extraia `GodMode9i.nds` do arquivo do GodMode9i e o coloque em qualquer lugar de seu cartão SD

### Seção II - Instruções para o Nintendo DSi

1. Inicie o GodMode9i
2. Certifique-se de que o cartão de jogo esteja inserido no console
3. Selecione a opção "NDS GAMECARD" no GodMode9i
4. Selecione do que você quer fazer um dump
   - As opções "Trimmed" para a ROM irão gerar arquivos menores que podem economizar espaço no cartão SD. No entanto, eles não funcionarão para a maioria dos patches, como ROM hacks
5. Repita os passos 2-4 para todos os cartões de jogo que você deseja extrair

::: tip

Os dumps dos cartuchos vão ser encontrados em `sd:/gm9i/out`.

:::
