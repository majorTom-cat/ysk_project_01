package com.mysite.senceback.write;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class FileVO {
	private String org_file; // 첨부할때 사용된 원파일명
	private String up_file; // 서버에 저장될때 사용할 파일명
	//private String contenttype; // 파일 타입
	private int board_num;
}
