### `linuxs`命令

1. `cd`
   1. `cd 文件夹`  进入文件夹
   2. `cd ..`  回到上一级文件夹
2. `ls`
   1. `list的缩写`
   2. `ls -al` 竖向排列，可查看隐藏文件
3. `clear`  清屏
4. 增
   1. `mkdir hello`  创建名字为`hello`的文件夹
   2. `touch index.html`  创建`index.html`文件
5. 删
   1. `rm -r hello`  删除名字为`hello`的文件夹
   2. `rm index.html`  删除`index.html`文件
6. 改
   1. `vim index.html`  编辑`index.html`文件
      1. 输入 英文状态的`i`，此时为可编辑状态
      2. 编辑完了之后按`ESC`
7. 查
   1. `ls`
      1. `list`的缩写，查看当前文件加下的所有文件和文件夹
      2. `ls -al` 竖向排列，可查看隐藏文件
   2. `cat index.html`  查看文件内容
8. 取消命令`ctrl+c`

### `git`命令

#### `git init`

1. 仓库初始化
2. 这样就可以对该文件夹进行版本控制

#### `git status`

1. 查看此时文件的状态
   1. 红色:表示该文件在工作区
   2. 绿色:表示该文件在暂存区

#### `git add`

从工作区添加到暂存区

1. `git add index.html`  将`index.html`文件添加到暂存区
2. `git add -A、git add .、git add *`  添加所有文件到暂存区

#### `git commit -m 注释信息`

从暂存区添加到仓库

#### `git ls-files`

查看提交到仓库中的文件

#### `git diff`

1. 工作区改动的内容，此时该文件还在工作区中
2. 和上一次添加到暂存区的该文件进行比较
3. 先要有，然后才能进行比较

#### `git diff --cached`

1. 此时该文件在暂存区中
2. 暂存区中的该文件和上一次提交到仓库时的内容进行比较
3. 先要有，然后才能进行比较

#### `git restore 具体文件名` 

1. 在工作区对文件内容进行了修改，此时该文件还在工作区
2. `git status`时为红色
3. 执行这个命令时，文件内容变为修改前的，`git status`时也文件也不显示为红色了

#### `git restore --staged 具体文件名` 

1. 工作区改动了内容，并且把文件提交到了暂存区，此时文件在暂存区中
2. `git status`时为绿色
3. 执行这个命令时，撤销了此次向暂存区的添加，`git status`时仍为红色，里面的内容依然存在

#### `git log`

查看历史提交情况，其中每一次提交的情况都包括

1. `SHA-1`校验和
2. 作者的名字 电子右键地址
3. 提交时间
4. 提交时的注释信息

#### `git log --oneline`

更改`git log`的显示方式

1. 每行显示一个`commit`
2. 显示`SHA-1`校验和的前7个字符
3. 提交时的注释信息

#### `git reset --hard SHA-1校验和的前7个字符`

1. 版本回退
2. 设置`HEAD`指针进行版本回退

#### `git reflog`

1. 版本回退之后，`git log`无法显示所有的提交
2. 此时`git reflog`就可以看到所有的提交

#### 配置忽略文件

1. 创建忽略文件

2. 从未提交过的文件

3. 提交过的文件

   1. 把该文件从版本库中删除

      `git rm --cached index.html`  表示把`index.html`从仓库中删除

   2. 在配置文件中指明

   3. 再一次修改该文件内容的话，`git status`就没有这个文件的状态了

   4. 如果是文件夹，就表示这个文件夹中的文件都会被忽略

### `git`分支

1. 分支
   1. 有很多条分支，主分支和其它分支
   2. 在其它分支上各自开发，在push到主分支
   3. 每一次在主分支的基础上开发

1. 查看分支
   1. `git branch`
2. 创建分支
   1. `git branch name`
   2. 创建出来的分支的内容与创建时的这个分支的内容相同

3. 删除分支
   1. `git branch -d name`

4. 切换分支
   1. `git checkout name`
   2. 切换并创建分支
      1. `git checkout -b name`
5. 合并分支
   1. `git merge name`
   2. 比如在`master`这个分支中执行`git merge dev`就是把`dev`这个分支合并到我自己的这个分支上来



### `github`

基本思想

1. 先是在本地仓库都操作好了
2. 然后就是把这些整理好的东西整个的推到仓库去



#### 本地仓库推远程仓库

1. 先要在远程创建一个仓库，本地仓库推远程仓库就是把本地仓库与`.git`同一级的各个文件文件夹提交到创建的这个仓库
2. `git remote add`
   1. 在本地添加一个远程仓库，该远程仓库名字取为`origin`，地址为仓库的`ssh`地址如`git@github.com:paradisefei/test10.1.1.git`
   2. 如`git remote add origin git@github.com:paradisefei/test10.1.1.git`
3. `git push 主机名 本地分支名(来源地):远程分支名(目的地)`
   1. 如果省略远程分支名，该远程中没有该分支时则会自动创建
   2. `git push -u origin master`
      1. 如果当前分支与多个主机存在追踪关系，则使用`-u`指定一个默认主机
      2. 表示把`master`分支推送到`origin`主机，并指定该主机位默认主机，之后可以不加参数直接使用`git push`，不加参数直接使用`git push`的话表示只推送当前分支

#### 远程仓库克隆到本地仓库

1. 是把自己给了名字的那个仓库克隆下来，包括自己给了名字的文件夹和里面的所有
2. `git pull 主机名 远程分支名(来源地):本地分支名(目的地)`
   1. 取回远程主机的分支，与本地仓库的指定分支合并
3. `git fetch 远程主机名 分支名`
   1. 取回远程主机上某个分支的更新

#### 上班

上班时候每天的流程就是

1. 把`master`上的内容`pull`下来
2. 把`pull`下来的`master`合并到自己的分支上(这两步可以一次完成)
3. 然后就是在这个合并后的基础上开始今天的开发