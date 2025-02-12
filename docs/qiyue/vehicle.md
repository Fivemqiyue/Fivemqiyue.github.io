---
outline: deep
---

# 车辆区

###  车辆颜色改装问题 一般需要改框架
```lua

-- 下面双一般是保存颜色 跟数据- 内饰有时候需要添加额外的代码 才会保存

--车辆不保存数据以及颜色代码替换 
ESX.Game.GetVehicleProperties(vehicle)
ESX.Game.SetVehicleProperties(vehicle, payload.props)
--一般是框架替换 直接寻找车库同等代码即可

--剩下代码是一些其他问题的代码 

--GetVehicleProperties第一块
local color1Custom = {}
color1Custom[1], color1Custom[2], color1Custom[3] = GetVehicleCustomPrimaryColour(vehicle)
local color2Custom = {}
color2Custom[1], color2Custom[2], color2Custom[3] = GetVehicleCustomSecondaryColour(vehicle)

--GetVehicleProperties第二块
color1Custom      = color1Custom,
color2Custom      = color2Custom,

color1Type 		  = GetVehicleModColor_1(vehicle),
color2Type 		  = GetVehicleModColor_2(vehicle),
dashboardColor    = GetVehicleDashboardColour(vehicle),
interiorColor     = GetVehicleInteriorColour(vehicle),
livery            = GetVehicleLivery(vehicle)

--SetVehicleProperties第一块
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