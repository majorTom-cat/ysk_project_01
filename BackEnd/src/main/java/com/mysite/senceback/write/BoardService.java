package com.mysite.senceback.write;

import java.util.List;

import org.apache.ibatis.annotations.Param;

public interface BoardService {
	public List<BoardVO> getBoardList();
	public List<FileVO> getFileList();
	
	public int getBoardSubjectCount(BoardVO board);
	
	public int insertBoard(BoardVO board);
	
	public int getBoardNum(String subject);
	
	// =========================================
	
	public void insertFile(FileVO vo);
	
	// =========================================
	
	public BoardVO getBoard(BoardVO num);

	public List<FileVO> getFile( FileVO vo);
	public List<BoardVO> getList( SearchVO obj);
	
	public int deleteBoard(BoardVO board);
}
