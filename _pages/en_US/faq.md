---
title: "FAQ"
redirect_from:
  - help/faq
---

<a name="faq_fatmismatch" />**Q:** Unlaunch freezes at `MISMATCH IN FAT COPIES`. What do I do?
{: .notice--info}

**A:** This error is caused by twlnf. It has a critical bug that doesn't properly update the entire NAND after modifying it. This causes certain homebrew (like the Unlaunch installer) to throw an error. Fortunately, this is fixable. Unfortunately, the *method* to fix it isn't set in stone, and largely varies from system to system. Generally, deleting any DSiWare installed via twlnf in the past does the job, but make sure you have another homebrew entrypoint available if you delete an entrypoint. It has also been reported that moving *all* DSiWare to the SD card and back to the system can help in some cases.

<a name="faq_noflipnote" />**Q:** Can I install HiyaCFW without Flipnote Studio?
{: .notice--info}

**A:** No, you will need a hardmod to install HiyaCFW. Follow Gadorach's [hardmodding guide](https://gbatemp.net/threads/dsi-downgrading-the-complete-guide.393682/){:target="_blank"} to hardmod your DSi. Previous soldering experience is required.

<a name="faq_2gbsd" />**Q:** Can I use an SD card higher than 2GB with HiyaCFW yet?
{: .notice--info}

**A:** Yes, using TWiLight Menu++. See the [Replacing System Menu with TWiLight Menu++](replacing-system-menu-with-twlmenu++) page for more information. Low-level "full" formatting your SD card with a tool like GUIFormat can help as well, but this will not get you around the DSi Menu's block limit, whereas TWiLight Menu++ does.

<a name="faq_notwlmenupp" />**Q:** Why don't I see TWiLight Menu++?
{: .notice--info}

**A:** You're in SysNAND instead of the SDNAND. The HiyaCFW Helper isn't applying the CFW's patches properly, so please wait for a fix in the helper.

<a name="faq_uninstall" />**Q:** Is there a safe way to remove Unlaunch?
{: .notice--info}

**A:** Yes, Unlaunch v1.5 and higher's installer can uninstall Unlaunch. Keep in mind that this may result in an **irrecoverable brick** if you have installed any arbitrary DSiWare to your system NAND, or have otherwise messed with system files.