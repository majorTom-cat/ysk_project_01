package com.mysite.senceback.detail;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RequestController {

	private RequestServiceImpl requestServiceImpl;
	
	public RequestController(RequestServiceImpl requestServiceImpl) {
		this.requestServiceImpl = requestServiceImpl;
	}
	
	@RequestMapping("/requestPurchaseBefore")
	public int requestPurchaseBefore(@RequestBody RequestVO vo) {
		int res = requestServiceImpl.requestPurchaseBefore(vo);
		return res;
	}
	
	@RequestMapping("/requestPurchase")
	public int requestPurchase(@RequestBody RequestVO vo) {
		int res = requestServiceImpl.requestPurchase(vo);
		return res;
	}
	
	//========================================================================
	
	@RequestMapping("/requestAddCartBefore")
	public int requestAddCartBefore(@RequestBody RequestVO vo) {
		int res = requestServiceImpl.requestAddCartBefore(vo);
		return res;
	}
	
	@RequestMapping("/requestAddCart")
	public int requestAddCart(@RequestBody RequestVO vo) {
		int res = requestServiceImpl.requestAddCart(vo);
		return res;
	}
}
