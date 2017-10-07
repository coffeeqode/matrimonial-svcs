create table "user".user_detail 
(
     userid serial,
     doc jsonb not null
);


create table user_detail 
(
     userid serial,
     doc jsonb not null
);


drop table "user".user_detail 

INSERT INTO "user".user_detail(doc) VALUES ( '{
            "first_name":"Sandesh",
            "last_name":"Patil"
            }');
    
select * from "user".user_detail
 
delete from "user".user_detail   
  
 
create table user_detail 
(
     userid serial,
     doc jsonb not null
);
  



INSERT INTO user_detail(doc) VALUES ( '{
            "first_name":"Sandesh",
            "last_name":"Patil"
            }');
 