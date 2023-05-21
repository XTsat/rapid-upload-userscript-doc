import{_ as s,r as o,o as i,c as l,a as e,d as a,b as t,f as n}from"./app-0162c8ac.js";const d={},p=n('<h1 id="错误代码-网页工具" tabindex="-1"><a class="header-anchor" href="#错误代码-网页工具" aria-hidden="true">#</a> 错误代码(网页工具)</h1><ul><li>以下列表 #错误码 表示网页版工具转存秒传返回的errno</li></ul><h2 id="认证失败-6" tabindex="-1"><a class="header-anchor" href="#认证失败-6" aria-hidden="true">#</a> 认证失败(#-6)</h2><p>请看转存页面最上方的几行说明</p><h2 id="路径下存在同名文件-文件夹-8" tabindex="-1"><a class="header-anchor" href="#路径下存在同名文件-文件夹-8" aria-hidden="true">#</a> 路径下存在同名文件/文件夹(#-8)</h2><p>尝试修改 &quot;转存路径&quot; 再转存</p><h2 id="网盘容量已满-20-10" tabindex="-1"><a class="header-anchor" href="#网盘容量已满-20-10" aria-hidden="true">#</a> 网盘容量已满(#20/#-10)</h2><p>即网盘容量不足, 请尝试删除部分网盘文件或扩容</p><h2 id="转存路径含有非法字符-7" tabindex="-1"><a class="header-anchor" href="#转存路径含有非法字符-7" aria-hidden="true">#</a> 转存路径含有非法字符(#-7)</h2><p>请修改 <strong>转存路径</strong> 或 秒传链接内的<strong>文件名部分</strong> :</p><p><img src="https://bj.bcebos.com/baidu-rmb-video-cover-1/58f3471f9b0611d00a532380aa42b806.png" alt="图例"></p><h2 id="秒传未生效-404-31190" tabindex="-1"><a class="header-anchor" href="#秒传未生效-404-31190" aria-hidden="true">#</a> 秒传未生效(#404/#31190)</h2><h4 id="秒传转存者" tabindex="-1"><a class="header-anchor" href="#秒传转存者" aria-hidden="true">#</a> 秒传转存者</h4><ol><li>秒传可能延迟生效, 可等待一段时间(1-24 小时左右)再重试</li><li>将下方 <strong>秒传分享者</strong> 部分反馈给分享者(此未生效秒传链接的<strong>发布者</strong>)</li></ol><h4 id="秒传分享者" tabindex="-1"><a class="header-anchor" href="#秒传分享者" aria-hidden="true">#</a> 秒传分享者</h4>',15),c=n("<li><p>需要<strong>上传过</strong>秒传对应的文件到度盘且任意网盘账号内保留一份文件, 才能使秒传生效</p></li><li><p>秒传可能延迟生效, 可等待一段时间(1-24 小时左右)再重试, 若不想等待或等待后依旧无效, 可尝试重传(3.)</p></li><li><p>使用 <strong>度盘网页端</strong> / <strong>度盘客户端</strong> 重传文件, 再手动转存测试秒传有效性</p></li><li><p>(<strong>重要</strong>) 使用脚本 <strong>2.7.3</strong> 版本生成秒传, <strong>大概率</strong> 生成错误秒传, 导致转存报错#404, 若出现该情况请 <strong>更新脚本</strong> 并 <strong>重新生成</strong></p></li><li><p>(<strong>重要</strong>) 使用脚本 <strong>低于2.0.11</strong> 版本生成秒传, 小概率 生成错误秒传, 导致转存报错#404, 若出现该情况请 <strong>更新脚本</strong> 并 <strong>重新生成</strong></p></li>",5),h=e("strong",null,"重要",-1),g={href:"https://github.com/qjfoidnh/BaiduPCS-Go",target:"_blank",rel:"noopener noreferrer"},u=e("strong",null,"永久不生效",-1),_=n(`<li><p>(<strong>重要</strong>) 标准码格式的秒传链接可以简化, 例如:</p><div class="language-plain" data-ext="plain"><pre class="language-plain"><code>D5AABEFC3290F7A3C09912228B136D0C#821A9F0D27FCD19C80474D2140ED2D85#6467659#test.exe
</code></pre></div><p>可以简化为 (删除第二段md5, 可以正常转存):</p><div class="language-plain" data-ext="plain"><pre class="language-plain"><code>D5AABEFC3290F7A3C09912228B136D0C#6467659#test.exe
</code></pre></div><p>但不能简化为 (删除第一段md5, 会导致上述报错, 无法转存):</p><div class="language-plain" data-ext="plain"><pre class="language-plain"><code>821A9F0D27FCD19C80474D2140ED2D85#6467659#test.exe
</code></pre></div></li>`,1),D=n(`<hr><h2 id="服务器错误-31039" tabindex="-1"><a class="header-anchor" href="#服务器错误-31039" aria-hidden="true">#</a> 服务器错误(#31039)</h2><ol><li><p>尝试修改输入的秒传链接中的文件名<strong>后缀部分</strong>再转存, 例如</p><div class="language-plain" data-ext="plain"><pre class="language-plain"><code>D5AABEFC3290F7A3C09912228B136D0C#821A9F0D27FCD19C80474D2140ED2D85#6467659#test.rar
</code></pre></div><p>修改后缀大/小写:</p><div class="language-plain" data-ext="plain"><pre class="language-plain"><code>D5AABEFC3290F7A3C09912228B136D0C#821A9F0D27FCD19C80474D2140ED2D85#6467659#test.RAR
</code></pre></div><p>或修改为任意的其他后缀:</p><div class="language-plain" data-ext="plain"><pre class="language-plain"><code>D5AABEFC3290F7A3C09912228B136D0C#821A9F0D27FCD19C80474D2140ED2D85#6467659#test.7z
</code></pre></div></li><li><p>尝试使用国内ip访问度盘</p></li></ol><h2 id="未知错误" tabindex="-1"><a class="header-anchor" href="#未知错误" aria-hidden="true">#</a> 未知错误(#???)</h2>`,4),C={href:"https://github.com/mengzonefire/baidupan-rapidupload/issues",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,'* 反馈页内点击右上角 "New issue" 按钮创建反馈',-1);function x(b,A){const r=o("ExternalLinkIcon");return i(),l("div",null,[p,e("ol",null,[c,e("li",null,[e("p",null,[a("("),h,a(") 22.10.24开始, 由于百度接口改动, 使用 "),e("a",g,[a("BaiduPCS-Go"),t(r)]),a(" 等第三方工具上传的文件的秒传"),u,a(", 出现此问题请改用官方的 度盘网页端 / 度盘客户端 上传文件")])]),_]),D,e("p",null,[a("若此文档内没有找到对应的错误码errno, 请前往 "),e("a",C,[a("反馈页"),t(r)]),a(" 反馈: 1.输入的秒传链接 2.错误码errno")]),f])}const v=s(d,[["render",x],["__file","错误代码(网页工具).html.vue"]]);export{v as default};
