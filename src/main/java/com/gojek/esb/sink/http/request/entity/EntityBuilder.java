package com.gojek.esb.sink.http.request.entity;

import com.gojek.esb.exception.DeserializerException;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;

import java.util.Collections;

public class EntityBuilder {
    private boolean wrapArray;

    public EntityBuilder() {
        this.wrapArray = false;
    }

    public EntityBuilder setWrapping(boolean isArrayWrap) {
        this.wrapArray = isArrayWrap;
        return this;
    }

    public StringEntity buildHttpEntity(String bodyContent) throws DeserializerException {
        if (!wrapArray) {
            return new StringEntity(bodyContent, ContentType.APPLICATION_JSON);
        } else {
            String arrayWrappedBody = Collections.singletonList(bodyContent).toString();
            return new StringEntity(arrayWrappedBody, ContentType.APPLICATION_JSON);
        }
    }
}