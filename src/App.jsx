import Layout from "./Layout";
import Form from "./components/Form";
// import Questions from "./components/Questions";

import { EcoProvider } from "./context/EcoContext";

function App() {
  return (
    <EcoProvider>
      <Layout>
        <Form />
      </Layout>
    </EcoProvider>
  );
}

export default App;
