package com.mysite.senceback.write;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;


@Mapper
public interface BoardMapper {
	
	@Select("select num, id, subject, location,price, date_format(board_date, '%y-%m-%d')"
	+ " as board_date from board order by num desc")
	public List<BoardVO> getBoardList();
	
	@Select("select min(up_file) as up_file, board_num from files group by board_num order by board_num desc")
	public List<FileVO> getFileList();
	
	@Select("select count(*) from board where subject=#{subject}")
	public int getBoardSubjectCount(BoardVO board);

	@Insert("insert into board values (null, #{id}, #{subject}, #{location}, #{content}, #{price}, 0, 0, now())")
	public int insertBoard(BoardVO board); // 게시글 정보 업로드
	
	@Select("select num from board where subject=#{subject}")
	public int getBoardNum(String subject); // 파일 업로드를 위한 num 검색
	
	// ===========================================================
	
	@Insert("insert into files values (#{org_file}, #{up_file}, #{board_num})")
	public void insertFile(FileVO vo);
	
	// ===========================================================
	
	@Select("select * from board where num=#{num}")
	public BoardVO getBoard(BoardVO num);
	
	@Select("select * from files where board_num=#{board_num}")
	public List<FileVO> getFile(FileVO vo);
	@Select("select * from board where subject LIKE CONCAT('%',#{obj},'%') or location LIKE CONCAT('%',#{obj},'%')")
	public List<BoardVO> getList(SearchVO vo);
	
	// ===========================================================
	@Delete("delete from board where num = #{num}")
	public int deleteBoard(BoardVO board);




}
