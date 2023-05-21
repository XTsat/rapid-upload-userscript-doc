import{_ as a,o as e,c as d,f as n}from"./app-0162c8ac.js";const i={},c=n(`<h1 id="秒传格式" tabindex="-1"><a class="header-anchor" href="#秒传格式" aria-hidden="true">#</a> 秒传格式</h1><h2 id="梦姬标准-标准码" tabindex="-1"><a class="header-anchor" href="#梦姬标准-标准码" aria-hidden="true">#</a> 梦姬标准/标准码</h2><div class="language-plain" data-ext="plain"><pre class="language-plain"><code>格式: [md5]#[md5s(可省略)]#[文件大小(byte)]#[文件名] (md5和md5s是字母数字组成的32个字符)
示例:
D5AABEFC3290F7A3C09912228B136D0C#821A9F0D27FCD19C80474D2140ED2D85#6467659#test.exe
或
d5aabefc3290f7a3c09912228b136d0c#821a9f0d27fcd19c80474d2140ed2d85#6467659#test.exe
或
d5aabefc3290f7a3c09912228b136d0c#6467659#test.exe
</code></pre></div><h2 id="pandl-格式" tabindex="-1"><a class="header-anchor" href="#pandl-格式" aria-hidden="true">#</a> PanDL 格式</h2><div class="language-plain" data-ext="plain"><pre class="language-plain"><code>bdpan://dGVzdC5leGV8NjQ2NzY1OXxENUFBQkVGQzMyOTBGN0EzQzA5OTEyMjI4QjEzNkQwQ3w4MjFBOUYwRDI3RkNEMTlDODA0NzREMjE0MEVEMkQ4NQ==
</code></pre></div><h2 id="pcs-go-格式" tabindex="-1"><a class="header-anchor" href="#pcs-go-格式" aria-hidden="true">#</a> PCS-GO 格式</h2><div class="language-plain" data-ext="plain"><pre class="language-plain"><code>BaiduPCS-Go rapidupload -length=6467659 -md5=D5AABEFC3290F7A3C09912228B136D0C -slicemd5=821A9F0D27FCD19C80474D2140ED2D85 &quot;/test.exe&quot;
</code></pre></div><h2 id="游侠格式-bdlink" tabindex="-1"><a class="header-anchor" href="#游侠格式-bdlink" aria-hidden="true">#</a> 游侠格式(BDLINK......):</h2><div class="language-plain" data-ext="plain"><pre class="language-plain"><code>BDLINKQkRGUwAHAAAA0/AgXQEAAABvU6INa3SryWsF1pGpw7ALjjjB7lz4B3zYkhccg7C38ToAAABXAG8AcgBsAGQALgBXAGEAcgAuAFoALgAyADAAMQAzAC4AVQBuAHIAYQB0AGUAZAAuAEMAdQB0
</code></pre></div><h2 id="一键秒传链接-https-pan-baidu-com-bdlink" tabindex="-1"><a class="header-anchor" href="#一键秒传链接-https-pan-baidu-com-bdlink" aria-hidden="true">#</a> 一键秒传链接(https://pan.baidu.com/#bdlink=......):</h2><p>* 秒传脚本≥2.3.5 秒传网页版≥0.9 支持输入(输入转存窗口后会自动转换为上述的其他格式)</p><div class="language-plain" data-ext="plain"><pre class="language-plain"><code>https://pan.baidu.com/#bdlink=ZDVhYWJlZmMzMjkwZjdhM2MwOTkxMjIyOGIxMzZkMGMjODIxYTlmMGQyN2ZjZDE5YzgwNDc0ZDIxNDBlZDJkODUjNjQ2NzY1OSMvdGVzdC5leGU=
</code></pre></div>`,12),l=[c];function t(s,r){return e(),d("div",null,l)}const p=a(i,[["render",t],["__file","秒传格式.html.vue"]]);export{p as default};
