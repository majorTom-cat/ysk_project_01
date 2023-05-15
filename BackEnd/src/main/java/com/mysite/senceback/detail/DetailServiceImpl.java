package com.mysite.senceback.detail;
import com.mysite.senceback.write.*;

import java.util.List;

import com.mysite.senceback.write.*;

import java.util.List;

import com.mysite.senceback.write.*;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class DetailServiceImpl implements DetailService {

    private DetailMapper mapper;

    // DetailMapper를 주입받는 생성자
    public DetailServiceImpl(DetailMapper mapper) {
        this.mapper = mapper;
    }

    // DetailService 인터페이스의 메소드를 오버라이딩하여 구현
    @Override
    public BoardVO getBoardDetail(int num) {
        // DetailMapper를 사용하여 게시글 상세정보를 가져옴
    	mapper.increaseViewCount(num);
    	BoardVO res = mapper.getBoardDetail(num);
        return res;
    }

    @Override
    public List<FileVO> getFile(int board_num) {
    	return mapper.getFile(board_num);
    }
    
}