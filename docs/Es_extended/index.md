---
outline: deep
---

# 安装 ESX Legacy 的官方指南

在开始之前，请确保您已成功安装和设置数据库！ 😊

## 要求

- OXMYSQL 数据库
- 生成管理器 - [spawnmanager]

## 下载

### 使用 Git

```lua
cd resources
git clone https://github.com/esx-framework/esx-legacy
```

# 手动地

- 下载 [ESX Legacy](https://github.com/esx-framework/esx-legacy/archive/refs/heads/main.zip)
- 从 [Github](https://github.com/esx-framework) 下载您要使用的插件

---

# 安装

- 解压缩文件夹 `[core]`  
- 将其放入服务器的文件夹中：**resources**  
- 提取您下载的插件  
- 在 `resources` 文件夹中创建一个文件夹：`[addons]`  
- 将 exact 插件放入 `[addons]` 文件夹中  
- 进入 `[SQL]` 文件夹中的 `ESX Legacy` 文件夹  
  - 导入数据库 `legacy.sql`  

---

- 确保您没有使用这些资源中的任何一个：  
  - `essentialmode`  
  - `basic-gamemode`  
  - `mapmanager`  
  - `fivem-map-skater`  
  - `fivem-map-hipster`  
  - `mysql-async`  
  - `QBCore`  
  - `default_spawnpoint`  

- 使用提供的 `server.cfg`  
  - 确保您的 `server.cfg` 看起来与此类似  


# 服务器配置文件示例 (`server.cfg`)

以下是一个 `server.cfg` 文件的示例配置，用于设置 ESX Legacy 服务器的资源和权限：

```lua
add_principal group.admin group.user
add_ace resource.es_extended command.add_ace allow
add_ace resource.es_extended command.add_principal allow
add_ace resource.es_extended command.remove_principal allow
add_ace resource.es_extended command.stop allow

ensure oxmysql
ensure spawnmanager
ensure es_extended

ensure esx_menu_default
ensure esx_menu_list
ensure esx_menu_dialog