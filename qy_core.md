---
outline: deep
---
# Qy_Core 文档
###  Qy_vPrompt代码
```lua
exports['Qy_vPrompt']:Create({
    key = 'E',
    label = '打开邮件',
    coords = Coords,
    canInteract = function()
        TriggerEvent('Qy_Mail:OpenMenu')
    end
})
```
------------------------------------------------------------------------
###  Qy_Notify
```lua
exports['Qy_Notify']:Notify('测试!!',5000)
exports['Qy_Notify']:Notify(source, '测试!!',5000)
(Tupian):format('billing')

```
------------------------------------------------------------------------
###  Qy_Menu
```lua
exports['Qy_Menu']:closeMenu()

exports['Qy_Menu']:openMenu({
    {
        header = "返回上一页",
        text = '你已打开老板菜单列表.',
        onSelect = function() 
            OpenBossMenu(society, close, options)
        end,
    }
})

exports['Qy_Menu']:openMenu({
    {
        header = "老板菜单",
        text = '你已打开老板菜单列表.',
        isMenuHeader = true
    },
    table.unpack(elements)
})
```
------------------------------------------------------------------------
###  Qy_dialog
```lua
local input = exports['Qy_dialog']:DialogInput({
    header = "存入公款", 
    rows = {
        {
            id = 0, 
            txt = "输入金额($)"
        }
    }
})

if input and input[1] and input[1].input and input[1].input ~= "" then
    local amount = tonumber(input[1].input)

    if amount > 0 then
        TriggerServerEvent('esx_society:depositMoney', society, amount)
    else
        exports['Qy_Notify']:Notify('输入数字无效!', 5000)
    end
else
    exports['Qy_Notify']:Notify('请输入你需要的数字!', 5000)
end

local dialog = exports['Qy_dialog']:DialogInput({
    header = "Tuner Billing", 
    rows = {
        {
            id = 0, 
            txt = "Citizen ID (#)"
        },
        {
            id = 1, 
            txt = "Bill Price ($)"
        },
    }
})

if dialog ~= nil then
    if dialog[1].input == nil or dialog[2].input == nil then
        print('没检测到数值')
    else
        print('2')
    end
end
```
------------------------------------------------------------------------
### Qy_Progressbar
```lua
exports['Qy_Progressbar']:Progress({
    name = "random_task",
    duration = 5000,
    label = "Doing something",
    useWhileDead = false,
    canCancel = true,
    controlDisables = {
        disableMovement = false,
        disableCarMovement = false,
        disableMouse = false,
        disableCombat = true,
    },
    animation = {
        animDict = "mp_suicide",
        anim = "pill",
        flags = 49,
    },
}, function(cancelled)
    if not cancelled then
        -- finished
    else
        -- cancelled
    end
end)
```