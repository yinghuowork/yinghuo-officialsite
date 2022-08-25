# 快速构建顶部导航栏控件

此文章将指导您快速构建一个适用于PC和手机端的顶部导航栏。

首先，您需要导入依赖。它包括位于/css/nav.css的样式文件和位于/js/nav.js的脚本文件。参考代码：
```html
<link rel="stylesheet" href="/css/nav.css">
<script src="/js/nav.js"></script>
```

接下来，你可以直接参照模板代码，添加一个顶部导航栏。

```html
<div id="navbar" class="navbar">
    <div id="logo_box" class="logo_box">
        <a href="index.html"><img src="/images/logo.png" class="logo"></a>
    </div> 
    <div class="menu_btn" onclick="menu_show()">
        <div id="menu_top" class="menu_top"></div>
        <div id="menu_bottom" class="menu_bottom"></div>
    </div>
    <div id="links_box" class="links_box">
        <a href="https://example.com" class="nav_link">Example Link</a>
    </div>
</div>

<div id="cover" class="cover" show="false">
    <div class="menu_box" id="menu_box">
        <a href="https://example.com" class="nav_link">Example Link</a><br/>
    </div>
</div>
```

这段代码分为两个部分。第一部分是id为**navbar**的div容器，它包含导航栏的主要部分。第二部分的id为**cover**，它实际上是一个遮罩，其中包含id为**menu_box**的容器。

navbar中包含logo_box, menu_btn, links_box三个容器。它们分别用于显示网站Logo、移动端的菜单按钮与链接。其中，除了menu_btn，其余两个容器的内容均可以自定义。例如在本例中，网站Logo的位置为`/images/logo.png`，点击它会指向`/index.html`。此例还显示了一个链接，名为`Example Link`，指向`https://example.com`。

而menu_box中的内容与links_box大致相同，但你需要在a标签中添加`<br/>`换行标签以让菜单正常显示。

总结一下，在引入依赖（路径关系与本项目存储库相同）后，只需直接拷贝上面的模板代码到`<body>`标签内，并修改Logo、链接的路径和名称，就可以直接使用了。

> 如果你想快速构建一个可用的顶部导航栏，那么读到这里就够了。下面的内容适用于需要自定义部分参数的情况。

# 自定义某些参数

在`nav.css`的开头部分定义了几个可以被修改的参数

| 变量 | 默认值 | 功能 |
|---|---|---|
| nav-color | rgba(0, 0, 0, .8) | 导航栏的背景颜色 |
| navlink-big-size | 18px | 链接触发hover事件时的字体大小(正常为16px) |
| navlink-original-color | rgba(255, 255, 255, .7) | 链接正常状态的颜色 |
| navlink-original-color | white | 链接触发hover事件时的颜色 |
| menu-bgcolor | rgb(49, 49, 49) | 移动端菜单的颜色 |