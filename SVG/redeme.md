> 这里的内容出自MDN网站的SVG教程，我在其中的笔记

可缩放矢量图形，即SVG, 是W3C XML的分支语言之一，用于标记可缩放的矢量图形。

目前SVG在Firefox、Opera、Webkit浏览器、IE等浏览器中已经部分实现。

# 引言

[SVG](https://developer.mozilla.org/en-US/SVG)是一种[XML](https://developer.mozilla.org/en-US/XML)语言，类似XHTML，可以用来绘制矢量图形，例如右面展示的图形。SVG可以通过定义必要的线和形状来创建一个图形，也可以修改已有的位图，或者将这两种方式结合起来创建图形。图形和其组成部分可以形变（be transformed）、合成、或者通过滤镜完全改变外观。

![SVG_Overview](\SVG\image\SVG_Overview.png)

SVG诞生于1999年，之前有几个相互竞争的格式规范被提交到[W3C](https://www.w3.org/)，但是都没有获得批准。主流浏览器均支持SVG。加载慢是SVG的一个缺点。但是SVG也有自身的优点，比如它实现了DOM接口（比Canvas方便），不需要安装第三方扩展(extensions，原文有误，应该是插件plugins，类似flash)。当然，是否使用SVG还要取决于你要实现什么。

## 基本要素

HTML提供了定义标题、段落、表格等等内容的元素。与此类似，SVG也提供了一些元素，用于定义圆形、矩形、简单或复杂的曲线。一个简单的SVG文档由`<svg>`根元素和基本的形状元素构成。另外还有一个`g`元素，它用来把若干个基本形状编成一个组。

从这些开始，SVG可以变得更加复杂。SVG支持渐变、旋转、动画、滤镜效果、与JavaScript交互等等功能，但是所有这些额外的语言特性，都需要在一个定义好的图形区域内实现。

## 开始之前

包括[Inkscape](https://www.inkscape.org/)在内的很多免费应用原生支持SVG格式的文件。但是本教程建议在学习过程中使用XML或文本编辑器，因为想要理解SVG内部的原理，最好的方法就是动手写一些SVG的标记。你需要注意到你的最终目标。各种SVG浏览器是有差异的，因此很可能你制作了一个SVG图形，并且用一个工具调试正常后，却在另外一个浏览器中无法正常显示。这是因为不同的浏览器支持SVG标准的程度不同，另外，如果你将其他技术和SVG一起使用（比如[JavaScript](https://developer.mozilla.org/en-US/JavaScript)和[CSS](https://developer.mozilla.org/en-US/CSS)），也会出现类似的情况。

所有的现代浏览器都支持SVG，在某些情况下甚至几个版本都支持SVG。[Can I use](https://caniuse.com/#feat=svg)上有一份比较详细的支持SVG的浏览器列表，Firefox 1.5以后的版本支持SVG的部分内容，并且支持的程度越来越高。希望通过这份教程，MDN能帮助开发者理解Gecko内核和其他一些主要编译器之间的差异。

正式开始之前，你需要基本掌握XML和其它标记语言比如说HTML，如果你不是很熟悉XML，这里有几个重点一定要记住：

- SVG的元素和属性必须按标准格式书写，因为XML是区分大小写的（这一点和HTML不同）
- SVG里的属性值必须用引号引起来，就算是数值也必须这样做。

SVG是一个庞大的规范，本教程主要涵盖基础内容。掌握了这些内容之后，你就有能力使用[元素参考](https://developer.mozilla.org/en-US/SVG/Element)和[接口参考](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model#svg_接口)，学习其他你需要知道的内容。

## SVG的种类

自从2003年成为W3C推荐标准以来，最接近的“完整版”SVG版本是1.1版，它基于1.0版，并且增加了更多便于实现的模块化内容，SVG1.1的第二个版本在2011年成为推荐标准，完整的SVG1.2本来是下一个标准版本，但它又被SVG2.0取代。SVG2.0正在制定当中，它采用了类似CSS3的制定方法，通过若干松散耦合的组件形成一套标准。

除了完整的SVG推荐标准，W3C工作组还在2003年推出了SVG Tiny和SVG Basic。这两个配置文件主要瞄准移动设备。首先SVG Tiny主要是为性能低的小设备生成图元，而SVG Basic实现了完整版SVG里的很多功能，只是舍弃了难以实现的大型渲染（比如动画）。2008年，SVG Tiny1.2成为W3C推荐标准。

另外还有一些关于SVG打印规格的项目，增加对多页面和颜色管理的支持，但是这项工作已经终止。

# 入门

## 一个简单的实例

让我们直接从一个简单的例子开始，看一下下面代码：

```
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>

```

复制并粘贴代码到文件demo1.svg。然后用Firefox打开该文件。 它将会呈现为下面的截图。(Firefox用户点击[这里](https://mdn.mozillademos.org/files/3075/svgdemo1.xml))

![](\SVG\image\svgdemo1.png)

绘制流程包括以下几步：

1. 从`svg`根元素开始：
   - 应舍弃来自 (X)HTML的doctype声明，因为基于SVG的DTD验证导致的问题比它能解决的问题更多。
   - SVG 2之前，version属性和baseProfile属性用来供其他类型的验证识别SVG的版本。SVG 2不推荐使用version和baseProfile这两个属性。
   - 作为XML的一种方言，SVG必须正确的绑定命名空间 （在xmlns属性中绑定）。 请阅读[命名空间速成](https://developer.mozilla.org/en/docs/Web/SVG/Namespaces_Crash_Course) 页面获取更多信息。
2. 绘制一个完全覆盖图像区域的矩形 `<rect/>，`把背景颜色设为红色。
3. `一个半径80px的绿色圆圈<circle/>`绘制在红色矩形的正中央 （向右偏移150px，向下偏移100px）。
4. 绘制文字“SVG”。文字被填充为白色， 通过设置居中的锚点把文字定位到期望的位置：在这种情况下，中心点应该对应于绿色圆圈的中点。还可以精细调整字体大小和垂直位置，确保最后的样式是美观的。

## SVG文件基本属性

- 最值得注意的一点是元素的渲染顺序。SVG文件全局有效的规则是“后来居上”，越后面的元素越可见。

- web上的svg文件可以直接在浏览器上展示，或者通过以下几种方法嵌入到HTML文件中：

  - 如果HTML是XHTML并且声明类型为`application/xhtml+xml，`可以直接把SVG嵌入到XML源码中。

  - 如果HTML是HTML5并且浏览器支持HTML5，同样可以直接嵌入SVG。然而为了符合HTML5标准，可能需要做一些语法调整。

  - 可以通过 

    ```
    object
    ```

     元素引用SVG文件：

    ```
            <object data="image.svg" type="image/svg+xml" />
    ```

  - 类似的也可以使用 

    ```
    iframe
    ```

     元素引用SVG文件：

    ```
            <iframe src="image.svg"></iframe>
    ```

  - 理论上同样可以使用 `img` 元素，但是在低于4.0版本的Firefox 中不起作用。

  - 最后SVG可以通过JavaScript动态创建并注入到HTML DOM中。 这样具有一个优点，可以对浏览器使用替代技术，在不能解析SVG的情况下，可以替换创建的内容。

  阅读

  this dedicated article

   以深入了解该话题。

- SVG如何处理大小和单位将在[下一页](https://developer.mozilla.org/zh-cn/docs/Web/SVG/Tutorial/Positions)详解。

## SVG文件类型

SVG文件有两种形式。普通SVG文件是包含SVG标记的简单文本文件。推荐使用“.svg”（全部小写）作为此类文件的扩展名。

由于在某些应用（比如地图应用等）中使用时，SVG文件可能会很大，SVG标准同样允许gzip压缩的SVG文件。推荐使用“.svgz”（全部小写）作为此类文件扩展名 。不幸的是，如果服务器是微软的IIS服务器，使gzip压缩的SVG文件在所有的可用SVG的用户代理上可靠地起作用是相当困难的，而且Firefox不能在本地机器上加载gzip压缩的SVG文件。 除非知道处理发布内容的web服务器可以正确的处理gzip，否则要避免使用gzip压缩的SVG。

## 关于web服务器的小提示

如果你已经知道了如何创建基本SVG文件，下一步就是把它们上传到web服务器，但是在这阶段有一些陷阱。对于普通SVG文件，服务器应该会发送下面的HTTP头：

```
Content-Type: image/svg+xml
Vary: Accept-Encoding
```

对于gzip压缩的SVG文件，服务器应该会发送下面的HTTP头：

```
Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding
```

可以利用[Network Monitor panel](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor#Headers)或者[web-sniffer.net](http://web-sniffer.net/)之类的网站来检查服务器是否给SVG文件发送正确的HTTP头，向[web-sniffer.net](http://web-sniffer.net/)提交你的一个SVG文件的链接，然后查看HTTP 响应头。如果发现服务器没有发送上述的响应头部值，那么你应该联系你的服务器供应商。如果不能说服他们为SVG修正服务器配置，可能还有一些我们可以自行解决的办法。 请阅读SVG维基的[server configuration page](http://svg-whiz.com/wiki/index.php?title=Server_Configuration)以找到一些简单的解决方案。

服务器配置错误是SVG加载失败的常见原因，所以一定要确保你的服务器配置正确。如果不能把服务器配置成给SVG文件发送正确的响应头，这时Firefox很有可能把该文件的标记显示成文本或乱码，甚至会要求查看者选择打开文件的应用程序。

# 坐标定位

## 网格

对于所有元素，SVG使用的坐标系统或者说网格系统，和[Canvas](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)用的差不多（所有计算机绘图都差不多）。这种坐标系统是：以页面的左上角为(0,0)坐标点，坐标以像素为单位，x轴正方向是向右，y轴正方向是向下。注意，这和你小时候所教的绘图方式是相反的。但是在HTML文档中，元素都是用这种方式定位的。

![Canvas_default_grid](\SVG\image\Canvas_default_grid.png)

#### 示例：

元素

```
<rect x="0" y="0" width="100" height="100" />
```

定义一个矩形，即从左上角开始，向右延展100px，向下延展100px，形成一个100*100大的矩形。

## 什么是像素

基本上，在 SVG 文档中的1个像素对应输出设备（比如显示屏）上的1个像素。但是这种情况是可以改变的，否则 SVG 的名字里也不至于会有“Scalable”（可缩放）这个词。如同CSS可以定义字体的绝对大小和相对大小，SVG也可以定义绝对大小（比如使用“pt”或“cm”标识维度）同时SVG也能使用相对大小，只需给出数字，不标明单位，输出时就会采用用户的单位。

在没有进一步规范说明的情况下，1个用户单位等同于1个屏幕单位。要明确改变这种设定，SVG里有多种方法。我们从`svg`根元素开始：

```
<svg width="100" height="100">
```

上面的元素定义了一个100*100px的SVG画布，这里1用户单位等同于1屏幕单位。

```
<svg width="200" height="200" viewBox="0 0 100 100">
```

这里定义的画布尺寸是200*200px。但是，viewBox属性定义了画布上可以显示的区域：从(0,0)点开始，100宽*100高的区域。这个100*100的区域，会放到200*200的画布上显示。于是就形成了放大两倍的效果。

用户单位和屏幕单位的映射关系被称为**用户坐标系统**。除了缩放之外，坐标系统还可以旋转、倾斜、翻转。默认的用户坐标系统1用户像素等于设备上的1像素（但是设备上可能会自己定义1像素到底是多大）。在定义了具体尺寸单位的SVG中，比如单位是“cm”或“in”，最终图形会以实际大小的1比1比例呈现。

下面是引自SVG1.1规范的一段说明：

> […] 假设在用户的设备环境里，1px等于0.2822222毫米（即分辨率是90dpi），那么所有的SVG内容都会按照这种比例处理： […] "1cm" 等于 "35.43307px" （即35.43307用户单位）；