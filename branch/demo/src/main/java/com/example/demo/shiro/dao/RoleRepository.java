package com.example.demo.shiro.dao;


import com.example.demo.entity.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * @Author 大誌
 * @Date 2019/3/30 22:05
 * @Version 1.0
 */
public interface RoleRepository extends MongoRepository<Role, String> {
}
