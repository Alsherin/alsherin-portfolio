import Image from "next/image";

export default function Jobflow() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "100px 40px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "#64ffda",
          letterSpacing: "4px",
          marginBottom: "20px",
        }}
      >
        CASE STUDY 02
      </p>

      <h1
        style={{
          fontSize: "clamp(3rem, 7vw, 6rem)",
          color: "#ccd6f6",
          lineHeight: 1,
          marginBottom: "20px",
        }}
      >
        Job Flow
      </h1>

      <h2
        style={{
          color: "#64ffda",
          fontSize: "2rem",
          marginBottom: "40px",
        }}
      >
        Chrome Extension for Job Tracking
      </h2>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto 80px auto",
          color: "#8892b0",
          fontSize: "1.2rem",
          lineHeight: 1.8,
        }}
      >
        <p>
          Designed and built a lightweight Chrome extension to solve fragmented 
          job tracking workflows, enabling users to capture opportunities in one click, 
          manage application status, and maintain a structured pipeline directly 
          within their browsing experience. 
        </p>

        <p style={{ marginTop: "30px" }}>
         Focused on reducing context-switching 
         and improving efficiency in the job search process.
        </p>
      </div>

      <div
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: "120px",
  }}
>
  <Image
    src="/projects/job-flow/hero.png"
    alt="JobFlow"
    width={1400}
    height={800}
    style={{
      borderRadius: "20px",
      maxWidth: "100%",
      height: "auto",
    }}
  />
</div>

      {/* PROBLEM */}

      <section className="section">
        <p className="terminal-command">PROBLEM</p>

        <div className="content-block">
          <p>
            Job hunting is fragmented. Roles are discovered across platforms (e.g., LinkedIn), 
            but tracking happens elsewhere (spreadsheets/notes). 
            This creates friction: 
          </p>

          <p>• Repeated context switching</p>
          <p>• Missed follow-ups</p>
          <p>• No simple way to maintain a job pipeline</p>
        </div>
      </section>

    


      {/* SOLUTION */}

      <section className="section">
        <p className="terminal-command">SOLUTION</p>

        <div className="content-block">
          <p>
           Built a lightweight Chrome extension that lets users capture 
           and manage jobs directly from the browser.
          </p>
        </div>
      </section>


      {/* HOW IT WORKS */}

      <section className="section">
        <p className="terminal-command">HOW IT WORKS</p>

        <div className="content-block">
          <p>• Uses Chrome Extension APIs (tabs, storage)</p>
          <p>• Stores job data locally using chrome.storage</p>
          <p>• Renders dynamic UI inside popup</p>
          <p>• Handles state updates (toggle/delete) in real-time</p>
        </div>
      </section>

      {/* DEMO VIDEO */}

      <section className="section">

        <div
  style={{
    display: "flex",
    justifyContent: "center",
  }}
>
  <video
    controls
    style={{
      width: "100%",
      maxWidth: "1000px",
      borderRadius: "20px",
    }}
  >
    <source
      src="/projects/job-flow/jobflow_demo.mp4"
      type="video/mp4"
    />
  </video>
</div>

      </section>

      {/* KEY FEATURES */}

      <section className="section">
        <p className="terminal-command">KEY FEATURES</p>

        <div className="content-block">
          <p>1. One-click save — Capture job title + link instantly </p>
          <p>2. Status tracking — Toggle between Saved ↔ Applied </p>
          <p>3. Search — Quickly find roles by title </p>
          <p>4. Delete / Clear — Manage pipeline easily </p>
          <p>5. - Export CSV — Download job list for external tracking </p>
        </div>
      </section>


      {/* IMPACT */}

      <section className="section">
        <p className="terminal-command">
          IMPACT
        </p>

        <div className="content-block">

          <p>• Eliminates manual job tracking workflows</p>
          <p>• Reduces friction between discovery → application</p>
          <p>• Creates a structured, lightweight job pipeline</p>


        </div>
      </section>



      {/* FUTURE IMPROVEMENTS */}

      <section className="section">
        <p className="terminal-command">
          FUTURE IMPROVEMENTS
        </p>

        <div className="content-block">

          <p>• Auto-extract structured job details from page 
            (company, role, location)</p>

          <p>• Sync with Google Sheets or Notion</p>

          <p>• Add reminders for follow-ups</p>

          <p>• Track conversion metrics (Saved → Applied → Interviewed)</p>

        </div>
      </section>

     

    </main>
  );
}
