import type { NextPage } from "next";
import { Benchmarker } from "../components/benchmarker";

const Lambda: NextPage = () => {
  return <Benchmarker>Lambda</Benchmarker>;
};

export default Lambda;

export const getServerSideProps = () => {
  return { props: { message: "Hi" } };
};

export const config = {
  runtime: "nodejs",
  //   unstable_runtimeJS: false,
};
