package com.mysite.senceback.detail;


import org.springframework.stereotype.Service;

@Service
public class RequestServiceImpl implements RequestService {
	
	private RequestMapper mapper;
	
	public RequestServiceImpl(RequestMapper mapper) {
		this.mapper = mapper;
	}

	@Override
	public int requestPurchaseBefore(RequestVO vo) {
		int res = mapper.requestPurchaseBefore(vo);
		return res;
	}
	
	@Override
	public int requestPurchase(RequestVO vo) {
		int res = mapper.requestPurchase(vo);
		return res;
	}
	
	//===========================================================
	
	@Override
	public int requestAddCartBefore(RequestVO vo) {
		int res = mapper.requestAddCartBefore(vo);
		return res;
	}
	
	@Override
	public int requestAddCart(RequestVO vo) {
		mapper.updateBoardAddCartCount(vo.getBoard_num());
		int res = mapper.requestAddCart(vo);
		return res;
	}

}
