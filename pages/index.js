import Head from "next/head";

export default function Home() {
  return (
    <>
      <style>
        {`body {
  overflow-x: hidden;
  font-family: Sans-Serif;
  margin: 0;
  {* background-image: url('https://installer.cdn.tritrisim.com/Images/FenixA319Fire.png');
}*/}

/* body {
  margin: 0;
  padding: 0;
  background-image: url('https://installer.cdn.tritrisim.com/Images/FenixA319Fire.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  overflow-x: hidden;
}

 body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.4;
  pointer-events: none;
  z-index: 0;
} */

html {
  scroll-behavior: smooth;
}

}`}
      </style>

      <Head>
        <title>TriTriSim TFX – Emergency Effects for MSFS</title>
        <meta
          name="description"
          content="Download fire, crash, and spark effects for Microsoft Flight Simulator. Free for MSFS2020 & 2024. Join our Discord!"
        />

        <link rel="icon" type="image/x-icon" href="/tfx.png" />

        {/* Open Graph tags for Discord embeds */}
        <meta
          property="og:title"
          content="TriTriSim TFX – Emergency Effects for MSFS"
        />
        <meta
          property="og:description"
          content="Bring your simulator to life with fire, sparks and crash animations. Free for MSFS 2020 and 2024!"
        />
        <meta
          property="og:image"
          content="https://installer.cdn.tritrisim.com/Images/FenixA319Fire.png"
        />
        <meta property="og:url" content="https://tritrisim.com" />
        <meta property="og:type" content="website" />

        {/* Optional for Twitter card too */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="TriTriSim TFX – Emergency Effects for MSFS"
        />
        <meta
          name="twitter:description"
          content="Bring your simulator to life with fire, sparks and crash animations. Free for MSFS 2020 and 2024!"
        />
        <meta
          name="twitter:image"
          content="https://installer.cdn.tritrisim.com/Images/FenixA319Fire.png"
        />
      </Head>

      <section
        id="download"
        style={{
          backgroundImage:
            "url('https://installer.cdn.tritrisim.com/Images/FenixA319Fire.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: 0.6,
            zIndex: 0,
          }}
        />

        <a
          href="https://discord.gg/854qYnA3dm"
          style={{
            marginLeft: "5x",
            fontSize: "2rem",
            padding: "10px 15px",
            borderRadius: "12px",
            maxWidth: "200px",
            width: "80%",
            textAlign: "center",
            backgroundColor: "transparent",
            border: "2px solid white",
            color: "white",
            textDecoration: "none",
            cursor: "pointer",
            zIndex: 1,
            position: "relative",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>
      </section>

      <div
        style={{
          padding: "1rem", // trocado de margin pra padding
          fontFamily:
            "Open Sans, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial, Noto Sans, Segoe UI, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        }}
      >
        <div
          id="about"
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0,0,0,0.1)",
            padding: "2rem",
          }}
        >
          <div className="texts" style={{ fontSize: "100%" }}>
            <h2
              style={{
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                fontWeight: "800",
                marginBlockStart: "0.83em",
                marginBlockEnd: "0.83em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                color: "rgb(17 24 39)",
              }}
            >
              What is TriTriSim TFX?
            </h2>
            <p
              style={{
                fontFamily:
                  "Open Sans, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial, Noto Sans, Segoe UI, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                color: "rgb(107 114 128)",
              }}
            >
              TFX Is an addon for <b>Microsoft Flight Simulator</b>, focusing
              mainly on emergency effects that aren’t visible in the normal
              game. This includes fires, sparks, and even crash animations. TFX
              supports both <b>MSFS 2020 and 2024</b>, and includes support for
              a wide range of aircraft.
            </p>
          </div>
          <br />
          <div className="image" style={{}}>
            <img
              src="https://installer.cdn.tritrisim.com/Images/777-3fire.png"
              style={{
                borderRadius: "10px",
                maxWidth: "30vh",
              }}
            ></img>
          </div>
        </div>
        <br />
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0,0,0,0.1)",
            padding: "2rem",
          }}
        >
          <div className="texts" style={{ fontSize: "100%" }}>
            <h2
              style={{
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                fontWeight: "800",
                marginBlockStart: "0.83em",
                marginBlockEnd: "0.83em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                color: "rgb(17 24 39)",
              }}
            >
              What is included in TFX?
            </h2>
            <p
              style={{
                fontFamily:
                  "Open Sans, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial, Noto Sans, Segoe UI, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                color: "rgb(107 114 128)",
              }}
            >
              TFX includes a wide range of effects, including{" "}
              <b>fires, sparks, and crash animations</b>. It also includes
              support for <b>both native and custom aircrafts</b> that are
              compatible with the <b>MSFS2020</b> and <b>MSFS2024</b>. TFX is
              constantly being updated with new effects and aircrafts.
            </p>
          </div>
          <div className="image" style={{}}>
            <img
              src="https://installer.cdn.tritrisim.com/Images/b777ffire.png"
              width="600rem"
              style={{
                borderRadius: "10px",
                maxWidth: "30vh",
              }}
            ></img>
          </div>
        </div>

        <br />
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0,0,0,0.1)",
            padding: "2rem",
          }}
        >
          <div className="texts" style={{ fontSize: "100%" }}>
            <h2
              style={{
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                fontWeight: "800",
                marginBlockStart: "0.83em",
                marginBlockEnd: "0.83em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                color: "rgb(17 24 39)",
              }}
            >
              What is the price of TFX?
            </h2>
            <p
              style={{
                fontFamily:
                  "Open Sans, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial, Noto Sans, Segoe UI, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                color: "rgb(107 114 128)",
              }}
            >
              TFX is <b>completely free</b> — yep, you read that right! No
              subscriptions, no paywalls, and no hidden fees. We believe in
              making{" "}
              <b>
                high-quality, immersive content accessible to everyone in the
                flight sim community.
              </b>{" "}
              That said, if you enjoy the addon and wanna support the project,{" "}
              <b>donations are always welcome through our Ko-fi page.</b> Every
              bit helps us keep the fire effects (literally) coming!
            </p>
          </div>

          <div className="image" style={{}}>
            <img
              src="https://installer.cdn.tritrisim.com/Images/737fire.png"
              style={{
                borderRadius: "10px",
                maxWidth: "30vh",
              }}
            ></img>
          </div>
        </div>
      </div>

      <div
        id="requirements"
        style={{
          padding: "3rem 2rem",
          backgroundColor: "#f9f9f9",
          fontFamily:
            "Open Sans, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial, Noto Sans, Segoe UI, sans-serif",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "800",
            marginBottom: "2rem",
            color: "#111827",
            textAlign: "center",
          }}
        >
          System Requirements
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              flex: "1 1 300px",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "1.5rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#111827",
              }}
            >
              Minimum
            </h3>
            <ul style={{ lineHeight: "1.8", color: "#4B5563" }}>
              <li>Requires a 64-bit processor and OS</li>
              <li>OS: Windows 10</li>
              <li>Processor: Intel i5-4460 | AMD Ryzen 3 1200</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: NVIDIA GTX 770 | AMD Radeon RX 570</li>
              <li>DirectX: Version 11</li>
              <li>Storage: 1.6 GB available space</li>
            </ul>
          </div>

          <div
            style={{
              flex: "1 1 300px",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "1.5rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#111827",
              }}
            >
              Recommended
            </h3>
            <ul style={{ lineHeight: "1.8", color: "#4B5563" }}>
              <li>Requires a 64-bit processor and OS</li>
              <li>OS: Windows 10</li>
              <li>Processor: Intel i5-8400 | AMD Ryzen 5 1500X</li>
              <li>Memory: 16 GB RAM</li>
              <li>Graphics: NVIDIA GTX 970 | AMD Radeon RX 590</li>
              <li>DirectX: Version 11</li>
              <li>Storage: 2 GB available space</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        id="gallery"
        style={{
          backgroundColor: "#ffffff",
          padding: "2rem 1rem",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "800",
            marginBottom: "2rem",
            color: "#111827",
            textAlign: "center",
            fontFamily:
              "Open Sans, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial, Noto Sans, Segoe UI, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
          }}
        >
          Gallery
        </h2>
        <div
          className="gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1rem",
            justifyItems: "center",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            "https://installer.cdn.tritrisim.com/Images/737fire.png",
            "https://installer.cdn.tritrisim.com/Images/777-3fire.png",
            "https://installer.cdn.tritrisim.com/Images/787fire.png",
            "https://installer.cdn.tritrisim.com/Images/FenixA319Fire.png",
            "https://installer.cdn.tritrisim.com/Images/FenixFire1.png",
            "https://installer.cdn.tritrisim.com/Images/FenixFire2.png",
            "https://installer.cdn.tritrisim.com/Images/b777-2fire.png",
            "https://installer.cdn.tritrisim.com/Images/b777ffire.png",
            "https://installer.cdn.tritrisim.com/Images/a380fire.png",
          ].map((src, index) => (
            <a
              key={index}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "100%",
                maxWidth: "400px",
                aspectRatio: "16 / 9",
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0 0 15px rgba(0,0,0,0.1)",
                display: "block",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={src}
                alt={`Screenshot ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </a>
          ))}
        </div>
      </div>

      <footer
        style={{
          backgroundColor: "#000000",
          color: "#cdcdcd",
          textAlign: "center",
          padding: "1rem",
          fontSize: "0.9rem",
          marginTop: "2rem",
        }}
      >
        © TriTriSim 2025. All rights reserved.
      </footer>
    </>
  );
}
