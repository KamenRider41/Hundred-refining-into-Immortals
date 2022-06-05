export default
  {
    "count": 681,
    "list": [
      {
        "id": 1681,
        "value": 274,
        "time": "2022-06-05T05:26:36.297000Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1681,
          "frontend_question_id": "3",
          "question_id": 3,
          "title": "无重复字符的最长子串",
          "content": "<p>给定一个字符串 <code>s</code> ，请你找出其中不含有重复字符的 <strong>最长子串 </strong>的长度。</p>\n\n<p> </p>\n\n<p><strong>示例 1:</strong></p>\n\n<pre>\n<strong>输入: </strong>s = \"abcabcbb\"\n<strong>输出: </strong>3 \n<strong>解释:</strong> 因为无重复字符的最长子串是 <code>\"abc\"，所以其</code>长度为 3。\n</pre>\n\n<p><strong>示例 2:</strong></p>\n\n<pre>\n<strong>输入: </strong>s = \"bbbbb\"\n<strong>输出: </strong>1\n<strong>解释: </strong>因为无重复字符的最长子串是 <code>\"b\"</code>，所以其长度为 1。\n</pre>\n\n<p><strong>示例 3:</strong></p>\n\n<pre>\n<strong>输入: </strong>s = \"pwwkew\"\n<strong>输出: </strong>3\n<strong>解释: </strong>因为无重复字符的最长子串是 <code>\"wke\"</code>，所以其长度为 3。\n     请注意，你的答案必须是 <strong>子串 </strong>的长度，<code>\"pwke\"</code> 是一个<em>子序列，</em>不是子串。\n</pre>\n\n<p><strong>示例 4:</strong></p>\n\n<pre>\n<strong>输入: </strong>s = \"\"\n<strong>输出: </strong>0\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>0 <= s.length <= 5 * 10<sup>4</sup></code></li>\n\t<li><code>s</code> 由英文字母、数字、符号和空格组成</li>\n</ul>\n",
          "level": 2,
          "slug_title": "longest-substring-without-repeating-characters",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1538,
        "value": 178,
        "time": "2022-05-25T02:01:44.559000Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1538,
          "frontend_question_id": "146",
          "question_id": 146,
          "title": "LRU缓存机制",
          "content": "<div class=\"title__3Vvk\">运用你所掌握的数据结构，设计和实现一个  <a href=\"https://baike.baidu.com/item/LRU\" target=\"_blank\">LRU (最近最少使用) 缓存机制</a> 。</div>\n\n<div class=\"original__bRMd\">\n<div>\n<p>实现 <code>LRUCache</code> 类：</p>\n\n<ul>\n\t<li><code>LRUCache(int capacity)</code> 以正整数作为容量 <code>capacity</code> 初始化 LRU 缓存</li>\n\t<li><code>int get(int key)</code> 如果关键字 <code>key</code> 存在于缓存中，则返回关键字的值，否则返回 <code>-1</code> 。</li>\n\t<li><code>void put(int key, int value)</code> 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。</li>\n</ul>\n\n<p> </p>\n</div>\n</div>\n\n<p><strong>进阶</strong>：你是否可以在 <code>O(1)</code> 时间复杂度内完成这两种操作？</p>\n\n<p> </p>\n\n<p><strong>示例：</strong></p>\n\n<pre>\n<strong>输入</strong>\n[\"LRUCache\", \"put\", \"put\", \"get\", \"put\", \"get\", \"put\", \"get\", \"get\", \"get\"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]\n<strong>输出</strong>\n[null, null, null, 1, null, -1, null, -1, 3, 4]\n\n<strong>解释</strong>\nLRUCache lRUCache = new LRUCache(2);\nlRUCache.put(1, 1); // 缓存是 {1=1}\nlRUCache.put(2, 2); // 缓存是 {1=1, 2=2}\nlRUCache.get(1);    // 返回 1\nlRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}\nlRUCache.get(2);    // 返回 -1 (未找到)\nlRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}\nlRUCache.get(1);    // 返回 -1 (未找到)\nlRUCache.get(3);    // 返回 3\nlRUCache.get(4);    // 返回 4\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 <= capacity <= 3000</code></li>\n\t<li><code>0 <= key <= 10000</code></li>\n\t<li><code>0 <= value <= 10<sup>5</sup></code></li>\n\t<li>最多调用 <code>2 * 10<sup>5</sup></code> 次 <code>get</code> 和 <code>put</code></li>\n</ul>\n",
          "level": 2,
          "slug_title": "lru-cache",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1659,
        "value": 167,
        "time": "2022-05-31T16:00:00Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1659,
          "frontend_question_id": "25",
          "question_id": 25,
          "title": "K 个一组翻转链表",
          "content": "<p>给你一个链表，每 <em>k </em>个节点一组进行翻转，请你返回翻转后的链表。</p>\n\n<p><em>k </em>是一个正整数，它的值小于或等于链表的长度。</p>\n\n<p>如果节点总数不是 <em>k </em>的整数倍，那么请将最后剩余的节点保持原有顺序。</p>\n\n<p><strong>进阶：</strong></p>\n\n<ul>\n\t<li>你可以设计一个只使用常数额外空间的算法来解决此问题吗？</li>\n\t<li><strong>你不能只是单纯的改变节点内部的值</strong>，而是需要实际进行节点交换。</li>\n</ul>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg\" style=\"width: 542px; height: 222px;\" />\n<pre>\n<strong>输入：</strong>head = [1,2,3,4,5], k = 2\n<strong>输出：</strong>[2,1,4,3,5]\n</pre>\n\n<p><strong>示例 2：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg\" style=\"width: 542px; height: 222px;\" />\n<pre>\n<strong>输入：</strong>head = [1,2,3,4,5], k = 3\n<strong>输出：</strong>[3,2,1,4,5]\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>head = [1,2,3,4,5], k = 1\n<strong>输出：</strong>[1,2,3,4,5]\n</pre>\n\n<p><strong>示例 4：</strong></p>\n\n<pre>\n<strong>输入：</strong>head = [1], k = 1\n<strong>输出：</strong>[1]\n</pre>\n\n<ul>\n</ul>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li>列表中节点的数量在范围 <code>sz</code> 内</li>\n\t<li><code>1 <= sz <= 5000</code></li>\n\t<li><code>0 <= Node.val <= 1000</code></li>\n\t<li><code>1 <= k <= sz</code></li>\n</ul>\n",
          "level": 3,
          "slug_title": "reverse-nodes-in-k-group",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1478,
        "value": 151,
        "time": "2022-05-26T15:29:26.784000Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1478,
          "frontend_question_id": "206",
          "question_id": 206,
          "title": "反转链表",
          "content": "给你单链表的头节点 <code>head</code> ，请你反转链表，并返回反转后的链表。\n<div class=\"original__bRMd\">\n<div>\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg\" style=\"width: 542px; height: 222px;\" />\n<pre>\n<strong>输入：</strong>head = [1,2,3,4,5]\n<strong>输出：</strong>[5,4,3,2,1]\n</pre>\n\n<p><strong>示例 2：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg\" style=\"width: 182px; height: 222px;\" />\n<pre>\n<strong>输入：</strong>head = [1,2]\n<strong>输出：</strong>[2,1]\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>head = []\n<strong>输出：</strong>[]\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li>链表中节点的数目范围是 <code>[0, 5000]</code></li>\n\t<li><code>-5000 <= Node.val <= 5000</code></li>\n</ul>\n\n<p> </p>\n\n<p><strong>进阶：</strong>链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？</p>\n</div>\n</div>\n",
          "level": 1,
          "slug_title": "reverse-linked-list",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1469,
        "value": 143,
        "time": "2022-05-29T16:00:00Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1469,
          "frontend_question_id": "215",
          "question_id": 215,
          "title": "数组中的第K个最大元素",
          "content": "<p>给定整数数组 <code>nums</code> 和整数 <code>k</code>，请返回数组中第 <code><strong>k</strong></code> 个最大的元素。</p>\n\n<p>请注意，你需要找的是数组排序后的第 <code>k</code> 个最大的元素，而不是第 <code>k</code> 个不同的元素。</p>\n\n<p> </p>\n\n<p><strong>示例 1:</strong></p>\n\n<pre>\n<strong>输入:</strong> <code>[3,2,1,5,6,4] 和</code> k = 2\n<strong>输出:</strong> 5\n</pre>\n\n<p><strong>示例 2:</strong></p>\n\n<pre>\n<strong>输入:</strong> <code>[3,2,3,1,2,4,5,5,6] 和</code> k = 4\n<strong>输出:</strong> 4</pre>\n\n<p> </p>\n\n<p><strong>提示： </strong></p>\n\n<ul>\n\t<li><code>1 <= k <= nums.length <= 10<sup>4</sup></code></li>\n\t<li><code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code></li>\n</ul>\n",
          "level": 2,
          "slug_title": "kth-largest-element-in-an-array",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1669,
        "value": 119,
        "time": "2022-05-26T12:59:11.954000Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1669,
          "frontend_question_id": "15",
          "question_id": 15,
          "title": "三数之和",
          "content": "<p>给你一个包含 <code>n</code> 个整数的数组 <code>nums</code>，判断 <code>nums</code> 中是否存在三个元素 <em>a，b，c ，</em>使得 <em>a + b + c = </em>0 ？请你找出所有和为 <code>0</code> 且不重复的三元组。</p>\n\n<p><strong>注意：</strong>答案中不可以包含重复的三元组。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [-1,0,1,2,-1,-4]\n<strong>输出：</strong>[[-1,-1,2],[-1,0,1]]\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = []\n<strong>输出：</strong>[]\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [0]\n<strong>输出：</strong>[]\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>0 <= nums.length <= 3000</code></li>\n\t<li><code>-10<sup>5</sup> <= nums[i] <= 10<sup>5</sup></code></li>\n</ul>\n",
          "level": 2,
          "slug_title": "3sum",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1581,
        "value": 118,
        "time": "2022-05-23T09:54:03.930000Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1581,
          "frontend_question_id": "103",
          "question_id": 103,
          "title": "二叉树的锯齿形层次遍历",
          "content": "<p>给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。</p>\n\n<p>例如：<br />\n给定二叉树 <code>[3,9,20,null,null,15,7]</code>,</p>\n\n<pre>\n    3\n   / \\\n  9  20\n    /  \\\n   15   7\n</pre>\n\n<p>返回锯齿形层序遍历如下：</p>\n\n<pre>\n[\n  [3],\n  [20,9],\n  [15,7]\n]\n</pre>\n",
          "level": 2,
          "slug_title": "binary-tree-zigzag-level-order-traversal",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1563,
        "value": 108,
        "time": "2022-05-09T16:00:00Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1563,
          "frontend_question_id": "121",
          "question_id": 121,
          "title": "买卖股票的最佳时机",
          "content": "<p>给定一个数组 <code>prices</code> ，它的第 <code>i</code> 个元素 <code>prices[i]</code> 表示一支给定股票第 <code>i</code> 天的价格。</p>\n\n<p>你只能选择 <strong>某一天</strong> 买入这只股票，并选择在 <strong>未来的某一个不同的日子</strong> 卖出该股票。设计一个算法来计算你所能获取的最大利润。</p>\n\n<p>返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 <code>0</code> 。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>[7,1,5,3,6,4]\n<strong>输出：</strong>5\n<strong>解释：</strong>在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。\n     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>prices = [7,6,4,3,1]\n<strong>输出：</strong>0\n<strong>解释：</strong>在这种情况下, 没有交易完成, 所以最大利润为 0。\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 <= prices.length <= 10<sup>5</sup></code></li>\n\t<li><code>0 <= prices[i] <= 10<sup>4</sup></code></li>\n</ul>\n",
          "level": 1,
          "slug_title": "best-time-to-buy-and-sell-stock",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1484,
        "value": 96,
        "time": "2022-05-07T13:12:20.273000Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1484,
          "frontend_question_id": "200",
          "question_id": 200,
          "title": "岛屿数量",
          "content": "<p>给你一个由 <code>'1'</code>（陆地）和 <code>'0'</code>（水）组成的的二维网格，请你计算网格中岛屿的数量。</p>\n\n<p>岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。</p>\n\n<p>此外，你可以假设该网格的四条边均被水包围。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>grid = [\n  [\"1\",\"1\",\"1\",\"1\",\"0\"],\n  [\"1\",\"1\",\"0\",\"1\",\"0\"],\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"0\",\"0\",\"0\",\"0\",\"0\"]\n]\n<strong>输出：</strong>1\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>grid = [\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"0\",\"0\",\"1\",\"0\",\"0\"],\n  [\"0\",\"0\",\"0\",\"1\",\"1\"]\n]\n<strong>输出：</strong>3\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>m == grid.length</code></li>\n\t<li><code>n == grid[i].length</code></li>\n\t<li><code>1 <= m, n <= 300</code></li>\n\t<li><code>grid[i][j]</code> 的值为 <code>'0'</code> 或 <code>'1'</code></li>\n</ul>\n",
          "level": 2,
          "slug_title": "number-of-islands",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1651,
        "value": 94,
        "time": "2022-06-01T08:45:20.482000Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1651,
          "frontend_question_id": "33",
          "question_id": 33,
          "title": "搜索旋转排序数组",
          "content": "<p>整数数组 <code>nums</code> 按升序排列，数组中的值 <strong>互不相同</strong> 。</p>\n\n<p>在传递给函数之前，<code>nums</code> 在预先未知的某个下标 <code>k</code>（<code>0 <= k < nums.length</code>）上进行了 <strong>旋转</strong>，使数组变为 <code>[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]</code>（下标 <strong>从 0 开始</strong> 计数）。例如， <code>[0,1,2,4,5,6,7]</code> 在下标 <code>3</code> 处经旋转后可能变为 <code>[4,5,6,7,0,1,2]</code> 。</p>\n\n<p>给你 <strong>旋转后</strong> 的数组 <code>nums</code> 和一个整数 <code>target</code> ，如果 <code>nums</code> 中存在这个目标值 <code>target</code> ，则返回它的下标，否则返回 <code>-1</code> 。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [<code>4,5,6,7,0,1,2]</code>, target = 0\n<strong>输出：</strong>4\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [<code>4,5,6,7,0,1,2]</code>, target = 3\n<strong>输出：</strong>-1</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [1], target = 0\n<strong>输出：</strong>-1\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 <= nums.length <= 5000</code></li>\n\t<li><code>-10^4 <= nums[i] <= 10^4</code></li>\n\t<li><code>nums</code> 中的每个值都 <strong>独一无二</strong></li>\n\t<li>题目数据保证 <code>nums</code> 在预先未知的某个下标上进行了旋转</li>\n\t<li><code>-10^4 <= target <= 10^4</code></li>\n</ul>\n\n<p> </p>\n\n<p><strong>进阶：</strong>你可以设计一个时间复杂度为 <code>O(log n)</code> 的解决方案吗？</p>\n",
          "level": 2,
          "slug_title": "search-in-rotated-sorted-array",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1524,
        "value": 93,
        "time": "2022-04-15T11:07:48.941000Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1524,
          "frontend_question_id": "160",
          "question_id": 160,
          "title": "相交链表",
          "content": "<p>给你两个单链表的头节点 <code>headA</code> 和 <code>headB</code> ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 <code>null</code> 。</p>\n\n<p>图示两个链表在节点 <code>c1</code> 开始相交<strong>：</strong></p>\n\n<p><a href=\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png\" target=\"_blank\"><img alt=\"\" src=\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png\" style=\"height: 130px; width: 400px;\" /></a></p>\n\n<p>题目数据 <strong>保证</strong> 整个链式结构中不存在环。</p>\n\n<p><strong>注意</strong>，函数返回结果后，链表必须 <strong>保持其原始结构</strong> 。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<p><a href=\"https://assets.leetcode.com/uploads/2018/12/13/160_example_1.png\" target=\"_blank\"><img alt=\"\" src=\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_1.png\" style=\"height: 130px; width: 400px;\" /></a></p>\n\n<pre>\n<strong>输入：</strong>intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3\n<strong>输出：</strong>Intersected at '8'\n<strong>解释：</strong>相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。\n从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。\n在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<p><a href=\"https://assets.leetcode.com/uploads/2018/12/13/160_example_2.png\" target=\"_blank\"><img alt=\"\" src=\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_2.png\" style=\"height: 136px; width: 350px;\" /></a></p>\n\n<pre>\n<strong>输入：</strong>intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1\n<strong>输出：</strong>Intersected at '2'\n<strong>解释：</strong>相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。\n从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。\n在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<p><a href=\"https://assets.leetcode.com/uploads/2018/12/13/160_example_3.png\" target=\"_blank\"><img alt=\"\" src=\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_3.png\" style=\"height: 126px; width: 200px;\" /></a></p>\n\n<pre>\n<strong>输入：</strong>intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2\n<strong>输出：</strong>null\n<strong>解释：</strong>从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。\n由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。\n这两个链表不相交，因此返回 null 。\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>listA</code> 中节点数目为 <code>m</code></li>\n\t<li><code>listB</code> 中节点数目为 <code>n</code></li>\n\t<li><code>0 <= m, n <= 3 * 10<sup>4</sup></code></li>\n\t<li><code>1 <= Node.val <= 10<sup>5</sup></code></li>\n\t<li><code>0 <= skipA <= m</code></li>\n\t<li><code>0 <= skipB <= n</code></li>\n\t<li>如果 <code>listA</code> 和 <code>listB</code> 没有交点，<code>intersectVal</code> 为 <code>0</code></li>\n\t<li>如果 <code>listA</code> 和 <code>listB</code> 有交点，<code>intersectVal == listA[skipA + 1] == listB[skipB + 1]</code></li>\n</ul>\n\n<p> </p>\n\n<p><strong>进阶：</strong>你能否设计一个时间复杂度 <code>O(n)</code> 、仅用 <code>O(1)</code> 内存的解决方案？</p>\n",
          "level": 1,
          "slug_title": "intersection-of-two-linked-lists",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1683,
        "value": 87,
        "time": "2022-04-30T14:26:15.437000Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1683,
          "frontend_question_id": "1",
          "question_id": 1,
          "title": "两数之和",
          "content": "<p>给定一个整数数组 <code>nums</code> 和一个整数目标值 <code>target</code>，请你在该数组中找出 <strong>和为目标值 </strong><em><code>target</code></em>  的那 <strong>两个</strong> 整数，并返回它们的数组下标。</p>\n\n<p>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。</p>\n\n<p>你可以按任意顺序返回答案。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [2,7,11,15], target = 9\n<strong>输出：</strong>[0,1]\n<strong>解释：</strong>因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [3,2,4], target = 6\n<strong>输出：</strong>[1,2]\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [3,3], target = 6\n<strong>输出：</strong>[0,1]\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>2 <= nums.length <= 10<sup>4</sup></code></li>\n\t<li><code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code></li>\n\t<li><code>-10<sup>9</sup> <= target <= 10<sup>9</sup></code></li>\n\t<li><strong>只会存在一个有效答案</strong></li>\n</ul>\n\n<p><strong>进阶：</strong>你可以想出一个时间复杂度小于 <code>O(n<sup>2</sup>)</code> 的算法吗？</p>\n",
          "level": 1,
          "slug_title": "two-sum",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1448,
        "value": 85,
        "time": "2022-05-26T11:53:29.055000Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1448,
          "frontend_question_id": "236",
          "question_id": 236,
          "title": "二叉树的最近公共祖先",
          "content": "<p>给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。</p>\n\n<p><a href=\"https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin\" target=\"_blank\">百度百科</a>中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（<strong>一个节点也可以是它自己的祖先</strong>）。”</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2018/12/14/binarytree.png\" style=\"width: 200px; height: 190px;\" />\n<pre>\n<strong>输入：</strong>root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1\n<strong>输出：</strong>3\n<strong>解释：</strong>节点 <code>5 </code>和节点 <code>1 </code>的最近公共祖先是节点 <code>3 。</code>\n</pre>\n\n<p><strong>示例 2：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2018/12/14/binarytree.png\" style=\"width: 200px; height: 190px;\" />\n<pre>\n<strong>输入：</strong>root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4\n<strong>输出：</strong>5\n<strong>解释：</strong>节点 <code>5 </code>和节点 <code>4 </code>的最近公共祖先是节点 <code>5 。</code>因为根据定义最近公共祖先节点可以为节点本身。\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>root = [1,2], p = 1, q = 2\n<strong>输出：</strong>1\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li>树中节点数目在范围 <code>[2, 10<sup>5</sup>]</code> 内。</li>\n\t<li><code>-10<sup>9</sup> <= Node.val <= 10<sup>9</sup></code></li>\n\t<li>所有 <code>Node.val</code> <code>互不相同</code> 。</li>\n\t<li><code>p != q</code></li>\n\t<li><code>p</code> 和 <code>q</code> 均存在于给定的二叉树中。</li>\n</ul>\n",
          "level": 2,
          "slug_title": "lowest-common-ancestor-of-a-binary-tree",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1642,
        "value": 81,
        "time": "2022-05-07T10:56:18.637000Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1642,
          "frontend_question_id": "42",
          "question_id": 42,
          "title": "接雨水",
          "content": "<p>给定 <em>n</em> 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<p><img src=\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png\" style=\"height: 161px; width: 412px;\" /></p>\n\n<pre>\n<strong>输入：</strong>height = [0,1,0,2,1,0,1,3,2,1,2,1]\n<strong>输出：</strong>6\n<strong>解释：</strong>上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 \n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>height = [4,2,0,3,2,5]\n<strong>输出：</strong>9\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>n == height.length</code></li>\n\t<li><code>0 <= n <= 3 * 10<sup>4</sup></code></li>\n\t<li><code>0 <= height[i] <= 10<sup>5</sup></code></li>\n</ul>\n",
          "level": 3,
          "slug_title": "trapping-rain-water",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1630,
        "value": 80,
        "time": "2022-05-31T11:52:10.011000Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1630,
          "frontend_question_id": "54",
          "question_id": 54,
          "title": "螺旋矩阵",
          "content": "<p>给你一个 <code>m</code> 行 <code>n</code> 列的矩阵 <code>matrix</code> ，请按照 <strong>顺时针螺旋顺序</strong> ，返回矩阵中的所有元素。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg\" style=\"width: 242px; height: 242px;\" />\n<pre>\n<strong>输入：</strong>matrix = [[1,2,3],[4,5,6],[7,8,9]]\n<strong>输出：</strong>[1,2,3,6,9,8,7,4,5]\n</pre>\n\n<p><strong>示例 2：</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg\" style=\"width: 322px; height: 242px;\" />\n<pre>\n<strong>输入：</strong>matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n<strong>输出：</strong>[1,2,3,4,8,12,11,10,9,5,6,7]\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>m == matrix.length</code></li>\n\t<li><code>n == matrix[i].length</code></li>\n\t<li><code>1 <= m, n <= 10</code></li>\n\t<li><code>-100 <= matrix[i][j] <= 100</code></li>\n</ul>\n",
          "level": 2,
          "slug_title": "spiral-matrix",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1631,
        "value": 79,
        "time": "2022-05-16T02:13:10.780000Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1631,
          "frontend_question_id": "53",
          "question_id": 53,
          "title": "最大子序和",
          "content": "<p>给定一个整数数组 <code>nums</code> ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [-2,1,-3,4,-1,2,1,-5,4]\n<strong>输出：</strong>6\n<strong>解释：</strong>连续子数组 [4,-1,2,1] 的和最大，为 6 。\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [1]\n<strong>输出：</strong>1\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [0]\n<strong>输出：</strong>0\n</pre>\n\n<p><strong>示例 4：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [-1]\n<strong>输出：</strong>-1\n</pre>\n\n<p><strong>示例 5：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [-100000]\n<strong>输出：</strong>-100000\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 <= nums.length <= 3 * 10<sup>4</sup></code></li>\n\t<li><code>-10<sup>5</sup> <= nums[i] <= 10<sup>5</sup></code></li>\n</ul>\n\n<p> </p>\n\n<p><strong>进阶：</strong>如果你已经实现复杂度为 <code>O(n)</code> 的解法，尝试使用更为精妙的 <strong>分治法</strong> 求解。</p>\n",
          "level": 1,
          "slug_title": "maximum-subarray",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1679,
        "value": 75,
        "time": "2022-06-02T04:25:06.953000Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1679,
          "frontend_question_id": "5",
          "question_id": 5,
          "title": "最长回文子串",
          "content": "<p>给你一个字符串 <code>s</code>，找到 <code>s</code> 中最长的回文子串。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>s = \"babad\"\n<strong>输出：</strong>\"bab\"\n<strong>解释：</strong>\"aba\" 同样是符合题意的答案。\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>s = \"cbbd\"\n<strong>输出：</strong>\"bb\"\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>s = \"a\"\n<strong>输出：</strong>\"a\"\n</pre>\n\n<p><strong>示例 4：</strong></p>\n\n<pre>\n<strong>输入：</strong>s = \"ac\"\n<strong>输出：</strong>\"a\"\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 <= s.length <= 1000</code></li>\n\t<li><code>s</code> 仅由数字和英文字母（大写和/或小写）组成</li>\n</ul>\n",
          "level": 2,
          "slug_title": "longest-palindromic-substring",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1661,
        "value": 72,
        "time": "2022-05-15T15:53:39.879000Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1661,
          "frontend_question_id": "23",
          "question_id": 23,
          "title": "合并K个排序链表",
          "content": "<p>给你一个链表数组，每个链表都已经按升序排列。</p>\n\n<p>请你将所有链表合并到一个升序链表中，返回合并后的链表。</p>\n\n<p>&nbsp;</p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre><strong>输入：</strong>lists = [[1,4,5],[1,3,4],[2,6]]\n<strong>输出：</strong>[1,1,2,3,4,4,5,6]\n<strong>解释：</strong>链表数组如下：\n[\n  1-&gt;4-&gt;5,\n  1-&gt;3-&gt;4,\n  2-&gt;6\n]\n将它们合并到一个有序链表中得到。\n1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre><strong>输入：</strong>lists = []\n<strong>输出：</strong>[]\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre><strong>输入：</strong>lists = [[]]\n<strong>输出：</strong>[]\n</pre>\n\n<p>&nbsp;</p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>k == lists.length</code></li>\n\t<li><code>0 &lt;= k &lt;= 10^4</code></li>\n\t<li><code>0 &lt;= lists[i].length &lt;= 500</code></li>\n\t<li><code>-10^4 &lt;= lists[i][j] &lt;= 10^4</code></li>\n\t<li><code>lists[i]</code> 按 <strong>升序</strong> 排列</li>\n\t<li><code>lists[i].length</code> 的总和不超过 <code>10^4</code></li>\n</ul>\n",
          "level": 3,
          "slug_title": "merge-k-sorted-lists",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1638,
        "value": 71,
        "time": "2022-06-03T08:40:20.579000Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1638,
          "frontend_question_id": "46",
          "question_id": 46,
          "title": "全排列",
          "content": "<p>给定一个不含重复数字的数组 <code>nums</code> ，返回其 <strong>所有可能的全排列</strong> 。你可以 <strong>按任意顺序</strong> 返回答案。</p>\n\n<p> </p>\n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [1,2,3]\n<strong>输出：</strong>[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [0,1]\n<strong>输出：</strong>[[0,1],[1,0]]\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [1]\n<strong>输出：</strong>[[1]]\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 <= nums.length <= 6</code></li>\n\t<li><code>-10 <= nums[i] <= 10</code></li>\n\t<li><code>nums</code> 中的所有整数 <strong>互不相同</strong></li>\n</ul>\n",
          "level": 2,
          "slug_title": "permutations",
          "expand": false
        },
        "comment_count": 0
      },
      {
        "id": 1384,
        "value": 69,
        "time": "2022-05-19T16:00:00Z",
        "status": false,
        "note_status": false,
        "rate": 0,
        "leetcode": {
          "id": 1384,
          "frontend_question_id": "300",
          "question_id": 300,
          "title": "最长上升子序列",
          "content": "<p>给你一个整数数组 <code>nums</code> ，找到其中最长严格递增子序列的长度。</p>\n\n<p>子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，<code>[3,6,2,7]</code> 是数组 <code>[0,3,1,6,2,2,7]</code> 的子序列。</p>\n \n\n<p><strong>示例 1：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [10,9,2,5,3,7,101,18]\n<strong>输出：</strong>4\n<strong>解释：</strong>最长递增子序列是 [2,3,7,101]，因此长度为 4 。\n</pre>\n\n<p><strong>示例 2：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [0,1,0,3,2,3]\n<strong>输出：</strong>4\n</pre>\n\n<p><strong>示例 3：</strong></p>\n\n<pre>\n<strong>输入：</strong>nums = [7,7,7,7,7,7,7]\n<strong>输出：</strong>1\n</pre>\n\n<p> </p>\n\n<p><strong>提示：</strong></p>\n\n<ul>\n\t<li><code>1 <= nums.length <= 2500</code></li>\n\t<li><code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code></li>\n</ul>\n\n<p> </p>\n\n<p><b>进阶：</b></p>\n\n<ul>\n\t<li>你可以设计时间复杂度为 <code>O(n<sup>2</sup>)</code> 的解决方案吗？</li>\n\t<li>你能将算法的时间复杂度降低到 <code>O(n log(n))</code> 吗?</li>\n</ul>\n",
          "level": 2,
          "slug_title": "longest-increasing-subsequence",
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
