---
layout: doc
title: 📚 学习笔记概览
---

# 📚 学习笔记

这里记录了我自学开发以来的所有技术沉淀。按领域划分，旨在构建完整的个人知识体系。

## ☕ Java 语言
> 从基础语法到高并发架构，涵盖后端核心竞争力。

- **Java 基础**: 集合框架深度解析、异常处理机制、反射与注解、泛型应用
- **Java 进阶**: JVM 内存模型、垃圾回收算法（CMS/G1/ZGC）、类加载过程
- **JUC 并发编程**: 线程池原理、AQS 框架、CAS 与原子类、各种并发锁（ReentrantLock/ReadWriteLock）

## 🍃 Spring 全家桶
> 企业级应用开发的基石。

- **Spring Framework**: IoC 依赖注入原理、AOP 切面编程、Bean 的生命周期、事务传播属性
- **Spring Boot**: 自动配置原理（SPI）、Starter 机制、内置 Web 容器优化、Actuator 监控
- **Spring Cloud**: Nacos 注册中心与配置中心、Gateway 响应式网关、Feign 声明式调用、Sentinel 流量防卫兵

## 🗄️ 数据库系统
> 数据存储与调优是性能优化的关键。

### MySQL
- **核心原理**: InnoDB 存储引擎架构、B+ Tree 索引原理、Buffer Pool 机制
- **高级调优**: SQL 慢查询分析（Explain）、事务隔离级别与 MVCC、日志系统（Redo/Undo/Binlog）

### Redis
- **数据结构**: 五种基本类型及底层编码（SDS/跳表等）、布隆过滤器
- **高可用**: RDB/AOF 持久化、主从复制、哨兵模式、Redis Cluster 集群方案
- **实战场景**: 缓存击穿/穿透/雪崩解决方案、分布式锁实现、Lua 脚本

## 🏗️ 架构与中间件
> 解决系统复杂性与高可用的利器。

- **消息队列**: RabbitMQ（可靠性投递/死信队列）、Kafka（高吞吐原理/零拷贝）
- **搜索引擎**: Elasticsearch 倒排索引、分词器配置、DSL 聚合查询
- **设计模式**: 常用的策略模式、观察者模式、工厂模式、单例模式实战

## ☁️ 云原生
> 现代软件交付的标准。

- **容器技术**: Docker 镜像构建优化、Compose 多服务编排
- **K8s 编排**: Pod 生命周期、Service/Ingress 流量调度、ConfigMap/Secret 配置管理
- **CI/CD**: 基于 Jenkins 或 GitHub Actions 的自动化构建流程

## 🤖 AI
> 拥抱未来，探索大模型与开发流程的结合。

- **Prompt Engineering**: 提示词编写技巧、角色设定、Few-shot 学习
- **RAG 应用**: 基于向量数据库的个人知识库构建、LangChain 框架基础
- **AI 提效**: GitHub Copilot 在项目开发中的实战技巧、Cursor 高效工作流