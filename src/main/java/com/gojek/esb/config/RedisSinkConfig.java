package com.gojek.esb.config;

import com.gojek.esb.config.converter.RedisSinkTypeConverter;
import com.gojek.esb.config.converter.RedisTTLTypeConverter;
import com.gojek.esb.config.enums.RedisSinkType;
import com.gojek.esb.config.enums.RedisTTLType;

public interface RedisSinkConfig extends AppConfig {

    @Key("REDIS_HOST")
    String getRedisHost();

    @Key("REDIS_PORT")
    @DefaultValue("6379")
    Integer getRedisPort();

    @Key("REDIS_KEY_TEMPLATE")
    String getRedisKeyTemplate();

    @Key("REDIS_SINK_TYPE")
    @DefaultValue("HASHSET")
    @ConverterClass(RedisSinkTypeConverter.class)
    RedisSinkType getRedisSinkType();

    @Key("REDIS_LIST_DATA_PROTO_INDEX")
    String getRedisListDataProtoIndex();

    @Key("REDIS_TTL_TYPE")
    @DefaultValue("DISABLE")
    @ConverterClass(RedisTTLTypeConverter.class)
    RedisTTLType getRedisTTLType();

    @Key("REDIS_TTL_VALUE")
    @DefaultValue("0")
    long getRedisTTLValue();
}
