# mobile端toast组件

## 基本用法

```js
componentWillMount () {
  this.setState({content : "hi,jasmine"})
 setTimeout(() => {
        this.setState({content : "hei,potato",iconType : "success"})
      }, 0.3 * 1000);
}
render () {
  return (
    <div>
      <Toast content={this.state.content} iconType={this.state.iconType}/>
    </div>
  )
}
```
## API

### props

|   参数    |   类型   |   默认  |   说明     |
|-----------|----------|------------|-------------------|
| type  |  string  |  -      | one of [arrow-left, arrow-right, ... , icon-warnning]  |
| size  |  string  |  -      | small/large，small: 12px，large: 24px; |
