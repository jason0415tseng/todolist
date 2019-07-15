# todolist

1.安裝 Node.js
https://nodejs.org

2.執行SQL 語法

use `test`;

CREATE TABLE `todolist` (
  `id` int(10) UNSIGNED NOT NULL,
  `content` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `todolist` (`id`, `content`) VALUES(1, '事件一');
INSERT INTO `todolist` (`id`, `content`) VALUES(2, '事件二');
INSERT INTO `todolist` (`id`, `content`) VALUES(5, 'test');
INSERT INTO `todolist` (`id`, `content`) VALUES(6, 'test2');

ALTER TABLE `todolist`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `todolist`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

3. 滑鼠右鍵 至下載資料夾 | Open in Terminal，
	輸入下列指令以安裝/更新本程式所需的模組:

npm install express
npm install cors
npm install body-parser
npm install express-session
npm install ejs
npm install mysql
exit

4.開啟 app.js 檔案 修改連線資料庫的帳號與密碼

5. 滑鼠右鍵 至下載資料夾 | Open in Terminal，
	輸入 node app.js 以執行程式。

6.開啟瀏覽器測試
