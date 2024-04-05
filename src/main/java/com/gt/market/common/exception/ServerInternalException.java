package com.gt.market.common.exception;

import com.gt.market.common.exception.type.ExceptionCode;
import lombok.Getter;

@Getter
public class ServerInternalException extends CustomException {

    public ServerInternalException(final ExceptionCode exceptionCode) {
        super(exceptionCode);
    }
}
