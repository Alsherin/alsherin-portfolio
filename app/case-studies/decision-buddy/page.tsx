import Image from "next/image";

export default function DecisionBuddy() {
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
        case study 01
      </p>

      <h1
        style={{
          fontSize: "clamp(3rem, 7vw, 6rem)",
          color: "#ccd6f6",
          lineHeight: 1,
          marginBottom: "20px",
        }}
      >
        Decision Buddy
      </h1>

      <h2
        style={{
          color: "#64ffda",
          fontSize: "2rem",
          marginBottom: "40px",
        }}
      >
        An AI Decision Making Tool
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
          Built a lightweight AI decision assistant focused on reducing
          decision fatigue. Instead of generic responses, I designed
          structured outputs like pros/cons and added tone-based
          personalization to improve engagement.
        </p>

        <p style={{ marginTop: "30px" }}>
          My focus was on clarity, usability, and fast feedback loops.
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
    src="/projects/decision-buddy/hero.png"
    alt="Decision Buddy"
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
            People struggle with everyday decisions, from career moves
            to personal choices and often experience decision fatigue.
          </p>

          <p>
            There's a gap for a simple, structured and engaging
            decision-making assistant.
          </p>
        </div>
      </section>

      {/* GOAL */}

      <section className="section">
        <p className="terminal-command">GOAL</p>

        <div className="content-block">
          <p>Build a lightweight AI-powered tool that:</p>

          <p>• Helps users think clearly</p>
          <p>• Reduces decision fatigue</p>
          <p>• Delivers structured recommendations instantly</p>
        </div>
      </section>

      {/* TARGET USERS */}

      <section className="section">
        <p className="terminal-command">TARGET USERS</p>

        <div className="content-block">
          <p>• Young professionals (22–30)</p>
          <p>• People facing frequent life/career decisions</p>
          <p>• Users who tend to overthink</p>
        </div>
      </section>

      {/* SOLUTION */}

      <section className="section">
        <p className="terminal-command">SOLUTION</p>

        <div className="content-block">
          <p>
            A simple AI-powered app where users:
          </p>

          <p>1. Enter a dilemma</p>
          <p>2. Choose a tone (Normal, Savage, Soft)</p>
          <p>3. Receive:</p>

          <p>• Pros</p>
          <p>• Cons</p>
          <p>• Clear recommendation</p>
        </div>
      </section>

      {/* DEMO VIDEO */}

      <section className="section">

        <p className="terminal-command">
          DEMO VIDEO
        </p>

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
      src="/projects/decision-buddy/demo.mp4"
      type="video/mp4"
    />
  </video>
</div>

      </section>

      {/* KEY FEATURES */}

      <section className="section">
        <p className="terminal-command">KEY FEATURES</p>

        <div className="content-block">
          <p>1. Structured Output</p>
          <p>2. Tone Personalization</p>
          <p>3. Instant Feedback Loop</p>
        </div>
      </section>

      {/* PRODUCT DECISIONS */}

      <section className="section">
        <p className="terminal-command">
          PRODUCT DECISIONS
        </p>

        <div className="content-block">

          <h3>Simple UI</h3>

          <p>👉 Reduce cognitive load</p>
          <p>👉 Faster adoption</p>

          <h3>Pros / Cons Format</h3>

          <p>👉 Mirrors real human decision frameworks</p>
          <p>👉 Makes AI output actionable</p>

          <h3>Tone Selection</h3>

          <p>👉 Adds emotional relatability</p>
          <p>👉 Increases engagement (not just utility)</p>

        </div>
      </section>

      {/* SUCCESS METRICS */}

      <section className="section">
        <p className="terminal-command">
          SUCCESS METRICS
        </p>

        <div className="content-block">

          <p>
            If this were a production product,
            I would track:
          </p>

          <p>• % of users completing a decision flow</p>
          <p>• Repeat usage rate</p>
          <p>• Time spent per session</p>
          <p>• User satisfaction (feedback)</p>

        </div>
      </section>

      {/* LEARNINGS */}

      <section className="section">
        <p className="terminal-command">
          WHAT I LEARNED
        </p>

        <div className="content-block">

          <p>
            AI alone isn't enough —
            <strong> structure matters more than intelligence.</strong>
          </p>

          <p>
            UX simplicity &gt; feature complexity
          </p>

          <p>
            Prompt design = product design
          </p>

        </div>
      </section>

      {/* FUTURE IMPROVEMENTS */}

      <section className="section">
        <p className="terminal-command">
          FUTURE IMPROVEMENTS
        </p>

        <div className="content-block">

          <p>• Decision history (track past choices)</p>

          <p>• Integration with journaling tools</p>

        </div>
      </section>

      {/* TECH STACK */}

      <section className="section">
        <p className="terminal-command">
          TECH STACK
        </p>

        <div className="skills-grid">

          <div className="skill-card">
            Python
          </div>

          <div className="skill-card">
            Streamlit
          </div>

          <div className="skill-card">
            OpenAI API
          </div>

        </div>
      </section>

    </main>
  );
}