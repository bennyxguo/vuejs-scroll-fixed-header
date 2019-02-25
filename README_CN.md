# Vuejs-scroll-fixed-header Component

<p>
    <a href="https://circleci.com/gh/TriDiamond/vuejs-scroll-fixed-header/tree/master">
      <img src="https://img.shields.io/circleci/project/github/TriDiamond/vuejs-scroll-fixed-header.svg" alt="Build Status">
    </a>
    <a href="https://github.com/TriDiamond/vuejs-scroll-fixed-header/stargazers">
      <img src="https://img.shields.io/github/stars/TriDiamond/vuejs-scroll-fixed-header.svg" alt="Github starts">
    </a>
    <a>
      <img src="https://img.shields.io/github/license/TriDiamond/vuejs-scroll-fixed-header.svg" alt="License">
    </a>
    <a href="https://www.npmjs.com/package/vuejs-scroll-fixed-header">
      <img src="https://img.shields.io/npm/dt/vuejs-scroll-fixed-header.svg" alt="Npm downloads">
    </a>
    <a href="https://www.npmjs.com/package/vuejs-scroll-fixed-header">
      <img src="https://img.shields.io/npm/v/vuejs-scroll-fixed-header.svg" alt="Npm version">
    </a>
</p>

> 一 Vue 2 滑动固定头部组件

[Demo](https://tridiamond.github.io/vuejs-scroll-fixed-header/)
[📙English Doc](https://github.com/TriDiamond/vuejs-scroll-fixed-header/blob/master/README.md)
[📙更新日志](https://github.com/TriDiamond/vuejs-scroll-fixed-header/blob/master/CHANGELOG.md)

## 安装

``` bash
npm i vuejs-scroll-fixed-header -S
```

## 使用

### Support

| 支持包             | 版本    |
|-------------------|---------|
| Vue               | 2.5+    |


### 引入组件

Javascript

```es6
// global register at main.js
import ScrollFixedHeader from 'vuejs-scroll-fixed-header'
Vue.use(ScrollFixedHeader)
```

Vue 使用

```vue
<template>
    <scroll-fixed-header :fixed.sync="fixed" :threshold="56">
        <nav class="navbar navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">
              Vuejs Scroll Fixed Header
            </a>
          </div>
        </nav>
    </scroll-fixed-header>
</template>

<script >
  export default {
    name: 'Timer',
    data() {
      return {
        fixed: false
      }
    }
  }
</script>
```

### Props
| name      | type    | default | description                                               |
|-----------|---------|---------|-----------------------------------------------------------|
| fixed     | Boolean | `false` | 当前头部的固定状态                                          |
| threshold | Number  | `0`     | 距离scroll top触发固定状态的距离                             |

# Liscense
MIT License

Copyright (c) 2019 TriDiamond
