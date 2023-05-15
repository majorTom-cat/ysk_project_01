package com.mysite.senceback.detail;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

public interface RequestService {

	public int requestPurchaseBefore(RequestVO vo);
	public int requestPurchase(RequestVO vo);
	
	// =============================================================================
	
	public int requestAddCartBefore(RequestVO vo);
	public int requestAddCart(RequestVO vo);
}
