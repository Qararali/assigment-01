import "./App.css";

function App() {
  return (
    <div>
      {/* Header */}
      <header style={{ background: "#282c34", padding: "20px", color: "white" }}>
        <h2>My First Website</h2>
      </header>

      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "#f4f4f4",
        }}
      >
        <h1>🚀 Welcome to My React Website</h1>
        <p>This is my very first professional-looking website with React.</p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>About Me</h2>
        <p>
          Hi, I am learning React.js and this is my first real project. More
          exciting projects are coming soon!
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#282c34",
          color: "white",
          textAlign: "center",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        <p>© 2025 My First Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
