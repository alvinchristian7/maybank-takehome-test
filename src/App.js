import { Card, AutoComplete } from "antd";
import { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchPlace } from "./store/requestPlace";

function App({ places, fetchPlace }) {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    // setOptions(
    //   !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    // );
  };
  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const onChange = (data) => {
    setValue(data);
  };
console.log(places)
  return (
    <div className="App greyBg">
      <Card
        className="mainContent"
        title="Google Place Autocomplete"
        bordered={false}
        style={{
          width: 500,
        }}
      >
        <AutoComplete
          value={value}
          options={options}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={fetchPlace}
          onChange={onChange}
          placeholder="Input your place"
        />
      </Card>
    </div>
  );
}

export default connect(state => state, { fetchPlace })(App);
