import type { NextPage } from "next";

const Edge: NextPage = () => {
  return <div>"Edge"</div>;
};

export default Edge;

export const getServerSideProps = () => {
  return { props: { message: new Date().toString() } };
};
