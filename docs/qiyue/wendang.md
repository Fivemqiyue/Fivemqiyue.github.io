---
outline: deep
---

# 代码区
------------------------------------------------------------------------------------------------
### Esx1.9.0以上需要用到
```lua
ESX = exports["es_extended"]:getSharedObject()
```
------------------------------------------------------------------------------------------------
### fxmanifest.lua
```lua
fx_version 'adamant' game 'gta5' lua54 'yes' 

description '自定义内容'

shared_script '@ox_lib/init.lua' 

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'Server.lua'
}
client_scripts {
    'Client.lua'
}

shared_scripts {
    '@es_extended/imports.lua',
	'@es_extended/locale.lua',
    'Config.lua'
}

dependencies {
	'ox_inventory'
}

escrow_ignore {
    'Config.lua'
}

files {
    'html/img/*.png'
}
```
------------------------------------------------------------------------------------------------
### UI在线调试
```lua
set sv_environment "development" 服务器

右键点击你的 FiveM 图标，选择“属性”。
在“快捷方式”标签页中，找到“目标”字段，在其末尾添加 + set moo 31337。
点击“应用”并确认。

F8打开 nui_devtools
```
------------------------------------------------------------------------------------------------
###  获取图片链接
```lua
local Tupian = "nui://插件名/Tupian/%s.png"
(Tupian):format('billing')
```
------------------------------------------------------------------------------------------------
###  Fivem数据库连接
```lua
set mysql_connection_string "mysql://root@localhost/legacyshuguang?charset=utf8mb4_bin"
set mysql_connection_string "mysql://账号:密码@localhost/luocheng
```
------------------------------------------------------------------------------------------------
###  Esx 原生代码 
```lua
local xPlayer = ESX.GetPlayerFromId(source)
local time = '北京时间:'..os.date("%Y/%m/%d丨%X")
xPlayer.getName()
xPlayer.getGroup()
xPlayer.getIdentifier()

GetPlayerName(source) --Steam名

xPlayer.job.name  --主代码    
xPlayer.job.label --主昵称
xPlayer.job.grade --分数字
xPlayer.job.grade_name --英文
xPlayer.job.grade_label --分昵称
```

------------------------------------------------------------------------------------------------
###  使用物品
```lua
ESX.RegisterUsableItem('money', function(source)
    print('使用Money')
end)
```
------------------------------------------------------------------------------------------------
###  Esx回调
```lua
ESX.TriggerServerCallback('ls_phone检查手机物品', function(data)
    if data then
        pirnt('有手机')
    else
        pirnt('没有手机')
    end
end)

ESX.RegisterServerCallback('ls_phone检查手机物品',function(source, cb)
	local xPlayer = ESX.GetPlayerFromId(source)
	local item = xPlayer.getInventoryItem('phone')
	if item.count >= 1 then
		cb(true)
	else
		cb(false)
	end
end)
```
------------------------------------------------------------------------------------------------
###  使用Key按键
```lua
if IsControlJustReleased(0, 212) then
    print('按下按键')
end
```
------------------------------------------------------------------------------------------------
###  获取玩家职业代码
```lua
if ESX.PlayerData.job and ESX.PlayerData.job.name == 'mechanic' then
    print('你是mechanic')
else
    print('你不是mechanic')
end
```
------------------------------------------------------------------------------------------------
###  Esx事件
```lua
RegisterCommand('1', function()
    print('你打了/1')
end)

ExecuteCommand('1')

TriggerServerEvent('Qy_Core:Server')
TriggerClientEvent('Qy_Core:Client')
TriggerEvent('Qy_Core:Open')

RegisterNetEvent('Qy_Core:Open')
AddEventHandler('Qy_Core:Open', function()
    print('1')
end)
```
------------------------------------------------------------------------------------------------
###  Esx 存入公款
```lua
TriggerEvent('esx_addonaccount:getSharedAccount', 'society_mechanic', function(account)
    account.addMoney(amount)
end)
```
------------------------------------------------------------------------------------------------
###  Esx Billing 发送账单
```lua
TriggerServerEvent('esx_billing:sendBill', GetPlayerServerId(closestPlayer), 'society_ambulance', data, amount)
```
------------------------------------------------------------------------------------------------
###  Esx Inventory 库存
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
------------------------------------------------------------------------------------------------
###  Ox_Inventory 代码
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