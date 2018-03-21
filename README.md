## ct-adc-loading

loading组件

## 使用

从npm安装ct-adc-loading

```
npm install ct-adc-loading --save
```
在代码中使用

```
import Vue from 'vue';
import LoadingPlugin from 'ct-adc-plugin';

Vue.use(LoadingPlugin);

<div v-loading="isLoadingShow" loading-msg="自定义消息">
	这个div是你想用loading覆盖的节点，通过 isLoadingShow ，控制loading的显示，loading-msg是loading的消息，默认为空
</div>
```

## 更新日志

[更新日志](https://github.com/ct-adc/adc-loading/blob/dev/CHANGELOG.md)


