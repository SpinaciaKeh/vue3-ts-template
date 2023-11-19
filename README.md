# Project Template
基于`Vue3`、`Typescript`、`Vite`的项目模板

## Branches

| Branch Name | Features |
| :-- | :-- |
| [main](https://github.com/SpinaciaKeh/vue3-ts-template/tree/main) | [base features](#features) |
| [map-2d](https://github.com/SpinaciaKeh/vue3-ts-template/tree/map-2d) | [base features](#features) & [map class](#map-features) (with openlayers) |
| map-3d | [base features](#features) & map class (with Cesium) (**to-do**) |

## Project Structure

- `api` 接口
- `asserts` 静态资源
- `components` 公共组件
- `config` 全局配置文件
- `router` 路由
- `store` 全局状态管理器
- `styles` 样式文件
- `types` 类型声明
- `utils` 工具库
- `views` 视图

## Features

- 编程语言 `Typescript`
- 构建项目 `Vite`
  - `vite-plugin-compression` 对打包资源进行gzip压缩
  - [`vite-plugin-svg-icons`](https://github.com/vbenjs/vite-plugin-svg-icons) 引入svg图标的解决方案
- 前端框架 `Vue3`
  - `<script setup>`
- 包管理 `pnpm`
- 路由管理 `Vue Router`
  - 匹配失败的路由跳转到`/404`
  - token过期跳转到`/login`
  - 使用`NProgress`显示页面加载状态
- 状态管理 `Pinia`
  - `setup store`
- UI框架 `Element Plus`
  - 基于插件`unplugin-vue-components`和`unplugin-auto-imports`实现组件自动导入
  - `el-input`自动focus：`<el-input v-input-focus />`
- CSS预编译 `Sass`
  - css reset
  - 响应式布局
  - 在`/src/styles/variables.scss`中创建的全局变量，不需要显示导入
- HTTP库 `Axios`
  - 封装
  - examples (**to-do**)
- 代码规范 `Eslint` + `Prettier` + `Stylelint`
  - 一行80个字符/空格缩进2字符/不使用分号/单引号/不使用尾逗号
  - [`stylelint-scss`](https://github.com/stylelint-scss/stylelint-scss)规则根据个人习惯进行配置
  - 基于插件`eslint-config-prettier`和`eslint-plugin-prettier`处理`eslint`和`prettier`的冲突
  - 配置脚本`lint`、`format`和`lint:style`
- 提交规范 `Husky`
- 其他
  - 一个完整的登录登出逻辑，在`cookie`中保存`token`
  - 命名规范：
    - 组件 / 视图 - `pascal case` _such as `HomePage`_
    - 静态资源 / 工具类方法 - `kebab case` _such as `user-info.png`_
    - 变量 - `lower camel case` _such as `loginApi`_
  - [`VueUse`](https://vueuse.org/functions.html) 基于Vue组合式API的实用工具集，几个常用的方法：
    - [`useWebsocket`](https://github.com/vueuse/vueuse/blob/aca6a79227f7f8b06760d756dfbb4cc5958b445d/packages/core/useWebSocket/index.md) - websocket相关的操作，通过`protocols`携带`token`
    - [`onClickOutside`](https://github.com/vueuse/vueuse/blob/aca6a79227f7f8b06760d756dfbb4cc5958b445d/packages/core/onClickOutside/index.md) - 点击空白区域关闭弹窗
    - [`useFullscreen`](https://github.com/vueuse/vueuse/blob/main/packages/core/useFullscreen/index.md) - 全屏
    - [`useDraggable`](https://github.com/vueuse/vueuse/blob/main/packages/core/useDraggable/index.md) - 弹窗拖拽
  - unit test (**to-do**)
  - `/plugins/zip.py` python脚本文件，将打包文件压缩为zip格式并复制到剪贴板
    - 在`package.json`中配置`zip`脚本，自动执行python指令，参数从命令行传入
    - 压缩文件默认输出到`/release`目录，在`.gitignore`中被忽略
    - 输出目录可选 (**to-do**)

## Map Features

- 封装地图相关的一些常用功能 (**to-do**)

## Other TODO

- 根据实际项目开发情况完善eslint等校验规则的配置

---

#### window全局变量声明

1、在`types/window.d.ts`中配置

```typescript
export {}

declare global {
  interface Window {
    valName: any
  }
}
```

#### UI fit

1、安装依赖包

`pnpm add postcss-pxtorem`

`pnpm add amfe-flexible`

2、在vite.config.ts中配置

```typescript
import postCssPxToRem from 'postcss-pxtorem'
...
css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          // UI: 1920 * ...
          rootValue: 192,
          propList: ['*']
        })
      ]
    }
  }
```

3、在main.ts中引入

```typescript
import 'amfe-flexible'
```

