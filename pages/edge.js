import { Benchmarker } from "../components/benchmarker";

const Home = () => {
  return <Benchmarker>Edge</Benchmarker>;
};

export default Home;

export const getServerSideProps = () => {
  return { props: { message: "hi" } };
};
