SELECT * FROM db1.customers;

create table db1.customers(
	name varchar(255) NOT null,
    phone_number int,
    city varchar(100)
);

insert into db1.customers values("Gareth",0273347466, "Tauranga");
SELECT * FROM db1.customers;

insert into db1.customers values("Bharath",027939393, "Sydney");
SELECT * FROM db1.customers;

insert into db1.customers values("Seb",null, "Wellington");
SELECT * FROM db1.customers;

insert into db1.customers ( name, city) values("Courtney", "Tauranga");
SELECT * FROM db1.customers;

set sql_safe_updates=0;
update db1.customers set phone_number=838383 where name="Courtney";
SELECT * FROM db1.customers;

delete from db1.customers where name="Bharath";
SELECT * FROM db1.customers;

delete from db1.customers;
SELECT * FROM db1.customers;

drop table db1.customers;

alter table db1.customers add email varchar(255);
SELECT * FROM db1.customers;

alter table db1.customers drop email;
SELECT * FROM db1.customers;