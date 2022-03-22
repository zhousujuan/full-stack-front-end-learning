上班之后，在公司的电脑推送我本地的代码，到我自己的仓库上面。但是远程的仓库没有我本次提交的贡献记录。就是我们个人主页的那个贡献度。

我们在项目中，提交的代码的时候，远程的仓库里面没有显示我们的代码贡献，是因为我们配置邮箱与远程仓库的邮箱不一样，所以，远程的仓库就不会保存我们当前的代码提交的贡献，如果我们需要在新的电脑上面提交代码到远程仓库上面的时候，有贡献记录，我们需要：

 - 看一下当前的电脑的配置项，是否和上一个的电脑里面的配置项（也就是我们第一次提交到远程上的配置的邮箱（就是我们远程默认的邮箱），或者直接从码云或者github的官网上，登录自己账号进行查看）
   -  上一个电脑配置查看：

打开git
```
git config --list     查看当前的git配置项
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/69a5e95462674135beaf114871b53cf4.png)
找到图片中的配置信息，就可以查看

或者，随便打开一个本地的仓库，查看里面的.git文件夹上面的config的配置文件，打开查看你上面的图中的配置的字段信息，也可以进行查看

```
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "origin"]
	url = https://gitee.com/zhousujuan/temporary.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
[user]
	email = 邮箱地址   
	name = 用户名

```

 - 仓库查看：（以码云为例）（如果电脑没在上边，不方便查看）
进入仓库的个人主页：
![在这里插入图片描述](https://img-blog.csdnimg.cn/6e10c2c54b72414d932cc32ddb0570a2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA6ICB6KGy55qE5bCR5aWz5b-DaQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
点击个人设置，进到个人设置界面：
![在这里插入图片描述](https://img-blog.csdnimg.cn/8ad9329915204628b5e89343ebc03981.png)
找到基本信息模块，点击邮箱管理
![在这里插入图片描述](https://img-blog.csdnimg.cn/58d6bb66ea49488a9edef71af5e2efc9.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA6ICB6KGy55qE5bCR5aWz5b-DaQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
进入到这个界面，就可以查看自己的邮箱配置了
---
找到我们的git配置，文件之后，只需要更改当前的电脑的配置文件中的字段信息与之前那个电脑上面的保持一致，就可以了。==》再次进行提交，就会有提交记录
 - git 修改

```
git config --global user.email "邮箱地址"    //全局配置
```
这里的`--global`，是进行全局的配置修改，如果只需要当前的项目的这个配置修改的话，只需要去掉这个字段就行
```
git config user.email "邮箱地址"     //当前项目配置
```

也可以找到项目的config文件直接进行修改（上面已经讲过在哪里找）

