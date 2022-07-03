import type { NextPage } from "next";
import { Benchmarker } from "../components/benchmarker";

const Home: NextPage = () => {
  return <Benchmarker>Edge</Benchmarker>;
};

export default Home;

export const getServerSideProps = () => {
  return { props: { message: new Date().toString() } };
};
