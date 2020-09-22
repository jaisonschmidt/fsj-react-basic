import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Input } from "./";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renderizar um componente input", () => {
  act(() => {
    render(<Input />, container);
  });

  expect(container.getElementsByTagName("input").length).toBe(1);
});

it("renderizar input com a propriedade type correta", () => {
  act(() => {
    render(<Input type="text" />, container);
  });

  expect(container.querySelectorAll("input[type='text']").length).toBe(1);

  act(() => {
    render(<Input type="email" />, container);
  });

  expect(container.querySelectorAll("input[type='email']").length).toBe(1);

  act(() => {
    render(<Input type="password" />, container);
  });

  expect(container.querySelectorAll("input[type='password']").length).toBe(1);
});

it("renderiza o input com a classe form-control", () => {
  act(() => {
    render(<Input />, container);
  });

  expect(
    container.querySelectorAll("input[class*='form-control']").length
  ).toBe(1);
});

it("renderiza o input com a classe form-control-size correta", () => {
  act(() => {
    render(<Input size="lg" />, container);
  });

  expect(
    container.querySelectorAll("input[class*='form-control-lg']").length
  ).toBe(1);

  act(() => {
    render(<Input size="sm" />, container);
  });

  expect(
    container.querySelectorAll("input[class*='form-control-sm']").length
  ).toBe(1);

  act(() => {
    render(<Input size="" />, container);
  });

  expect(container.querySelectorAll("input[class='form-control']").length).toBe(
    1
  );
});
