---
outline: deep
---

<style>
/* 全局美化 */
.vp-doc h1 {
  border-bottom: 3px solid var(--vp-c-brand-1);
  padding-bottom: 16px;
  margin-bottom: 32px;
}

.vp-doc h2 {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
  position: relative;
}

.vp-doc h2::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), transparent);
}

.vp-doc h3 {
  background: var(--vp-c-bg-soft);
  padding: 12px 16px;
  border-left: 4px solid var(--vp-c-brand-1);
  border-radius: 0 8px 8px 0;
  margin: 24px 0 16px 0;
}

/* 代码块美化 */
.vp-doc div[class*='language-'] {
  border-radius: 12px;
  margin: 20px 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.vp-doc div[class*='language-']:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}

/* hr 线美化 */
.vp-doc hr {
  margin: 32px 0;
  border: none;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--vp-c-divider), transparent);
}

/* 列表美化 */
.vp-doc ul, .vp-doc ol {
  padding-left: 24px;
}

.vp-doc li {
  margin: 8px 0;
  line-height: 1.8;
}

/* 徽章样式 */
.badges {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 16px 0;
}

.badges img {
  height: 20px;
  border-radius: 4px;
}
</style>

# 💻 代码区

::: info 📚 关于本文档
这里收录了 FiveM 开发中常用的代码片段和配置模板，方便快速查阅和复制使用。
:::

---

## 🆕 ESX 框架基础

### 🔹 ESX 初始化

::: code-group
```lua [ESX Legacy (旧版)]
ESX = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
```

```lua [ESX 1.9.0+ (新版)]
ESX = exports["es_extended"]:getSharedObject()
```
:::

::: tip 💡 提示
ESX 1.9.0+ 版本推荐使用新的初始化方式，更简洁高效！
:::

---

### 📄 fxmanifest.lua 配置模板

<div class="template-download">
  <h4>📦 完整开发模板下载</h4>
  <div class="badges">
    <img src="https://img.shields.io/badge/ESX-1.9.0+-blue" alt="ESX">
    <img src="https://img.shields.io/badge/Lua-5.4-green" alt="Lua">
    <img src="https://img.shields.io/badge/Ox__Lib-支持-orange" alt="Ox_Lib">
  </div>
  <p>包含所有必需文件，开箱即用！</p>
  <a href="/downloads/Qy_Moban.zip" download class="download-btn-large">
    📥 下载七月开发模板 (Qy_Moban.zip)
  </a>
</div>

::: details 👁️ 点击查看完整配置
```lua
fx_version 'adamant'
game 'gta5'
lua54 'yes'

description '七月开发模板'
author '七月 (Qiyue)'
version '1.0.0'

-- 依赖资源
dependencies {
    'es_extended',
    'ox_lib',
    'ox_inventory'
}

-- 服务端脚本
server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server/main.lua'
}

-- 客户端脚本
client_scripts {
    'client/main.lua'
}

-- 共享脚本
shared_scripts {
    '@es_extended/imports.lua',
    '@es_extended/locale.lua',
    '@ox_lib/init.lua',
    'config.lua'
}

-- UI 文件
ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js',
    'html/img/*.png'
}

-- 加密忽略
escrow_ignore {
    'config.lua',
    'locales/*.lua'
}
```
:::

::: warning ⚠️ 注意事项
- 确保已安装 `es_extended`, `ox_lib`, `ox_inventory`
- 修改 `description` 和 `author` 为你的信息
- 根据实际项目调整脚本路径
:::

<style>
.template-download {
  background: var(--vp-c-bg-soft);
  border: 2px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  margin: 16px 0 24px 0;
}

.template-download h4 {
  font-size: 18px;
  margin: 0 0 8px 0;
  color: var(--vp-c-text-1);
}

.template-download p {
  color: var(--vp-c-text-2);
  margin: 0 0 16px 0;
}

.download-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
}

