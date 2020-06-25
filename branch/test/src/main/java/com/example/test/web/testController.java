package com.example.test.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @ClassName testController
 * @Descriptino TODO
 * @Author myzhen
 * @Date 2020/6/25 下午8:50
 * @Version 1.0
 **/
@RestController
@RequestMapping("test")
public class testController {

    @GetMapping("demo")
    public String test() {
        return "jekins测试成功";
    }
}
