package com.mysite.senceback.write;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

@Service("boardService") // 객체명이기 때문에 소문자. BoardServiceImpl 클래스로 만들어진 빈객체 이름을 지정하는것
public class BoardServiceImpl implements BoardService {

	private BoardMapper mapper;
	
	public BoardServiceImpl(BoardMapper mapper) {
		this.mapper = mapper;
	}
	
	@Override
	public List<BoardVO> getBoardList(){
		List<BoardVO> board_list = mapper.getBoardList();
		return board_list;
	}
	
	@Override
	public List<FileVO> getFileList() {
		List<FileVO> file_list = mapper.getFileList();
		return file_list;
	}
	
	@Override
	public int getBoardSubjectCount(BoardVO board) {
		System.out.println("subject service : " + board.getSubject());
		
		int res =  mapper.getBoardSubjectCount(board);
		return res;
	}

	@Override
	public int insertBoard(BoardVO board) {
		int res = mapper.insertBoard(board);
		
		return res;
	}
	
	@Override
	public int getBoardNum(String subject) {
		int boardNum = mapper.getBoardNum(subject);
		return boardNum;
	}
	
	// ============================================
	
	@Override
	public void insertFile(FileVO vo) {
		mapper.insertFile(vo);
	}
	
	// ============================================
	
	@Override
	public BoardVO getBoard(BoardVO num) {
		BoardVO board = mapper.getBoard(num);
		return board;
	}
	@Override
	public List<BoardVO> getList( SearchVO obj){
		List<BoardVO> boardlist = mapper.getList(obj);
		return boardlist;
	}
	@Override
	public List<FileVO> getFile(FileVO vo) {
		List<FileVO> file_list = mapper.getFile(vo);
		return file_list;
	}
	
	@Override
	public int deleteBoard(BoardVO board) {
		int res = mapper.deleteBoard(board);
		return res;
	}
	
}
