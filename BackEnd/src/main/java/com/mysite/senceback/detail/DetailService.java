package com.mysite.senceback.detail;
import java.util.List;

import com.mysite.senceback.write.*;

public interface DetailService {
    // 게시글 상세 정보 조회
    public BoardVO getBoardDetail(int num);
    // 게시글 조회수 증가
    //public void increaseViewCount(int num);
    
    public List<FileVO> getFile(int board_num);
}