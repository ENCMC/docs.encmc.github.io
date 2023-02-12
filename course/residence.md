# 领地

### 基本介绍[#](https://docs.xiye.world/course/residence.html#%E5%9F%BA%E6%9C%AC%E4%BB%8B%E7%BB%8D) <a href="#ji-ben-jie-shao" id="ji-ben-jie-shao"></a>

玩家可以使用此插件圈地从而使自己位置受到保护，服务器领地大小与领地数量与圈地价格由权限组决定，圈地工具为：木锄，左键与右键设置第一个点与第二个点，领地必须为大于3X3X3的长方形，你可以给予指定的人`普通权限`和`管理员权限`

当你给予玩家普通权限`/res padd <领地> [玩家]`，玩家则默认得到普通权限的模板，给予的普通权限模板基本已满足普通玩家所需要的权限，你也可以使用`/res pset <领地> [玩家]`命令打开管理此玩家权限的GUI，当你要移除此玩家的权限请使用`/res pdel <领地> [玩家]`命令

当你给予玩家管理员权限`/res pset <领地> [玩家] admin true`，玩家则得到领地绝大多数的权限，可以任意在领地内给予其他玩家普通权限，修改领地内的设置，当你要移除此玩家的管理员权限请使用`/res pset <领地> [玩家] admin false`命令

### 常用命令[#](https://docs.xiye.world/course/residence.html#%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4) <a href="#chang-yong-ming-ling" id="chang-yong-ming-ling"></a>

**/res help显示全部指令，这里仅显示最常用的指令介绍**

\***使用<>包括的为可有可无，使用\[]包括的必须要有，如/res padd <领地名> \[玩家]，要省略<领地名>的前提就是在领地以内；true=允许，false=禁止，remove=恢复默认值\***

创建领地/`res create [领地名]`领地名是不可重复且不能用颜色符号及中文

删除领地`/res remove [领地名]`输入之后还需输入`/res confirm`进行确认删除领地

权限分为两类，一类是普通权限，一类是管理权限，拥有管理权限的可以在领地内随意的修改领地设置添加/删除其他玩家的权限，拥有普通权限的只能在给予的权限内操纵

`/res padd <领地名> [玩家]`为给某位玩家添加普通权限

`/res pset <领地名> [玩家] <权限> <true/false/remove>`为某位玩家设定权限，不输入<权限>及以后的内容则打开管理玩家权限的全局GUI

`/res pdel <领地名> [玩家]`恢复一位玩家全部权限为set的默认值

`/res set <领地名> <权限> <true/false/remove>`为领地修改flags权限，不输入<权限>及以后的内容则打开管理领地flags权限的全局GUI

`/res subzone <领地名> [子领地名]`创建一个字领地，例如主领地名为home创建子领地名，/res subzone home t2，则领地名为home.t2，领地的flags设置继承主领地设置，可以单独修改子领地的flags设置

`/res contract <领地名> [数量]`向你面朝的方向减少领地格数，且不会退还方块的钱

`/res expand <领地名> [数量]`向你面朝的方向增加领地格数，需要0.04/block

`/res rename <领地名> [新名称]`重命名领地

`/res mirror [原领地名] [目标领地名]`从原领地复制flags权限到目标领地，但前提是你是两个领地的所有者

`/res reset <领地名>`重置领地的全部flags权限

`/res info <领地名>`查看领地信息

`/res list`查看领地数量

`/res message <领地名> [enter/leave] [信息]`修改领地进入/离开信息可使用&，enter=进入|leave=离开

`/res rt`在允许的世界内10000格内随机传送

`/res tp [领地名]`传送到一个领地

`/res tpset`设置领地传送点

`/res show <领地名>`显示领地的边界(粒子)

`/res give <领地名> [玩家]`将一个领地给予玩家，输入完成聊天栏显示二次确认，点击聊天栏内给予者的ID即正式给予