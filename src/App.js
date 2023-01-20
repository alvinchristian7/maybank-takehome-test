import { Card, AutoComplete, Spin } from "antd";
import { useMemo, useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import { useLazyGetPlacesQuery } from "./services/places";

function App(props) {
  const [value, setValue] = useState("");
  const [trigger, { data, error, isFetching }] = useLazyGetPlacesQuery();
  const options = useMemo(
    () =>
      data &&
      data.features.map(({ properties }) => ({
        value: properties.address_line1,
        label: (
          <div>
            <strong>{properties.address_line1}</strong>
            <div>{properties.address_line2}</div>
          </div>
        ),
      })),
    [data]
  );

  const onSelect = (val) => {
    console.log("onSelect", val);
  };

  const onChange = (val) => {
    setValue(val);
  };
console.log(isFetching)
  return (
    <div className="App greyBg">
      <Card
        className="mainContent"
        title="Commercials around Gambir"
        bordered={false}
        // style={{
        //   width: 500,
        // }}
      >
        <AutoComplete
          value={value}
          options={options}
          style={{ width: 600 }}
          onSelect={onSelect}
          onSearch={trigger}
          onChange={onChange}
          placeholder="Input your place"
          notFoundContent={isFetching ? <Spin/> : (
            error ? JSON.stringify(error, null, 2) : "Data not found"
          )}
        />
      </Card>
    </div>
  );
}

export default App;
