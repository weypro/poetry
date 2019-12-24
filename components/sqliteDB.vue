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
			plus.sqlite.openDatabase({
				name: 'favor',
				path: '_doc/favor.db',
				success: function(e) {
					console.log('openDatabase success!');
				},
				fail: function(e) {
					console.log('openDatabase failed: ' + JSON.stringify(e));
				}
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
			this.init()
		},
		excuteSQL: function(sql, callback) {
			plus.sqlite.executeSql({
				name: 'favor',
				sql: sql,
				success: function(e) {
					console.log('executeSql success!');
					try {
						callback(1);
					} catch (e) {
						console.log('No callback');
					}
				},
				fail: function(e) {
					console.log('executeSql failed: ' + JSON.stringify(e));
				}
			});
		},
		isLineExisted: function(line) {
			console.log('promise');
			console.log(line);
			plus.sqlite.selectSql({
				name: 'favor',
				sql: 'select 1 from poetry where line = "' + line + '" limit 1',
				success: function(data) {
					console.log('selectSql success: ', data);
					try {
						console.log('datajson:', data[0]['1']);
						if (data[0]['1'] == 1) {
							console.log('存在');
							sqldb.isExisted = 1;
							return 1;
						}
					} catch (e) {
						console.log('exist err');
						sqldb.isExisted = 0;
						return 0;
					}
				},
				fail: function(e) {
					console.log('selectSql failed: ' + JSON.stringify(e));
					sqldb.isExisted = 0;
				}
			});
			sqldb.isSelectReady = 1;
		},
		insertLine: async function(line, author, origin, callback) {
			console.log('准备insert');
			//var flag=await this.isLineExisted(line);await
			this.isLineExisted(line);
			console.log('等待结束');

			//这一部分非常蛇皮，原本想用await的，但是用不来？？？先凑合吧
			this.timer = setInterval(() => {
				//设置延迟执行
				console.log(sqldb.isExisted);

				if (!sqldb.isExisted) {
					if (!this.isOpen()) this.openDB();
					this.excuteSQL('insert into poetry (id,line,author,origin) values(null,"' + line + '","' + author + '","' + origin + '")', callback);
					callback(1);
					if (this.isOpen()) this.closeDB();
					console.log('ok');
					clearInterval(this.timer);
				}
				if (sqldb.isSelectReady) {
					sqldb.isSelectReady = 0;
					clearInterval(this.timer);
				}
			}, 50);
			sqldb.isExisted = 0;
		},
		getAllData: function() {
			console.log('hhh');
			//清空
			//sqldb.allPoetryList.length = 0;
			//设置延迟执行
			plus.sqlite.selectSql({
				name: 'favor',
				sql: 'select * from poetry',
				success: function(data) {
					console.log('selectSql success: ');
					for (var i in data) {
						console.log(data[i]);
						sqldb.allPoetryList.push(data[i]);
					}
				},
				fail: function(e) {
					console.log('selectSql failed: ' + JSON.stringify(e));
				}
			});
			console.log('end');
			return sqldb.allPoetryList;
		}
	}
};
</script>

<style></style>
