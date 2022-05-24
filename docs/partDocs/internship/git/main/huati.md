


# 高级话题

## 多分支rebase
哥们儿，我们准备了很多分支！咱们把这些分支 rebase 到 main 上吧。

但是你的领导给你提了点要求 —— 他们希望得到有序的提交历史，也就是我们最终的结果应该是 C6' 在 C7' 上面， C5' 在 C6' 上面，依此类推。
```bash
git rebase main bugFix
git rebase bugFix side
git rebase side another
git branch -f main another
```
## 两个父节点
`^`选择路口 `~`选择前进几个记录
而且支持链式操作如`git checkout HEAD~^2~2`
***
```bash
git breanch bugWork HEAD~^2~
```
## 纠缠不清的分支
综合题目
```bash
git checkout one
git cherry-pick c4 c3 c2
git checkout two
git cherry-pick c5 c4 c3 c2
git branch -f three c2
```