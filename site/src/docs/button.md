# mobile端按钮控件

### 基本用法

```js
render () {
  return (
    <div>
      <Button>Normal</Button>{' '}
      <Button type='primary'>Primary</Button>{' '}
      <Button type='success'>Success</Button>{' '}
      <Button type='info'>Info</Button>{' '}
      <Button type='warning'>Warning</Button>{' '}
      <Button type='danger'>Danger</Button>{' '}
    </div>
  )
}
```

### 反转

> 背景color和字体color互换

**场景** :清爽风格的按钮

> **note**
>
> 使用`reverse`来反转，`reverse`一般与`type`同时使用


```js
render () {
  return (
    <div>
      <Button>Normal</Button>{' '}
      <Button type='primary' reverse>Primary</Button>{' '}
      <Button type='success' reverse>Success</Button>{' '}
      <Button type='info' reverse>Info</Button>{' '}
      <Button type='warning' reverse>Warning</Button>{' '}
      <Button type='danger' reverse>Danger</Button>
    </div>
  )
}
```
