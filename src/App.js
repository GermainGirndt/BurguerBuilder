import React from "react";

import Layout from "./hoc/Layout";
import BurguerBuilder from "./containers/BurguerBuilder";

function App() {
  return (
    <div>
      <Layout>
        <BurguerBuilder />
      </Layout>
    </div>
  );
}

export default App;
