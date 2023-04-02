# 移动提交记录 
[[toc]]
## 第一关  cherry-pick
**移动记录**
`git cherry-pick C2 C4`
将C2，C4放到当前分支下
***
```bash
git cherry-pick C3 C4 C7
```
## 第二关 rebase
**移动记录**
交互式 `rebase `指的是使用带参数 `--interactive` 的 `rebase `命令, 简写为 `-i`
***
做一次交互式`rebase`，整理成目标窗口中的提交顺序
```bash
git rebase -i overHere
```
