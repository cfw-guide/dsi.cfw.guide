# Συχνές ερωτήσεις

## Πρέπει να κάνω ενημέρωση του συστήματος;

It is **not** recommended to update your DSi unless you know there are purchased DSiWare. Ενώ μπορείτε ακόμα να ακολουθήσετε αυτόν τον οδηγό αν το κάνετε, το μόνο όφελος μιας ενημέρωσης είναι η δυνατότητα πρόσβασης στο Nintendo DSi Shop για να κάνετε ξανά λήψη των ήδη αγορασμένων τίτλων. Όλα τα υπόλοιπα οφέλη, όπως η ενσωμάτωση του Facebook στην εφαρμογή «Nintendo DSi Camera», δεν λειτουργούν πλέον ή δεν είναι αρκετά σημαντικά για να δικαιολογήσουν τα μειονεκτήματα:

- Installing System Updates is known to occasionally **brick** consoles, with roughly the same frequency as when installing Unlaunch
- Δεν είναι πλέον δυνατή η χρήση των παλαιότερων exploit, τα οποία μπορεί να είναι απαραίτητα αν δεν μπορείτε να χρησιμοποιήσετε τα προτεινόμενα exploit
- Μειώνεται η συμβατότητα με τις flashcard, αλλά αυτό το πρόβλημα μπορεί να παρακαμφθεί με την εγκατάσταση του Unlaunch

## Ποιο είναι το καλύτερο exploit;

Το Unlaunch είναι συνολικά το καλύτερο exploit για το DSi, με το μόνο του μειονέκτημα να είναι ότι υπάρχει ένας μικρός κίνδυνος να καταστεί μη λειτουργική η κονσόλα κατά την εγκατάσταση. Σε γενικές γραμμές, προτείνεται η χρήση του Memory Pit για την εγκατάσταση του Unlaunch. Εάν θέλετε να αποφύγετε κάθε κίνδυνο, συνιστάται η χρήση του Flipnote Lenny, καθώς έχει λιγότερα προβλήματα σε σχέση με το Memory Pit, ενώ και η αφαίρεσή του είναι εξίσου ασφαλής και εύκολη. Ακολουθεί μια λίστα με τα πλεονεκτήματα και τα μειονεκτήματα του κάθε exploit:

### Memory Pit

Πλεονεκτήματα:

- Γρήγορο και εύκολο στη χρήση
- Δεν υπάρχει κίνδυνος να προκληθεί βλάβη στην κονσόλα, η κατάργηση της εγκατάστασης γίνεται πολύ απλά με την αφαίρεση της SD ή τη διαγραφή ενός αρχείου
- Συμβατό με όλες τις κονσόλες DSi, εκτός αν δεν λειτουργεί η κάμερα και δεν έχετε ολοκληρώσει τον οδηγό εκμάθησης της κάμερας

Μειονεκτήματα:

- Απαιτεί τη φόρτωση της εφαρμογής «DSi Camera» κάθε φορά που θέλετε να αποκτήσετε πρόσβαση σε εφαρμογές homebrew
- Δεν είναι συμβατό με ορισμένους τίτλους της λειτουργίας DSi και εφαρμογές homebrew, καθώς η WRAM είναι ανοικτή μόνο στον επεξεργαστή ARM7
- Δεν επιτρέπεται η πρόσβαση στο Slot-1 (κασέτα παιχνιδιού DS) από τις εφαρμογές homebrew
- Δεν επιτρέπεται η πρόσβαση στο DSP, με αποτέλεσμα τον χειρότερο ήχο στο GBARunner2
- Δεν είναι δυνατή η προβολή των φωτογραφιών της κάρτας SD από την εφαρμογή «DSi Camera» όσο είναι εγκατεστημένο το Memory Pit, καθώς αυτή είναι η λειτουργία που ενεργοποιεί το exploit
  - The only way to view SD card photos while Memory Pit is installed, is to launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap (v0.61.3 or later)

### stylehax

Πλεονεκτήματα:

- Καλύτερη συμβατότητα με τίτλους της λειτουργίας DSi και εφαρμογές homebrew, συγκριτικά με το Memory Pit
- Εύκολο στη χρήση
- Δεν υπάρχει κίνδυνος να προκληθεί βλάβη στην κονσόλα
- Δυνατότητα χρήσης σε κονσόλες όπου δεν λειτουργεί η κάμερα
- Καλύτερος ήχος στο GBARunner2

Μειονεκτήματα:

- Απαιτεί πρόσβαση στο διαδίκτυο
- Απαιτεί τη φόρτωση του DSi Browser κάθε φορά που θέλετε να έχετε πρόσβαση σε εφαρμογές homebrew, ελαφρώς πιο χρονοβόρο από το Memory Pit
- Δεν επιτρέπεται η πρόσβαση στο Slot-1 (κασέτα παιχνιδιού DS) από τις εφαρμογές homebrew

