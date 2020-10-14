<template name="sqliteDB">
	<view></view>
</template>

<script>
import sqldb from '@/common/sqldb.js';
export default {
	name: 'sqliteDB',

	data() {
		return {};
	},
	methods: {
		openDB: function() {
			return new Promise((resolve, reject) => {
				plus.sqlite.openDatabase({
					name: 'favor',
					path: '_doc/favor.db',
					success: function(e) {
						console.log('openDatabase success!');
						resolve(1);
					},
					fail: function(e) {
						console.log('openDatabase failed: ' + JSON.stringify(e));
						reject('cannot open database');
					}
				});
			});
		},
		isOpen: function() {
			return plus.sqlite.isOpenDatabase({
				name: 'favor',
				path: '_doc/favor.db'
			});
		},
		closeDB: function() {
			plus.sqlite.closeDatabase({
				name: 'favor',
				success: function(e) {
					console.log('closeDatabase success!');
				},
				fail: function(e) {
					console.log('closeDatabase failed: ' + JSON.stringify(e));
				}
			});
		},
		init: function() {
			plus.sqlite.executeSql({
				name: 'favor',
				sql: 'create table if not exists poetry("id" INTEGER PRIMARY KEY ASC AUTOINCREMENT UNIQUE ,"line" VARCHAR,"author" CHAR(10),"origin" VARCHAR)',
				success: function(e) {
					console.log('initialize success!');
				},
				fail: function(e) {
					console.log('initialize failed: ' + JSON.stringify(e));
				}
			});
		},
		clean: function() {
			this.excuteSQL('drop table poetry');
			this.init();
		},
		excuteSQL: function(sql) {
			return new Promise((resolve, reject) => {
				plus.sqlite.executeSql({
					name: 'favor',
					sql: sql,
					success: function(e) {
						console.log('executeSql success!', e);
						resolve(1);
					},
					fail: function(e) {
						console.log('executeSql failed: ' + JSON.stringify(e));
						reject('cannot excute');
					}
				});
			});
		},
		selectSQL: function(sql) {
			return new Promise((resolve, reject) => {
				plus.sqlite.selectSql({
					name: 'favor',
					sql: sql,
					success: data => {
						console.log('selectSql success: ');
						resolve(data);
					},
					fail: function(e) {
						console.log('selectSql failed: ' + JSON.stringify(e));
						reject('cannot select');
					}
				});
			});
		},
		isLineExisted: async function(line) {
			return new Promise(async (resolve, reject) => {
				console.log('目标诗句:', line);
				var data = await this.selectSQL('select 1 from poetry where line = "' + line + '" limit 1');
				console.log('selectSql success: ', data);
				try {
					//返回的data是数组
					console.log('datajson:', data[0]['1']);
					if (data[0]['1'] == 1) {
						console.log('存在');
						resolve(1);
					}
				} catch (e) {
					console.log('不存在');
					resolve(0);
				}
			});
		},
		insertLine: async function(line, author, origin, callback) {
			console.log('准备insert');
			var flag = await this.isLineExisted(line);
			console.log('判断是否存在:', flag);

			if (!flag) {
				if (!this.isOpen()) this.openDB();
				await this.excuteSQL('insert into poetry (id,line,author,origin) values(null,"' + line + '","' + author + '","' + origin + '")');
				callback(1);
				if (this.isOpen()) this.closeDB();
				console.log('insert ok');
			}
		},
		getAllData: async function() {
			console.log('getAllData func start');
			var data = await this.selectSQL('select * from poetry');
			console.log('selectSql success: ');
			// for (var i in data) {
			// 	console.log(data[i]);
			// 	sqldb.allPoetryList.push(data[i]);
			// }
			console.log('getAllData func end');
			return sqldb.allPoetryList;
		}
	}
};
</script>

<style></style>
