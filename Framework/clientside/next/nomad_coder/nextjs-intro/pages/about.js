import NavBar from "../components/NavBar";

export default function About() {
  return (
    <div>
      <NavBar />
      <h2 className="active">About</h2>
      <style jsx>{`
        .active {
          color: red;
        }
      `}</style>
    </div>
  );
}
