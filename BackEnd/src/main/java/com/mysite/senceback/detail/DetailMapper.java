package com.mysite.senceback.detail;

import java.util.List;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.mysite.senceback.write.BoardVO;
import com.mysite.senceback.write.FileVO;

@Mapper
public interface DetailMapper {
    
    @Select("SELECT * FROM board WHERE num=#{num}")
    public BoardVO getBoardDetail(int num); //게시글 번호로 게시글 가져오기
    
    
    @Update("update board set viewcount=viewcount+1 where num=#{num}")
    public void increaseViewCount(int num); //조회수 증가
    
    @Select("select * from files where board_num=#{board_num}")
    public List<FileVO> getFile(int board_num);
}
