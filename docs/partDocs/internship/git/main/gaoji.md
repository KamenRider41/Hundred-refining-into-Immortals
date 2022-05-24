# 高级篇
## 第一关 HEAD
**移动**
***
指向`C4`提交记录
```bash
git checkout C4
```
## 第二关 ^
**相对引用**
通过`git log`查看提交记录的哈希值，但这个不方便，所以有
`bugFix^` 表示`bugFix`前面一个节点
***
`HEAD`切换到`bugFix`的父节点
```bash
git checkout bugFix^
```
## 第三关 ~
**相对引用**
`bugFix~2` 表示`bugFix`前面两个节点
`-f` 容许我们将分支强制移动到那个位置。
`git branch -f main HEAD~3`将`main`分支强制指向`HEAD`的第3级父提交
***
移动`HEAD`，`main`,`bugFix`到目标位置
```bash
git branch -f bugFix HEAD~2
git branch -f main C6
git checkout HEAD^
```
## 第四关 reset/vert
**撤销变更**
***
任务:
- 1.分别撤销`local`和`pushed`分支上最近一次提交
- 2.`pushed`是远程分支，`local`是本地分支
```bash
git reset HEAD^
git checkout pushed
git revert HEAD
```