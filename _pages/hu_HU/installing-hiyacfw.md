---
title: A hiyaCFW telepítése
redirect_from:
  - /guide/installing-hiyacfw
  - /guide/hiyacfw
  - /hiyacfw
  - /hiyacfw-setup
---

{% include toc title="Table of Contents" %}

Ne frissítsd a rendszert a hiyaCFW telepítése után. Az eltávolítja a hiyaCFW SD patch-eit.
{: .notice--danger}

A hiyaCFW egy egyedi firmware, ami lehetővé teszi, hogy a rendszer NAND-ot (belső tároló) az SD kártyádról futtasd.

Ez lehetővé teszi, hogy saját alkalmazásokat telepítsd a Nintendo DSi Menübe, a brickelés kockázata nélkül, mert az SD kártyára települnek, így a problémák könnyen javíthatók.

Továbbá lehetővé teszi a homebrew alkalmazások könnyű telepítését a DSi Menübe, és egyedi kezdőképernyő megjelenítését a bootoláskor.

Ez a rész teljesen opcionális. Ha elég neked az Unlaunch, megállhatsz itt.
{: .notice--primary}

## Követelmények
- Egy Nintendo DSi telepített [Unlaunch](/installing-unlaunch)-csel
- Egy a dumpTool-lal készült NAND mentés az eszközödről
   - Ha nem rendelkezel ilyennel kövesd [NAND dumpolása](dumping-nand) útmutatót
- Egy Windows, macOS vagy Linux eszköz

## I. rész - A PC-d előkészítése a hiyaCFW telepítéséhez

{% capture windowsPrep %}
<noscript>
   <h3>Windows</h3>
</noscript>

1. Töltsd le & telepítsd a [7-Zip](https://www.7-zip.org/download.html) legutolsó verzióját
   - Ez nem fog működni mást tömörítő alkalmazással, amivel rendelkezel, pl: WinRAR. A hiyaCFW helper a 7-Zip-pet keresi, nem egy általános kicsomagolót
1. Töltsd le az [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) legfrissebb Windows kiadását
   - Ha nem tudod letölteni, mert "vírus", akkor keresd meg az engedélyezés gombot, vagy használj egy másik böngészőt, ez nem vírus
1. Csomagold ki a hiyaCFW Helper archívot bárhova a számítógépeden
{% endcapture %}

{% capture macosPrep %}
<noscript>
   <h3>macOS</h3>
</noscript>

1. Töltsd le az [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) legfrissebb macOS kiadását
1. Csomagold ki a hiyaCFW Helper archívot bárhova a számítógépeden
{% endcapture %}

{% capture linuxPrep %}
<noscript>
   <h3>Linux</h3>
</noscript>

1. Telepítsd a Python 3-at a csomagkezelőddel, ha még nincs telepítve
1. Töltsd le az [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases) legfrissebb Python verzióját
1. Csomagold ki a hiyaCFW Helper archívot bárhova a számítógépeden
1. Biztosítsd, hogy a szükséges Python csomagok telepítve legyenek a `pip3 install -r requirements.txt` futtatásával a kicsomagolt fájlok könyvtárában
   - A pip-et telepíteni tudod a `python3 -m ensurepip` paranccsal
{% endcapture %}

<div class="tabcontainer">
   <a class="tablinks btn btn--large btn--info delink windows" href="#windowsPrep" onclick="openTab(event, 'windowsPrep')">Windows</a>
   <a class="tablinks btn btn--large btn--info delink macos" href="#macosPrep" onclick="openTab(event, 'macosPrep')">macOS</a>
   <a class="tablinks btn btn--large btn--info delink other" href="#linuxPrep" onclick="openTab(event, 'linuxPrep')">Linux</a>

   <div id="windowsPrep" class="blanktabcontent">{{ windowsPrep | markdownify }}</div>
   <div id="macosPrep" class="blanktabcontent">{{ macosPrep | markdownify }}</div>
   <div id="linuxPrep" class="blanktabcontent">{{ linuxPrep | markdownify }}</div>
</div>

## II. rész - A hiyaCFW fájlok hozzáadása az SD kártyához

![A HiyaCFW Helper képernyőképe](https://image.ibb.co/hhzKRL/Screen-Shot-2018-10-18-at-16-30-18.png)

1. Indítsd el a hiyaCFW Helper-t
  - **Windows:** - Indítsd el a `HiyaCFW_Helper.exe` fájlt, amit a hiyaCFW Helper archívból csomagoltál ki (lehet, hogy ki kell kapcsolnod átmenetileg a víruskeresődet)
  - **macOS:** - Kattins jobb gombbal a `HiyaCFW_Helper` fájlon, amit a hiyaCFW Helper archívból csomagoltál ki, majd válaszd az `Open` opciót
  - **Linux:** - Indítsd el a `HiyaCFW_Helper.py` fájlt, amit a hiyaCFW Helper archívból csomagoltál ki
1. Kattints a `...` gombra a "NAND file with No$GBA footer" dobozban
1. Navigálj a NAND mentésedhez és kattints az `Open` opcióra
1. Nyomj a `Start`-ra
1. Ez előugró ablakban navigálj az SD kártyád gyökerébe és nyomj `OK` gombot.
   - A folyamat néhány perig tarthat
1. Ha az alkalmazás "Done" üzenetet modn, zárd be a hiyaCFW Helper-t
1. Zárd be a terminál ablakot

## III. rész - Az Unlaunch és a hiyaCFW konfigurálása

1. Kapcsold be a Nintendo DSi konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat
   - Ez az Unlaunch fájl menüjébe kell vigyen
1. Navigálj az `OPTIONS` -> `NO BUTTON` opcióhoz
1. Válaszd a `hiyaCFW`-t és nyomj <kbd class="face">A</kbd> gombot
   - Ez beállítja a hiyaCFW indítását bootoláskor
1. Mentsd a beállításaidat és indítsd újra a konzolt
1. Tarts nyomva a <kbd>SELECT</kbd>-et a Nintendo DSi konzoldo bekapcsolásakor, hogy a hiyaCFW beállításokhoz juss
   - Ha kiválasztottad az "Install latest TWiLight Menu++ on custom firmware" opciót, akkor az SDNAND kezdőképernyőhöz bootoláshoz a TWiLight Menu++ helyett, navigált az `Autoboot title` opcióhoz és nyomj <kbd class="face">A</kbd>-t a kijelölés eltávolításához.
1. Változtasd meg a beállításokat ahogy neked tetszik, majd nyomj <kbd>START</kbd> gombot a folytatáshoz

A rendszered most már az SD kártyáról fog bootolni, a belső NAND helyett.

Ha a `An Error Has Occurred` hibaüzenetet mutatja, tekintsd meg a [Hibaelhárítás](troubleshooting) oldalt.
{: .notice--warning}

<script src="/assets/js/tabs.js"></script>
