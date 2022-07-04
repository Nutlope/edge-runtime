export default function Edge() {
  return <div>Edge</div>;
}

export const getServerSideProps = () => {
  return { props: { message: "hi" } };
};
