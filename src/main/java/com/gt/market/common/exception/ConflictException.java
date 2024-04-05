package com.gt.market.common.exception;

import com.gt.market.common.exception.type.ExceptionCode;
import lombok.Getter;

@Getter
public class ConflictException extends CustomException {

    public ConflictException(final ExceptionCode exceptionCode) {
        super(exceptionCode);
    }
}
