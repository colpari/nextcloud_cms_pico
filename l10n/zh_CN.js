OC.L10N.register(
    "cms_pico",
    {
    "Copy" : "复制",
    "Confirm website deletion" : "确认网站删除",
    "This operation will delete the website \"{name}\". However, all of its contents will still be available in your Nextcloud." : "此操作将删除网站“ {name}”。 但是，其所有内容仍将在您的 Nextcloud 中可用。",
    "Choose website directory" : "选择网站目录",
    "A unexpected error occured while performing this action. Please check Nextcloud's logs." : "执行此操作时发生意外错误。请检查Nextcloud的日志。",
    "Abort" : "中止",
    "Save" : "保存",
    "The requested website could not be found on the server. Maybe the website was deleted?" : "请求的网站无法在服务器上找到。可能网站已被删除？",
    "The file and directory structure of this website appears to be broken and thus could not be accessed." : "该网站的文件和目录结构似乎已损坏，因此无法访问。",
    "You don't have access to this private website. Maybe the share was deleted or has expired?" : "您没有权限访问此私有网站。共享可能已被删除或过期了？",
    "This website is hosted on a non-local storage and thus could not be accessed." : "此网站托管在非本地存储上，因此无法访问。",
    "This website uses a theme that could not be found on the server and thus could not be built." : "此网站使用了在服务器上无法找到的主题，因此无法被构建。",
    "This website uses a incompatible theme and thus could not be built." : "此网站使用了不兼容的主题，因此无法被构建。",
    "The requested website page could not be found on the server. Maybe the page was deleted?" : "在服务器上找不到请求的网站页面。 页面也许被删除了？",
    "You don't have access to this website page. Maybe the share was deleted or has expired?" : "您无权访问此网站页面。 共享是否已删除或已过期？",
    "The requested website page could not be built, so that the server was unable to complete your request." : "无法构建请求的网站页面，因此服务器无法完成您的请求。",
    "The file and directory structure of this website appears to be broken und thus could not be accessed." : "此网站的文件和目录结构似乎已损坏，因而无法访问。",
    "The requested website asset could not be found on the server. Maybe the asset was deleted?" : "请求的网站资产无法在服务器上找到。可能资产已被删除？",
    "You don't have access to this website asset. Maybe the share was deleted or has expired?" : "您没有权限访问此网站的资产。共享可能已被删除或过期了？",
    "Plugin not found." : "未找到插件。",
    "Plugin exists already." : "插件已存在。",
    "Template not found." : "未找到模板。",
    "Template exists already." : "模板已存在。",
    "Theme not found." : "主题未找到。",
    "Theme exists already." : "主题已存在。",
    "Website exists." : "网站已存在。",
    "No permission." : "没有权限",
    "Website not found." : "网站未找到。",
    "Local (unencrypted)" : "本地（未加密）",
    "Location" : "地点",
    "The name of the website must be longer." : "网站的名称必须更长。",
    "The name of the website is too long." : "网站名称太长。",
    "The identifier of the website must be longer." : "网站的标识符必须更长。",
    "The identifier of the website is too long." : "网站的标识符太长。",
    "The identifier of the website can only contain lowercase alpha numeric chars." : "网站的标识符只能包含小写字母数字字符。",
    "The path of the website is invalid." : "网站的路径无效。",
    "The website's path is stored on a non-local storage." : "网站的路径存放在非本地存储上。",
    "Parent folder of the website's path not found." : "无法找到网站路径的父文件夹。",
    "Failed to enable Pico CMS for Nextcloud: Couldn't find \"%s\". Make sure to install the app's dependencies by executing `composer install` in the app's install directory below \"%s\". Then try again enabling Pico CMS for Nextcloud." : "无法启用Pico CMS for Nextcloud：无法找到 \"%s\"。请确保通过在 \"%s\" 下的应用安装目录执行 `composer install` 来安装应用的依赖，然后再次尝试启用Pico CMS for Nextcloud。",
    "Failed to enable Pico CMS for Nextcloud: The webserver has no permission to create files and folders below \"%s\". Make sure to give the webserver write access to this directory by changing its permissions and ownership to the same as of your \"%s\" directory. Then try again enabling Pico CMS for Nextcloud." : "无法为 Nextcloud 启用 Pico CMS：网页服务器无权创建“%s”以下的文件和文件夹。 通过将其权限和所有权更改为与您的“%s”目录相同的权限，确保授予网页服务器对此目录的写访问权限。 然后，再次尝试为 Nextcloud 启用 Pico CMS。",
    "Pico CMS" : "Pico CMS",
    "Create and publish your own websites - with Pico CMS for Nextcloud!" : "创建和发布您自己的网站 - 使用Pico CMS for Nextcloud！",
    "[Pico CMS for Nextcloud](https://github.com/nextcloud/cms_pico) combines the power of [**Pico**](http://picocms.org/) and [**Nextcloud**](https://nextcloud.com/) to create simple, secure, shareable and amazingly powerful websites with just a few clicks. Pico is a stupidly simple, blazing fast, flat file CMS - making the web easy.\n\n* Start a blog\n* Share your resume with the world\n* Create a plan for world domination and only share with the right friends\n* Build a knowledge base and let the smart ones among your colleagues help out\n\nInstalling Pico CMS for Nextcloud allows your users to create and manage their own websites. Creating a new page with Pico is no more than creating a simple text file in a users' Nextcloud files. No config is required, no utterly complex management interfaces - just files. It's the perfect match with Nextcloud. Secure Sharing, Collaboration, Access Control - not just for your files, but also your websites, all made possible by Pico CMS for Nextcloud! Breaking the boundaries between your Mobile & Desktop devices and your Server.\n\nWebsites will be accessible through URLs like `https://cloud.example.com/sites/my_site/` and consist of just a bunch of `.md` text files in a user's Nextcloud files. `.md` stands for [**Markdown**](https://www.markdownguide.org/) - a super simple and intuitive markup to create headings, paragraphs, text formatting, lists, images and links. But don't despair - you don't have to learn yet another language if you don't want to. Consider enabling Nextcloud's [Text](https://apps.nextcloud.com/apps/text) or [Markdown Editor](https://apps.nextcloud.com/apps/files_markdown) apps to make easy things stupidly simple. But what about meta data like a page's title or release date? Guess right, it's all in one place. At the top of your Markdown files you can place a block with such meta data - called the [**YAML**](https://en.wikipedia.org/wiki/YAML) Front Matter. Creating websites can't be easier…\n\nBut that wasn't everything… Pico CMS for Nextcloud is highly customizable. You can change Pico’s appearance by using custom themes and add new functionality by using custom plugins. For security reasons users can neither add custom themes nor plugins on their own - but as an admin you can. Plugins and themes aren’t just new \"skins\" or \"widgets\", the underlying technologies are powerful frameworks you can leverage to make your users' websites truly unique. However, with great power comes great responsibility. Pico CMS for Nextcloud does its best to prevent users from including scripts into websites, since this might bear security risks (so called \"Cross Scripting\"). Since this risk doesn't apply to Pico itself, 3rd-party developers of plugins and themes might not be aware of this issue - so be careful when installing custom plugins and themes.\n\nYou want to learn more about Pico CMS for Nextcloud? Easy! Just download and enable the app from [Nextcloud's App Store](https://apps.nextcloud.com/apps/cms_pico) and create your first personal website using the \"sample_pico\" template. Pico's sample contents will explain all you need to know…" : "[Pico CMS for Nextcloud](https://github.com/nextcloud/cms_pico) combines the power of [**Pico**](http://picocms.org/) and [**Nextcloud**](https://nextcloud.com/) to create simple, secure, shareable and amazingly powerful websites with just a few clicks. Pico is a stupidly simple, blazing fast, flat file CMS - making the web easy.\n\n* Start a blog\n* Share your resume with the world\n* Create a plan for world domination and only share with the right friends\n* Build a knowledge base and let the smart ones among your colleagues help out\n\nInstalling Pico CMS for Nextcloud allows your users to create and manage their own websites. Creating a new page with Pico is no more than creating a simple text file in a users' Nextcloud files. No config is required, no utterly complex management interfaces - just files. It's the perfect match with Nextcloud. Secure Sharing, Collaboration, Access Control - not just for your files, but also your websites, all made possible by Pico CMS for Nextcloud! Breaking the boundaries between your Mobile & Desktop devices and your Server.\n\nWebsites will be accessible through URLs like `https://cloud.example.com/sites/my_site/` and consist of just a bunch of `.md` text files in a user's Nextcloud files. `.md` stands for [**Markdown**](https://www.markdownguide.org/) - a super simple and intuitive markup to create headings, paragraphs, text formatting, lists, images and links. But don't despair - you don't have to learn yet another language if you don't want to. Consider enabling Nextcloud's [Text](https://apps.nextcloud.com/apps/text) or [Markdown Editor](https://apps.nextcloud.com/apps/files_markdown) apps to make easy things stupidly simple. But what about meta data like a page's title or release date? Guess right, it's all in one place. At the top of your Markdown files you can place a block with such meta data - called the [**YAML**](https://en.wikipedia.org/wiki/YAML) Front Matter. Creating websites can't be easier…\n\nBut that wasn't everything… Pico CMS for Nextcloud is highly customizable. You can change Pico’s appearance by using custom themes and add new functionality by using custom plugins. For security reasons users can neither add custom themes nor plugins on their own - but as an admin you can. Plugins and themes aren’t just new \"skins\" or \"widgets\", the underlying technologies are powerful frameworks you can leverage to make your users' websites truly unique. However, with great power comes great responsibility. Pico CMS for Nextcloud does its best to prevent users from including scripts into websites, since this might bear security risks (so called \"Cross Scripting\"). Since this risk doesn't apply to Pico itself, 3rd-party developers of plugins and themes might not be aware of this issue - so be careful when installing custom plugins and themes.\n\nYou want to learn more about Pico CMS for Nextcloud? Easy! Just download and enable the app from [Nextcloud's App Store](https://apps.nextcloud.com/apps/cms_pico) and create your first personal website using the \"sample_pico\" template. Pico's sample contents will explain all you need to know…",
    "Access forbidden" : "访问被禁止",
    "Back to %s" : "返回 %s",
    "Not found" : "未找到",
    "Internal Server Error" : "内部服务器错误",
    "The server was unable to complete your request." : "服务器无法完成您的请求。",
    "If this happens again, please send the technical details below to the server administrator." : "如果再次发生这种情况，请将下面的技术详细信息发送给服务器管理员。",
    "Remote Address: %s" : "远程地址：%s",
    "Request ID: %s" : "请求 ID：%s",
    "More details can be found in the server log." : "更多细节可以在服务器日志中找到。",
    "Technical details" : "技术细节",
    "Type: %s" : "类型：%s",
    "Code: %s" : "代码：%s",
    "Message: %s" : "消息：%s",
    "File: %s" : "文件：%s",
    "Line: %s" : "行：%s",
    "Trace" : "追踪",
    "Custom themes" : "自定义主题",
    "Add custom themes for greater individuality and style." : "添加自定义主题以增强个性和风格。",
    "Pico CMS for Nextcloud allows you to add custom themes for some greater individuality and style. However, for security reasons, users can't add custom themes on their own. Before you can add a new custom theme using the \"Add custom theme\" button below, you'll have to upload all of its files to the data folder of your Nextcloud instance. After uploading the theme it will show up in the form below to actually allow users to use the custom theme." : "Pico CMS for Nextcloud 允许您添加自定义主题，以增强个性和风格。 但是，出于安全原因，用户不能自己添加自定义主题。 在使用下面的“添加自定义主题”按钮添加新的自定义主题之前，必须将其所有文件上传到 Nextcloud 实例的数据文件夹中。 上载主题之后，它将显示在下面的表格中，以实际允许用户使用自定义主题。",
    "Before adding a new custom theme, upload all of the theme's files to a new folder in the following directory:" : "在添加新的自定义主题前，将所有的主题文件上传到以下目录的一个新文件夹中：",
    "Loading themes…" : "加载主题中...",
    "Add custom theme" : "添加自定义主题",
    "Reload themes list" : "重新加载主题列表",
    "Compatible theme." : "兼容的主题。",
    "System theme" : "系统主题",
    "Copy system theme" : "复制系统主题",
    "Custom theme" : "自定义主题",
    "Reload custom theme" : "重新加载自定义主题",
    "Copy custom theme" : "复制自定义主题",
    "Delete custom theme" : "删除自定义主题",
    "Base theme" : "基础主题",
    "Theme name" : "主题名称",
    "Error" : "错误",
    "Custom plugins" : "自定义插件",
    "Add custom plugins to reach for Pico's full potential." : "添加自定义插件以充分发挥Pico的潜力。",
    "Pico CMS for Nextcloud allows you to add custom plugins to really utilize all of Pico's power. Plugins work on a global basis, i.e. adding a custom plugin will enable it for all of your users' websites. Before adding a new custom plugin using the \"Add custom plugin\" button below, you must upload all of the plugin's files to the data folder of your Nextcloud instance. After uploading the plugin it will show up in the form below to actually enable it." : "Pico CMS for Nextcloud 允许您添加自定义插件，以真正利用Pico的全部功能。 插件在全球范围内起作用，即添加自定义插件将为您所有用户的网站启用。 使用下面的“添加自定义插件”按钮添加新的自定义插件之前，您必须将所有插件文件上传到 Nextcloud 实例的数据文件夹中。 上传插件后，它将显示在下面的表单中以实际启用它。",
    "Before adding a new custom plugin, upload all of the plugin's files to a new folder in the following directory. Please note that the name of this new folder must strictly match the name of the plugin, otherwise Pico will refuse to enable the plugin." : "在添加新的自定义插件之前，将所有插件文件上传到以下目录中的新文件夹。 请注意，此新文件夹的名称必须严格与插件名称匹配，否则 Pico 将拒绝启用插件。",
    "Loading plugins…" : "插件加载中...",
    "Add custom plugin" : "添加自定义插件",
    "Reload plugins list" : "重新加载插件列表",
    "Compatible plugin." : "兼容的插件。",
    "System plugin" : "系统插件",
    "Custom plugin" : "自定义插件",
    "Reload custom plugin" : "重新加载自定义的插件",
    "Delete custom plugin" : "删除自定义插件",
    "Custom templates" : "自定义模板",
    "Make it easier for users to create new websites." : "使用户更容易创建新网站。",
    "Creating new websites can be hard - where to even start? Custom templates act as a starting point for users to create a new website using Pico CMS for Nextcloud. Before adding a new custom template using the \"Add custom template\" button below, you must upload all of the template's files to the data folder of your Nextcloud instance. After uploading the template it will show up in the form below to actually add it to the \"Create a new website\" form of your users." : "创建新网站可能很难 - 从哪里开始？ 自定义模板是用户使用 Pico CMS for Nextcloud 创建新网站的起点。 在使用下面的“添加自定义模板”按钮添加新的自定义模板之前，必须将模板的所有文件上传到 Nextcloud 实例的数据文件夹。 上载模板后，它将显示在下面的表单中，以将其实际添加到用户的“创建新网站”表单中。",
    "Before adding a new custom template, upload all of the template's files to a new folder in the following directory:" : "在添加新的自定义模板之前，请将模板的所有文件上传到以下目录中的新文件夹：",
    "Loading templates…" : "加载模板中...",
    "Add custom template" : "添加自定义模板",
    "Reload templates list" : "重新加载模板列表",
    "Compatible template." : "兼容的模板。",
    "System template" : "系统模板",
    "Copy system template" : "复制系统模板",
    "Custom template" : "自定义模板",
    "Copy custom template" : "复制自定义的模板",
    "Delete custom template" : "删除自定义模板",
    "Base template" : "基础模板",
    "Template name" : "模板名称",
    "Settings" : "设置",
    "Change Pico CMS for Nextcloud's behavior and manage optional features." : "改变Pico CMS for Nextcloud的行为并管理可选的功能。",
    "Limit to groups" : "限制于分组",
    "Loading groups…" : "分组加载中...",
    "If you wish not to enable all of your users to create personal websites, you can limit Pico CMS for Nextcloud to certain groups. Select the groups you want to limit access to. If you leave this field empty, usage isn't limited. Revoking access for certain groups won't delete any of a user's websites, however, they get inaccessible." : "如果您不想让所有用户创建个人网站，则可以将 Nextcloud 的 Pico CMS 限制为某些组。 选择您要限制访问的组。 如果将此字段留空，则使用不受限制。 撤消某些用户组的访问权限不会删除用户的任何网站，但是它们无法访问。",
    "Configure your webserver" : "配置您的网络服务器",
    "Enable Pico CMS for Nextcloud's full potential by configuring your webserver appropriately." : "通过正确配置您的web服务器以充分发挥Pico CMS for Nextcloud的潜力。",
    "Depending on your webserver's configuration, users can access their websites using different URLs. By default, users can access their websites using Pico CMS for Nextcloud's full application URL. However, these URLs are pretty long and thus not very user-friendly. For this reason, Pico CMS for Nextcloud also supports shortened URLs utilizing the virtual \"sites/\" folder. However, using this feature requires some additional webserver configuration. If you're using the Apache webserver, try one of the first two examples shown below. If you're rather using the nginx webserver, try one of last two examples. If you don't really understand what's going on, contact your server administrator and send him the information below. If your server administrator tells you this isn't possible, don't despair - you can still use Pico CMS for Nextcloud's full application URLs, they always work out-of-the-box." : "根据您的网络服务器的配置，用户可以使用不同的 URL 访问其网站。 默认情况下，用户可以使用 Pico CMS 访问 Nextcloud 的完整应用程序URL的网站。 但是，这些URL相当长，因此对用户不太友好。 因此，用于 Nextcloud 的 Pico CMS 还支持利用虚拟 ”sites/” 文件夹缩短 URL。 但是，使用此功能需要一些其他的网页服务器配置。 如果您使用的是 Apache 网页服务器，请尝试下面显示的前两个示例之一。 如果您要使用 Nginx 网页服务器，请尝试最后两个示例之一。 如果您真的不了解发生了什么，请与您的服务器管理员联系并向他发送以下信息。 如果您的服务器管理员告诉您不可能做到这一点，请不要失望 - 您仍然可以将 Pico CMS 用于 Nextcloud 的完整应用程序 URL，它们始终是开箱即用的。",
    "Enable short website URLs" : "启用短网站URL",
    "Full application URLs" : "完整的应用URL",
    "Short website URLs" : "简短的网站网址",
    "After you've configured your webserver to enable shortened URLs, you should select the corresponding option above to let your users know about this feature. Don't enable this option if you haven't configured the virtual \"sites/\" folder yet using one of the configuration examples shown below." : "将网络服务器配置为启用缩短的 URL 后，应选择上面的相应选项，以使您的用户了解此功能。 如果尚未使用下面显示的配置示例之一配置虚拟 “ sites/” 文件夹，则不要启用此选项。",
    "Using Apache's mod_proxy" : "使用Apache的mod_proxy",
    "Your users' website URLs will look like the following:" : "您用户的网站 URL 如下所示：",
    "Copy the config snippet above to Nextcloud's <VirtualHost …> section of your apache.conf. Before doing so you must enable both Apache's mod_proxy and mod_proxy_http modules. Otherwise your webserver will either refuse to (re)start or yield a 500 Internal Server Error." : "将上面的配置片段复制到 apache.conf 的 Nextcloud 的<VirtualHost …>部分。 在这样做之前，您必须同时启用 Apache 的 mod_proxy 和 mod_proxy_http 模块。 否则，您的网络服务器将拒绝（重新）启动或产生500 内部服务器错误。",
    "Using Apache's mod_rewrite" : "使用Apache的mod_rewrite",
    "Before copying the config snippet above to Nextcloud's <VirtualHost …> section of your apache.conf, make sure to enable Apache's mod_rewrite module. Otherwise your webserver will refuse to (re)start or yield a 500 Internal Server Error. Please note that this config won't actually let you use shortened URLs, it just redirects users from shortened URLs to the site's full URL. Thus you should prefer the solution utilizing mod_proxy shown above." : "在将上面的配置片段复制到 apache.conf 的 Nextcloud 的<VirtualHost …>部分之前，请确保启用 Apache 的 mod_rewrite 模块。 否则，您的网络服务器将拒绝（重新）启动或产生500 内部服务器错误。 请注意，此配置实际上不会允许您使用缩短的 URL，而只是将用户从缩短的 URL 重定向到站点的完整 URL。 因此，您应该更喜欢使用上面显示的 mod_proxy 的解决方案。",
    "Using nginx's proxy_pass" : "使用nginx的proxy_pass",
    "Copy the config snippet above to Nextcloud's server { … } section of your nginx.conf. Before doing so you must enable nginx's ngx_http_proxy_module module. Otherwise your webserver will either refuse to (re)start or yield a 500 Internal Server Error." : "将上面的配置片段复制到 nginx.conf 的 Nextcloud 的 server {…} 部分。 在这样做之前，您必须启用 nginx 的 ngx_http_proxy_module 模块。 否则，您的网络服务器将拒绝（重新）启动或产生 500 内部服务器错误。",
    "Using nginx's rewrite" : "使用nginx的rewrite",
    "Simply copy the config snippet above to Nextcloud's server { … } section of your nginx.conf. Please note that this config won't actually let you use shortened URLs, it just redirects users from shortened URLs to the site's full URL. Thus you should prefer the solution utilizing nginx's proxy_pass directive shown above." : "只需将上面的配置片段复制到 nginx.conf 的 Nextcloud 的 server {…} 部分。 请注意，此配置实际上不会允许您使用缩短的 URL，而只是将用户从缩短的URL重定向到站点的完整 URL。 因此，您应该更喜欢使用上面显示的 nginx 的 proxy_pass 指令的解决方案。",
    "Pico CMS for Nextcloud" : "Pico CMS for Nextcloud",
    "<a href=\"https://apps.nextcloud.com/apps/cms_pico\">Pico CMS for Nextcloud</a> combines the power of <a href=\"http://picocms.org/\"><strong>Pico</strong></a> and Nextcloud to create simple, secure, shareable and amazingly powerful websites with just a few clicks. Pico is a stupidly simple, blazing fast, flat file CMS - making the web easy!" : "<a href=\"https://apps.nextcloud.com/apps/cms_pico\">适用于 Nextcloud 的 Pico CMS</a> 结合了 <a href=\"http://picocms.org/\"><strong>Pico</strong></a> 和 Nextcloud 的强大功能，只需单击几下即可创建简单，安全，可共享且功能强大的网站。 Pico 是一个非常简单，非常快速的平面文件 CMS - 使网络变得简单！",
    "Start a blog, share your resume with the world, create a plan for world domination and only share it with the right friends or build a knowledge base and let the smart ones among your colleagues help out. Pico CMS for Nextcloud allows you to create and manage your own websites. Creating a new page with Pico is no more than creating a simple text file in your Nextcloud files. No config is required, no utterly complex management interfaces - just files. It's the perfect match with Nextcloud. Secure Sharing, Collaboration, Access Control - not just for your files, but also your websites, all made possible by Pico CMS for Nextcloud! Breaking the boundaries between your Mobile & Desktop devices and your Server." : "创建一个博客，与全世界分享您的简历，制定一个统治世界的计划，仅与合适的朋友分享，或者建立一个知识库，然后让同事中的聪明人提供帮助。 Pico CMS for Nextcloud 允许您创建和管理自己的网站。 使用 Pico 创建新页面只不过是在 Nextcloud 文件中创建一个简单的文本文件。 无需配置，不需要非常复杂的管理界面-只需文件。 与 Nextcloud 完美匹配。 安全共享，协作，访问控制-不仅适用于您的文件，而且还适用于您的网站，所有这些都可以通过 Pico CMS for Nextcloud 来实现！ 打破移动和桌面设备与服务器之间的界限。",
    "A website consist of just a bunch of <code class=\"inline\">.md</code> text files in your Nextcloud files. <code class=\"inline\">.md</code> stands for <a href=\"https://www.markdownguide.org/\"><strong>Markdown</strong></a> - a super simple and intuitive markup to create headings, paragraphs, text formatting, lists, images and links. But don't despair - you don't have to learn yet another language if you don't want to. Try Nextcloud's <a href=\"https://apps.nextcloud.com/apps/text\">Text</a> or <a href=\"https://apps.nextcloud.com/apps/files_markdown\">Markdown Editor</a> apps to make easy things stupidly simple. But what about meta data like a page's title or release date? Guess right, it's all in one place. At the top of your Markdown files you can place a block with such meta data - called the <a href=\"https://en.wikipedia.org/wiki/YAML\"><strong>YAML</strong></a> Front Matter. Creating websites can't be easier…" : "网站在 Nextcloud 文件中仅包含一堆 <code class=\"inline\">.md</code> 文本文件。 <code class=\"inline\">.md</code> 代表 <a href=\"https://www.markdownguide.org/\"><strong>Markdown</strong></a> - 一种超级简单直观的标记，用于创建标题，段落，文本格式，列表，图像和链接。 但是请不要失望-如果您不想学习另一种语言。 尝试 Nextcloud 的 <a href=\"https://apps.nextcloud.com/apps/text\">文本</a> 或 <a href=\"https://apps.nextcloud.com/apps/files_markdown\">Markdown 编辑器</a>应用程序可以使简单的事情变得非常简单。 但是，诸如页面标题或发布日期之类的元数据呢？ 猜对了，一切都集中在一处。 在 Markdown 文件的顶部，您可以放置一个带有此类元数据的块 - 称为<a href=\"https://en.wikipedia.org/wiki/YAML\"><strong>YAML</strong></a> Front Matter。 创建网站再简单不过了……",
    "You want to learn more about Pico CMS for Nextcloud? Easy! Just create your first personal website using the \"sample_pico\" template. Pico's sample contents will explain all you need to know…" : "您想要了解更多有关 Pico CMS for Nextcloud 的信息吗？ 简单！ 只需使用 \"sample_pico\" 模板创建您的第一个个人网站。 Pico 的样本内容将说明您需要了解的所有内容……",
    "You will be able to access your websites using URLs like the following:" : "您将可以使用如下的URL访问您的网站：",
    "The Nextcloud admin limited access of Pico CMS for Nextcloud to certain groups. Unfortunately you don't have permission to create personal websites. You can still access websites of other users, possibly including private websites. If you had permission to create websites in the past, you don't have to worry about your data: Nothing is lost. However, nobody will be able to access your private websites and a \"Website not found\" error is shown instead." : "Nextcloud 管理员将 Pico CMS for Nextcloud 的访问权限限制为某些组。 不幸的是，您无权创建个人网站。 您仍然可以访问其他用户的网站，可能包括私有网站。 如果您过去拥有创建网站的权限，则不必担心数据：什么都不会丢失。 但是，没有人可以访问您的私人网站，而是显示“找不到网站”错误。",
    "Loading websites…" : "加载网站中...",
    "Name" : "名字",
    "Path" : "路径",
    "Theme" : "主题",
    "Created" : "已创建",
    "Go to website" : "前往网站",
    "Go to website directory" : "转到网站目录",
    "Toggle private website" : "切换私有网站",
    "Delete website" : "删除网站",
    "Actions" : "操作",
    "Create a new website" : "创建一个新的网站",
    "Just fill the form below to create your own personal website." : "只需填写以下表格即可创建您自己的个人网站。",
    "My example website" : "我的示例网站",
    "Here you can specify the name of your personal website. Your website's name will be used as website title, often shown in your website's header." : "您可以在此处指定您的个人网站的名称。 您的网站名称将用作网站标题，通常显示在您的网站标题中。",
    "Identifier" : "标识符",
    "The identifier of your website prescribes both your website's address (URL) and the name of the directory your website's files (both pages and assets) will be stored in. A website's identifier must consist of lowercase alphanumeric characters, dashes and underscores (a-z, 0-9, - and _) only." : "网站的标识符规定了网站的地址（URL）和网站文件（页面和资源）将存储在其中的目录的名称。网站的标识符必须仅使用由小写字母、数字字符、破折号和下划线 (a-z, 0-9, - 和 _)。",
    "Address" : "地址",
    "You will be able to access your website using the address (URL) shown above." : "您可以使用上面显示的地址（URL）来访问您的网站。",
    "When creating a new website, Pico CMS for Nextcloud copies the website template to the following new directory in your Nextcloud." : "当创建新的网站时，Pico CMS for Nextcloud会将网站模板复制到您Nextcloud的以下新目录中。",
    "You can use one of the provided themes for some greater individuality and style. If you want to use another theme, ask your Nextcloud admin - it might be possible to add your favourite theme, too!" : "您可以使用提供的主题之一来获得更大的个性和风格。 如果您要使用其他主题，请询问您的 Nextcloud 管理员 - 也可以添加您喜欢的主题！",
    "Template" : "模板",
    "Templates act as a starting point when creating a new website. All templates consist of a \"content\" directory (for your pages) and a \"assets\" directory (for your website's assets), which will be copied to the above folder in your Nextcloud." : "模板是创建一个新网站的起点。所有的模板都包含一个\"content\"目录（存放您的网页）和一个\"assets\"目录（存放您网站的资产文件），这些目录将被复制到您Nextcloud的上述文件夹中。",
    "Create new website" : "创建新网站",
    "Loading…" : "加载中..."
},
"nplurals=1; plural=0;");
