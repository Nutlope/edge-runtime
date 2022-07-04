export default function Edge() {
  return <div>Another</div>;
}

export const getServerSideProps = async () => {
  return { props: { runtime: "hi there" } };
};
