# Az AKMenu-Next telepítése

1. Töltsd le az [AKMenu-Next DSi Edition](https://github.com/coderkei/akmenu-next/releases/latest/download/akmenu-next-dsi.zip) legutolsó kiadását
2. Csomagold ki az `akmenu-next-dsi.zip` fájlt
3. Ha az Unlaunxh nincs telepítve, töröld a `boot.nds` fájlt az SD kártyád gyökeréből
4. Az AKMenu-Next ffájlok közül másold a következő fájlokat/mappákatk az SD kártyát gyökerébe:
   - az `_nds` mapp
   - `BOOT.NDS`
   - `akmenu-next.dsi`
   - Ha a hiyaCFW telepített, másold a `title` mappát is az SD kártyád gyökerébe
5. Töltsd le az [nds-bootstrap](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest/download/nds-bootstrap.zip) legutolsó kiadását
6. Csomagold ki az `nds-bootstrap.zip` fájlt
7. Másold a `nds-bootstrap.zip` fájl _tartalmát_ az SD kártyád `_nds` mappájába

::: tip

Ha szeretnél játékokakkal játszani a DS(i)t megelőző időkből (mint például GBA vagy régebbi) és/vagy használni további szolgáltatások (add-on-ként ismerted), tekintsd meg a [Bővítmények telepítését](https://coderkei.github.io/akmenu-next-docs/guides/plugins/).

:::

### Telepítés után

Indítsd el az [exploit-ot amit használtál](launching-the-exploit.html) a dumpTool indításához és az AKMenu-Next el fog indulni.

::: tip

Folytatás [Az Unlaunch telepítése](installing-unlaunch.html)-vel (Opcionális)

:::