.download-btn {
  display: inline-block;
  padding: 12px 20px;
  background: linear-gradient(135deg, #0ea5e9, #10b981);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(14, 165, 233, 0.2);
  text-align: center;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(14, 165, 233, 0.4);
  background: linear-gradient(135deg, #0284c7, #059669);
}

.download-btn.readme {
  background: linear-gradient(135deg, #f59e0b, #f97316);
}

.download-btn.readme:hover {
  background: linear-gradient(135deg, #d97706, #ea580c);
}

.download-btn-large {
  display: block;
  width: 100%;
  padding: 16px 24px;
  background: linear-gradient(135deg, #0ea5e9, #10b981);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
  text-align: center;
}

.download-btn-large:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.5);
  background: linear-gradient(135deg, #0284c7, #059669);
}

@media (max-width: 768px) {
  .download-grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
  
  .download-btn-large {
    font-size: 14px;
    padding: 14px 20px;
  }
}
</style>

---

## 🛠️ 开发工具

### 🎯 UI 在线调试

::: tip 📝 步骤
1. **服务器端**：在 `server.cfg` 添加：
   ```bash
   set sv_environment "development"
   ```

2. **客户端**：
   - 右键 FiveM 图标 → 属性
   - 在“目标”末尾添加：`+ set moo 31337`
   - 点击应用

3. **使用**：
   - 游戏中按 `F8`
   - 输入 `nui_devtools`
:::

---

### 🖼️ 获取图片资源链接

::: details 👁️ 点击查看代码
```lua
local imageUrl = "nui://ox_inventory/web/images/%s.png"
local formattedUrl = imageUrl:format('billing')
print(formattedUrl) -- nui://ox_inventory/web/images/billing.png
```
:::

---

## 📦 ESX API 使用

### 👤 玩家信息获取

::: code-group
```lua [Server 端]
local xPlayer = ESX.GetPlayerFromId(source)

-- 基础信息
local playerName = xPlayer.getName()
local playerGroup = xPlayer.getGroup()
local identifier = xPlayer.getIdentifier()

-- 工作信息
local jobName = xPlayer.job.name        -- 工作代码
local jobLabel = xPlayer.job.label      -- 工作名称
local grade = xPlayer.job.grade         -- 职位等级
local gradeLabel = xPlayer.job.grade_label  -- 职位名称
```

```lua [Client 端]
local playerData = ESX.GetPlayerData()

-- Steam 名字
local steamName = GetPlayerName(PlayerId())

-- 工作信息
local job = playerData.job
print(job.name, job.label, job.grade)
```
:::

::: tip 💡 常用方法
- `xPlayer.getMoney()` - 获取现金
- `xPlayer.getAccount('bank').money` - 获取银行存款
- `xPlayer.getInventoryItem('bread')` - 获取物品信息
:::

---

### 🎁 注册可使用物品

::: details 👁️ 点击查看示例
```lua
-- Server 端注册
ESX.RegisterUsableItem('phone', function(source)
    local xPlayer = ESX.GetPlayerFromId(source)
    TriggerClientEvent('qy:openPhone', source)
end)

-- 多个物品
local usableItems = {'phone', 'bread', 'water'}
for _, item in pairs(usableItems) do
    ESX.RegisterUsableItem(item, function(source)
        print('玩家使用了: ' .. item)
    end)
end
```
:::

---

### 🔄 ESX 服务器回调 (Callback)

::: code-group
```lua [Client 端调用]
ESX.TriggerServerCallback('qy:checkItem', function(hasItem)
    if hasItem then
        print('有该物品')
    else
        print('没有该物品')
    end
end, 'phone')
```

```lua [Server 端注册]
ESX.RegisterServerCallback('qy:checkItem', function(source, cb, itemName)
    local xPlayer = ESX.GetPlayerFromId(source)
    local item = xPlayer.getInventoryItem(itemName)
    
    if item and item.count >= 1 then
        cb(true)
    else
        cb(false)
    end
end)
```
:::

::: tip 💡 使用说明
1. Client 端调用 `TriggerServerCallback`
2. Server 端注册 `RegisterServerCallback`
3. 通过 `cb()` 返回结果
:::

---

## ⌨️ 按键与命令

### 🎮 按键监听

::: code-group
```lua [简单监听]
CreateThread(function()
    while true do
        Wait(0)
        if IsControlJustReleased(0, 38) then -- E 键
            print('按下了 E 键')
        end
    end
end)
```

```lua [多按键组合]
if IsControlPressed(0, 36) and IsControlJustReleased(0, 38) then -- Ctrl + E
    print('按下了 Ctrl+E')
end
```
:::

::: tip 💡 常用按键代码
- `38` - E 键
- `46` - E 键 (NUM)
- `191` - Enter
- `194` - 退格
- `212` - HOME
:::

---

### 🔘 按键绑定 (Key Mapping)

::: details 👁️ 点击查看示例
```lua
-- 注册按键绑定
RegisterKeyMapping('openPoliceMenu', '打开警察菜单', 'keyboard', 'F6')

-- 注册命令
RegisterCommand('openPoliceMenu', function()
    -- 检查职业
    if ESX.PlayerData.job.name == 'police' then
        OpenPoliceMenu()
    else
        print('你不是警察')
    end
end, false)

-- 禁用建议：false=允许建议, true=禁止建议
```
:::

---

## 📡 事件系统

### 📤 事件触发与监听
```lua
ExecuteCommand('1')

TriggerServerEvent('Qy_Core:Server')
TriggerClientEvent('Qy_Core:Client')
TriggerEvent('Qy_Core:Open')

RegisterNetEvent('Qy_Core:Open')
AddEventHandler('Qy_Core:Open', function()
    print('1')
end)
```

---

## 💰 财务系统

### 🏦 公司账户操作
```lua
TriggerEvent('esx_addonaccount:getSharedAccount', 'society_mechanic', function(account)
    account.addMoney(amount)
end)
```

---

### 📝 发送账单 (Billing)
```lua
TriggerServerEvent('esx_billing:sendBill', GetPlayerServerId(closestPlayer), 'society_ambulance', data, amount)
```

---

## 🎒 库存系统

### 📦 ESX Inventory API
```lua

local xPlayer = ESX.GetPlayerFromId(source)

xPlayer.addInventoryItem('bread', 3)
xPlayer.removeInventoryItem('water', 2)

local item = xPlayer.getInventoryItem('water')
print(('玩家有 %d 瓶水'):format(item.count))

local currentWeight = xPlayer.getWeight()
print(('当前负重为: %d 克'):format(currentWeight))

local maxWeight = xPlayer.getMaxWeight()
print(('最大负重为: %d 克'):format(maxWeight))

xPlayer.setInventoryItem('water', 10)
--直接设置玩家库存中某个物品的数量，覆盖现有数量

local inventory = xPlayer.getInventory()
for i, item in ipairs(inventory) do
    print(('物品名称: %s, 数量: %d'):format(item.name, item.count))
end

local canSwap = xPlayer.canSwapItem('water', 3, 'bread', 2)
if canSwap then
    xPlayer.removeInventoryItem('bread', 2)
    xPlayer.addInventoryItem('water', 3)
end

xPlayer.clearInventory()
```

---

### 🔶 Ox_Inventory API
```lua

/clearinv 清除背包

exports.ox_inventory:AddItem(source, 'itemName', itemCount)
exports.ox_inventory:RemoveItem(source, 'itemName', itemCount)
if exports.ox_inventory:CanCarryItem(source, 'water', 3) then

else

end
exports.ox_inventory:GetItemCount('playerId', 'itemName')
exports.ox_inventory:Search('count', 'itemName')

exports.ox_inventory:Search(source, 'slots', Item)
exports.ox_inventory:Search(source, 'count', Item)

exports.ox_inventory:openInventory('stash', {id= '汽修|员工|仓库', owner= false})

Citizen.CreateThread(function()
    exports.ox_inventory:RegisterStash('汽修|员工|仓库', '汽修|员工|仓库', 100, 100000, false, nil)
    exports.ox_inventory:RegisterStash('汽修|老板|仓库', '汽修|老板|仓库', 100, 100000, false, nil)
end)

exports.ox_inventory:openInventory('shop', { type = '汽修商店', id = 1 })
exports.ox_inventory:RegisterShop('汽修商店', {
    name = '汽修商店',
    inventory = {
        { name = 'money', price = 100 },
    },
    locations = {
        vec3(-1068.9053, -2101.9968, 13.2617),
    }
})
```
------------------------------------------------------------------------------------------------
###  OX_Lib 弹窗
```lua
local alert = lib.alertDialog({
    header = '欢迎来到洗钱系统 -> 5%',
    content = '可清洗额度 -> ['..data.item..']黑钱 -> 可获得:'..data.money,
    centered = true,
    cancel = true
})

if alert == 'confirm' then
    --确定
elseif alert == 'cancel' then
    --取消
end
```
------------------------------------------------------------------------------------------------
###  Dc记录写法
```lua

DiscordLog('记录器','玩家:'..xPlayer.getName()..'获得:1个白银钥匙碎片')

function DiscordLog(Bt,message)
    local Dcwebhook = 'Dc机器人连接'
    local connect = {
        {
            ["color"] = 3066993,
            ["description"] = message,
            ["footer"] = {
                ["text"] = '北京时间:'..os.date("%Y/%m/%d丨%X"),
            },
        }
    }
    PerformHttpRequest(Dchooks, function(Error, Content, Head) end, 'POST', json.encode({username = Bt, embeds = connect}), {['Content-Type'] = 'application/json'})
end
```
------------------------------------------------------------------------------------------------
###  获取玩家指定数据
```lua
local steam = GetIdentifiers(source, 'steam')
local license = GetIdentifiers(source, 'license')

function GetIdentifiers(source, idtype)
    local idtype = idtype
    for key, value in pairs(GetPlayerIdentifiers(source)) do
        if string.find(value, idtype) then
            return value
        end
    end
    return nil
end
```
------------------------------------------------------------------------------------------------
###  构建UI 教程
```lua
-- 首先得下载

-- https://nodejs.org/en

-- 获取源码目录
-- alt+R cmd 打开代码窗口

-- 导航到项目目录：使用 cd 命令来更改当前的工作目录到项目的目录，即包含 package.json 文件的目录。
-- cd /d 目录

-- 安装依赖：在项目目录下，运行 npm install 来安装项目所需的所有依赖。这会根据 package.json 文件中列出的依赖来安装它们。 有时候需要改一下版本
-- npm install

-- npm start 打开本地数据 查询UI

-- 清楚安装依赖 npm install --force

-- 构建项目：构建项目通常意味着运行一些转译、打包或编译的过程，使得源代码变为可以在生产环境中运行的代码。根据你的 package.json 文件中的脚本定义，你可以运行构建命令。通常这个命令是 npm run build。
-- npm run build
```
------------------------------------------------------------------------------------------------
### 模组闪图
```lua
解决方法：找到该模组附近同名 Yamp 删除即可
```
------------------------------------------------------------------------------------------------
###  Print代码
```lua

local Neirong = 
[[====================================================================================
[^3警告信息^7] -> 添加可输入命令 ^5"%s" ^7已经注册,覆盖命令
====================================================================================]]

print((Neirong):format(count1, count2)) %s触发

Citizen.CreateThread(function()
    while false do
        Citizen.Wait(2000)
        print(Neirong)
    end
end)
```
------------------------------------------------------------------------------------------------
###  打印Server服务端
```lua
SetConvarServerInfo("七月商业端", "Q2048732953")
```
------------------------------------------------------------------------------------------------
###  地图原版模型 删除
```lua
CreateModelHide(vector3(-596.04, 2089.01, 131.41), 10.5, -1241212535, true)
```
------------------------------------------------------------------------------------------------
###  设置玩家状态-也可以用于反作弊 = 等等
```lua

--设置玩家状态
LocalPlayer.state:set('GetSmwp', true, true)

--获取玩家状态
LocalPlayer.state['Black洗钱']

if LocalPlayer.state['Black洗钱'] ~= true then
    return
end
------------------------------------------------
--Server

--检查 true
local LocalPlayer = Player(source)
if LocalPlayer.state['Black洗钱'] ~= true then
    print('违规操作')
    return
end

--设置 Black洗钱 为 false
LocalPlayer.state:set('Black洗钱', false, true)
```

------------------------------------------------------------------------------------------------
###  Client乱码
```lua
SetTextFont(4) 改 0
```
------------------------------------------------------------------------------------------------
###  Esx原生高级通知 - 屏幕最中间
```lua
ESX.Scaleform.ShowFreemodeMessage('~o~fact of the day', '~y~Hawaii is a king', 5)
```