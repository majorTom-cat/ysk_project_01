package com.mysite.senceback.write;

import lombok.Data;

@Data
public class BoardVO {
	
	private int num;
	private String id;
	private String subject;
	private String location;
	private String content;
	private int price;
	private int addcartcount;
	private int viewcount;
	private String board_date;
	
}
