-- 所有库名、表名、列名均使用``反引号！

-- 元数据
select version();
select database();
select user();
show status;
show variables;
-- 数据库建库安装项目名开始建库
create database if not exists `current_project_name`;

-- 数据库操作
-- 展示当前所有数据库
show databases;
-- 切换当前数据库
use `current_project_name`;
-- 展示当前数据库中的所有数据表
show tables;
-- 修改数据库数据表更改安全模式
show variables like "sql_safe_updates";
set sql_safe_updates = 0;
set sql_safe_updates = 1;
-- 删除当前数据库
drop database if exists `current_project_name`;

-- 每一数据库下必须有一个字段枚举数据表，用来记录当期数据库中一些表头的可能值
create table if not exists `column_avilable_enums`
	(
		`id` int not null auto_increment,
		`table_name` varchar(40) not null,
        `column_name` varchar(40) not null,
        `column_type` varchar(40) not null,
        `column_enum` text,
        index `name_index` (column_name(40)),
        primary key (`id`)
    )
    engine=innodb default charset=utf8;

-- 数据表操作有
-- 展示数据表的字段属性
show columns from `column_avilable_enums`;
-- 修改数据表的字段属性
alter table `column_avilable_enums` add i int;
alter table `column_avilable_enums` change i j bigint;
alter table `column_avilable_enums` modify j bigint not null default 100;
alter table `column_avilable_enums` drop j;
-- 修改数据表序列的开始值
alter table `column_avilable_enums` auto_increment = 1;

-- 展示数据表的索引字段属性
show index from `column_avilable_enums`;
create index `column_name_index` on `column_avilable_enums`(column_name(40));
create unique index `table_name_unique` on `column_avilable_enums`(table_name(40));
drop index `column_name_index` on `column_avilable_enums`; 
drop index `table_name_unique` on `column_avilable_enums`; 

-- 修改数据表名
alter table `column_avilable_enums` rename to `tb`; 
alter table `tb` rename to `column_avilable_enums`; 
-- 复制表
show create table `column_avilable_enums`;

-- 删除数据表
drop table if exists `column_avilable_enums`;

-- 每一个数据表均可增改删查
insert ignore into `column_avilable_enums` 
	(`table_name`, `column_name`, `column_type`, `column_enum`)
    values
    ("students", "gender", "int", "enum genderenum{man,woman}");

update `column_avilable_enums`
	set `column_type` = "int"
	where `column_type` = "integer";

update `column_avilable_enums`
	set `column_type` = "int"
	where `id` = "1";

delete from `column_avilable_enums`
	where `id` = 3;
    
-- where binary可以忽略大小写，因为使用java规范，严格大小写，不采用忽略的做法
select distinct `id`, `table_name`, `column_name`, `column_type`, `column_enum`
	from `column_avilable_enums` 
    where `table_name` != "teachers"
    limit 50 offset 0;

-- like替换 = 号以正则表达式的形式实现模糊查询 % => .
select `id`, `table_name`, `column_name`, `column_type`, `column_enum`
	from `column_avilable_enums`
    where 
		`table_name` like "%tu%" and
        `column_name` like "%en%"
    order by `id`
    limit 50 offset 0;

-- union 去重
(select `id`, `table_name`, `column_name`, `column_type`, `column_enum`
	from `column_avilable_enums`
		where 
			`table_name` like "%tu%" and
			`column_name` like "%en%"
		limit 50 offset 0
    )
union 
(select `id`, `table_name`, `column_name`, `column_type`, `column_enum`
	from `column_avilable_enums`
		where 
			`table_name` like "%tu%" and
			`column_name` like "%en%"
		limit 50 offset 0);

-- 结果集处理 分组
select column_name, function(column_name)
	from table_name
		where column_name = value
			group by column_name;

-- 关联
select a.runoob_id, a.runoob_author, b.runoob_count 
from runoob_tbl a, tcount_tbl b 
where a.runoob_author = b.runoob_author;

select a.runoob_id, a.runoob_author, b.runoob_count 
	from runoob_tbl a 
inner join tcount_tbl b 
	on a.runoob_author = b.runoob_author;

-- null值处理
select * from runoob_test_tbl where runoob_count = null;
select * from runoob_test_tbl where runoob_count != null;
-- empty set (0.00 sec) = 和 != 不起作用
select * from runoob_test_tbl where runoob_count is null;
select * from runoob_test_tbl where runoob_count is not null;

-- 事物
begin; 
rollback;
commit;

-- 导出数据库
-- mysqldump -uroot -p `current_project_name` > database_dump.txt;
-- 在txt文件中加入 use current_project_name 切换数据库语句
-- 导入数据库
-- mysql -uroot -p < database_dump.txt


