export default function Another({ runtime }) {
  return <div>Another {runtime}</div>;
}

export async function getServerSideProps() {
  return { props: { runtime: "hi there" } };
}
