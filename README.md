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
  <a>
    <img src="https://img.shields.io/npm/v/vuejs-scroll-fixed-header.svg" alt="Npm version">
  </a>
</p>

> 一 Vue 2 scroll fixed header component

[Demo](https://tridiamond.github.io/vuejs-scroll-fixed-header/)
[📙中文文档](https://github.com/TriDiamond/vuejs-scroll-fixed-header/blob/master/README_CN.md)
[📙Changelog](https://github.com/TriDiamond/vuejs-scroll-fixed-header/blob/master/CHANGELOG.md)

## Installation

``` bash
npm i vuejs-scroll-fixed-header -S
```

## Usage

### Support

| Supported Package | Version |
|-------------------|---------|
| Vue               | 2.5+    |


### Install component and Usage

Import component

```es6
// global register at main.js
import ScrollFixedHeader from 'vuejs-scroll-fixed-header'
Vue.use(ScrollFixedHeader)
```

Vue usage

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

| Name      | Type    | Default | Description                                               |
|-----------|---------|---------|-----------------------------------------------------------|
| fixed     | Boolean | `false` | The fixed status of the current header                    |
| threshold | Number  | `0`     | The scroll top threshold for determining the fixed status |
    
# Liscense
MIT License

Copyright (c) 2019 TriDiamond
