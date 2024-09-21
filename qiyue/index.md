---
outline: deep
---

# 私人笔记文档

### Esx1.9.0以上需要用到
```lua
ESX = exports["es_extended"]:getSharedObject()
```

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