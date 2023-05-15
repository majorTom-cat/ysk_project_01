package com.mysite.senceback.member;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface MemberMapper {
	
	@Select("select * from member where id=#{id} and password=#{password}")
	public MemberVO Login(MemberVO vo);
	
	@Select("select * from member ")
	public List<MemberVO> getList();
	
	@Select("select count(*) from member where id=#{id} ")
	public int check_id(MemberVO vo);
	
	@Select("select id from member where name=#{name} and phone=#{phone}")
	public String find_id(MemberVO vo);
	
	@Select("select password from member where id=#{id} and name=#{name}")
	public String find_pw(MemberVO vo);
	
	@Insert("insert into member values (#{id},#{password},#{name},#{phone})")
	public int insertMember(MemberVO vo);
	
	@Delete("delete from member where id=#{id} ")
	public int mem_del(MemberVO vo);
	
	@Update("update member set password=#{password},name=#{name},phone=#{phone} where id=#{id}")
	public int updateMember(MemberVO vo);
	
	@Select("select count(*) from member where id=#{id} and password=#{password}")
	public int selectSelf(MemberVO vo);
	
	@Update("update member set id=#{idnew}, password=#{password},name=#{name},phone=#{phone} where id=#{id}")
	public int updateSelf(MemberUpdateVO vo);
	
	

}
