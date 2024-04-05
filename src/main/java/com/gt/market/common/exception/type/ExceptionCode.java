package com.gt.market.common.exception.type;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum ExceptionCode {
    /*
    *   - 회원가입: 1000으로 시작한다.
        - 로그인: 2000으로 시작한다.
        - 상품: 3000으로 시작한다.
        - 결제: 4000으로 시작한다.
        - 채팅: 5000으로 시작한다.
        - 공용:9000으로 시작한다.
    * */
    
    ALREADY_EXIST_REVIEW(6001, "이미 리뷰가 작성되어 작성할 수 없습니다.");

    private final int code;
    private final String message;

}
