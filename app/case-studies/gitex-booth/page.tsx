import Image from "next/image";

export default function GitexBooth() {
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
        case study 04
      </p>

      <h1 className="hero-name">
        Gitex Booth Strategy
      </h1>

      <h2 className="hero-subtitle">
        From Footfall to Pipeline
      </h2>

      <div className="content-block">
        <p>
          Planned and executed a high-intent demand generation
          strategy at GITEX by transforming a traditional booth
          into an engagement-driven conversion funnel.
        </p>
      </div>

      {/* HERO IMAGE */}

      <div
        style={{
          marginTop: "80px",
          marginBottom: "120px",
        }}
      >
        <Image
          src="/projects/gitex-booth/hero.jpg"
          alt="GITEX Booth Strategy"
          width={1400}
          height={800}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "20px",
            border: "1px solid #233554",
          }}
        />
      </div>

      {/* IMPACT */}

      <section className="section">
        <p className="terminal-command">
          IMPACT
        </p>

        <div className="content-block">
          <h2
            style={{
              color: "#64ffda",
              fontSize: "2rem",
            }}
          >
            +40% Lead Acquisition
          </h2>
        </div>
      </section>

      {/* PROBLEM */}

      <section className="section">
        <p className="terminal-command">
          PROBLEM
        </p>

        <div className="content-block">
          <p>
            Low-quality leads were slowing down the sales pipeline
            and reducing ROI from events.
          </p>
        </div>
      </section>

      {/* USERS */}

      <section className="section">
        <p className="terminal-command">
          USERS
        </p>

        <div className="content-block">
          <p>
            Mid-to-senior decision makers evaluating SaaS tools.
          </p>
        </div>
      </section>

      {/* SOLUTION */}

      <section className="section">
        <p className="terminal-command">
          SOLUTION
        </p>

        <div className="content-block">

          <h3>1. Attract (Top of Funnel)</h3>

          <p>
            • Gamified activations to create curiosity and drive traffic
          </p>

          <p>
            • Giveaways aligned with visitor personas and regional needs
          </p>

          <br />

          <h3>2. Engage (Mid Funnel)</h3>

          <p>
            • One-on-one guided seminars instead of generic demos
          </p>

          <p>
            • Contextual conversations based on visitor intent
          </p>

          <p>
            • Partner support to overcome language barriers
          </p>

          <br />

          <h3>3. Convert (Bottom Funnel)</h3>

          <p>
            • Real-time lead qualification
          </p>

          <p>
            • Meeting bookings initiated at the booth
          </p>

          <p>
            • Immediate follow-up process
          </p>

        </div>
      </section>

      {/* EXECUTION */}

      <section className="section">
        <p className="terminal-command">
          EXECUTION
        </p>

        <div className="content-block">

          <h3>Pre-Event</h3>

          <p>
            • Identified target personas
          </p>

          <p>
            • Mapped the complete booth journey
          </p>

          <p>
            • Designed engagement formats around user behaviour
          </p>

          <br />

          <h3>During Event</h3>

          <p>
            • Trained teams on structured visitor interactions
          </p>

          <p>
            • Iterated messaging based on live feedback
          </p>

          <br />

          <h3>Post-Event</h3>

          <p>
            • Prioritized follow-ups based on engagement levels
          </p>

          <p>
            • Segmented leads for targeted nurturing
          </p>

        </div>
      </section>

      {/* RESULTS */}

      <section className="section">
        <p className="terminal-command">
          RESULTS
        </p>

        <div className="content-block">

          <p>
            1. +40% increase in lead acquisition
          </p>

          <p>
            2. Higher proportion of qualified leads
          </p>

          <p>
            3. Increase in post-event meeting conversions
          </p>

        </div>
      </section>

      {/* IMPROVEMENTS */}

      <section className="section">
        <p className="terminal-command">
          WHAT I'D IMPROVE
        </p>

        <div className="content-block">

          <p>
            • Introduce real-time lead scoring
          </p>

          <p>
            • Increase pre-booked meetings
          </p>

        </div>
      </section>

      {/* FINAL INSIGHT */}

      <section className="section">
        <p className="terminal-command">
          FINAL INSIGHT
        </p>

        <div className="content-block">

          <h2
            style={{
              color: "#64ffda",
              fontSize: "2rem",
              lineHeight: 1.5,
            }}
          >
            Events don't generate pipeline.
            <br />
            Well-designed funnels do.
          </h2>

        </div>
      </section>

    </main>
  );
}