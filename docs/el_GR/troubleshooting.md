# Επίλυση προβλημάτων

## Unlaunch

### Unlaunch freezes at `MISMATCH IN FAT COPIES`

Το twlnf παρουσιάζει ένα κρίσιμο σφάλμα, εξαιτίας του οποίου δεν ενημερώνει σωστά ολόκληρη τη NAND μετά την τροποποίησή της, πράγμα που προκαλεί σφάλματα σε ορισμένες εφαρμογές homebrew (όπως το πρόγραμμα εγκατάστασης του Unlaunch).

To fix this, open [NAND Title Manager (NTM)](https://github.com/Epicpkmn11/NTM/releases), and select `Fix FAT copy mismatch`.

### Δεν υπάρχει ήχος ή εικόνα εκκίνησης κατά την εκκίνηση του «Launcher» μέσω του Unlaunch

Ο προγραμματιστής του Unlaunch (nocash) έχει σκοπίμως απενεργοποιήσει τον ήχο παρασκηνίου και την εικόνα εκκίνησης από προεπιλογή. You can regain these effects by [reinstalling Unlaunch](installing-unlaunch.html) using TWiLight Menu++ with "Launcher Patches" set to "Default" on the Unlaunch page of TWiLight Menu++ settings, or by using [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing).

### Κατά την ενεργοποίηση, εμφανίζεται μόνο μια μαύρη οθόνη μετά την εγκατάσταση του Unlaunch

Δοκιμάστε να αφαιρέσετε την κάρτα SD και να ενεργοποιήσετε ξανά την κονσόλα. If it still only shows a black screen, you may need to flash your NAND via a [hardmod](https://wiki.ds-homebrew.com/ds-index/hardmod).

### Μετά την εγκατάσταση του Unlaunch, έχω «κολλήσει» στην εκκίνηση μιας εφαρμογής ή του μενού αρχείων του Unlaunch

This was likely caused by choosing the wrong app for the `NO BUTTON` option in Unlaunch. Hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while starting the console, go to `OPTIONS`, and set `NO BUTTON` to whatever your preference is.

### Άλλα προβλήματα με το Unlaunch

If Unlaunch displays `Clusters too large`, `Bad VBR`, `Bad MBR`, or doesn't display any applications while the SD card is inserted, your SD card likely wasn't formatted correctly. Re-follow [SD Card Setup](sd-card-setup.html).

## TWiLight Menu++

For general TWiLight Menu++ troubleshooting, see its [FAQ & Troubleshooting](https://wiki.ds-homebrew.com/twilightmenu/faq) page on the DS-Homebrew Wiki.

## Περαιτέρω βοήθεια

If you have encountered an issue that is not solved here, or one that persists despite the given solutions, ask for assistance in the [DS<sup>(i)</sup> Mode Hacking!](https://discord.gg/fCzqcWteC4) Discord server.
