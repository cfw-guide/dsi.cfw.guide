---
title: "常见问题"
---

{% include toc title="Questions" %}

### 修改我的系统将会丢失什么功能？
- 如果您决定安装Unlaunch，您将不会丢失任何系统功能
- If you go with a Memory Pit-only setup, you will be unable to save photos to the SD card via the Nintendo DSi Camera application while the exploit is installed. 除非切换到 [其他漏洞](alternate-exploits) 或 [安装Unlaunch](/installing-unlaunch)

   这是因为元数据文件`pit.bin`已被Memory Pit漏洞 所覆盖。

### How do I play Nintendo DS game card dumps?
Playing game card dumps on the console requires the use of a flashcard or nds-bootstrap, a program which enables games to be played from the internal SD card by redirecting Slot-1 reads and writes to it.
- 使用 TWiLight Menu++ 您可以在您的 SD 卡中找到 ROM 文件然后使用nds-bootstrap游玩。 使用 TWiLight Menu++ 的优点是有作弊菜单，每个游戏单独设置，并避免转发商设置的限制。 换言之，您可以直接将您的 ROM 文件丢进去SD卡，并在没有任何设置的情况下运行。 没有最多39个应用的限制，既不需要hiyaCFW，也不需要Unlaunch，而您的 SD 卡也没有任何空闲空间限制
- hiyaCFW用户可以为 SDNAND 的 DSi Menu 创建 [发行商](nds-bootstrap-forwarders) ，但它有一些限制。 There is a hard limit of 39 titles, they are less convenient to make and they do not automatically patch anti-piracy measures

### 如何更新我的自制程序？
- **Unlaunch** - 按照 [安装Unlaunch](/installing-unlaunch) 上的说明操作
- **hiyaCFW** - 替换在 SD 卡根目录上的`hiya.dsi`为 [更新版本](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Follow the instructions on the [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - 复制 `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` 到SD卡根目录上的 `_nds` 文件夹
   - 如果您使用 TWiLight Menu++，很有可能将最新的 nds-bootstrap 版本包含在TWiLight Menu++内
- **GodMode9i, dumpTool, MakeForwarder, 等.** - 按照使用说明下载

其他自制程序可能会使用其他方法进行更新。

### 我是小白，又或者我想重新设置。 我该从哪里开始？
- If you have not already modified your console or are looking to update Unlaunch on your system, we recommend starting from the beginning of the guide and following through the pages. 请务必阅读主页上的所有内容
- If you have the latest version Unlaunch, follow Section 1b of [Launching the Exploit](launching-the-exploit#twilight-menu) to set up TWiLight Menu++ on your system

### 如何移除亲子管理功能？
- [mkey 生成器（英文）](https://mkey.salthax.org) 可生成移除亲子管理功能所需要的代码

### Can I change my Nintendo DSi's region?
Yes, there are a few different methods depending on what you want to change:
- The safest and simplest method is to simply install TWiLight Menu++, it can use any official language and more without needing NAND modifications
- If you want to actually change the system region and are using hiyaCFW, you can use Yoti's [hiyalang](https://github.com/Yoti/cli_hiyalang/releases)
- Lastly, if you want to change the region on the actual system NAND, you can use Mighty Max's [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/)
