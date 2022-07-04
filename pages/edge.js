export default function Edge() {
  return <div>Another</div>;
}

// this doesn't work
export const getServerSideProps = async () => {
  return { props: { message: "hi there" } };
};

// this works
// export async function getServerSideProps() {
//   return { props: { message: "hi there } };
// }
