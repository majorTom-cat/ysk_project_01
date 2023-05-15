package com.mysite.senceback.detail;


import lombok.Data;

@Data
public class DetailVO {
	
	private int num;
	private String id;
	private String subject;
	private String location;
	private String content;
	private int price;
	private int viewcount;
	
}
