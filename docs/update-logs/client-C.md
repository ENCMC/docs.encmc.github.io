---
title: 更新日志
layout: docs
titleTemplate: 客户端-C
---
## 更新日志

普通版于版本`v1.5.9`开始记载

---
```
v1.5.19
 - 更新XIYEUpdateMod到1.1.5.15-1.19.2
 - 移除AdvancedChatCore。
 - 移除AdvancedChatLog。

V1.6.0-Pre1
 - 更新到1.19.3，更新了很多mod，如下：
	* AdaptiveTooltips-1.1.1-fabric-1.19.3
	* architectury-7.0.66-fabric
	* betterstats-2.1.+1.19.3
	* borderless-mining-1.1.6+1.19.3
	* catalogue-fabric-1.7.0-1.19.3
	* chunksfadein-v2.0.7-1.19.3
	* cloth-config-9.0.94-fabric
	* connectivity-fabric-1.19.3-3.8
	* continuity-3.0.0-alpha.21.19.3
	* Debugify-1.19.3+1.1
	* entity_texture_features_fabric_1.19.3-4.3.1
	* fabric-api-0.72.0+1.19.3
	* fabric-language-kotlin-1.9.0+kotlin.1.8.0
	* Fastload+1.19.3-2.6.10
	* graphutil-fabric-1.0.0-mc1.19.3
	* inventorytabs-0.9.0-beta-1.19.3
	* iris-mc1.19.3-1.5.1
	* Lambda的动态光源-lambdynamiclights-2.2.0+1.19.3
	* language-reload-1.5.4+1.19.3
	* LinsAPI-1.3
	* logical_zoom-0.0.18
	* memoryleakfix-1.19.3-0.7.0
	* memoryusagescreen-fabric-mc1.19.3-1.7.0
	* midnightcontrols-1.7.3+1.19.3
	* moreculling-1.19.3-0.14.0
	* recipe-book-is-pain-0.8.0-1.19.3
	* recursive-resources-2.2.3+1.19.3
	* replaymod-1.19.3-2.6.10
	* status-effect-bars-1.0.2
	* TitleChanger-1.7.1
	* Xaero的世界地图-XaerosWorldMap_1.28.8_Fabric_1.19.3
	* Xaero的小地图-Xaeros_Minimap_22.17.1_Fabric_1.19.3
	* XIYEUpdateMod-1.1.4.13-1.19.3
	* YetAnotherConfigLib-2.2.0
	* 万用皮肤补丁-CustomSkinLoader_Fabric-14.15.1
	* 分辨率控制-resolution-control-plus-1.19.3-3.0.0
	* 实体渲染机制优化-entityculling-fabric-1.5.2-mc1.19.3
	* 方块同步修复-antighost-1.19.3-fabric0.68.1-1.1.5
	* 更好的任务栏-bettertaskbar-fabric-mc1.19.3-1.6.1
	* 更好的骑乘HUD-bettermounthud-1.2.1
	* 深色加载界面-dark-loading-screen-1.6.13
	* 美西螈桶修复-axolotl-item-fix-1.1.4
	* 苹果皮-appleskin-fabric-mc1.19.3-2.4.2
	* 进度信息展示-advancementinfo-1.19.3-fabric0.68.1-1.3.1
	* 钠 · 扩展-sodium-extra-0.4.16+mc1.19.3-build.91
	* 钠-sodium-fabric-mc1.19.3-0.4.8+build.22
	* 铁氧体磁芯-ferritecore-5.1.0-fabric
	* 铟-indium-1.0.12+mc1.19.3
	* 锂-lithium-fabric-mc1.19.3-0.10.4
 - 部分mod还未跟进，故移除[后续会补上]。或者使用代替品：
	* desiredservers-1.19-1.0.1
	* onsoulfire-1.19-3

v1.5.18_Hot1
 - 更新资源包Glowing版本到0.1.6.1，修复岩浆桶不正常的问题。

v1.5.18
 - 添加AdvancedChatCore,前置。
 - 添加AdvancedChatLog，用于方便查询聊天记录。
 - 添加Chunks fade in，区块会有个淡化载入过程
 - 添加malilib，前置。
 - 添加ReplayMod，用于录制。
 - 更新FastAnim到1.5.7。
 - 更新Iris到1.5.0。
 - 将模组菜单更换为catalogue，同时安装menulogue和配置界面来提供兼容接口。
 - 移除Fabrication，因会导致板报插件不正常显示。补上一些功能代替品。
 - 关掉CustomFog，因兼容性问题。补上代替品simple fog。
 - 相关配置和mod整理，减少占用。
 - 更新资源包Glowing版本到0.1.6。

v1.5.17_Hot2
 - SCL启动器1.1.0更新，修复JVM参数问题。因补上。

v1.5.17_Hot1
 - 更新MoreCulling到0.12.4，以防崩溃。
 - 更新钠 · 扩展到0.4.16。
 - 调整相关光影配置。

v1.5.17
 - 添加Keybind Fix，用来解决一定程度上的按键冲突。
 - 添加MixinTrace，用于崩溃日志打印Mixin使用情况。
 - 更新Better Statistics Screen到2.1.1。
 - 更新Connectivity到3.7。
 - 更新Fabric API到0.70.0。
 - 更新Fabric Loader到0.14.12。
 - 更新FastLoad到2.4.4。
 - 更新ImmediatelyFast到1.1.0。
 - 更新Lambda的动态光源到2.2.0。
 - 更新More Culling到0.12.3。
 - 更新Xaero的世界地图到1.28.7。
 - 更新Xaero的小地图到22.17.0。
 - 更新更好的任务栏到1.5.1。
 - 更新钠 · 扩展到0.4.15。
 - 因More Culling更新，代替Cull Clouds的功能，因此移除。
 - 因More Culling更新，代替FeyTweaks的功能，因此移除。
 - Too Many Players作用不大，因此移除。

v1.5.16
 - 更新better stats到2.0。
 - 更新Entity Texture Features到4.2.0。
 - 更新Fabric API到0.68.0。
 - 更新Fabric Language Kotlin到1.8.7（Kotlin.1.7.22）。
 - 更新ImmedialyFast到1.0.6。
 - 更新Iris到1.4.5。
 - 更新Xaero的世界地图到1.28.4。
 - 更新Xaero的小地图到22.16.3。
 - 更新模组菜单到4.1.2。
 - 更新铁氧体磁芯到5.0.3。
 - 移除Raise Sound Limit Simplified，不稳定。

v1.5.15
 - 添加新mod：AdaptiveTooltips，代替冰山和scrollable tooltips两个mod的功能。但需要先按Alt才可以滚动。
 - 添加新mod：BetterStats，代替原版的统计界面。
 - 添加新mod：Cull Clouds，优化云（高质量）的渲染机制。
 - 添加新mod：MidnightControls，给手柄做了基本支持。
 - 添加新mod：Recipe Book is Pain，把配方书的合成配方分类按创造模式物品栏的分类进行分类
 - 将Fastbamboo的优化集成到钠中。
 - 更新Architectury到6.3.49。
 - 更新ElytraPhysics到1.1.1。
 - 更新Entity Texture Features到4.1.1。
 - 更新Fast Load到2.3.5。
 - （又双）把Farslight换为Hold That Chunk，但是版本为2.0.1。
 - 更新ImmediatelyFast到1.0.5。
 - 更新Iris到1.4.3正式版。
 - 更新Reese的钠视频界面到1.4.9。
 - 更新Xaero的世界地图到1.28.3。
 - 更新Xaero的小地图到22.16.2。
 - 更新YetAnotherConfigLib到1.7.1。
 - 更新钠 · 拓展到0.4.14。
 - 更新Fabric Loader到0.14.11。
 - 暂时关掉游戏内输入法。

v1.5.14_Hot1
 - 更新Debugify到2.8.0。
 - 更新YetAnotherConfigLib到1.6.0。

v1.5.14
 - 添加新mod：fastbamboo，优化竹子的计算。
 - 添加新mod：GraphUtil，改良调试界面的帧数图表显示。
 - 添加新mod：ImmediatelyFast，优化一些GUI、一些文字、方块实体、实体和粒子的渲染。
 - 再次添加回FsatAnim，优化实体模型计算。
 - 添加新mod：Sneaky，解决了打开背包时蹲下状态被取消的问题。
 - 添加新mod：Enhanced Attack Indicator，攻击提示的用处更多了。
 - 更新Fabric loader到0.14.10。
 - 更新Fabric API到0.64.0。
 - 更新Fabrication到3.1.3。
 - 更新Fast Load到1.2.1。
 - 更新Sodium Extra到0.4.11[dev，build.1291]。
 - 更新Xaero的世界地图到1.28.1。
 - 更新Xaero的小地图到22.16.0。
 - 更新iris到1.5.0-shadowcomp-cu-test.1。
 - 更新方块实体优化到0.7.2。
 - 暂时关掉Exordium，因为稳定性不佳。
 - 一些配置更改。
 - 一些资源包更改。
 - 更新光影版本。

v1.5.13
 - 添加新mod：冰山，横向过长的内容可以换到下一行。
 - 添加新mod：Feytweaks，可以智能剔除告示牌上的文字。
 - 添加新mod：Exordium，优化部分GUI和告示牌文字渲染。
 - 添加新mod：Sodium Fix，防止因光照导致的崩溃。
 - 添加新mod：Autoreconnect，掉线可以直接点重连了。
 - 更新Debugify到2.7.1。
 - 更新iris到1.3.2-Beta2。
 - 更新钠 · 拓展到0.4.11。
 - 默认把Bobby关掉，使用Farsight，防止硬盘性能过拉影响帧率。

v1.5.12
 - 更新YetAnotherConfigLib到1.5.0。
 - 默认关掉疾速加载，保证兼容和稳定性。
 - 移除Reese's Sodium Options Extra
 - 使用No Prying Eyes 代替NoChatReports，聊天验证问题应该会没了。
 - 添加新启动器SCL。

v1.5.11a
 - 更换Farsight为Bobby，并配置只保存7天内缓存区块，以免占用过高。

v1.5.11
 - 更新YetAnotherConfigLib到1.2.0。
 - 更新Cloth Config API到8.2.88。
 - 更新Fabric API到0.61.0。
 - 更新夕夜材质包自动更新mod到1.1.2.9。
 - 添加新mod：Who am I，第三人称视角/背包视角可以看到自己的名字了。
 - 添加新mod：游戏内输入法，全屏也可以看到中文候选字了。
 - 更换Enhanced Searchability为Recursive Resources。

v1.5.10
 - 更新iris到1.3.1。
 - 添加新mod：Elytra Physics，鞘翅不会再那么僵硬了！

v1.5.9
 - 支持滚动长出界面的工具提示。
 - 更换另一个区块缓存mod[Farsight]。
 - 更新iris到1.3.0正式版。
 - 更新Debugify，由于此次变动，删掉了平滑滚动mod。
 - 添加EBE优化补丁资源包。
 - 支持资源包搜索。
```