export default {
  "count": 681,
  "list": [
    {
      "id": 1612,
      "value": 42,
      "time": "2022-06-05T05:17:32.444000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1612,
        "frontend_question_id": "72",
        "question_id": 72,
        "title": "编辑距离",
        "content": "<p>给你两个单词 <code>word1</code> 和 <code>word2</code>，请你计算出将 <code>word1</code> 转换成 <code>word2</code><em> </em>所使用的最少操作数 。</p>\n\n<p>你可以对一个单词进行如下三种操作：</p>\n\n<ul>\n\t<li>插入一个字符</li>\n\t<li>删除一个字符</li>\n\t<li>替换一个字符</li>\n</ul>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>word1 = \"horse\", word2 = \"ros\"\n<strong>输出：</strong>3\n<strong>解释：</strong>\nhorse -> rorse (将 'h' 替换为 'r')\nrorse -> rose (删除 'r')\nrose -> ros (删除 'e')\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>word1 = \"intention\", word2 = \"execution\"\n<strong>输出：</strong>5\n<strong>解释：</strong>\nintention -> inention (删除 't')\ninention -> enention (将 'i' 替换为 'e')\nenention -> exention (将 'n' 替换为 'x')\nexention -> exection (将 'n' 替换为 'c')\nexection -> execution (插入 'u')\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>0 <= word1.length, word2.length <= 500</code></li>\n\t<li><code>word1</code> 和 <code>word2</code> 由小写英文字母组成</li>\n</ul>\n",
        "level": 3,
        "slug_title": "edit-distance",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1652,
      "value": 41,
      "time": "2022-05-30T07:46:36.187000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1652,
        "frontend_question_id": "32",
        "question_id": 32,
        "title": "最长有效括号",
        "content": "<p>给你一个只包含 <code>'('</code> 和 <code>')'</code> 的字符串，找出最长有效（格式正确且连续）括号子串的长度。</p>\n\n<p> </p>\n\n<div class=\"original__bRMd\">\n<div>\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>s = \"(()\"\n<strong>输出：</strong>2\n<strong>解释：</strong>最长有效括号子串是 \"()\"\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>s = \")()())\"\n<strong>输出：</strong>4\n<strong>解释：</strong>最长有效括号子串是 \"()()\"\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>s = \"\"\n<strong>输出：</strong>0\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>0 <= s.length <= 3 * 10<sup>4</sup></code></li>\n\t<li><code>s[i]</code> 为 <code>'('</code> 或 <code>')'</code></li>\n</ul>\n</div>\n</div>\n",
        "level": 3,
        "slug_title": "longest-valid-parentheses",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1572,
      "value": 41,
      "time": "2022-05-15T16:04:50.835000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1572,
        "frontend_question_id": "112",
        "question_id": 112,
        "title": "路径总和",
        "content": "<p>给你二叉树的根节点 <code>root</code> 和一个表示目标和的整数 <code>targetSum</code> ，判断该树中是否存在 <strong>根节点到叶子节点</strong> 的路径，这条路径上所有节点值相加等于目标和 <code>targetSum</code> 。</p>\n\n<p><strong>叶子节点</strong> 是指没有子节点的节点。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg\" style=\"width: 500px; height: 356px;\" />\n<pre>\n<strong>输入：</strong>root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22\n<strong>输出：</strong>true\n</pre>\n\n<p><strong>示例 2：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg\" />\n<pre>\n<strong>输入：</strong>root = [1,2,3], targetSum = 5\n<strong>输出：</strong>false\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>root = [1,2], targetSum = 0\n<strong>输出：</strong>false\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li>树中节点的数目在范围 <code>[0, 5000]</code> 内</li>\n\t<li><code>-1000 <= Node.val <= 1000</code></li>\n\t<li><code>-1000 <= targetSum <= 1000</code></li>\n</ul>\n",
        "level": 1,
        "slug_title": "path-sum",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1542,
      "value": 41,
      "time": "2022-04-26T15:22:44.288000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1542,
        "frontend_question_id": "142",
        "question_id": 142,
        "title": "环形链表 II",
        "content": "<p>给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 <code>null</code>。</p>\n\n<p>为了表示给定链表中的环，我们使用整数 <code>pos</code> 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 <code>pos</code> 是 <code>-1</code>，则在该链表中没有环。<strong>注意，<code>pos</code> 仅仅是用于标识环的情况，并不会作为参数传递到函数中。</strong></p>\n\n<p><strong>说明：</strong>不允许修改给定的链表。</p>\n\n<p><strong>进阶：</strong></p>\n\n<ul>\n\t<li>你是否可以使用 <code>O(1)</code> 空间解决此题？</li>\n</ul>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<p><img alt=\"\" src=\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png\" style=\"height: 97px; width: 300px;\" /></p>\n\n<pre>\n<strong>输入：</strong>head = [3,2,0,-4], pos = 1\n<strong>输出：</strong>返回索引为 1 的链表节点\n<strong>解释：</strong>链表中有一个环，其尾部连接到第二个节点。\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<p><img alt=\"\" src=\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png\" style=\"height: 74px; width: 141px;\" /></p>\n\n<pre>\n<strong>输入：</strong>head = [1,2], pos = 0\n<strong>输出：</strong>返回索引为 0 的链表节点\n<strong>解释：</strong>链表中有一个环，其尾部连接到第一个节点。\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<p><img alt=\"\" src=\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png\" style=\"height: 45px; width: 45px;\" /></p>\n\n<pre>\n<strong>输入：</strong>head = [1], pos = -1\n<strong>输出：</strong>返回 null\n<strong>解释：</strong>链表中没有环。\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li>链表中节点的数目范围在范围 <code>[0, 10<sup>4</sup>]</code> 内</li>\n\t<li><code>-10<sup>5</sup> <= Node.val <= 10<sup>5</sup></code></li>\n\t<li><code>pos</code> 的值为 <code>-1</code> 或者链表中的一个有效索引</li>\n</ul>\n",
        "level": 2,
        "slug_title": "linked-list-cycle-ii",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1519,
      "value": 38,
      "time": "2022-06-01T08:45:20.482000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1519,
        "frontend_question_id": "165",
        "question_id": 165,
        "title": "比较版本号",
        "content": "<p>给你两个版本号 <code>version1</code> 和 <code>version2</code> ，请你比较它们。</p>\n\n<p>版本号由一个或多个修订号组成，各修订号由一个 <code>'.'</code> 连接。每个修订号由 <strong>多位数字</strong> 组成，可能包含 <strong>前导零</strong> 。每个版本号至少包含一个字符。修订号从左到右编号，下标从 0 开始，最左边的修订号下标为 0 ，下一个修订号下标为 1 ，以此类推。例如，<code>2.5.33</code> 和 <code>0.1</code> 都是有效的版本号。</p>\n\n<p>比较版本号时，请按从左到右的顺序依次比较它们的修订号。比较修订号时，只需比较 <strong>忽略任何前导零后的整数值</strong> 。也就是说，修订号 <code>1</code> 和修订号 <code>001</code> <strong>相等 </strong>。如果版本号没有指定某个下标处的修订号，则该修订号视为 <code>0</code> 。例如，版本 <code>1.0</code> 小于版本 <code>1.1</code> ，因为它们下标为 <code>0</code> 的修订号相同，而下标为 <code>1</code> 的修订号分别为 <code>0</code> 和 <code>1</code> ，<code>0 < 1</code> 。</p>\n\n<p>返回规则如下：</p>\n\n<ul>\n\t<li>如果 <code><em>version1 </em>> <em>version2</em></code> 返回 <code>1</code>，</li>\n\t<li>如果 <code><em>version1 </em>< <em>version2</em></code> 返回 <code>-1</code>，</li>\n\t<li>除此之外返回 <code>0</code>。</li>\n</ul>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>version1 = \"1.01\", version2 = \"1.001\"\n<strong>输出：</strong>0\n<strong>解释：</strong>忽略前导零，\"01\" 和 \"001\" 都表示相同的整数 \"1\"\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>version1 = \"1.0\", version2 = \"1.0.0\"\n<strong>输出：</strong>0\n<strong>解释：</strong>version1 没有指定下标为 2 的修订号，即视为 \"0\"\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>version1 = \"0.1\", version2 = \"1.1\"\n<strong>输出：</strong>-1\n<strong>解释：</strong>version1 中下标为 0 的修订号是 \"0\"，version2 中下标为 0 的修订号是 \"1\" 。0 < 1，所以 version1 < version2\n</pre>\n\n<p><strong>示例 4：</strong></p>\n\n<pre>\n<strong>输入：</strong>version1 = \"1.0.1\", version2 = \"1\"\n<strong>输出：</strong>1\n</pre>\n\n<p><strong>示例 5：</strong></p>\n\n<pre>\n<strong>输入：</strong>version1 = \"7.5.2.4\", version2 = \"7.5.3\"\n<strong>输出：</strong>-1\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 <= version1.length, version2.length <= 500</code></li>\n\t<li><code>version1</code> 和 <code>version2</code> 仅包含数字和 <code>'.'</code></li>\n\t<li><code>version1</code> 和 <code>version2</code> 都是 <strong>有效版本号</strong></li>\n\t<li><code>version1</code> 和 <code>version2</code> 的所有修订号都可以存储在 <strong>32 位整数</strong> 中</li>\n</ul>\n",
        "level": 2,
        "slug_title": "compare-version-numbers",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1906,
      "value": 38,
      "time": "2022-05-23T06:01:23.447000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1906,
        "frontend_question_id": "补充题4",
        "question_id": 99990004,
        "title": "手撕快速排序",
        "content": "<p>给你一个整数数组&nbsp;<code>nums</code>，请你将该数组升序排列。</p><p>&nbsp;</p><ol></ol><p><strong>示例 1：</strong></p><pre><strong>输入：</strong>nums = [5,2,3,1]<strong>输出：</strong>[1,2,3,5]</pre><p><strong>示例 2：</strong></p><pre><strong>输入：</strong>nums = [5,1,1,2,0,0]<strong>输出：</strong>[0,0,1,1,2,5]</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ol>\t<li><code>1 &lt;= nums.length &lt;= 50000</code></li>\t<li><code>-50000 &lt;= nums[i] &lt;= 50000</code></li></ol>",
        "level": 2,
        "slug_title": "sort-an-array",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1571,
      "value": 38,
      "time": "2022-04-01T08:45:24.018000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1571,
        "frontend_question_id": "113",
        "question_id": 113,
        "title": "路径总和 II",
        "content": "<p>给你二叉树的根节点 <code>root</code> 和一个整数目标和 <code>targetSum</code> ，找出所有 <strong>从根节点到叶子节点</strong> 路径总和等于给定目标和的路径。</p>\n\n<p><strong>叶子节点</strong> 是指没有子节点的节点。</p>\n\n<div class=\"original__bRMd\">\n<div>\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg\" style=\"width: 500px; height: 356px;\" />\n<pre>\n<strong>输入：</strong>root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22\n<strong>输出：</strong>[[5,4,11,2],[5,8,4,5]]\n</pre>\n\n<p><strong>示例 2：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg\" style=\"width: 212px; height: 181px;\" />\n<pre>\n<strong>输入：</strong>root = [1,2,3], targetSum = 5\n<strong>输出：</strong>[]\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>root = [1,2], targetSum = 0\n<strong>输出：</strong>[]\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li>树中节点总数在范围 <code>[0, 5000]</code> 内</li>\n\t<li><code>-1000 <= Node.val <= 1000</code></li>\n\t<li><code>-1000 <= targetSum <= 1000</code></li>\n</ul>\n</div>\n</div>\n",
        "level": 2,
        "slug_title": "path-sum-ii",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1608,
      "value": 38,
      "time": "2022-03-23T16:00:00Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1608,
        "frontend_question_id": "76",
        "question_id": 76,
        "title": "最小覆盖子串",
        "content": "<p>给你一个字符串 <code>s</code> 、一个字符串 <code>t</code> 。返回 <code>s</code> 中涵盖 <code>t</code> 所有字符的最小子串。如果 <code>s</code> 中不存在涵盖 <code>t</code> 所有字符的子串，则返回空字符串 <code>\"\"</code> 。</p>\n\n<p> </p>\n\n<p><strong>注意：</strong></p>\n\n<ul>\n\t<li>对于 <code>t</code> 中重复字符，我们寻找的子字符串中该字符数量必须不少于 <code>t</code> 中该字符数量。</li>\n\t<li>如果 <code>s</code> 中存在这样的子串，我们保证它是唯一的答案。</li>\n</ul>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>s = \"ADOBECODEBANC\", t = \"ABC\"\n<strong>输出：</strong>\"BANC\"\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>s = \"a\", t = \"a\"\n<strong>输出：</strong>\"a\"\n</pre>\n\n<p><strong>示例 3:</strong></p>\n\n<pre>\n<strong>输入:</strong> s = \"a\", t = \"aa\"\n<strong>输出:</strong> \"\"\n<strong>解释:</strong> t 中两个字符 'a' 均应包含在 s 的子串中，\n因此没有符合条件的子字符串，返回空字符串。</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 <= s.length, t.length <= 10<sup>5</sup></code></li>\n\t<li><code>s</code> 和 <code>t</code> 由英文字母组成</li>\n</ul>\n\n<p> </p>\n<strong>进阶：</strong>你能设计一个在 <code>o(n)</code> 时间内解决此问题的算法吗？",
        "level": 3,
        "slug_title": "minimum-window-substring",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1602,
      "value": 37,
      "time": "2022-05-16T16:00:00Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1602,
        "frontend_question_id": "82",
        "question_id": 82,
        "title": "删除排序链表中的重复元素 II",
        "content": "<p>存在一个按升序排列的链表，给你这个链表的头节点 <code>head</code> ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 <strong>没有重复出现</strong><em> </em>的数字。</p>\n\n<p>返回同样按升序排列的结果链表。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/01/04/linkedlist1.jpg\" style=\"width: 500px; height: 142px;\" />\n<pre>\n<strong>输入：</strong>head = [1,2,3,3,4,4,5]\n<strong>输出：</strong>[1,2,5]\n</pre>\n\n<p><strong>示例 2：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/01/04/linkedlist2.jpg\" style=\"width: 500px; height: 205px;\" />\n<pre>\n<strong>输入：</strong>head = [1,1,1,2,3]\n<strong>输出：</strong>[2,3]\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li>链表中节点数目在范围 <code>[0, 300]</code> 内</li>\n\t<li><code>-100 <= Node.val <= 100</code></li>\n\t<li>题目数据保证链表已经按升序排列</li>\n</ul>\n",
        "level": 2,
        "slug_title": "remove-duplicates-from-sorted-list-ii",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1586,
      "value": 37,
      "time": "2022-05-13T09:35:25.269000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1586,
        "frontend_question_id": "98",
        "question_id": 98,
        "title": "验证二叉搜索树",
        "content": "<p>给你一个二叉树的根节点 <code>root</code> ，判断其是否是一个有效的二叉搜索树。</p>\n\n<p><strong>有效</strong> 二叉搜索树定义如下：</p>\n\n<ul>\n\t<li>节点的左子树只包含<strong> 小于 </strong>当前节点的数。</li>\n\t<li>节点的右子树只包含 <strong>大于</strong> 当前节点的数。</li>\n\t<li>所有左子树和右子树自身必须也是二叉搜索树。</li>\n</ul>\n\n<p>&nbsp;</p>\n\n<p><strong>示例 1：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg\" style=\"width: 302px; height: 182px;\" />\n<pre>\n<strong>输入：</strong>root = [2,1,3]\n<strong>输出：</strong>true\n</pre>\n\n<p><strong>示例 2：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg\" style=\"width: 422px; height: 292px;\" />\n<pre>\n<strong>输入：</strong>root = [5,1,4,null,null,3,6]\n<strong>输出：</strong>false\n<strong>解释：</strong>根节点的值是 5 ，但是右子节点的值是 4 。\n</pre>\n\n<p>&nbsp;</p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li>树中节点数目范围在<code>[1, 10<sup>4</sup>]</code> 内</li>\n\t<li><code>-2<sup>31</sup> &lt;= Node.val &lt;= 2<sup>31</sup> - 1</code></li>\n</ul>\n",
        "level": 2,
        "slug_title": "validate-binary-search-tree",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1590,
      "value": 37,
      "time": "2022-04-26T10:17:16.547000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1590,
        "frontend_question_id": "94",
        "question_id": 94,
        "title": "二叉树的中序遍历",
        "content": "<p>给定一个二叉树的根节点 <code>root</code> ，返回它的 <strong>中序</strong> 遍历。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg\" style=\"width: 202px; height: 324px;\" />\n<pre>\n<strong>输入：</strong>root = [1,null,2,3]\n<strong>输出：</strong>[1,3,2]\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>root = []\n<strong>输出：</strong>[]\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>root = [1]\n<strong>输出：</strong>[1]\n</pre>\n\n<p><strong>示例 4：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/09/15/inorder_5.jpg\" style=\"width: 202px; height: 202px;\" />\n<pre>\n<strong>输入：</strong>root = [1,2]\n<strong>输出：</strong>[2,1]\n</pre>\n\n<p><strong>示例 5：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/09/15/inorder_4.jpg\" style=\"width: 202px; height: 202px;\" />\n<pre>\n<strong>输入：</strong>root = [1,null,2]\n<strong>输出：</strong>[1,2]\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li>树中节点数目在范围 <code>[0, 100]</code> 内</li>\n\t<li><code>-100 <= Node.val <= 100</code></li>\n</ul>\n\n<p> </p>\n\n<p><strong>进阶:</strong> 递归算法很简单，你可以通过迭代算法完成吗？</p>\n",
        "level": 1,
        "slug_title": "binary-tree-inorder-traversal",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1522,
      "value": 36,
      "time": "2022-05-19T14:48:28.122000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1522,
        "frontend_question_id": "162",
        "question_id": 162,
        "title": "寻找峰值",
        "content": "<p>峰值元素是指其值严格大于左右相邻值的元素。</p>\n\n<p>给你一个整数数组&nbsp;<code>nums</code>，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 <strong>任何一个峰值</strong> 所在位置即可。</p>\n\n<p>你可以假设&nbsp;<code>nums[-1] = nums[n] = -∞</code> 。</p>\n\n<p>你必须实现时间复杂度为 <code>O(log n)</code><em> </em>的算法来解决此问题。</p>\n\n<p>&nbsp;</p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = <code>[1,2,3,1]</code>\n<strong>输出：</strong>2\n<strong>解释：</strong>3 是峰值元素，你的函数应该返回其索引 2。</pre>\n\n<p><strong>示例&nbsp;2：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = <code>[</code>1,2,1,3,5,6,4]\n<strong>输出：</strong>1 或 5 \n<strong>解释：</strong>你的函数可以返回索引 1，其峰值元素为 2；\n&nbsp;    或者返回索引 5， 其峰值元素为 6。\n</pre>\n\n<p>&nbsp;</p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 1000</code></li>\n\t<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>\n\t<li>对于所有有效的 <code>i</code> 都有 <code>nums[i] != nums[i + 1]</code></li>\n</ul>\n",
        "level": 2,
        "slug_title": "find-peak-element",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1452,
      "value": 36,
      "time": "2022-04-27T16:00:00Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1452,
        "frontend_question_id": "232",
        "question_id": 232,
        "title": "用栈实现队列",
        "content": "<p>请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（<code>push</code>、<code>pop</code>、<code>peek</code>、<code>empty</code>）：</p>\n\n<p>实现 <code>MyQueue</code> 类：</p>\n\n<ul>\n\t<li><code>void push(int x)</code> 将元素 x 推到队列的末尾</li>\n\t<li><code>int pop()</code> 从队列的开头移除并返回元素</li>\n\t<li><code>int peek()</code> 返回队列开头的元素</li>\n\t<li><code>boolean empty()</code> 如果队列为空，返回 <code>true</code> ；否则，返回 <code>false</code></li>\n</ul>\n\n<p> </p>\n\n<p><strong>说明：</strong></p>\n\n<ul>\n\t<li>你只能使用标准的栈操作 —— 也就是只有 <code>push to top</code>, <code>peek/pop from top</code>, <code>size</code>, 和 <code>is empty</code> 操作是合法的。</li>\n\t<li>你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。</li>\n</ul>\n\n<p> </p>\n\n<p><strong>进阶：</strong></p>\n\n<ul>\n\t<li>你能否实现每个操作均摊时间复杂度为 <code>O(1)</code> 的队列？换句话说，执行 <code>n</code> 个操作的总时间复杂度为 <code>O(n)</code> ，即使其中一个操作可能花费较长时间。</li>\n</ul>\n\n<p> </p>\n\n<p><strong>示例：</strong></p>\n\n<pre>\n<strong>输入：</strong>\n[\"MyQueue\", \"push\", \"push\", \"peek\", \"pop\", \"empty\"]\n[[], [1], [2], [], [], []]\n<strong>输出：</strong>\n[null, null, null, 1, 1, false]\n\n<strong>解释：</strong>\nMyQueue myQueue = new MyQueue();\nmyQueue.push(1); // queue is: [1]\nmyQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)\nmyQueue.peek(); // return 1\nmyQueue.pop(); // return 1, queue is [2]\nmyQueue.empty(); // return false\n</pre>\n\n<ul>\n</ul>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 <= x <= 9</code></li>\n\t<li>最多调用 <code>100</code> 次 <code>push</code>、<code>pop</code>、<code>peek</code> 和 <code>empty</code></li>\n\t<li>假设所有操作都是有效的 （例如，一个空的队列不会调用 <code>pop</code> 或者 <code>peek</code> 操作）</li>\n</ul>\n",
        "level": 1,
        "slug_title": "implement-queue-using-stacks",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1362,
      "value": 35,
      "time": "2022-05-27T08:47:35.086000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1362,
        "frontend_question_id": "322",
        "question_id": 322,
        "title": "零钱兑换",
        "content": "<p>给你一个整数数组 <code>coins</code> ，表示不同面额的硬币；以及一个整数 <code>amount</code> ，表示总金额。</p>\n\n<p>计算并返回可以凑成总金额所需的 <strong>最少的硬币个数</strong> 。如果没有任何一种硬币组合能组成总金额，返回 <code>-1</code> 。</p>\n\n<p>你可以认为每种硬币的数量是无限的。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>coins = <code>[1, 2, 5]</code>, amount = <code>11</code>\n<strong>输出：</strong><code>3</code> \n<strong>解释：</strong>11 = 5 + 5 + 1</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>coins = <code>[2]</code>, amount = <code>3</code>\n<strong>输出：</strong>-1</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>coins = [1], amount = 0\n<strong>输出：</strong>0\n</pre>\n\n<p><strong>示例 4：</strong></p>\n\n<pre>\n<strong>输入：</strong>coins = [1], amount = 1\n<strong>输出：</strong>1\n</pre>\n\n<p><strong>示例 5：</strong></p>\n\n<pre>\n<strong>输入：</strong>coins = [1], amount = 2\n<strong>输出：</strong>2\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 <= coins.length <= 12</code></li>\n\t<li><code>1 <= coins[i] <= 2<sup>31</sup> - 1</code></li>\n\t<li><code>0 <= amount <= 10<sup>4</sup></code></li>\n</ul>\n",
        "level": 2,
        "slug_title": "coin-change",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1682,
      "value": 35,
      "time": "2022-05-26T15:12:32.285000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1682,
        "frontend_question_id": "2",
        "question_id": 2,
        "title": "两数相加",
        "content": "<p>给你两个 <strong>非空</strong> 的链表，表示两个非负的整数。它们每位数字都是按照 <strong>逆序</strong> 的方式存储的，并且每个节点只能存储 <strong>一位</strong> 数字。</p>\n\n<p>请你将两个数相加，并以相同形式返回一个表示和的链表。</p>\n\n<p>你可以假设除了数字 0 之外，这两个数都不会以 0 开头。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/01/02/addtwonumber1.jpg\" style=\"width: 483px; height: 342px;\" />\n<pre>\n<strong>输入：</strong>l1 = [2,4,3], l2 = [5,6,4]\n<strong>输出：</strong>[7,0,8]\n<strong>解释：</strong>342 + 465 = 807.\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>l1 = [0], l2 = [0]\n<strong>输出：</strong>[0]\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]\n<strong>输出：</strong>[8,9,9,9,0,0,0,1]\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li>每个链表中的节点数在范围 <code>[1, 100]</code> 内</li>\n\t<li><code>0 <= Node.val <= 9</code></li>\n\t<li>题目数据保证列表表示的数字不含前导零</li>\n</ul>\n",
        "level": 2,
        "slug_title": "add-two-numbers",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1680,
      "value": 35,
      "time": "2022-05-11T16:00:00Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1680,
        "frontend_question_id": "4",
        "question_id": 4,
        "title": "寻找两个正序数组的中位数",
        "content": "<p>给定两个大小分别为 <code>m</code> 和 <code>n</code> 的正序（从小到大）数组 <code>nums1</code> 和 <code>nums2</code>。请你找出并返回这两个正序数组的 <strong>中位数</strong> 。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums1 = [1,3], nums2 = [2]\n<strong>输出：</strong>2.00000\n<strong>解释：</strong>合并数组 = [1,2,3] ，中位数 2\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums1 = [1,2], nums2 = [3,4]\n<strong>输出：</strong>2.50000\n<strong>解释：</strong>合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums1 = [0,0], nums2 = [0,0]\n<strong>输出：</strong>0.00000\n</pre>\n\n<p><strong>示例 4：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums1 = [], nums2 = [1]\n<strong>输出：</strong>1.00000\n</pre>\n\n<p><strong>示例 5：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums1 = [2], nums2 = []\n<strong>输出：</strong>2.00000\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>nums1.length == m</code></li>\n\t<li><code>nums2.length == n</code></li>\n\t<li><code>0 <= m <= 1000</code></li>\n\t<li><code>0 <= n <= 1000</code></li>\n\t<li><code>1 <= m + n <= 2000</code></li>\n\t<li><code>-10<sup>6</sup> <= nums1[i], nums2[i] <= 10<sup>6</sup></code></li>\n</ul>\n\n<p> </p>\n\n<p><strong>进阶：</strong>你能设计一个时间复杂度为 <code>O(log (m+n))</code> 的算法解决此问题吗？</p>\n",
        "level": 3,
        "slug_title": "median-of-two-sorted-arrays",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1645,
      "value": 35,
      "time": "2022-05-05T15:19:26.308000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1645,
        "frontend_question_id": "39",
        "question_id": 39,
        "title": "组合总和",
        "content": "<p>给定一个<strong>无重复元素</strong>的正整数数组 <code>candidates</code> 和一个正整数 <code>target</code> ，找出 <code>candidates</code> 中所有可以使数字和为目标数 <code>target</code> 的唯一组合。</p>\n\n<p><code>candidates</code> 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。 </p>\n\n<p>对于给定的输入，保证和为 <code>target</code> 的唯一组合数少于 <code>150</code> 个。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入: </strong>candidates = <code>[2,3,6,7], </code>target = <code>7</code>\n<strong>输出: </strong>[[7],[2,2,3]]\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入: </strong>candidates = [2,3,5]<code>, </code>target = 8\n<strong>输出: </strong>[[2,2,2,2],[2,3,3],[3,5]]</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入: </strong>candidates = <code>[2], </code>target = 1\n<strong>输出: </strong>[]\n</pre>\n\n<p><strong>示例 4：</strong></p>\n\n<pre>\n<strong>输入: </strong>candidates = <code>[1], </code>target = <code>1</code>\n<strong>输出: </strong>[[1]]\n</pre>\n\n<p><strong>示例 5：</strong></p>\n\n<pre>\n<strong>输入: </strong>candidates = <code>[1], </code>target = <code>2</code>\n<strong>输出: </strong>[[1,1]]\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 <= candidates.length <= 30</code></li>\n\t<li><code>1 <= candidates[i] <= 200</code></li>\n\t<li><code>candidate</code> 中的每个元素都是独一无二的。</li>\n\t<li><code>1 <= target <= 500</code></li>\n</ul>\n",
        "level": 2,
        "slug_title": "combination-sum",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1562,
      "value": 33,
      "time": "2022-05-09T16:00:00Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1562,
        "frontend_question_id": "122",
        "question_id": 122,
        "title": "买卖股票的最佳时机 II",
        "content": "<p>给定一个数组 <code>prices</code> ，其中 <code>prices[i]</code> 是一支给定股票第 <code>i</code> 天的价格。</p>\n\n<p>设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。</p>\n\n<p><strong>注意：</strong>你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。</p>\n\n<p> </p>\n\n<p><strong>示例 1:</strong></p>\n\n<pre>\n<strong>输入:</strong> prices = [7,1,5,3,6,4]\n<strong>输出:</strong> 7\n<strong>解释:</strong> 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。\n     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。\n</pre>\n\n<p><strong>示例 2:</strong></p>\n\n<pre>\n<strong>输入:</strong> prices = [1,2,3,4,5]\n<strong>输出:</strong> 4\n<strong>解释:</strong> 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。\n     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。\n</pre>\n\n<p><strong>示例 3:</strong></p>\n\n<pre>\n<strong>输入:</strong> prices = [7,6,4,3,1]\n<strong>输出:</strong> 0\n<strong>解释:</strong> 在这种情况下, 没有交易完成, 所以最大利润为 0。</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 <= prices.length <= 3 * 10<sup>4</sup></code></li>\n\t<li><code>0 <= prices[i] <= 10<sup>4</sup></code></li>\n</ul>\n",
        "level": 1,
        "slug_title": "best-time-to-buy-and-sell-stock-ii",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1903,
      "value": 33,
      "time": "2022-04-23T16:00:00Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1903,
        "frontend_question_id": "补充题1",
        "question_id": 99990001,
        "title": "排序奇升偶降链表",
        "content": null,
        "level": 2,
        "slug_title": "https://mp.weixin.qq.com/s/0WVa2wIAeG0nYnVndZiEXQ",
        "expand": true
      },
      "comment_count": 0
    },
    {
      "id": 1614,
      "value": 33,
      "time": "2022-04-11T08:41:04.548000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1614,
        "frontend_question_id": "70",
        "question_id": 70,
        "title": "爬楼梯",
        "content": "<p>假设你正在爬楼梯。需要 <em>n</em>&nbsp;阶你才能到达楼顶。</p>\n\n<p>每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？</p>\n\n<p><strong>注意：</strong>给定 <em>n</em> 是一个正整数。</p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre><strong>输入：</strong> 2\n<strong>输出：</strong> 2\n<strong>解释：</strong> 有两种方法可以爬到楼顶。\n1.  1 阶 + 1 阶\n2.  2 阶</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre><strong>输入：</strong> 3\n<strong>输出：</strong> 3\n<strong>解释：</strong> 有三种方法可以爬到楼顶。\n1.  1 阶 + 1 阶 + 1 阶\n2.  1 阶 + 2 阶\n3.  2 阶 + 1 阶\n</pre>\n",
        "level": 1,
        "slug_title": "climbing-stairs",
        "expand": false
      },
      "comment_count": 0
    }
  ],
  "finished": [
    0,
    0,
    0
  ]
}