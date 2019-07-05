import React from "react";
import { useFetch } from "./api/useFetch";
import { onBrowser } from "./onBrowser";

export const Home = props => {
  const [state, getData, context] = useFetch(
    "https://api.tvmaze.com/search/shows?q=batman",
    {}
  );

  React.useEffect(() => {
    getData();
  }, []);

  onBrowser(() => {
    window.foo = { state, getData, context };
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <hr style={{ margin: "30px 0", width: "100%" }} />
    </div>
  );
};

export default Home;
