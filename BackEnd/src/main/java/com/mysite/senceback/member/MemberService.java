package com.mysite.senceback.member;

import java.util.List;

import org.apache.ibatis.annotations.Param;

public interface MemberService {

	public MemberVO Login(MemberVO vo);
	public int insertMember(MemberVO board);
	public String find_id(MemberVO vo);
	public String find_pw(MemberVO vo);
	public int check_id(MemberVO vo);
	public List<MemberVO> getList();
	public int mem_del(MemberVO vo);
	public int updateMember(MemberVO vo);
	public int selectSelf(MemberVO vo);
	public int updateSelf(MemberUpdateVO vo);
	
}
