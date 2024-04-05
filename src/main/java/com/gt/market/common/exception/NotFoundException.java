package com.gt.market.common.exception;
import com.gt.market.common.exception.type.ExceptionCode;
import lombok.Getter;

@Getter
public class NotFoundException extends CustomException{

    public NotFoundException(final ExceptionCode exceptionCode) {
        super(exceptionCode);
    }
}
