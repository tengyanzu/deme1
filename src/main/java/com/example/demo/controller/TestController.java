package com.example.demo.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @RequestMapping("/index")
    public  String index(String[] args) {
        System.out.println("aaa");
        return "aaa";
    }
}
