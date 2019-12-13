import * as React from 'react';
interface IData {
  id: number,
  title: string
}
interface IState {
  checkedValues: Set<IData>;
  data: IData[];
}
 
interface IProps {
  value: IData,
  checked: boolean,
  onChange: (v: IData) => void
}
class ItemComp extends React.Component<IProps> {
  shouldComponentUpdate(nextProps: IProps) {
    const props = this.props;
    return props.value !== nextProps.value || props.checked !== nextProps.checked
  }
  render() {
    const { value, checked } = this.props;
    return (
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={this.onChange} />
        {value.title}
      </label>
    )
  }
  onChange = () => {
    this.props.onChange(this.props.value);
  }
}
 
// tslint:disable-next-line:max-classes-per-file
export default class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props)
    const initValue: IState = {
      checkedValues: new Set(),
      data: []
    }
    for (let i = 0; i < 20000; i++) {
      let temp = { id: Math.random(), title: i }
      initValue.data.push(temp)
      initValue.checkedValues.add(temp)
    }
    this.state = initValue;
  }
  render() {
    const onChange = this.onChange;
    const { checkedValues, data } = this.state;
    return (
      <div className="App">
        {data.map((value) =>
          <ItemComp
            key={value.id}
            value={value}
            checked={checkedValues.has(value)}
            onChange={onChange} />
        )}
      </div>
    );
  }
  onChange = (active: IData) => {
    const checkedValues = new Set(this.state.checkedValues);
    if (checkedValues.has(active)) {
      checkedValues.delete(active);
    } else {
      checkedValues.add(active);
    }
    this.setState({ checkedValues })
    console.log(checkedValues)
  }
}