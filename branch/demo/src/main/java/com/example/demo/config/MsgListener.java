package com.example.demo.config;

import org.springframework.data.redis.connection.Message;
import org.springframework.data.redis.connection.MessageListener;
import org.springframework.stereotype.Component;

@Component
public class MsgListener implements MessageListener {

    @Override
    public void onMessage(Message message, byte[] pattern) {
        System.out.println( "Message: " + message.toString() );
    }
}
