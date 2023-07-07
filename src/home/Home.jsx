
import SearchBar from "../common/SearchBar/SearchBar";
import Layout from "../Layout/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <SearchBar />

        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </Layout>
    </>
  );
};

export default Home;
