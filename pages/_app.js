import "../styles/globals.less";

import "../styles/test.less";
import Navbar from "../components/Layout/navigation/Navbar";
import Head from "next/head";
import Footer from "../components/Layout/footer/footer";

//add redux
import withRedux from "next-redux-wrapper";
import { createStore, compose, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

// import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons";
// import { faSquare } from "@fortawesome/free-regular-svg-icons";

function MyApp({ Component }) {
  return (
    // <Provider store={store}>
    <div className="wrapper">
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
      </Head>
      <Navbar />
      <div className="contents">
        <Component />
      </div>
      <Footer />
    </div>
    // </Provider>
  );
}

const configureStore = (initialState, options) => {
  const middlewares = [logger]; // 미들웨어들을 넣으면 된다.
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, initialState, enhancer);
  return store;
};

export default withRedux(configureStore)(MyApp);