### Flipnote Lenny

Πλεονεκτήματα:

- Καλύτερη συμβατότητα με τίτλους της λειτουργίας DSi και εφαρμογές homebrew, συγκριτικά με το Memory Pit
- Δεν υπάρχει κίνδυνος να προκληθεί βλάβη στην κονσόλα, η κατάργηση της εγκατάστασης γίνεται πολύ απλά με την αφαίρεση της SD ή τη διαγραφή ενός φακέλου
- Δυνατότητα χρήσης σε κονσόλες όπου δεν λειτουργεί η κάμερα
- Καλύτερος ήχος στο GBARunner2

Μειονεκτήματα:

- Απαιτεί τη φόρτωση του Flipnote Studio κάθε φορά που θέλετε να έχετε πρόσβαση σε εφαρμογές homebrew, ελαφρώς πιο χρονοβόρο από το Memory Pit
- Δεν επιτρέπεται η πρόσβαση στο Slot-1 (κασέτα παιχνιδιού DS) από τις εφαρμογές homebrew

### Unlaunch

Πλεονεκτήματα:

- Επιτρέπει τη φόρτωση του homebrew και των DSiWare αμέσως κατά την εκκίνηση του συστήματος, με προαιρετικές συντομεύσεις πλήκτρων
- Πλήρης πρόσβαση στο σύστημα χωρίς κανέναν περιορισμό, καθώς και:
  - Πρόσβαση στο Slot-1, καθιστώντας δυνατή την αποτύπωση κασετών παιχνιδιών και τη φόρτωση μη συμβατών flashcard
  - Καλύτερος ήχος στο GBARunner2
- Αφαιρεί το κλείδωμα περιοχής από κασέτες παιχνιδιών DSi-Enhanced ή που προορίζονται αποκλειστικά για DSi
- Προστασία από τους περισσότερους τρόπους με τους οποίους θα μπορούσε να καταστεί μη λειτουργικό ένα DSi
- Τα παιχνίδια DSi-Enhanced μπορούν να εκτελεστούν σε λειτουργία DSi χωρίς μια ROM «δότη»
- Το παλιό homebrew μπορεί να εκτελεστεί μέσω του nds-bootstrap-hb

Μειονεκτήματα:

- Very minor risk of **bricking** the console when installing
- Another, slightly higher, risk of bricking if you decide to [uninstall it](uninstalling-unlaunch.html)
- Δεν είναι συμβατό με κονσόλες για προγραμματιστές

## Θα χάσω οποιαδήποτε λειτουργία τροποποιώντας το σύστημά μου;

Εάν εγκαταστήσετε το Unlaunch ή αν χρησιμοποιήσετε το Flipnote Lenny, δεν θα χαθεί κανένος είδους λειτουργικότητα. If you use Memory Pit, you will be unable to view photos on the SD card using the DSi Camera, unless you launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap.

- To regain the ability to view your SD card photos when launching the DSi Camera from the DSi Menu, install Unlaunch or switch to a different exploit, then delete Memory Pit's `pit.bin` file
  - If `tip.bin` exists in the same folder, rename it back to `pit.bin`

## Πώς μπορώ να παίξω αποτυπώσεις των κασετών παιχνιδιών για Nintendo DS;

Η εκτέλεση των αποτυπώσεων κασετών παιχνιδιών στην κονσόλα απαιτεί τη χρήση μιας flashcard ή του nds-bootstrap, το οποίο είναι ένα πρόγραμμα που επιτρέπει την εκτέλεση των παιχνιδιών από την εσωτερική κάρτα SD, κάνοντας ανακατεύθυνση των λειτουργιών ανάγνωσης και εγγραφής του Slot-1.

