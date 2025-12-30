---
outline: deep
---

# 🚗 车辆系统开发

::: info 📚 关于本文档
这里收录了 FiveM 车辆系统开发中常见的问题和解决方案，特别是车辆颜色和数据保存相关的问题。
:::

---

## 🎨 车辆颜色问题解决

### 🔧 车辆颜色改装不保存问题

::: warning 问题描述
车辆颜色改装后重新召唤车辆时，颜色不能正常保存，特别是自定义颜色和内饰颜色。
一般需要修改 ESX 框架的车辆属性函数。
:::
#### 💡 解决方案

::: tip 修复方法
一般需要修改 ESX 框架的 `GetVehicleProperties` 和 `SetVehicleProperties` 函数。
直接在车库脚本中查找并替换这两个函数调用即可。
:::

```lua
-- 需要替换的核心代码
ESX.Game.GetVehicleProperties(vehicle)  -- 获取车辆属性
ESX.Game.SetVehicleProperties(vehicle, payload.props)  -- 设置车辆属性

```

---

### 📝 完整代码示例

#### 1️⃣ GetVehicleProperties 函数扩展

::: details 📝 第一部分：获取自定义颜色
```lua
-- 在 GetVehicleProperties 函数中添加
local color1Custom = {}
color1Custom[1], color1Custom[2], color1Custom[3] = GetVehicleCustomPrimaryColour(vehicle)
local color2Custom = {}
color2Custom[1], color2Custom[2], color2Custom[3] = GetVehicleCustomSecondaryColour(vehicle)

```
:::

::: details 📝 第二部分：添加属性字段
```lua
-- 在车辆属性表中添加
color1Custom      = color1Custom,
color2Custom      = color2Custom,

color1Type 		  = GetVehicleModColor_1(vehicle),
color2Type 		  = GetVehicleModColor_2(vehicle),
dashboardColor    = GetVehicleDashboardColour(vehicle),
interiorColor     = GetVehicleInteriorColour(vehicle),
livery            = GetVehicleLivery(vehicle)

```
:::

---

#### 2️⃣ SetVehicleProperties 函数扩展

::: details 📝 设置车辆属性
```lua
-- 在 SetVehicleProperties 函数中添加
if (props.color1Custom) then
	SetVehicleCustomPrimaryColour(vehicle, props.color1Custom[1], props.color1Custom[2], props.color1Custom[3])
end
if (props.color2Custom) then
	SetVehicleCustomSecondaryColour(vehicle, props.color2Custom[1], props.color2Custom[2], props.color2Custom[3])
end
if (props.color1Type) then
	SetVehicleModColor_1(vehicle, props.color1Type)
end
if (props.color2Type) then
	SetVehicleModColor_2(vehicle, props.color2Type)
end
if (props.dashboardColor) then
	SetVehicleDashboardColour(vehicle, props.dashboardColor)
end
if (props.interiorColor) then
	SetVehicleInteriorColour(vehicle, props.interiorColor)
end
if (props.livery) then
	SetVehicleLivery(vehicle, props.livery)
end
```
:::

---

## ✅ 总结

::: tip 💡 关键要点
1. **自定义颜色**：需要保存 `color1Custom` 和 `color2Custom`
2. **颜色类型**：保存 `color1Type` 和 `color2Type`
3. **内饰颜色**：`dashboardColor` 和 `interiorColor`
4. **涂装**：`livery` 属性
:::

::: warning ⚠️ 注意
- 修改后需要重启服务器
- 建议在测试环境先验证
- 备份原始代码以防万一
:::
