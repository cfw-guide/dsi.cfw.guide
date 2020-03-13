---
title: "FAQ"
redirect_from:
  - help/faq
---

<a name="faq_fatmismatch" />**Q:** Unlaunch freezes at `MISMATCH IN FAT COPIES`. What do I do?
{: .notice--info}

**A:** This error is caused by twlnf. It has a critical bug that doesn't properly update the entire NAND after modifying it. This causes certain homebrew (like the Unlaunch installer) to throw an error. Fortunately, this is fixable. Unfortunately, the *method* to fix it isn't set in stone, and largely varies from system to system. Generally, deleting any DSiWare installed via twlnf in the past does the job, but make sure you have another homebrew entrypoint available if you delete an entrypoint. It has also been reported that moving *all* DSiWare to the SD card and back to the system can help in some cases.

<a name="faq_noflipnote" />**Q:** Can I hardmod?
{: .notice--info}

**A:** Yes. Follow Gadorach's [hardmodding guide](https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/){:target="_blank"} to hardmod your DSi. Previous soldering experience is required.

<a name="faq_2gbsd" />**Q:** Why do I boot into "An Error Has Occurred" when I use hiyaCFW with the default DSi Menu, and how can I fix it?
{: .notice--info}

**A:** The reason that the DSi Menu throws an error is due to a signed integer overflow. It detects the amount of free space available, but when it goes above a certain value, it goes back to the lowest. Unfortunately, since it's a signed integer, it goes into a negative number. This is fine on an actual NAND, since the NAND size will never go above 128 MB. However, with NAND redirection to the SD card, it does go over the max limit. In order to work around this, you'd have to either use a replacement menu or adjust the free size to accomodate. You could do the latter by either creating dummy files or partitioning your SD card. The recommended way is to simply replace your system menu with [TWiLight Menu++](installing-twilight-menu++) though, as it's a full replacement of the System Menu with much more functionality (Custom Themes and an all-in-one GUI for emulators).

<a name="faq_notwlmenupp" />**Q:** Why don't I see TWiLight Menu++?
{: .notice--info}

**A:** You're in SysNAND instead of the SDNAND. The HiyaCFW Helper isn't applying the CFW's patches properly, so please wait for a fix in the helper.

<a name="faq_uninstall" />**Q:** Is there a safe way to remove Unlaunch?
{: .notice--info}

**A:** Yes, Unlaunch v1.5 and higher's installer can uninstall Unlaunch. Keep in mind that this may result in an **irrecoverable brick** if you have installed any arbitrary DSiWare to your system NAND, or have otherwise messed with system files.
