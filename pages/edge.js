export default function Edge() {
  return <div>Another</div>;
}

export async function getServerSideProps() {
  return { props: { runtime: "hi there" } };
}
