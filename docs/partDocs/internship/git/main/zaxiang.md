
# 杂项
提交训练！
[[toc]]
## 提交的技巧#1

你之前在 newImage 分支上进行了一次提交，然后又基于它创建了 caption 分支，然后又提交了一次。

此时你想对某个以前的提交记录进行一些小小的调整。比如设计师想修改一下 newImage 中图片的分辨率，尽管那个提交记录并不是最新的了。

解决办法：
- 1.先用`git rebase -i`将提交重新排序，然后把我们想要修改的提交记录挪到最前
- 2.然后用`git commit --amend`来进行一些小修改
- 3.接着再用`git rebase -i`来将它们调回原来的顺序
- 4.最后我们把`main`移到修改的最前端，就大功告成了
```bash
git rebase -i
git commit --amend
git rebase -i
git branch -f main caption
```
## 提交的技巧#2

正如你在上一关所见到的，我们可以使用 `rebase -i` 对提交记录进行重新排序。只要把我们想要的提交记录挪到最前端，我们就可以很轻松的用 `--amend` 修改它，然后把它们重新排成我们想要的顺序。

但这样做就唯一的问题就是要进行两次排序，而这有可能造成由 `rebase` 而导致的冲突。下面还是看看 `git cherry-pick` 是怎么做的吧。
***
和`#1`同样的要求,不用`rebase`试试
```bash
git checkout main
git cherry-pick C2
git branch -f main C1
git cherry-pick C2 C3
```
## Git Tags
相信通过前面课程的学习你已经发现了：分支很容易被人为移动，并且当有新的提交时，它也会移动。分支很容易被改变，大部分分支还只是临时的，并且还一直在变。

你可能会问了：有没有什么可以永远指向某个提交记录的标识呢，比如软件发布新的大版本，或者是修正一些重要的 Bug 或是增加了某些新特性，有没有比分支更好的可以永远指向这些提交的方法呢？

`git tag v1 C1`我们将这个标签命名为 `v1`，并且明确地让它指向提交记录 `C1`，如果你不指定提交记录，Git 会用` HEAD `所指向的位置。
***
建立两个标签，然后切换到`v1`,要注意你会进到分离`HEAD`的状态
```bash
git tag v0 C1
git tag v1 C2
git checkout C2
```
## Get Describe
由于标签在代码库中起着“锚点”的作用，Git 还为此专门设计了一个命令用来描述离你最近的锚点（也就是标签），它就是 `git describe`！
```bash
git describe main
# 输出v1_2_gC2
# 最近的标签是v1，相隔2次提交，自身是C2
```
