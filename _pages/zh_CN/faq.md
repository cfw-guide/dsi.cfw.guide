---
title: "常见问题"
redirect_from:
  - help/faq
---

{% include toc title="Questions" %}

### 修改我的系统将会丢失什么功能？
- 如果您决定安装Unlaunch，您将不会丢失任何系统功能
- 如果你只进行了memory-pit漏洞的相关设置，您将无法通过 Nintendo DSi 相机应用程序将照片保存到 SD 卡。 除非切换到 [其他漏洞](alternate-exploits) 或 [安装Unlaunch](/installing-unlaunch)

   这是因为元数据文件`pit.bin`已被Memory Pit漏洞 所覆盖。

### 我该如何游玩任天堂DS卡带的提取文件？
在游戏机上游玩卡带的提取文件需要使用 烧录卡 或 nds-bootstrap
- 使用 TWiLight Menu++ 您可以在您的 SD 卡中找到 ROM 文件然后使用nds-bootstrap游玩。 使用 TWiLight Menu++ 的优点是有作弊菜单，每个游戏单独设置，并避免转发商设置的限制。 换言之，您可以直接将您的 ROM 文件丢进去SD卡，并在没有任何设置的情况下运行。 没有最多39个应用的限制，既不需要hiyaCFW，也不需要Unlaunch，而您的 SD 卡也没有任何空闲空间限制
- hiyaCFW用户可以为 SDNAND 的 DSi Menu 创建 [发行商](nds-bootstrap-forwarders) ，但它有一些限制。 它们有39个应用的限制，不太容易制作，也不会自动打反盗版补丁。

### 如何更新我的自制程序？
- **Unlaunch** - 按照 [安装Unlaunch](/installing-unlaunch) 上的说明操作
- **hiyaCFW** - 替换在 SD 卡根目录上的`hiya.dsi`为 [更新版本](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - 按照 [GitHub wiki](https://github.com/DS-Homebrew/TWiLightMenu/wiki/updating-%28dsi%29) 上的说明操作
- **nds-bootstrap** - 复制 `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` 到SD卡根目录上的 `_nds` 文件夹
   - 如果您使用 TWiLight Menu++，很有可能将最新的 nds-bootstrap 版本包含在TWiLight Menu++内
- **GodMode9i, dumpTool, MakeForwarder, 等.** - 按照使用说明下载

其他自制程序可能会使用其他方法进行更新。

### 我是小白，又或者我想重新设置。 我该从哪里开始？
- 如果您尚未破解您的机器，或者正在寻求在您的机器上不使用 hiyaCFW来更新Unlaunch ， 我们建议您从指南开头从头看起。 请务必阅读主页上的所有内容
- 如果您有最新版本的Unlaunch，但不想要hiyaCFW， 按照第1b节 [启动漏洞](launching-the-exploit#twilight-menu) 在您的系统上设置 TWiLight Menu++
- 如果您已经有了Unlaunch，并想要安装hiyaCFW，请按照 [安装hiyaCFW](installing-hiyacfw) 页面， 然后返回 [安装Unlaunch](installing-unlaunch) 页面以更新Unlaunch。
   - hiyaCFW Helper是安装hiyaCFW的工具，可以用来安装TWiLight Menu++。 无需单独安装 TWiLight Menu++
   - 既然我们使用 TWiLight Menu++ 启动Unlaunch 安装器，那么为什么要在设置hiyaCFW后更新Unlaunch 。
