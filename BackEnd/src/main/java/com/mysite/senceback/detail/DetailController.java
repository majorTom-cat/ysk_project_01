package com.mysite.senceback.detail;
import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.mysite.senceback.write.*;

import com.mysite.senceback.write.BoardVO;
import com.mysite.senceback.write.FileVO;
@RestController
public class DetailController {
	
	private DetailService detailservice;
	
	public DetailController(DetailService detailservice) {
		this.detailservice = detailservice;
	}
	
	// 게시물 번호(num)를 매개변수로 받아 상세 정보를 조회하고 반환하는 메소드
	@RequestMapping("/detail")
	public BoardVO getBoardDetail(@RequestBody BoardVO vo) {
		//System.out.println("num : " + vo.getNum());
	    return detailservice.getBoardDetail(vo.getNum());		
	}
//    
//	@RequestMapping("/file")
//	public List<FileVO> getFile(@RequestBody FileVO vo) {
//		System.out.println("num : " + vo.getBoard_num());
//	return detailservice.getFile(vo.getBoard_num());
//	}
}