export default function Edge({ runtime }) {
  return <div>Another {runtime}</div>;
}

export async function getServerSideProps() {
  return { props: { runtime: "hi there" } };
}