- Με το TWiLight Menu++, μπορείτε να πλοηγηθείτε στην κάρτα SD σας για να βρείτε και να εκτελέσετε αρχεία ROM μέσω του nds-bootstrap. Τα πλεονεκτήματα του TWiLight Menu++ περιλαμβάνουν ένα μενού για cheat, ρυθμίσεις ανά παιχνίδι και κατάργηση των περιορισμών που φέρουν οι διεργασίες προώθησης (forwarder). Με άλλα λόγια, μπορείτε να αποθέσετε τα αρχεία ROM απευθείας και να παίξετε χωρίς καμία επιπρόσθετη ρύθμιση. Δεν υφίσταται το όριο των 39 τίτλων, δεν απαιτείται ούτε το hiyaCFW ούτε το Unlaunch και δεν υπάρχει κανένας περιορισμός για τον ελεύθερο χώρο που μπορείτε να έχετε στην κάρτα SD
- hiyaCFW users can create forwarders for the SDNAND's DSi Menu using the [DS Game Forwarders](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) guide on the DS-Homebrew Wiki, but it has some limitations. Υπάρχει το αυστηρό όριο των 39 τίτλων και αυτή η μέθοδος είναι λιγότερο βολική από τη χρήση του TWiLight Menu++
  - If you do not have hiyaCFW and would like to use forwarders, you can follow the [hiyaCFW installation guide](https://wiki.ds-homebrew.com/hiyacfw/installing) on the DS-Homebrew Wiki

## Πώς μπορώ να ενημερώσω το homebrew;

- **Unlaunch** - Follow the instructions on the [Installing Unlaunch](installing-unlaunch.html) page
  - You do **not** need to uninstall Unlaunch before doing this
- **hiyaCFW** - Replace `hiya.dsi` on the root of the SD card from the [updated release](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Follow the instructions on the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copy `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` to the `_nds` folder on the root of your SD card
  - Εάν χρησιμοποιείτε το TWiLight Menu++, υπάρχει μεγάλη πιθανότητα η πιο πρόσφατη έκδοση του nds-bootstrap να συμπεριλαμβάνεται στο TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, etc** - Follow the instructions used to download them

Άλλα λογισμικά homebrew ενδέχεται να χρησιμοποιούν διαφορετικές μεθόδους ενημέρωσης.

## Κάνω για πρώτη φορά εγκατάσταση ή θέλω να την κάνω εκ νέου. Από πού ξεκινάω;

- Εάν δεν έχετε ήδη τροποποιήσει την κονσόλα σας ή θέλετε να ενημερώσετε το Unlaunch στο σύστημά σας, σας συνιστούμε να ξεκινήσετε από την αρχή του οδηγού και να ακολουθήσετε τις οδηγίες των σελίδων. Φροντίστε να διαβάσετε τα πάντα στην αρχική σελίδα
- If you have the latest version Unlaunch, follow the [TWiLight Menu++ install guide](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) to set up TWiLight Menu++ on your system

## Πώς μπορώ να αφαιρέσω τον γονικό έλεγχο;

- The [mkey generator](https://mkey.salthax.org) can generate the code required to remove parental controls

## Μπορώ να αλλάξω την περιοχή του Nintendo DSi μου;

Ναι, υπάρχουν διάφορες μέθοδοι ανάλογα με το τι θέλετε να αλλάξετε:

- Η ασφαλέστερη και απλούστερη μέθοδος είναι να εγκαταστήσετε απλώς το TWiLight Menu++, το οποίο μπορεί, μεταξύ άλλων, να χρησιμοποιήσει οποιαδήποτε επίσημη γλώσσα χωρίς να χρειαστούν τροποποιήσεις της NAND
- Εάν θέλετε να αλλάξετε την περιοχή του συστήματος και χρησιμοποιείτε το hiyaCFW, ανοίξτε το μενού ρυθμίσεων και αλλάξτε τη ρύθμιση περιοχής (δεν είναι δυνατό με τις NAND των περιοχών CHN και KOR)
  - If this breaks touch input, revert the region setting back to the original, and you can instead use Yoti's [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) for Asian DSi systems. For American DSi systems use [this version of hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Lastly, if you want to change the region on the actual system NAND, you can use Mighty Max's [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)

## Τι συνέβη στον οδηγό εγκατάστασης του hiyaCFW;

Because hiyaCFW does not serve much functional purpose and was a problematic and confusing part of the guide for many users, it was moved to the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing).

- Εάν οδηγηθήκατε στην εν λόγω σελίδα μέσω ενός συνδέσμου από κάποιον άλλο οδηγό, οι οδηγίες που ακολουθήσατε είναι πιθανότατα παρωχημένες. Χρησιμοποιήστε αυτόν τον οδηγό, καθώς συντηρείται διαρκώς από τους προγραμματιστές αυτών των έργων

## Τι συνέβη με το Lazy DSi Downloader; Πώς μπορώ να εγκαταστήσω το CFW χωρίς αυτό;

Το Lazy DSi Downloader ήταν ένα πρόγραμμα που σάς επέτρεπε ουσιαστικά να παραλείψετε τη μη αυτόματη διαδικασία εγκατάστασης, κάνοντας λήψη και τοποθέτηση των απαραίτητων αρχείων και φακέλων στην κάρτα SD σας. Ωστόσο, λόγω του τρόπου ανάπτυξης και διανομής του, πολλοί χρήστες αντιμετώπιζαν διάφορα ζητήματα και κατέληγαν στη χειροκίνητη μέθοδο εγκατάστασης, καθώς ήταν πιο γρήγορη ή/και εύκολη από τη διόρθωση του οποιουδήποτε ζητήματος.

To avoid more users encountering these issues, we no longer recommend using Lazy DSi Downloader, and instead [doing the manual setup](get-started.html) is the recommended way to go.

- Εάν οδηγηθήκατε σε αυτόν τον οδηγό μέσω ενός συνδέσμου από κάποιον τρίτο που προτείνει τη χρήση του Lazy DSi Downloader, οι οδηγίες που ακολουθήσατε είναι πιθανότατα παρωχημένες. Χρησιμοποιήστε αυτόν τον οδηγό, καθώς συντηρείται διαρκώς από τους προγραμματιστές αυτών των έργων.

## Τι είδους κάρτα SD πρέπει να χρησιμοποιήσω;

- Θα πρέπει να προμηθευτείτε μια κάρτα SD από μια αξιόπιστη μάρκα
- Μπορείτε να χρησιμοποιήσετε είτε μια κάρτα SD πλήρους μεγέθους είτε μια κάρτα microSD με προσαρμογέα
- Επιτρέπεται οποιαδήποτε χωρητικότητα μεταξύ 1 GB και 2 TB. Για γενική χρήση, τα 8 GB είναι αρκετά
  - Ορισμένα λογισμικά, όπως το hiyaCFW, ενδέχεται να παρουσιάσουν σταδιακά μεγαλύτερους χρόνους φόρτωσης με τις μεγαλύτερες χωρητικότητες καρτών SD
- Συνιστάται κατηγορία ταχύτητας 8 ή υψηλότερη

## Μπορώ να χρησιμοποιήσω την κάρτα SD του DSi μου σε άλλα συστήματα;

Σε γενικές γραμμές, ναι, με δύο εξαιρέσεις:

- Το hiyaCFW θα λειτουργεί μόνο στο σύστημα στο οποίο εγκαταστάθηκε
- Ακόμα κι αν χρησιμοποιείτε το nds-bootstrap ή μια flashcard, θα γίνει επαναφορά των κωδικών φίλων στα online παιχνίδια για NDS όταν προσπαθήσετε να συνδεθείτε στο διαδίκτυο από κάποια άλλη κονσόλα

## Πώς μπορώ να χρησιμοποιήσω μια νέα κάρτα SD μετά την εγκατάσταση του homebrew;

Format your new SD card using the [SD Card Setup](sd-card-setup.html) instructions, then simply move your data from the old SD card to the new one.

## Μπορώ να χρησιμοποιήσω το σύστημά μου κανονικά, χωρίς την κάρτα SD, μετά την εγκατάσταση του homebrew;

Ναι. Εάν δεν εγκαταστήσατε το Unlaunch, το σύστημά σας θα παραμείνει αμετάβλητο. If you _did_ install Unlaunch, you may need to [configure Unlaunch](installing-unlaunch.html#section-iii-post-unlaunch-configuration) to automatically boot the original DSi Menu under specified conditions.

## The [Unlaunch page](https://problemkaputt.de/unlaunch.htm) says that version 2.0 is not known to be safe. Πρέπει να χρησιμοποιήσω προηγούμενη έκδοση;

Η σελίδα του Unlaunch δεν έχει ενημερωθεί από την κυκλοφορία της έκδοσης 2.0 το 2019. Η συντριπτική πλειοψηφία των χρηστών δεν αντιμετωπίζει προβλήματα με αυτήν την έκδοση, επομένως θεωρείται ασφαλής.

## Πώς μπορώ να εκτελέσω αποτυπωμένα DSiWare;

Ο προτεινόμενος τρόπος είναι να τα εκκινείτε μέσω του TWiLight Menu++, λόγω της απλής μεθόδου μεταφοράς και απόθεσης και της απουσίας αυθαίρετων ορίων. Εάν ορίσετε το nds-bootstrap ως τη μέθοδο εκκίνησης, θα έχετε επίσης τις δυνατότητες για cheat και στιγμιότυπα οθόνης, καθώς και οποιαδήποτε άλλα οφέλη που παρέχει το μενού εντός του παιχνιδιού.

However, for the few titles that are incompatible, you can use [NTM](https://github.com/Epicpkmn11/NTM/releases) to install them on either internal memory or [hiyaCFW's SDNAND](https://wiki.ds-homebrew.com/hiyacfw/installing). Πέρα από την έλλειψη των παραπάνω πλεονεκτημάτων, υπάρχει επίσης και το όριο των 39 τίτλων, οι οποίοι δεν μπορούν να υπερβαίνουν τα 128 MiB/1.024 block σε μέγεθος. Για τη SysNAND, υπάρχει επίσης ένας πολύ μικρός κίνδυνος να καταστεί μη λειτουργικό το σύστημα κατά την εγγραφή στην εσωτερική NAND.
