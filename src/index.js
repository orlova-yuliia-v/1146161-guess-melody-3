import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions.js";
import {reducer} from "./reducer.js";

const Setting = {
  ERRORS_COUNT: 3
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        errorsCount={Setting.ERRORS_COUNT}
        questions={questions}
      />
    </Provider>,
    document.querySelector(`#root`)
);
