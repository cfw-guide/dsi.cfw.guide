---
home: true
title: Acasă
header:
  overlay_image: /assets/images/home-page-feature.png
  overlay_filter: 0.5
---

::: tip

Pentru ghiduri complete spre homebrew și custom firmware pentru alte dispozitive, uită-te la [CFW.Guide](https://cfw.guide/).

:::

::: tip

Citește cu atenție toate paginile introductive (inclusiv pe aceasta!) înainte de a continua.

:::

## Ce este homebrew?

Aplicațiile [Homebrew](https://en.wikipedia.org/wiki/Homebrew_(video_games)) sunt programe nelicențiate făcute pentru sisteme închise precum Nintendo DSi. Aceste aplicații pot varia de la utilități la jocuri personalizate homebrew.

Homebrew poate rula gratuit pe toate consolele Nintendo DSi, indiferent de versiunea firmware sau regiune. Tot ce-ți trebuie este un punct de intrare și un card SD pentru a-ți stoca aplicațiile homebrew. Punctul de intrare principal folosit în acest ghid se numește Memory Pit, dar există și alte puncte de intrare pe care le poți folosi dacă Memory Pit este inutilizabil.

## Ce va face acest ghid sistemului meu?

Ține minte că ghidul este structurat pe o traiectorie liniară, dar depinde de cât de departe vrei să mergi cu modificarea consolei tale.

- Noi vom seta un punct de intrare pentru a lansa aplicații de bază homebrew prin Menory Pit, exploit-ul pentru aplicația Nintendo DSi Camera
- Vom lua apoi copia NAND, ce este folositoare ca un punct de restaurare în cazul în care se va întâmpla ceva rău mai târziu
- În sfârșit, pentru utilizatorii care vor acces la toate capacitățile consolei DSi vom trece prin acestea prin instalarea Unlaunch. Unlaunch permite homebrew să ruleze cu mai multe permisiuni (precum accesul la Slot-1) și la pornirea sistemului
   - Instalarea Unlaunch îți va modifica NAND-ul, și în cazuri extreme particulare să aibă loc un **brick**. Dacă nu vrei să riști brick-ul, te poți opri după ce ai creat o copie NAND

## Ce pot face dacă îmi modific sistemul?

- Să rulezi backup-uri de jocuri Nindendo DS(i) sau ROM hack-uri de pe cardul SD direct de pe DSi fără a necesita un flashcard
- Să joci orice joc DSiWare (din afara regiunii sau/și exclusive pe 3DS) de pe cardul tău SD
- Să intri în aplicații homebrew și DSiWare prin apăsarea lungă a unor butoane specifice când pornești consola Nintendo DSi
- Să rulezi jocuri vechi clasice folosind emulatoare variate
- Să rulezi flashcard-uri incompatibile
- Să-ți redirecționezi NAND-ul pe cardul SD folosind hiyaCFW
- Să te uiți la filmele tale preferate folosind MPEG4Player
- Să afișezi o imagine (numită boot splash) la pornirea sistemului
- Să rulezi jocuri homebrew

## Unde pot găsi aplicații homebrew?

- [Universal-DB](https://db.universal-team.net/ds) are majoritatea aplicațiilor homebrew moderne, cu sortare și căutare frumoase pentru a fi conformat cu ceea ce a fost actualizat recent
- [Gamebrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew) are multe jocuri vechi homebrew, dar multe vor rula doar pe flashcard-uri

## Ce trebuie să știu înainte de a începe?

- Pe Windows, îți recomandă să [arăți extensiunile fișierelor](file-extensions-%28windows%29) dacă folosești Exploratorul de Fișiere implicit
- Singurul risc de brick vine de la instalarea Unlaunch, iar riscul de brick este minim
- Dacă nu ai experiență cu copierea fișierelor pe un card SD, avem unelte de ajutor la dispoziția ta

::: tip

Continuă la [Lansarea Exploit-ului](launching-the-exploit)

:::
