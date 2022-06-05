export default {
  "count": 681,
  "list": [
    {
      "id": 1485,
      "value": 68,
      "time": "2022-05-15T16:00:00Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1485,
        "frontend_question_id": "199",
        "question_id": 199,
        "title": "二叉树的右视图",
        "content": "<p>给定一个二叉树的 <strong>根节点</strong> <code>root</code>，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。</p>\n\n<p> </p>\n\n<p><strong>示例 1:</strong></p>\n\n<p><img src=\"https://assets.leetcode.com/uploads/2021/02/14/tree.jpg\" style=\"width: 270px; \" /></p>\n\n<pre>\n<strong>输入:</strong> [1,2,3,null,5,null,4]\n<strong>输出:</strong> [1,3,4]\n</pre>\n\n<p><strong>示例 2:</strong></p>\n\n<pre>\n<strong>输入:</strong> [1,null,3]\n<strong>输出:</strong> [1,3]\n</pre>\n\n<p><strong>示例 3:</strong></p>\n\n<pre>\n<strong>输入:</strong> []\n<strong>输出:</strong> []\n</pre>\n\n<p> </p>\n\n<p><strong>提示:</strong></p>\n\n<ul>\n\t<li>二叉树的节点个数的范围是 <code>[0,100]</code></li>\n\t<li><meta charset=\"UTF-8\" /><code>-100 <= Node.val <= 100</code> </li>\n</ul>\n",
        "level": 2,
        "slug_title": "binary-tree-right-side-view",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1541,
      "value": 66,
      "time": "2022-06-05T07:47:38.284000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1541,
        "frontend_question_id": "143",
        "question_id": 143,
        "title": "重排链表",
        "content": "<p>给定一个单链表 <code>L</code><em> </em>的头节点 <code>head</code> ，单链表 <code>L</code> 表示为：</p>\n\n<p><code> L<sub>0 </sub>→ L<sub>1 </sub>→ … → L<sub>n-1 </sub>→ L<sub>n </sub></code><br />\n请将其重新排列后变为：</p>\n\n<p><code>L<sub>0 </sub>→ L<sub>n </sub>→ L<sub>1 </sub>→ L<sub>n-1 </sub>→ L<sub>2 </sub>→ L<sub>n-2 </sub>→ …</code></p>\n\n<p>不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。</p>\n\n<p> </p>\n\n<p><strong>示例 1:</strong></p>\n\n<p><img alt=\"\" src=\"https://pic.leetcode-cn.com/1626420311-PkUiGI-image.png\" style=\"width: 240px; \" /></p>\n\n<pre>\n<strong>输入: </strong>head = [1,2,3,4]\n<strong>输出: </strong>[1,4,2,3]</pre>\n\n<p><strong>示例 2:</strong></p>\n\n<p><img alt=\"\" src=\"https://pic.leetcode-cn.com/1626420320-YUiulT-image.png\" style=\"width: 320px; \" /></p>\n\n<pre>\n<strong>输入: </strong>head = [1,2,3,4,5]\n<strong>输出: </strong>[1,5,2,4,3]</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li>链表的长度范围为 <code>[1, 5 * 10<sup>4</sup>]</code></li>\n\t<li><code>1 <= node.val <= 1000</code></li>\n</ul>\n",
        "level": 2,
        "slug_title": "reorder-list",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1664,
      "value": 66,
      "time": "2022-05-19T11:52:52.945000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1664,
        "frontend_question_id": "20",
        "question_id": 20,
        "title": "有效的括号",
        "content": "<p>给定一个只包括 <code>'('</code>，<code>')'</code>，<code>'{'</code>，<code>'}'</code>，<code>'['</code>，<code>']'</code> 的字符串 <code>s</code> ，判断字符串是否有效。</p>\n\n<p>有效字符串需满足：</p>\n\n<ol>\n\t<li>左括号必须用相同类型的右括号闭合。</li>\n\t<li>左括号必须以正确的顺序闭合。</li>\n</ol>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>s = \"()\"\n<strong>输出：</strong>true\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>s = \"()[]{}\"\n<strong>输出：</strong>true\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>s = \"(]\"\n<strong>输出：</strong>false\n</pre>\n\n<p><strong>示例 4：</strong></p>\n\n<pre>\n<strong>输入：</strong>s = \"([)]\"\n<strong>输出：</strong>false\n</pre>\n\n<p><strong>示例 5：</strong></p>\n\n<pre>\n<strong>输入：</strong>s = \"{[]}\"\n<strong>输出：</strong>true</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 <= s.length <= 10<sup>4</sup></code></li>\n\t<li><code>s</code> 仅由括号 <code>'()[]{}'</code> 组成</li>\n</ul>\n",
        "level": 1,
        "slug_title": "valid-parentheses",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1582,
      "value": 64,
      "time": "2022-05-25T16:00:00Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1582,
        "frontend_question_id": "102",
        "question_id": 102,
        "title": "二叉树的层序遍历",
        "content": "<p>给你一个二叉树，请你返回其按 <strong>层序遍历</strong> 得到的节点值。 （即逐层地，从左到右访问所有节点）。</p>\n\n<p> </p>\n\n<p><strong>示例：</strong><br />\n二叉树：<code>[3,9,20,null,null,15,7]</code>,</p>\n\n<pre>\n    3\n   / \\\n  9  20\n    /  \\\n   15   7\n</pre>\n\n<p>返回其层序遍历结果：</p>\n\n<pre>\n[\n  [3],\n  [9,20],\n  [15,7]\n]\n</pre>\n",
        "level": 2,
        "slug_title": "binary-tree-level-order-traversal",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1653,
      "value": 62,
      "time": "2022-05-23T08:06:40.020000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1653,
        "frontend_question_id": "31",
        "question_id": 31,
        "title": "下一个排列",
        "content": "<p>实现获取 <strong>下一个排列</strong> 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列（即，组合出下一个更大的整数）。</p>\n\n<p>如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。</p>\n\n<p>必须<strong><a href=\"https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95\" target=\"_blank\"> 原地 </a></strong>修改，只允许使用额外常数空间。</p>\n\n<p>&nbsp;</p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [1,2,3]\n<strong>输出：</strong>[1,3,2]\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [3,2,1]\n<strong>输出：</strong>[1,2,3]\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [1,1,5]\n<strong>输出：</strong>[1,5,1]\n</pre>\n\n<p><strong>示例 4：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [1]\n<strong>输出：</strong>[1]\n</pre>\n\n<p>&nbsp;</p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 100</code></li>\n\t<li><code>0 &lt;= nums[i] &lt;= 100</code></li>\n</ul>\n",
        "level": 2,
        "slug_title": "next-permutation",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1663,
      "value": 58,
      "time": "2022-06-01T13:22:43.683000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1663,
        "frontend_question_id": "21",
        "question_id": 21,
        "title": "合并两个有序链表",
        "content": "<p>将两个升序链表合并为一个新的 <strong>升序</strong> 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 </p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg\" style=\"width: 662px; height: 302px;\" />\n<pre>\n<strong>输入：</strong>l1 = [1,2,4], l2 = [1,3,4]\n<strong>输出：</strong>[1,1,2,3,4,4]\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>l1 = [], l2 = []\n<strong>输出：</strong>[]\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>l1 = [], l2 = [0]\n<strong>输出：</strong>[0]\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li>两个链表的节点数目范围是 <code>[0, 50]</code></li>\n\t<li><code>-100 <= Node.val <= 100</code></li>\n\t<li><code>l1</code> 和 <code>l2</code> 均按 <strong>非递减顺序</strong> 排列</li>\n</ul>\n",
        "level": 1,
        "slug_title": "merge-two-sorted-lists",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1596,
      "value": 58,
      "time": "2022-05-23T05:24:09.847000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1596,
        "frontend_question_id": "88",
        "question_id": 88,
        "title": "合并两个有序数组",
        "content": "<p>给你两个按 <strong>非递减顺序</strong> 排列的整数数组&nbsp;<code>nums1</code><em> </em>和 <code>nums2</code>，另有两个整数 <code>m</code> 和 <code>n</code> ，分别表示 <code>nums1</code> 和 <code>nums2</code> 中的元素数目。</p>\n\n<p>请你 <strong>合并</strong> <code>nums2</code><em> </em>到 <code>nums1</code> 中，使合并后的数组同样按 <strong>非递减顺序</strong> 排列。</p>\n\n<p><strong>注意：</strong>最终，合并后数组不应由函数返回，而是存储在数组 <code>nums1</code> 中。为了应对这种情况，<code>nums1</code> 的初始长度为 <code>m + n</code>，其中前 <code>m</code> 个元素表示应合并的元素，后 <code>n</code> 个元素为 <code>0</code> ，应忽略。<code>nums2</code> 的长度为 <code>n</code> 。</p>\n\n<p>&nbsp;</p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3\n<strong>输出：</strong>[1,2,2,3,5,6]\n<strong>解释：</strong>需要合并 [1,2,3] 和 [2,5,6] 。\n合并结果是 [<em><strong>1</strong></em>,<em><strong>2</strong></em>,2,<em><strong>3</strong></em>,5,6] ，其中斜体加粗标注的为 nums1 中的元素。\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums1 = [1], m = 1, nums2 = [], n = 0\n<strong>输出：</strong>[1]\n<strong>解释：</strong>需要合并 [1] 和 [] 。\n合并结果是 [1] 。\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums1 = [0], m = 0, nums2 = [1], n = 1\n<strong>输出：</strong>[1]\n<strong>解释：</strong>需要合并的数组是 [] 和 [1] 。\n合并结果是 [1] 。\n注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。\n</pre>\n\n<p>&nbsp;</p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>nums1.length == m + n</code></li>\n\t<li><code>nums2.length == n</code></li>\n\t<li><code>0 &lt;= m, n &lt;= 200</code></li>\n\t<li><code>1 &lt;= m + n &lt;= 200</code></li>\n\t<li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[j] &lt;= 10<sup>9</sup></code></li>\n</ul>\n\n<p>&nbsp;</p>\n\n<p><strong>进阶：</strong>你可以设计实现一个时间复杂度为 <code>O(m + n)</code> 的算法解决此问题吗？</p>\n",
        "level": 1,
        "slug_title": "merge-sorted-array",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1643,
      "value": 56,
      "time": "2022-05-09T10:35:48.264000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1643,
        "frontend_question_id": "41",
        "question_id": 41,
        "title": "缺失的第一个正数",
        "content": "<p>给你一个未排序的整数数组 <code>nums</code> ，请你找出其中没有出现的最小的正整数。</p>\n请你实现时间复杂度为 <code>O(n)</code> 并且只使用常数级别额外空间的解决方案。\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [1,2,0]\n<strong>输出：</strong>3\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [3,4,-1,1]\n<strong>输出：</strong>2\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [7,8,9,11,12]\n<strong>输出：</strong>1\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 <= nums.length <= 5 * 10<sup>5</sup></code></li>\n\t<li><code>-2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1</code></li>\n</ul>\n",
        "level": 3,
        "slug_title": "first-missing-positive",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1560,
      "value": 55,
      "time": "2022-05-22T16:00:00Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1560,
        "frontend_question_id": "124",
        "question_id": 124,
        "title": "二叉树中的最大路径和",
        "content": "<p><strong>路径</strong> 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 <strong>至多出现一次</strong> 。该路径<strong> 至少包含一个 </strong>节点，且不一定经过根节点。</p>\n\n<p><strong>路径和</strong> 是路径中各节点值的总和。</p>\n\n<p>给你一个二叉树的根节点 <code>root</code> ，返回其 <strong>最大路径和</strong> 。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg\" style=\"width: 322px; height: 182px;\" />\n<pre>\n<strong>输入：</strong>root = [1,2,3]\n<strong>输出：</strong>6\n<strong>解释：</strong>最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6</pre>\n\n<p><strong>示例 2：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg\" />\n<pre>\n<strong>输入：</strong>root = [-10,9,20,null,null,15,7]\n<strong>输出：</strong>42\n<strong>解释：</strong>最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li>树中节点数目范围是 <code>[1, 3 * 10<sup>4</sup>]</code></li>\n\t<li><code>-1000 <= Node.val <= 1000</code></li>\n</ul>\n",
        "level": 3,
        "slug_title": "binary-tree-maximum-path-sum",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1269,
      "value": 55,
      "time": "2022-05-17T01:55:26.199000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1269,
        "frontend_question_id": "415",
        "question_id": 415,
        "title": "字符串相加",
        "content": "<p>给定两个字符串形式的非负整数&nbsp;<code>num1</code> 和<code>num2</code>&nbsp;，计算它们的和并同样以字符串形式返回。</p>\n\n<p>你不能使用任何內建的用于处理大整数的库（比如 <code>BigInteger</code>），&nbsp;也不能直接将输入的字符串转换为整数形式。</p>\n\n<p>&nbsp;</p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>num1 = \"11\", num2 = \"123\"\n<strong>输出：</strong>\"134\"\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>num1 = \"456\", num2 = \"77\"\n<strong>输出：</strong>\"533\"\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>num1 = \"0\", num2 = \"0\"\n<strong>输出：</strong>\"0\"\n</pre>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= num1.length, num2.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>num1</code> 和<code>num2</code> 都只包含数字&nbsp;<code>0-9</code></li>\n\t<li><code>num1</code> 和<code>num2</code> 都不包含任何前导零</li>\n</ul>\n",
        "level": 1,
        "slug_title": "add-strings",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1592,
      "value": 52,
      "time": "2022-05-12T05:09:59.578000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1592,
        "frontend_question_id": "92",
        "question_id": 92,
        "title": "反转链表 II",
        "content": "给你单链表的头指针 <code>head</code> 和两个整数 <code>left</code> 和 <code>right</code> ，其中 <code>left <= right</code> 。请你反转从位置 <code>left</code> 到位置 <code>right</code> 的链表节点，返回 <strong>反转后的链表</strong> 。\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/02/19/rev2ex2.jpg\" style=\"width: 542px; height: 222px;\" />\n<pre>\n<strong>输入：</strong>head = [1,2,3,4,5], left = 2, right = 4\n<strong>输出：</strong>[1,4,3,2,5]\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>head = [5], left = 1, right = 1\n<strong>输出：</strong>[5]\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li>链表中节点数目为 <code>n</code></li>\n\t<li><code>1 <= n <= 500</code></li>\n\t<li><code>-500 <= Node.val <= 500</code></li>\n\t<li><code>1 <= left <= right <= n</code></li>\n</ul>\n\n<p> </p>\n\n<p><strong>进阶：</strong> 你可以使用一趟扫描完成反转吗？</p>\n",
        "level": 2,
        "slug_title": "reverse-linked-list-ii",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1543,
      "value": 51,
      "time": "2022-04-26T14:21:27.516000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1543,
        "frontend_question_id": "141",
        "question_id": 141,
        "title": "环形链表",
        "content": "<p>给定一个链表，判断链表中是否有环。</p>\n\n<p>如果链表中有某个节点，可以通过连续跟踪 <code>next</code> 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 <code>pos</code> 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 <code>pos</code> 是 <code>-1</code>，则在该链表中没有环。<strong>注意：<code>pos</code> 不作为参数进行传递</strong>，仅仅是为了标识链表的实际情况。</p>\n\n<p>如果链表中存在环，则返回 <code>true</code> 。 否则，返回 <code>false</code> 。</p>\n\n<p>&nbsp;</p>\n\n<p><strong>进阶：</strong></p>\n\n<p>你能用 <em>O(1)</em>（即，常量）内存解决此问题吗？</p>\n\n<p>&nbsp;</p>\n\n<p><strong>示例 1：</strong></p>\n\n<p><img alt=\"\" src=\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png\" style=\"height: 97px; width: 300px;\"></p>\n\n<pre><strong>输入：</strong>head = [3,2,0,-4], pos = 1\n<strong>输出：</strong>true\n<strong>解释：</strong>链表中有一个环，其尾部连接到第二个节点。\n</pre>\n\n<p><strong>示例&nbsp;2：</strong></p>\n\n<p><img alt=\"\" src=\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png\" style=\"height: 74px; width: 141px;\"></p>\n\n<pre><strong>输入：</strong>head = [1,2], pos = 0\n<strong>输出：</strong>true\n<strong>解释：</strong>链表中有一个环，其尾部连接到第一个节点。\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<p><img alt=\"\" src=\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png\" style=\"height: 45px; width: 45px;\"></p>\n\n<pre><strong>输入：</strong>head = [1], pos = -1\n<strong>输出：</strong>false\n<strong>解释：</strong>链表中没有环。\n</pre>\n\n<p>&nbsp;</p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li>链表中节点的数目范围是 <code>[0, 10<sup>4</sup>]</code></li>\n\t<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>\n\t<li><code>pos</code> 为 <code>-1</code> 或者链表中的一个 <strong>有效索引</strong> 。</li>\n</ul>\n",
        "level": 1,
        "slug_title": "linked-list-cycle",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1628,
      "value": 49,
      "time": "2022-05-16T10:52:33.264000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1628,
        "frontend_question_id": "56",
        "question_id": 56,
        "title": "合并区间",
        "content": "<p>以数组 <code>intervals</code> 表示若干个区间的集合，其中单个区间为 <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>intervals = [[1,3],[2,6],[8,10],[15,18]]\n<strong>输出：</strong>[[1,6],[8,10],[15,18]]\n<strong>解释：</strong>区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>intervals = [[1,4],[4,5]]\n<strong>输出：</strong>[[1,5]]\n<strong>解释：</strong>区间 [1,4] 和 [4,5] 可被视为重叠区间。</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 <= intervals.length <= 10<sup>4</sup></code></li>\n\t<li><code>intervals[i].length == 2</code></li>\n\t<li><code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>4</sup></code></li>\n</ul>\n",
        "level": 2,
        "slug_title": "merge-intervals",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1615,
      "value": 49,
      "time": "2022-04-17T16:00:00Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1615,
        "frontend_question_id": "69",
        "question_id": 69,
        "title": "x 的平方根",
        "content": "<p>给你一个非负整数 <code>x</code> ，计算并返回&nbsp;<code>x</code>&nbsp;的 <strong>平方根</strong> 。</p>\n\n<p>由于返回类型是整数，结果只保留 <strong>整数部分 </strong>，小数部分将被 <strong>舍去 。</strong></p>\n\n<p><strong>注意：</strong>不允许使用任何内置指数函数和算符，例如 <code>pow(x, 0.5)</code> 或者 <code>x ** 0.5</code> 。</p>\n\n<p>&nbsp;</p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>x = 4\n<strong>输出：</strong>2\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>x = 8\n<strong>输出：</strong>2\n<strong>解释：</strong>8 的平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。\n</pre>\n\n<p>&nbsp;</p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= x &lt;= 2<sup>31</sup> - 1</code></li>\n</ul>\n",
        "level": 1,
        "slug_title": "sqrtx",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1555,
      "value": 48,
      "time": "2022-05-12T16:00:00Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1555,
        "frontend_question_id": "129",
        "question_id": 129,
        "title": "求根到叶子节点数字之和",
        "content": "给你一个二叉树的根节点 <code>root</code> ，树中每个节点都存放有一个 <code>0</code> 到 <code>9</code> 之间的数字。\n<div class=\"original__bRMd\">\n<div>\n<p>每条从根节点到叶节点的路径都代表一个数字：</p>\n\n<ul>\n\t<li>例如，从根节点到叶节点的路径 <code>1 -> 2 -> 3</code> 表示数字 <code>123</code> 。</li>\n</ul>\n\n<p>计算从根节点到叶节点生成的 <strong>所有数字之和</strong> 。</p>\n\n<p><strong>叶节点</strong> 是指没有子节点的节点。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/02/19/num1tree.jpg\" style=\"width: 212px; height: 182px;\" />\n<pre>\n<strong>输入：</strong>root = [1,2,3]\n<strong>输出：</strong>25\n<strong>解释：</strong>\n从根到叶子节点路径 <code>1->2</code> 代表数字 <code>12</code>\n从根到叶子节点路径 <code>1->3</code> 代表数字 <code>13</code>\n因此，数字总和 = 12 + 13 = <code>25</code></pre>\n\n<p><strong>示例 2：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/02/19/num2tree.jpg\" style=\"width: 292px; height: 302px;\" />\n<pre>\n<strong>输入：</strong>root = [4,9,0,5,1]\n<strong>输出：</strong>1026\n<strong>解释：</strong>\n从根到叶子节点路径 <code>4->9->5</code> 代表数字 495\n从根到叶子节点路径 <code>4->9->1</code> 代表数字 491\n从根到叶子节点路径 <code>4->0</code> 代表数字 40\n因此，数字总和 = 495 + 491 + 40 = <code>1026</code>\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li>树中节点的数目在范围 <code>[1, 1000]</code> 内</li>\n\t<li><code>0 <= Node.val <= 9</code></li>\n\t<li>树的深度不超过 <code>10</code></li>\n</ul>\n</div>\n</div>\n",
        "level": 2,
        "slug_title": "sum-root-to-leaf-numbers",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1579,
      "value": 46,
      "time": "2022-05-24T13:07:32.671000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1579,
        "frontend_question_id": "105",
        "question_id": 105,
        "title": "从前序与中序遍历序列构造二叉树",
        "content": "<p>给定一棵树的前序遍历 <code>preorder</code> 与中序遍历  <code>inorder</code>。请构造二叉树并返回其根节点。</p>\n\n<p> </p>\n\n<p><strong>示例 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/02/19/tree.jpg\" />\n<pre>\n<strong>Input:</strong> preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]\n<strong>Output:</strong> [3,9,20,null,null,15,7]\n</pre>\n\n<p><strong>示例 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> preorder = [-1], inorder = [-1]\n<strong>Output:</strong> [-1]\n</pre>\n\n<p> </p>\n\n<p><strong>提示:</strong></p>\n\n<ul>\n\t<li><code>1 <= preorder.length <= 3000</code></li>\n\t<li><code>inorder.length == preorder.length</code></li>\n\t<li><code>-3000 <= preorder[i], inorder[i] <= 3000</code></li>\n\t<li><code>preorder</code> 和 <code>inorder</code> 均无重复元素</li>\n\t<li><code>inorder</code> 均出现在 <code>preorder</code></li>\n\t<li><code>preorder</code> 保证为二叉树的前序遍历序列</li>\n\t<li><code>inorder</code> 保证为二叉树的中序遍历序列</li>\n</ul>\n",
        "level": 2,
        "slug_title": "construct-binary-tree-from-preorder-and-inorder-traversal",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1536,
      "value": 44,
      "time": "2022-05-31T07:04:08.110000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1536,
        "frontend_question_id": "148",
        "question_id": 148,
        "title": "排序链表",
        "content": "<p>给你链表的头结点 <code>head</code> ，请将其按 <strong>升序</strong> 排列并返回 <strong>排序后的链表</strong> 。</p>\n\n<p><b>进阶：</b></p>\n\n<ul>\n\t<li>你可以在 <code>O(n log n)</code> 时间复杂度和常数级空间复杂度下，对链表进行排序吗？</li>\n</ul>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg\" style=\"width: 302px; \"/>\n<pre>\n<b>输入：</b>head = [4,2,1,3]\n<b>输出：</b>[1,2,3,4]\n</pre>\n\n<p><strong>示例 2：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg\" style=\"width: 402px; \" />\n<pre>\n<b>输入：</b>head = [-1,5,3,4,0]\n<b>输出：</b>[-1,0,3,4,5]\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<b>输入：</b>head = []\n<b>输出：</b>[]\n</pre>\n\n<p> </p>\n\n<p><b>提示：</b></p>\n\n<ul>\n\t<li>链表中节点的数目在范围 <code>[0, 5 * 10<sup>4</sup>]</code> 内</li>\n\t<li><code>-10<sup>5</sup> <= Node.val <= 10<sup>5</sup></code></li>\n</ul>\n",
        "level": 2,
        "slug_title": "sort-list",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1463,
      "value": 44,
      "time": "2022-05-27T13:47:46.178000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1463,
        "frontend_question_id": "221",
        "question_id": 221,
        "title": "最大正方形",
        "content": "<p>在一个由 <code>'0'</code> 和 <code>'1'</code> 组成的二维矩阵内，找到只包含 <code>'1'</code> 的最大正方形，并返回其面积。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/26/max1grid.jpg\" style=\"width: 400px; height: 319px;\" />\n<pre>\n<strong>输入：</strong>matrix = [[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]\n<strong>输出：</strong>4\n</pre>\n\n<p><strong>示例 2：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/26/max2grid.jpg\" style=\"width: 165px; height: 165px;\" />\n<pre>\n<strong>输入：</strong>matrix = [[\"0\",\"1\"],[\"1\",\"0\"]]\n<strong>输出：</strong>1\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>matrix = [[\"0\"]]\n<strong>输出：</strong>0\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>m == matrix.length</code></li>\n\t<li><code>n == matrix[i].length</code></li>\n\t<li><code>1 <= m, n <= 300</code></li>\n\t<li><code>matrix[i][j]</code> 为 <code>'0'</code> 或 <code>'1'</code></li>\n</ul>\n",
        "level": 2,
        "slug_title": "maximal-square",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1583,
      "value": 44,
      "time": "2022-04-13T12:46:07.731000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1583,
        "frontend_question_id": "101",
        "question_id": 101,
        "title": "对称二叉树",
        "content": "<p>给定一个二叉树，检查它是否是镜像对称的。</p>\n\n<p>&nbsp;</p>\n\n<p>例如，二叉树&nbsp;<code>[1,2,2,3,4,4,3]</code> 是对称的。</p>\n\n<pre>    1\n   / \\\n  2   2\n / \\ / \\\n3  4 4  3\n</pre>\n\n<p>&nbsp;</p>\n\n<p>但是下面这个&nbsp;<code>[1,2,2,null,3,null,3]</code> 则不是镜像对称的:</p>\n\n<pre>    1\n   / \\\n  2   2\n   \\   \\\n   3    3\n</pre>\n\n<p>&nbsp;</p>\n\n<p><strong>进阶：</strong></p>\n\n<p>你可以运用递归和迭代两种方法解决这个问题吗？</p>\n",
        "level": 1,
        "slug_title": "symmetric-tree",
        "expand": false
      },
      "comment_count": 0
    },
    {
      "id": 1662,
      "value": 43,
      "time": "2022-05-28T07:22:04.535000Z",
      "status": false,
      "note_status": false,
      "rate": 0,
      "leetcode": {
        "id": 1662,
        "frontend_question_id": "22",
        "question_id": 22,
        "title": "括号生成",
        "content": "<p>数字 <code>n</code>&nbsp;代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 <strong>有效的 </strong>括号组合。</p>\n\n<p>有效括号组合需满足：左括号必须以正确的顺序闭合。</p>\n\n<p>&nbsp;</p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>n = 3\n<strong>输出：</strong>[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>n = 1\n<strong>输出：</strong>[\"()\"]\n</pre>\n\n<p>&nbsp;</p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= n &lt;= 8</code></li>\n</ul>\n",
        "level": 2,
        "slug_title": "generate-parentheses",
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