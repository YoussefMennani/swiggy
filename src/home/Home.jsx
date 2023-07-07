
import SearchBar from "../common/SearchBar/SearchBar";
import Layout from "../Layout/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <SearchBar />
        <h1 className="text-xl font-bold underline">
      Hello world!
    </h1>
    <button>HELLO</button>
      </Layout>
    </>
  );
};

export default Home;
