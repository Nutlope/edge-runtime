import type { NextPage } from "next";
import { Benchmarker } from "../components/benchmarker";

const Edge: NextPage = () => {
  return <Benchmarker>Edge</Benchmarker>;
};

export default Edge;

export const getServerSideProps = () => {
  return { props: { message: new Date().toString() } };
};
