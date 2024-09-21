---
outline: deep
---

# 控制台命令

以下是客户端命令列表，这些命令可以用于开发服务器或调试资源问题。资源可能会添加额外命令；以下是 FiveM 的标准命令。

这些命令可以通过客户端控制台使用，按 F8 键打开控制台。你还可以安装其他工具，如 [VConsole2](#)。这允许你在游戏之外使用客户端控制台。

## 用户命令

用户命令可以在客户端控制台中使用，任何人都可以使用，无需启用或使用额外的开发者模式设置。

### connect \<server\>

使用给定的 IP 地址和端口或 URL 连接到服务器。

示例：`connect 127.0.0.1:30120`，`connect "https://fivem.net/"`，`connect cfx.re/join/e23ywq`

### disconnect

断开与当前连接的服务器的连接，并返回到主菜单。

### bind

列出所有配置的绑定。

### bind \<mapper\> \<input\> \<command\>

绑定一个输入以在游戏中按下时执行指定的命令。

示例：`bind keyboard F9 "say hi; wait 250; say bye"`

### rbind \<resource\> \<mapper\> \<input\> \<command\>

与 `bind` 相同，但仅当服务器上指定的资源正在使用时运行。

### unbind \<mapper\> \<input\>

解除绑定所有与指定输入关联的命令。

示例：`unbind keyboard F9`

### cl_drawfps \<bool\>

启用或禁用屏幕角落中的客户端每秒帧数计数器。

用法：`cl_drawfps true|false`

### cl_drawperf \<bool\>

启用或禁用屏幕角落中的性能指标显示：

| 名称（单位）   | 描述                                     |
|----------------|------------------------------------------|
| FPS            | 每秒帧数：每秒在屏幕上绘制的帧数。         |
| Ping (ms)      | 延迟：从服务器获取响应的时间（往返时间）。|
| PL (%)         | 丢包率：未能到达目标的包裹百分比。        |
| CPU Usage (%)  | CPU 使用率：CPU 计算资源的使用百分比。    |
| GPU Usage (%)  | GPU 使用率：GPU 引擎计算资源的使用百分比。|
| GPU Temp (°C)  | GPU 温度：GPU 的温度，以摄氏度为单位。   |

用法：`cl_drawperf true|false`

# quit [reason]
强制客户端立即关闭，并向服务器指定关闭原因。

## loadlevel \<level_name\>
启动本地游戏，加载提供的关卡（或通常称为地图）。

示例：`loadLevel gta5`，`loadLevel rdr3`，`loadLevel blank-map`。

## storymode
启动 FiveM 的故事模式。

## profile_sfxVolume \<0-10+\>
设置游戏的 SFX 音量。该值没有上限，但下限为 0，100% 音量对应 10。

## profile_musicVolume \<0-10+\>
设置游戏的音乐音量，仅适用于单人模式。

## profile_musicVolumeInMp \<0-10+\>
设置网络游戏中的音乐音量。

## 开发者命令

开发者命令要求客户端以开发者模式运行，否则会显示错误，如 “命令访问被拒绝” 或 “在生产模式中禁用了命令启动”。

可以通过以下几种方式启用开发者模式：
1. 通过启动带有 `+set moo 31337` 参数的 FiveM/RedM 客户端。
2. 在非生产更新频道中运行客户端（如 Beta 或 Latest），但可能会导致游戏无法启动等问题。

## cmdlist
`cmdlist` 命令将列出注册到客户端（或服务器）的所有命令。还会输出通过 `set`、`sets` 和 `seta` 命令设置的变量。

## con_miniconChannels
你可以使用 `con_miniconChannels` 显示屏幕上的控制台消息，无需打开客户端控制台。

用法：`con_miniconChannels <pattern>`

## developer
启用开发者日志记录。

用法：`developer <true|false>`

## devgui_cmd \<path\> \<command\>
向开发者 GUI 添加一个命令。

示例：`devgui_cmd "Launch/MP/Disconnect" "disconnect"`

## invoke-levelload
`loadlevel` 命令的别名。

## list_aces
列出控制台中的所有 ACE（访问控制条目）。

## list_principals
列出系统中的所有主体，并打印哪些主体继承自其他主体。

## localGame \<name\>
加载本地资源。

## localRestart
重新启动本地游戏资源。

## modelviewer
允许通过图形界面加载 TXDs 和可绘制对象。

## net_maxPackets
配置客户端每秒发送的数据包数量。

## net_printOwner \<objectID\>
打印网络对象的所有者。

## net_showCommands
内部开发工具。

## net_showDrilldown
内部开发工具。

## netEventLog
启用工具显示所有网络事件。

用法：`netEventLog <true|false>`

## net_statsFile
将网络使用的指标存储到文件中。

用法：`net_statsFile <file_name>`

## netgraph
实时显示 FiveM 客户端的网络使用情况。

用法：`netgraph <true|false>`

## netobjviewer
显示通过网络同步的对象和节点列表。

用法：`netobjviewer <true|false>`

## nui_devtools
打开游戏进程中的 NUI 开发工具窗口。

## onesync_logFile \<filename\>
保存来自游戏状态感知子系统的客户端端日志。

用法：`onesync_logFile "<filename>"`

## resmon #
`resmon` 命令将打开资源监视器。

用法：`resmon <true|false>`

## save_gta_cache
将资源缓存数据保存到 CitizenFX 目录。

用法：`save_gta_cache <resource_name>`

## se_debug
启用安全功能的详细日志记录。

用法：`se_debug <true|false>`

## set
在客户端上设置变量。

用法：`set <key> <value>`

## seta
在客户端上设置已归档的变量。

用法：`seta <key> <value>`

## strdbg
查看当前加载的流媒体内容。

用法：`strdbg <true|false>`

## strlist
显示 GTA 流媒体中注册的条目。

用法：`strlist <true|false>`

## strmem
显示流媒体内容使用的内存列表。

用法：`strmem <true|false>`

## game_enableScaleformDebugLog
显示有关 Scalable 的调试日志消息。

用法：`game_enableScaleformDebugLog <true|false>`

## game_enableFlyThroughWindscreen
启用/禁用布尔变量，以确定在碰撞时角色是否会飞出挡风玻璃。

用法：`game_enableFlyThroughWindscreen <true|false>`

## game_enablePlayerJumpRagdollControl
启用/禁用布尔变量，以确定在单人游戏中角色是否可以跳跃进入布娃娃状态。

用法：`game_enablePlayerJumpRagdollControl <true|false>`

## game_enablePlayerRagdollOnCollision
启用/禁用布尔变量，以确定角色在碰撞时是否进入布娃娃状态。

用法：`game_enablePlayerRagdollOnCollision <true|false>`

## test_ace
测试某个主体是否有权访问给定对象。

用法：`test_ace <principal> <object>`