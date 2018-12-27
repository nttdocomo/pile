# mobile端Button组件

## 基本用法

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

## size

```js
render () {
  return (
    <div>
      <Button type='primary' size='small'>Primary</Button>{' '}
      <Button type='primary'>Primary</Button>{' '}
      <Button type='primary' size='large'>Primary</Button>{' '}
    </div>
  )
}
```

## block

```js
render () {
  return (
    <div>
      <Button type='primary' block >Primary</Button>{' '}
      <Button type='success' block >success</Button>{' '}
    </div>
  )
}
```

## disabled

```js
render () {
  return (
    <div>
      <Button type='primary' disabled block >Primary</Button>{' '}
      <Button type='success' disabled block >success</Button>{' '}
    </div>
  )
}
```



## line

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
      <Button type='primary' line>Primary</Button>{' '}
      <Button type='success' line>Success</Button>{' '}
      <Button type='info' line>Info</Button>{' '}
      <Button type='warning' block line>Warning</Button>{' '}
      <Button type='danger' line>Danger</Button>
    </div>
  )
}
```

## icon

```js
render () {
  return (
    <div>
      <Button type='primary' icon='check' block >Primary</Button>{' '}
      <Button type='success' icon='check' >success</Button>{' '}
      <Button type='success' icon='check' disabled >success</Button>{' '}
      <Button type='success' size='small' icon='check' disabled >success</Button>{' '}
    </div>
  )
}
```

## loading

```js
render () {
  return (
    <div>
      <Button type='primary' icon='check' loading block >Primary</Button>{' '}
      <Button type='success' loading >success</Button>{' '}
      <Button type='success' loading disabled >success</Button>{' '}
      <Button type='success' size='small' loading disabled >success</Button>{' '}
      <Button type='primary' icon={<Icon type='editor' />}>Primary</Button>{' '}
    </div>
  )
}
```

## text

```js
render () {
  return (
    <div>
      <Button text>Normal</Button>{' '}
      <Button type='primary' text>Primary</Button>{' '}
      <Button type='success' text>Success</Button>{' '}
      <Button type='info' text>Info</Button>{' '}
      <Button type='warning' text>Warning</Button>{' '}
      <Button type='danger' text>Danger</Button>{' '}
    </div>
  )
}
```

## href

```js
render () {
  return (
    <div>
      <Button href='https://github.com/trending'>Normal</Button>{' '}
      <Button type='primary' text href='https://github.com/trending'>Primary</Button>{' '}
      <Button type='success' icon='editor'>Success</Button>{' '}
      <Button type='info' text>Info</Button>{' '}
      <Button type='warning' text>Warning</Button>{' '}
      <Button type='danger' text>Danger</Button>{' '}
    </div>
  )
}
```

## radius

```js
render () {
  return (
    <div>
      <Button radius={false}>Normal</Button>{' '}
      <Button radius={false}>Primary</Button>{' '}
      <Button type='success' icon='editor' radius={false}>Success</Button>{' '}
      <Button type='info' text radius={false}>Info</Button>{' '}
      <Button type='warning' text radius={false}>Warning</Button>{' '}
      <Button type='danger' block radius={false}>Danger</Button>{' '}
    </div>
  )
}
```

## circle

```js
render () {
  return (
    <div>
      <Button icon='message' type='primary' size='small' circle />{' '}
      <Button icon='message' type='primary' circle />{' '}
      <Button icon='message' type='primary' size='large' circle />{' '}
    </div>
  )
}
```

## Button.ButtonGroup

```js
render () {
  return (
    <div>
      <Button.ButtonGroup block>
        <Button type='primary' line>Normal</Button>
        <Button type='primary' line>Primary</Button>
        <Button type='primary' line>Success</Button>
      </Button.ButtonGroup>
    </div>
  )
}
```

## API

### button props

|   参数    |   类型   |   默认  |   说明     |
|-----------|----------|------------|-------------------|
| type  |  string  |  -      | default/primary/dashed/success/info/warning/danger |
| line  |  boolean  |  false      | 将文本color与背景color反转，并设置背景color为透明 |
| text  | boolean | false | 按钮设置为纯文本按钮 |
| size | one of `large`, `small`  |  -    | 组件的大小 |
| prefixCls     | string     |  pile    | 组件的className前缀 |
| block | boolean  |  false  | 块状的形式占满父级元素 |
| icon | `string` or [React.Node](https://flow.org/en/docs/react/types/#toc-react-node) | - | 图标类 |
| loading  | boolean | false  | loading效果 |
| href  | string | -  | 以`a`标签渲染组件   |
| disabled     | boolean     |  false    | 按钮的禁用状态 |
| radius     | boolean     |  true    | 是否为圆角，默认4px |
| circle     | boolean     |  true    | 圆形按钮 |


### buttonGroup props

|   参数    |   类型   |   默认  |   说明     |
|-----------|----------|------------|-------------------|
| block     | boolean     |  false    | 块状的形式占满父级元素 |
| divide     | boolean     |  false    | 平分父级元素 |
| vertical     | boolean     |  false    | 垂直排列 |
| prefixCls     | string     |  pile    | 组件的className前缀 |



