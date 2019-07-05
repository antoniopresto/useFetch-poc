import React from "react";
import { ApiContext } from "./Context";

export const useFetch = (url, fetchConfig) => {
  const context = React.useContext(ApiContext);
  const cacheKey = JSON.stringify({ url, fetchConfig });

  const [currentState, setLocalState] = React.useState(null);

  const fetcher = () => {
    if (context.state[cacheKey]) {
      return setLocalState(context.state[cacheKey]);
    }

    fetch(url, fetchConfig).then(async res => {
      const response = await res.json();
      setLocalState(response);
      context.setState({ ...context.state, [cacheKey]: response });
    });
  };

  return [currentState, fetcher, context];
};
