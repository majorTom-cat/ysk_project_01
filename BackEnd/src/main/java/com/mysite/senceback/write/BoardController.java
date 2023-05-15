package com.mysite.senceback.write;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import jakarta.servlet.http.HttpServletResponse;

@RestController
public class BoardController {

	private BoardService boardService;
	
	public BoardController(BoardService boardService) {
		this.boardService = boardService;
	}
	
	@Value("${spring.servlet.multipart.location}") // 설정파일 정보 읽어올때 사용
	String uploadDir;
	
	@RequestMapping("/boardList") //게시글 리스트 조회 
	public List<BoardVO> getBoardList(){
		List<BoardVO> boardlist = boardService.getBoardList();
		return boardlist;
	}
	
	@RequestMapping("/fileList")
	public List<FileVO> getFileList() {
		List<FileVO> file_list = boardService.getFileList();
		return file_list;
	}
	
	String boardSubject;
	int testSubject;
	
	@RequestMapping("/uploadbefore")
	public int uploadBerofe(@RequestBody BoardVO board) {
		System.out.println("subject 1 : " + board.getSubject());
		testSubject = boardService.getBoardSubjectCount(board);
		System.out.println("testSubject 1 : " + testSubject);
		
		return testSubject;
	}
	
	@RequestMapping("/upload")
	public int insertBoard(@RequestBody BoardVO board) throws IOException {
		
		
		int res = boardService.insertBoard(board);
		boardSubject = board.getSubject();
		System.out.println("boardSubject upload: " + boardSubject);
		
		return res;
	}

	@RequestMapping("/uploadfile")
	public void upload(@RequestBody MultipartFile[] uploadfiles) throws IOException {

		
		System.out.println("boardSubject file 1 : " + boardSubject);
		int boardNum = boardService.getBoardNum(boardSubject);
		System.out.println("boardSubject file 2: " + boardSubject);
		
		if (uploadfiles.length != 0) {
			System.out.println("uploadfiles.length : " + uploadfiles.length);
			
		for (MultipartFile file : uploadfiles) {
			
			if (!file.isEmpty()) {
				File storedFilename = new File(UUID.randomUUID().toString().replaceAll("-", "")+".jpg");
			
				file.transferTo(storedFilename); // 업로드 시켜줌
				
				// db에 파일 정보 저장
				FileVO vo = new FileVO(file.getOriginalFilename(),
										storedFilename.toString(),
										boardNum);
				System.out.println("boardNum file: " + boardNum);
				System.out.println("======================================================");
				boardService.insertFile(vo);
			}
		}
		}
	}
	@RequestMapping("/search") 
	public List<BoardVO> getList(@RequestBody SearchVO obj){
		List<BoardVO> tmp = boardService.getList(obj);		
		return tmp;
	}
	
	@RequestMapping("/Detail")
	public BoardVO getBoard(@RequestBody BoardVO num) {
		BoardVO board = boardService.getBoard(num);
		return board;
	}
	@RequestMapping("/file")
	public List<FileVO> getFile(@RequestBody FileVO vo) {
		List<FileVO> board = boardService.getFile(vo);
		return board;
	}
	
	@RequestMapping("/deleteBoard")
	public int deleteBoard(@RequestBody BoardVO board) {
		int res = boardService.deleteBoard(board);
		return res;
	}
}
