<!--
 * @Author: 41
 * @Date: 2022-03-23 16:14:23
 * @LastEditors: 41
 * @LastEditTime: 2022-03-23 16:21:42
 * @Description: 
-->
### 1.cookie都有哪些属性?
- name和value 键值对,存储
- Domain Domain决定Cookie在哪个域是有效的
- Path Path是Cookie的有效路径
- Expires/Max-age 前者时间戳(服务器) 后者有效期
- size 此Cookie的大小
- HttpOnly
  - 若设置为true，则不允许通过脚本document.cookie去更改这个值，同样这个值在document.cookie中也不可见，但在发送请求时依旧会携带此Cookie。
- Secure 
  - 若设置为true，则浏览器只会在HTTPS和SSL等安全协议中传输此Cookie，不会在不安全的HTTP协议中传输此Cookie。
- SameSite SameSite用来限制第三方 Cookie，从而减少安全风险。
  - Strict
  - Lax(导航到目标网址的get请求除外)
  - None(前提是必须同时设置Secure属性（Cookie 只能通过 HTTPS 协议发送）)
- Priority 
  - 优先级，chrome的提案，定义了三种优先级，Low/Medium/High，当cookie数量超出时，低优先级的cookie会被优先清除。