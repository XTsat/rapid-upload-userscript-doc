# PCS-Go 客户端

## 下载

前往 [蓝奏云](https://wwe.lanzoui.com/b01ufs7eb) 密码: 2233 下载 win 平台的可执行文件, 单文件免安装

\*若需要 更新说明/更新版本/其他平台, 请前往 [项目主页](https://github.com/qjfoidnh/BaiduPCS-Go/releases)

## 注意事项

- 该客户端无交互界面(GUI), 仅有命令行界面(CMD), 存在一定使用门槛.
- 该客户端的命令行界面中 Ctrl+C 为退出, 鼠标右键为复制/粘贴.
- 该客户端支持无会员上传大于 4G 的文件.

## 登录

1. 账号密码登录: 输入 login 命令, 回车, 然后输入对应信息即可(输入密码时是不显示的, 直接回车即可)
2. bduss 登录(推荐): 如何获取 bduss 请自行百度, 输入命令 login -bduss=, 然后复制你的 bduss, 右键粘贴 (粘贴时界面可能会刷新不出来, 此时按一下空格即可), 然后回车即可登录

## 上传

- 输入命令 upload 或 u 即可上传文件/文件夹,

1. (可选)添加-p 1 参数(单线程上传), 可避免一些秒传不生效的情况, 但会导致上传速度变慢
2. 若上传过程中提示 400 网络错误, 请添加-retry 100 参数, 报错后可自动继续上传.
3. 添加--nosplit 参数, 可保证秒传生效, 但只能上传小于 1.9G 文件

- 命令格式: u [参数] "本地路径" "网盘路径" (注意空格分隔)

\*拖拽文件到窗口, 可直接粘贴本地路径

- 命令示例:

```plain :no-line-numbers
u -p 1 -retry 100 "D:\download" "/"
```

或:

```plain :no-line-numbers
u --nosplit -retry 100 "D:\download" "/"
```

(保证秒传生效, 单文件最大 1.9G, 超过则报错"413 Request Entity Too Large", 以下示例同理) #将 download 文件夹上传到网盘根目录

```plain :no-line-numbers
u -p 1 -retry 100 "D:\download\test.7z" "/测试"
```

\#将 test.7z 文件上传到网盘的"测试"文件夹内

```plain :no-line-numbers
u -p 1 -retry 100 "D:\download" "D:\download\test.7z" "/测试/测试 2"
```

\#将 "download 文件夹" 和 "test.7z 文件" 上传到网盘的 "/测试/测试 2" 路径下

(上传过程中界面可能会卡住, 按一下空格即可刷新界面)

- 上传完成后, 使用秒传脚本或本地生成工具(推荐)生成秒传即可, 通过此方法上传的文件一般秒传立即生效, 若无效可等待几分钟再重试
