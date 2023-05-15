package com.mysite.senceback.detail;


import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface RequestMapper {

	// 구매 요청 ===========================================================================
	
	@Select("select count(*) from purchase where board_num=#{board_num} and request_id=#{request_id}")
	public int requestPurchaseBefore(RequestVO vo);
	
	@Insert("insert into purchase values (null, #{board_num}, #{request_id}, #{id})")
	public int requestPurchase(RequestVO vo);
	
	// 찜 요청 =============================================================================
	
	
	@Select("select count(*) from addcart where board_num=#{board_num} and request_id=#{request_id}")
	public int requestAddCartBefore(RequestVO vo);
	
	@Insert("insert into addcart values (null, #{board_num}, #{request_id}, #{id})")
	public int requestAddCart(RequestVO vo);
	
	@Update("update board set addcartcount=addcartcount+1 where num=#{num}")
	public void updateBoardAddCartCount(int num);
	
}
