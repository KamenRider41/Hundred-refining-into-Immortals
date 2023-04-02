::: tip 合作神器
`Git`在协同开发上起着十分重要的作用！ :star:
:::

# Git入门 :star:
[Git学习小游戏！](https://learngitbranching.js.org/?locale=zh_CN)

笔记里不放截图了，可以进入小游戏，边看笔记边学习！
# 基础篇
[[toc]]
## 第一关 commit
**提交**
***
两次`git commit`过关
## 第二关 checkout
**切换**

*注意*：在 Git 2.23 版本中，引入了一个名为 git switch 的新命令，最终会取代 git checkout，因为 checkout 作为单个命令有点超载（它承载了很多独立的功能）。 由于现在很多人还无法使用 switch，本次课程仍然使用 checkout 而不是 switch， 但是如果你想尝试一下新命令，我们的应用也是支持的！并且你可以从这里学到更多关于新命令的内容。
***
新建一个`bugFix`分支，然后切换到该分支
```bash
# 答案一
git checkout -b bugFix
# 答案二
git branch bugFix
git checkout bugFix
```
## 第三关 merge
**合并**
***
任务:
- 1.创建新分支`bugFix`
- 2.用`git checkout bugFix`切换到该分支
- 3.提交一次
- 4.用`git checkout main`切换回`main`
- 5.再提交一次
- 6.用`git merge` 把`bugFix`合并到`main`
```bash
git checkout -b bugFix
git commit
git checkout main
git commit
git merge bugFix
```
## 第四关 rebase
**合并**
***
任务:
- 1.新建并切换到`bugFix`分支
- 2.提交一次
- 3.切换回`main`分支再提交一次
- 4.再次切换到`bugFix`分支，`rebase`到`main`上
```bash
git checkout -b bugFix
git commit
git checkout main
git commit
git checkout bugFix
git rebase main
```