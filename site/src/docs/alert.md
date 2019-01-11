# mobile端alert组件

## 基本用法
alert
包含无按钮, 确认框, 多按钮情况

```js
import { Modal, Button } from 'pile';
const alert = Modal.alert;
const App = () => (
    <Button onClick={() => alert('删除', '确定删除么???', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '确定', onPress: () => console.log('ok'), style: { fontWeight: 'bold' } },
    ])}
    >确认对话框</Button>
);
ReactDOM.render(<App />, mountNode);
```

## API

|   参数    |   类型   |   默认  |   说明     |
|-----------|----------|------------|-------------------|
| title      |  String 或 React.Element  |      无     | 标题 |
| message   |  String 或 React.Element  |  无    | 提示信息	|
| actions    | Array | 无 |   按钮组, [{text, onpress}]     |
