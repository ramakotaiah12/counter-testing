import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";
Enzyme.configure({ adapter: new EnzymeAdapter() });
/**a function to create a shallowwrapper for the app component
 setup function
 returns wrapper
*/
const setup = () => shallow(<App />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
test("renders increment button", () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  expect(incrementButton.length).toBe(1);
});
test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});
test("counter display starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});
test("clicking button increments counter display", () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate("click");
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});
test("renders decrement button", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  expect(decrementButton.length).toBe(1);
});
test('clicking decrement button decrements counter display when state is greater than 0',()=>{
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate("click");
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  decrementButton.simulate('click');
  const count = findByTestAttr(wrapper, "count").text();
  
  expect(count).toBe('0')
})
test('error when counter goes below zero', ()=>{
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  decrementButton.simulate('click');
  const errorMessage = findByTestAttr(wrapper, 'error-message').text()
  expect(errorMessage).toBe("No count below zero")

})
test("clicking increment clears the error", ()=>{
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  decrementButton.simulate('click');
  const errorMessage = findByTestAttr(wrapper, 'error-message').text()
  expect(errorMessage).toBe("No count below zero")
  const incrementButton= findByTestAttr(wrapper, 'increment-button');
  incrementButton.simulate('click');
  const count= findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('1');
})