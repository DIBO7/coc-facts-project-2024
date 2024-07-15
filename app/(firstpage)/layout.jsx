import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <main>
      <section>
        {/* This section takes the background entirely */}
        <header className="header">
          {/* For now, Just a div. */}
          <h1>COC Facts</h1>
        </header>

        
          {children}
        

      </section>

    </main>
  );
}
