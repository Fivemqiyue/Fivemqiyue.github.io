---
outline: deep
---

# Esx:addInventoryItem

### Client Side (客户端)

### 参数

| **Argument** | **Type**   | **Explanation**                     |
|--------------|------------|-------------------------------------|
| `item`       | `string`   | 昵称                             |
| `count`      | `number`   | 数量                             |

## 示例用法
```lua
RegisterNetEvent('esx:addInventoryItem', function(item, count)
  print('您收到了物品: ', item)
  print('数量：', count)
end)
```