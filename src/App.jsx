import Layout from "./Layout";
import Form from "./components/Form";
// import Questions from "./components/Questions";
// import Results from "./components/Results";
import { EcoProvider } from "./context/EcoContext";

function App() {
  return (
    <EcoProvider>
      <Layout>
        <Form />
        {/* <Questions /> */}
        {/* <Results /> */}
      </Layout>
    </EcoProvider>
  );
}

export default App;
