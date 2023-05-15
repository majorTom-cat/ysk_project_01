package com.mysite.senceback.member;
import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {

	// 부모타입에 대입하는것도 가능하니 MemberServiceImpl memberService도 가능
	// MemberService memberService 도 가능. 
	private MemberService memberService; 
	
	public MemberController(MemberService memberService) {
		this.memberService = memberService;
	}
	
	@RequestMapping("/login") 
	public MemberVO Login(@RequestBody MemberVO vo){
		MemberVO tmp = memberService.Login(vo);		
		return tmp;
	}
	@RequestMapping("/list") 
	public List<MemberVO> getList(){
		List<MemberVO> tmp = memberService.getList();		
		return tmp;
	}
	@RequestMapping("/checkid") 
	public int check_id(@RequestBody MemberVO vo){
		int tmp = memberService.check_id(vo);	
		return tmp;
	}
	@RequestMapping("/mem_del") 
	public int mem_del(@RequestBody MemberVO vo){
		int tmp = memberService.mem_del(vo);	
		return tmp;
	}
	@RequestMapping("/insert") 
	public int insertMember(@RequestBody MemberVO vo){
		int tmp = memberService.insertMember(vo);	
		return tmp;
	}
	@RequestMapping("/update") 
	public int updateMember(@RequestBody MemberVO vo){
		int tmp = memberService.updateMember(vo);	
		return tmp;
	}
	@RequestMapping("/find_id") 
	public String find_id(@RequestBody MemberVO vo){
		String tmp = memberService.find_id(vo);		
		return tmp;
	}
	@RequestMapping("/find_pw") 
	public String find_pw(@RequestBody MemberVO vo){
		String tmp = memberService.find_pw(vo);		
		return tmp;
	}
	
	@RequestMapping("/checkidandpassword")
	public int selectSelf(@RequestBody MemberVO vo) {
		int res = memberService.selectSelf(vo);
		return res;
	}
	
	@RequestMapping("/updateSelf") 
	public int updateSelf(@RequestBody MemberUpdateVO vo) {
		int res = memberService.updateSelf(vo);
		return res;
	}
	
}
