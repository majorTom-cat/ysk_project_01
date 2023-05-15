create table member(
	id varchar(10) NOT NULL,
    password varchar(20) NOT NULL,
    name varchar(10) NOT NULL,
    phone varchar(20) NOT NULL,
    PRIMARY KEY (id)
);

create table board (
	num int auto_increment, -- 글번호
    id varchar(20) not null, -- 아이디
    subject varchar(50) not null unique, -- 글제목
    location varchar(50) not null, -- 지역
    content varchar(2000) not null, -- 글내용
    price int not null, -- 가격
    addcartcount int, -- 장바구니 수
    viewcount int, -- 글조회수
    board_date date not null, -- 작성 날짜
    primary key(num)
);
alter table board add foreign key(id) references member(id) 
on update cascade on delete cascade;

create table files (
	org_file varchar(100) not null,
    up_file varchar(200) not null,
    board_num int not null,
    primary key(up_file)
);

create table purchase (
	purchase_num int auto_increment primary key, -- 요청 고유 번호
    board_num int not null, -- 게시글 고유 번호
    request_id varchar(20) not null, -- 요청한 유저 아이디
    id varchar(20) not null -- 게시글 작성자의 아이디
);
alter table purchase add foreign key(id) references member(id) on update cascade on delete cascade;
alter table purchase add foreign key(request_id) references member(id) on update cascade on delete cascade;

create table addcart (
	addcart_num int auto_increment primary key, -- 요청 고유 번호
    board_num int not null, -- 게시글 고유 번호
    request_id varchar(20) not null, -- 요청한 유저 아이디
    id varchar(20) not null -- 게시글 작성자의 아이디
);
alter table addcart add foreign key(id) references member(id) 
	on update cascade on delete cascade;
alter table addcart add foreign key(request_id) references member(id) 
	on update cascade on delete cascade;

ALTER TABLE addcart
    ADD FOREIGN KEY (request_id) REFERENCES member(id) ON UPDATE CASCADE ON DELETE CASCADE,
    ADD FOREIGN KEY (id) REFERENCES member(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE purchase
    ADD FOREIGN KEY (request_id) REFERENCES member(id) ON UPDATE CASCADE ON DELETE CASCADE,
    ADD FOREIGN KEY (id) REFERENCES member(id) ON UPDATE CASCADE ON DELETE CASCADE;