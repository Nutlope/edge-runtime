export default function Edge() {
  return <div>Edge</div>;
}

export const getServerSideProps = async () => {
  return { props: { message: "hi" } };
};
