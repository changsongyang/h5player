(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{217:function(t,v,_){t.exports=_.p+"assets/img/blockSetCurrentTime.1df26d7a.png"},253:function(t,v,_){t.exports=_.p+"assets/img/kuozhanchengxu.bbc2198b.png"},254:function(t,v,_){t.exports=_.p+"assets/img/tampermonkey.xiangqing.493b8d83.png"},255:function(t,v,_){t.exports=_.p+"assets/img/unblockSetPlaybackRate.a436ca66.png"},256:function(t,v,_){t.exports=_.p+"assets/img/allowExperimentFeatures.6ce57063.png"},269:function(t,v,_){"use strict";_.r(v);var r=_(9),a=Object(r.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"q-a"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[t._v("#")]),t._v(" Q&A")]),t._v(" "),v("h2",{attrs:{id:"倍速刷课为啥学习进度没变化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#倍速刷课为啥学习进度没变化"}},[t._v("#")]),t._v(" 倍速刷课为啥学习进度没变化")]),t._v(" "),v("p",[v("code",[t._v("脚本支持视频倍速，但不是针对刷课时而设计的，所以不要指望使用脚本来刷学习进度")])]),t._v(" "),v("p",[t._v("目前大部分学习网站都会有较严谨的学习进度监控逻辑，包括但不限于：")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("ul",[v("li",[t._v("倍速检测（发现使用倍速就不记录学习进度）")]),t._v(" "),v("li",[t._v("后端校验（学习时长跟视频时长有出入就不记录学习进度）")]),t._v(" "),v("li",[t._v("服务器计时（学习端报告学习状态，服务器计算并记录学习进度）")]),t._v(" "),v("li",[t._v("日志审核（人工审查核对学习日志，学时严重不符直接通报开除）")])])]),t._v(" "),v("p",[t._v("罗列这些检测手段只是想告诉你："),v("code",[t._v("倍速学习有风险，出了问题不要怪脚本")])]),t._v(" "),v("p",[t._v("除去刷课，该脚本还可以用来干很多有用的事情，例如：")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("ul",[v("li",[t._v("享受一致的视频网站播放控制体验")]),t._v(" "),v("li",[t._v("电视剧、电影、娱乐节目的倍速快看")]),t._v(" "),v("li",[t._v("视频课程复习阶段的倍速快学")]),t._v(" "),v("li",[t._v("网盘音视频文件的倍速播放")]),t._v(" "),v("li",[t._v("视频旋转平移等画面调整")]),t._v(" "),v("li",[t._v("网页视频精彩画面截图")]),t._v(" "),v("li",[t._v("网页视频画中画播放等")])])]),t._v(" "),v("h2",{attrs:{id:"百度网盘视频无法倍速播放"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#百度网盘视频无法倍速播放"}},[t._v("#")]),t._v(" 百度网盘视频无法倍速播放")]),t._v(" "),v("p",[t._v("这是因为非百度会员使用的非h5标准的播放器进行播放导致的"),v("br"),t._v("\n建议结合"),v("a",{attrs:{href:"https://greasyfork.org/zh-CN/scripts/441747",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://greasyfork.org/zh-CN/scripts/441747"),v("OutboundLink")],1),t._v(" 这个脚本使用，即可实现倍速播放")]),t._v(" "),v("p",[t._v("如果你是百度会员用户，并且结合上面的脚本依然无法进行倍速播放，建议查看下控制台是否报错，并将报错信息反馈给作者")]),t._v(" "),v("h2",{attrs:{id:"倍速播放卡顿、无进度、音画不同步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#倍速播放卡顿、无进度、音画不同步"}},[t._v("#")]),t._v(" 倍速播放卡顿、无进度、音画不同步")]),t._v(" "),v("p",[t._v("一、开启倍速出现播放卡顿的可能原因如下：")]),t._v(" "),v("ul",[v("li",[t._v("1、电脑性能较差，倍速播放占用了大量CPU、GPU资源导致的卡顿")]),t._v(" "),v("li",[t._v("2、接入的网络较差，开启倍速后，视频加载速度跟不上播放速度导致的卡顿")]),t._v(" "),v("li",[t._v("3、视频网站网络带宽有限，传输数据缓慢导致的视频加载卡顿")]),t._v(" "),v("li",[t._v("4、看的是直播视频，没法加载还没录制进去的数据流，请使用1x速度观看")])]),t._v(" "),v("p",[t._v("二、开启倍速后导致无进度，或者播放进度直接归零、又或者画面一直在某个时间点循环，通常来说这是网站自身不希望你倍速播放导致的")]),t._v(" "),v("p",[t._v("可尝试开启："),v("code",[t._v("禁止默认播放进度控制逻辑")]),t._v(" 来解决该问题")]),t._v(" "),v("p",[v("img",{attrs:{src:_(217),alt:"blockSetCurrentTime"}})]),t._v(" "),v("p",[t._v("三、开启倍速后视频看起来音画不同步，这通常是由于网站自身将音视频分开加载导致的")]),t._v(" "),v("p",[t._v("可通过下面的方法减少此类情况的出现：")]),t._v(" "),v("ul",[v("li",[t._v("1、使用性能较好的电脑和确保网络质量处于较佳的状态")]),t._v(" "),v("li",[t._v("2、请勿频繁在高倍播放倍速和正常播放倍速里反复切换")]),t._v(" "),v("li",[t._v("3、尝试调整一下播放进度，可能会触发重新校正音画进度的逻辑")]),t._v(" "),v("li",[t._v("4、这也可能是视频本身就是音画不同步的，这种情况暂时无解")])]),t._v(" "),v("h2",{attrs:{id:"如何支持本地视频文件的倍速播放"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何支持本地视频文件的倍速播放"}},[t._v("#")]),t._v(" 如何支持本地视频文件的倍速播放")]),t._v(" "),v("p",[t._v("在浏览器的扩展程序里，找到你的脚本运行插件（如：Tampermonkey），点击"),v("code",[t._v("详情")]),t._v("，然后开启"),v("code",[t._v("允许访问文件网址")]),t._v(" 即可，具体图示如下：")]),t._v(" "),v("p",[v("img",{attrs:{src:_(253),alt:"扩展程序"}})]),t._v(" "),v("p",[v("img",{attrs:{src:_(254),alt:"插件详情"}})]),t._v(" "),v("p",[t._v("最后将你的本地视频拖放到浏览器里，即可使用插件的快捷键控制视频的播放了")]),t._v(" "),v("h2",{attrs:{id:"开启插件后网站自身的调速失效了"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开启插件后网站自身的调速失效了"}},[t._v("#")]),t._v(" 开启插件后网站自身的调速失效了")]),t._v(" "),v("p",[t._v("这是因为插件接管了默认的调速逻辑，并且禁止了其他逻辑进行调速操作，如果不进行禁用，则会存在多套调速逻辑，这将会导致以下问题：")]),t._v(" "),v("ul",[v("li",[t._v("默认调速逻辑和插件调速逻辑相互覆盖，插件调了2x的速度，而默认逻辑认为此时应该为1x，最终导致同一个视频下倍速调节不断跳跃变换")]),t._v(" "),v("li",[t._v("在多个视频的网站下，播放首个视频时调了速，播放下一个视频时又要重新调速")]),t._v(" "),v("li",[t._v("在不希望你进行调速的网站下，会通过锁定倍速而导致插件无法调速")]),t._v(" "),v("li",[t._v("安装了其他调速插件，调速逻辑相互被抢占，导致调速结果混乱")])]),t._v(" "),v("p",[t._v("基于以上几点原因，所以插件只能默认全盘接管调速逻辑，从而致使其他调速逻辑失效"),v("br"),t._v("\n如果你希望不要全盘接管，插件也提供了选项："),v("code",[t._v("允许默认速度调节逻辑")])]),t._v(" "),v("p",[t._v("允许后就可以调速逻辑共存了，当然也免不了会出现上述相关问题，所以"),v("code",[t._v("不建议允许默认速度调节逻辑")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(255),alt:"unblockSetPlaybackRate"}})]),t._v(" "),v("h2",{attrs:{id:"如何开启实验性功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何开启实验性功能"}},[t._v("#")]),t._v(" 如何开启实验性功能")]),t._v(" "),v("p",[t._v("在有视频媒体的网站下，将会出现如下菜单：")]),t._v(" "),v("p",[v("img",{attrs:{src:_(256),alt:"扩展程序"}})]),t._v(" "),v("p",[t._v("点击菜单即可全局开启实验性功能")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("实验性功能可能造成一些不确定的问题，请谨慎开启。")])]),t._v(" "),v("h2",{attrs:{id:"如何才能使用媒体下载功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何才能使用媒体下载功能"}},[t._v("#")]),t._v(" 如何才能使用媒体下载功能")]),t._v(" "),v("p",[t._v("使用媒体下载功能需要具备以下两个条件：")]),t._v(" "),v("ul",[v("li",[t._v("脚本版本要在 "),v("RouterLink",{attrs:{to:"/home/changeLog.html"}},[t._v("3.6.1")]),t._v(" 以上")],1),t._v(" "),v("li",[t._v("需开启实验性功能")])]),t._v(" "),v("h2",{attrs:{id:"为什么视频跟音频是分开下载的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么视频跟音频是分开下载的"}},[t._v("#")]),t._v(" 为什么视频跟音频是分开下载的")]),t._v(" "),v("p",[t._v("因为与其它下载脚本不同的是：该脚本下载的是媒体的原始数据流，如果原始数据流是音视频分开的，则下载回来的也是分开的。"),v("br"),t._v("\n这也是为什么该脚本可以下载直播流媒体数据的原因")]),t._v(" "),v("p",[t._v("由于是下载原始数据流，这意味着你选了什么画质的视频，则下载到的也是对应画质的媒体数据，\n所以希望下载高清画质媒体文件的，请选高画质进行播放，播放结束后再下载即可")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("注意：不完全是画质越高越好，这得跟你电脑配置和带宽相匹配才行，否则会出现严重的卡顿和大量的内存占用等情况")])]),t._v(" "),v("h2",{attrs:{id:"如何合并下载到的音视频文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何合并下载到的音视频文件"}},[t._v("#")]),t._v(" 如何合并下载到的音视频文件")]),t._v(" "),v("p",[t._v("你可以使用第三方工具进行音视频文件的合并，例如：")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"http://www.pcgeshi.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("格式工厂"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://lv.ulikecam.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("剪影"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://www.adobe.com/products/premiere.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Adobe Premiere Pro"),v("OutboundLink")],1)])]),t._v(" "),v("p",[t._v("这些工具都能进行音视频文件的合并，但也存在其缺点和弊端：")]),t._v(" "),v("ul",[v("li",[t._v("1、需要进行可视化界面操作，效率偏低")]),t._v(" "),v("li",[t._v("2、需了解转换操作过程和配置相关转换参数")]),t._v(" "),v("li",[t._v("3、转换过程需要占用较高的CPU和GPU资源")]),t._v(" "),v("li",[t._v("4、转换后文件体积和画质发生一定的改变")]),t._v(" "),v("li",[t._v("5、部分工具需付费授权才可使用")]),t._v(" "),v("li",[t._v("6、部分工具存在广告弹窗等烦人行为")])]),t._v(" "),v("p",[t._v("总的来说，这些第三方工具有其更擅长的领域，如果只是单纯的音视频合并，往往不是那么合适和方便")]),t._v(" "),v("p",[t._v("为了简化下载好的音视频文件合并过程，作者发布了"),v("a",{attrs:{href:"https://github.com/xxxily/ffmpeg-script",target:"_blank",rel:"noopener noreferrer"}},[t._v("ffmpeg-script"),v("OutboundLink")],1),t._v(", 该脚本可实现：")]),t._v(" "),v("ul",[v("li",[t._v("支持批量处理")]),t._v(" "),v("li",[t._v("不重新编码，快速处理")]),t._v(" "),v("li",[t._v("自动检测是否存在相关文件")]),t._v(" "),v("li",[t._v("自动跳过已处理完成的文件")]),t._v(" "),v("li",[t._v("可随时终止，无需担心出错")]),t._v(" "),v("li",[t._v("只需一条命令，简单快捷")])]),t._v(" "),v("p",[t._v("具体的使用说明，参见："),v("a",{attrs:{href:"https://github.com/xxxily/ffmpeg-script",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xxxily/ffmpeg-script"),v("OutboundLink")],1)]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("脚本是免费、开源、跨平台的，不存在任何限制，可放心食用")])]),t._v(" "),v("h2",{attrs:{id:"为什么视频截图不同网站表现不一致"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么视频截图不同网站表现不一致"}},[t._v("#")]),t._v(" 为什么视频截图不同网站表现不一致")]),t._v(" "),v("p",[t._v("这是因为受 "),v("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("CORS"),v("OutboundLink")],1),t._v(" 策略的影响，部分视频画面截取后，数据没法被直接下载回来")]),t._v(" "),v("p",[t._v("当出现CORS受限后，只能通过新开弹窗的方式将画面截取下来，这个时候只能手动对截图结果进行保存或复制了")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("如果截图后能自动下载保存到本地文件夹，这个时候脚本也会尝试自动将截图写入到你的剪贴板里，从而允许你直接将截图粘贴到聊天窗口或word文档中")])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("如果你按了截图快捷键，既没有自动下载，也没新开窗口，这个时候很有可能是你阻止了新开弹窗，导致截图功能异常，只需要设置允许当前网站的弹窗操作即可")])]),t._v(" "),v("h2",{attrs:{id:"快捷键太多如何禁用不需要的快捷键"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快捷键太多如何禁用不需要的快捷键"}},[t._v("#")]),t._v(" 快捷键太多如何禁用不需要的快捷键")]),t._v(" "),v("p",[t._v("非常抱歉，到目前为止插件还未提供禁用快捷键的控制选项，等后续想好了可视化配置方案后会加上，但可能遥遥无期，请不要寄予过高的期望，因为作者空闲时间有限、精力有限……")]),t._v(" "),v("p",[t._v("如果你非常需要这个功能，而又有一定编程基础，恭喜你，插件是完全开源的，你可以fork一份，加上自己的逻辑即可")]),t._v(" "),v("p",[t._v("同时补充一句："),v("code",[t._v("鄙视那种一言不合，因为没有他们想要的功能就给插件差评的人，鄙视那种不尊重他人辛劳付出，随便恶言相向的人")])]),t._v(" "),v("br"),t._v(" "),v("br"),t._v(" "),v("br"),t._v(" "),v("br"),t._v(" "),v("Vssue",{attrs:{title:t.$title}})],1)}),[],!1,null,null,null);v.default=a.exports}}]);