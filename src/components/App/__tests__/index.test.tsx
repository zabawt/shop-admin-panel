import * as React from "react";
import { shallow, mount } from "enzyme";
import App from "../index";

describe("<App/> tests", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders properly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
    expect(mount(<App />)).toMatchSnapshot();
  });
});
