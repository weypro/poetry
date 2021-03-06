# 一句诗词 poetry

![GPL](https://img.shields.io/github/license/weypro/poetry)
![Version](https://img.shields.io/github/package-json/v/weypro/poetry)


## 说明
此乃uniapp试水之作。本项目调用开放接口获取诗词，并且显示和保存。  
其实想用react-native重构的，但是没有macos（黑苹果虚拟机太占硬盘空间了又没法装），就没办法生成ipa，而uniapp很贴心地解决了这个问题，所以就这样吧  

本项目涉及的坑主要有：  
1. 跨域问题：未解决，本来打算调用更高级的接口的，但是访问不了  
1. 本地数据库sqlite：调用HTML5+接口，但是调试不便  

通过阅读本项目，你可以学习到：  
1. uniapp的基本操作：参考官方示例代码  
1. 代码风格的重要性：本项目是反例  
1. uniapp全局变量的使用方法（或许有更好的实现也没深入研究）  
1. 组件调用组件的方法：比如项目中的
```javascript
<sqliteDB ref="sqlite"></sqliteDB>
```
1. const关键字：在js中指的是地址不变，值可变（比如array，不过对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量）  
1. 字体问题：在app.vue中定义全局样式即可  

## 调试
首先
```
npm install
```
然后就可以用hbuilderx调试了  
（实际上目前没有任何dependencies，因此可以直接调试）

## 项目更新日志
v0.3  2020.10.13
1. 删除启动图（因为不好看），下次在说，咕
1. 修正了数据库未初始化的bug，优化数据库读取方式
1. 修正新版uniapp字体问题
1. 修改按钮样式，并给按钮添加了水波纹效果
1. 一键清空加入了提示框

v0.2  2019.12.25  圣诞更新  
1. ”管理数据“页面中添加数据显示  
1. 加入等待进度条以及toast  
1. 加入“一键清空”  
1. 添加启动图  

v0.1  2019.11.09  
1. 搭建项目框架及基本页面  
1. 建立基本数据库操作  

