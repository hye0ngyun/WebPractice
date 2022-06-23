import NavBar from "./NavBar";

export default function Layout({ children, title }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
