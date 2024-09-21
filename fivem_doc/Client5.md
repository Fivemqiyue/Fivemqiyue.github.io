---
outline: deep
---

# 准星命令

## 关于准星
该准星模仿 CS:GO 中的准星，因此任何现有的 CS:GO 准星配置都可以在 FiveM 中使用。

### 预设准星行示例：


### 现有的 CS:GO 文档：
[https://counterstrike.fandom.com/wiki/Crosshair](https://counterstrike.fandom.com/wiki/Crosshair)

## 控制台变量：

### cl_customCrosshair \<bool\>
启用或禁用自定义准星。

用法：`cl_customCrosshair true|false`

### cl_crosshairdot \<bool\>
控制是否显示准星中央的点。

用法：`cl_crosshairdot true|false`

### cl_crosshairsize \<float\>
控制准星线的长度。

用法：`cl_crosshairsize 5.0`

### cl_crosshairstyle \<int\>
控制准星的样式。

用法：`cl_crosshairstyle 0`

### cl_crosshairthickness \<float\>
控制准星中心点和线条的厚度。

用法：`cl_crosshairthickness 0.5`

### cl_crosshairgap \<float\>
控制准星中心点和线条之间的间隙。

用法：`cl_crosshairgap 1.0`

### cl_crosshair_drawoutline \<bool\>
控制准星是否应有轮廓。与 `cl_crosshair_outlinethickness` 配合使用。

用法：`cl_crosshair_drawoutline true|false`

### cl_crosshair_outlinethickness \<float\>
控制准星轮廓的厚度。

用法：`cl_crosshair_outlinethickness 1.0`

### cl_crosshaircolor \<int\>
范围从 0 到 5。如果要使用自定义准星颜色（通过 `cl_crosshaircolor_r`，`cl_crosshaircolor_g`，`cl_crosshaircolor_b` 应用的颜色），请将此值设置为 5。

预设颜色包括：
- 0：红色
- 1：绿色
- 2：黄色
- 3：紫蓝色
- 4：青绿色
- 5：自定义

用法：`cl_crosshaircolor 1`

### cl_crosshaircolor_r \<int\>
控制准星 RGB 颜色中的红色分量。

用法：`cl_crosshaircolor_r 50`

### cl_crosshaircolor_g \<int\>
控制准星 RGB 颜色中的绿色分量。

用法：`cl_crosshaircolor_g 250`

### cl_crosshaircolor_b \<int\>
控制准星 RGB 颜色中的蓝色分量。

用法：`cl_crosshaircolor_b 50`

### cl_crosshairusealpha \<bool\>
控制准星是否应具有透明度。

用法：`cl_crosshairusealpha true|false`

### cl_crosshairalpha \<int\>
控制准星的透明度。有效值从 0 到 255。

用法：`cl_crosshairalpha 200`

### cl_crosshair_dynamic_splitalpha \<float\>
未使用，控制准星在移动或射击时的透明度。

用法：`cl_crosshair_dynamic_splitalpha_innermod 1.0`

## 禁用准星
可以通过在 `server.cfg` 文件中输入以下行从服务器禁用准星：

### setr cl_customCrosshair false
这样将设置 `convar`（控制台变量）为 **false**，并将其作为 **replicated** 变量设为不可用。
