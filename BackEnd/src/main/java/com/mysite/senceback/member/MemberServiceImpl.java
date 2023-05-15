package com.mysite.senceback.member;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

@Service("memberService") // 이름 지정해줄 수 있음. 이름 안정하면 첫글자를 소문자로 하는 bean객체 만들어짐. (memberServiceImpl)
public class MemberServiceImpl implements MemberService {

	private MemberMapper mapper;
	
	public MemberServiceImpl(MemberMapper mapper) {
		this.mapper = mapper;
	}
	
	@Override
	public MemberVO Login(MemberVO vo) {
		MemberVO res = mapper.Login(vo);
		return res;
	}
	@Override
	public int check_id(MemberVO vo) {
		int res = mapper.check_id(vo);
		return res;
	}
	@Override
	public int insertMember(MemberVO board){
		int res = mapper.insertMember(board);
		return res;
	}
	@Override
	public String find_id(MemberVO vo) {
		String res = mapper.find_id(vo);
		return res;
	}
	@Override
	public String find_pw(MemberVO vo) {
		String res = mapper.find_pw(vo);
		return res;
	}
	@Override
	public List<MemberVO> getList() {
		List<MemberVO> boardlist = mapper.getList();
		return boardlist;
	}
	@Override
	public int mem_del(MemberVO vo) {
		int res = mapper.mem_del(vo);
		return res;
	}
	@Override
	public int updateMember(MemberVO vo) {
		int res = mapper.updateMember(vo);
		return res;
	}
	
	@Override
	public int selectSelf(MemberVO vo) {
		int res = mapper.selectSelf(vo);
		return res;
	}
	
	@Override
	public int updateSelf(MemberUpdateVO vo) {
		int res = mapper.updateSelf(vo);
		return res;
	}
	
}
