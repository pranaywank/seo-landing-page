"use client";

import { useState } from "react";
import {
  X,
  CheckCircle,
  Code,
  Globe,
  Database,
  LayoutTemplate,
  RefreshCw,
  Zap,
  Search,
  PenTool,
  Link as LinkIcon
} from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    designation: "",
    email: "",
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to submit.");
    }
  };

  return (
    <>
      <div className="bolt-glow-wrapper">
        <div className="bolt-glow-main"></div>
        <div className="bolt-glow-accent"></div>
        <div className="hero-curve-line"></div>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-container">
          <div className="logo-area">
            <div className="logo-box">W</div>
            <span className="logo-text">Wednesday</span>
          </div>
          <button className="btn-secondary" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
            Connect with us
          </button>
        </div>
      </nav>

      <main>
        {/* Xtract-style Hero Section */}
        <section className="section hero-section" style={{ paddingTop: '200px' }}>
          <div className="container hero-container" style={{ maxWidth: '800px' }}>

            <div className="badge">
              Now accepting early access signups
            </div>

            <h1 className="hero-headline" style={{ marginBottom: "24px" }}>
              Scale your organic traffic on <span className="italic">autopilot.</span>
            </h1>

            <p className="hero-subtitle" style={{ color: 'var(--text-primary)', marginBottom: "48px", maxWidth: '650px', lineHeight: '1.5' }}>
              The first autonomous SEO tool that connects your brand, services, and CMS into a single automated pipeline. From market research to publishing, all things automated.
            </p>

            <div className="hero-ctas" style={{ justifyContent: 'center' }}>
              <button
                className="btn-primary btn-large"
                onClick={() => setIsModalOpen(true)}
              >
                Get Early Access
              </button>
              <button
                className="btn-secondary btn-large"
                onClick={() => window.scrollTo({ top: document.getElementById('workflow')?.offsetTop || 800, behavior: 'smooth' })}
              >
                Learn More
              </button>
            </div>

          </div>
        </section>

        {/* 2. The Workflow (5 Steps) */}
        <section id="workflow" className="section" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-label">The Workflow</span>
              <h2>From Brand Context to Published Content. Automatically.</h2>
              <p>We've automated the entire SEO lifecycle. Simply input your services and let the tool handle the rest.</p>
            </div>

            <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {/* Step 1 */}
              <div className="card step-card">
                <span className="step-number">01</span>
                <div className="step-icon"><Database size={24} /></div>
                <h3>Brand DNA Onboarding</h3>
                <p className="text-secondary text-sm">Input your brand profile and service offerings. The tool analyzes your unique value proposition to ensure every post sounds like your company.</p>
              </div>

              {/* Step 2 */}
              <div className="card step-card">
                <span className="step-number">02</span>
                <div className="step-icon"><Globe size={24} /></div>
                <h3>Keyword Gap Identification</h3>
                <p className="text-secondary text-sm">Using real-time search data, the tool identifies high-value opportunities your competitors are winning and you are missing.</p>
              </div>

              {/* Step 3 */}
              <div className="card step-card">
                <span className="step-number">03</span>
                <div className="step-icon"><Code size={24} /></div>
                <h3>Autonomous Content Production</h3>
                <p className="text-secondary text-sm">Full-stack SEO articles are generated with expert structure, meta-data, and contextual imagery tailored to your services.</p>
              </div>

              {/* Step 4 */}
              <div className="card step-card">
                <span className="step-number">04</span>
                <div className="step-icon"><LayoutTemplate size={24} /></div>
                <h3>Auto-Publishing to CMS</h3>
                <p className="text-secondary text-sm">Content is synced directly to your Webflow or Framer CMS on a staggered, natural schedule.</p>
              </div>

              {/* Step 5 */}
              <div className="card step-card">
                <span className="step-number">05</span>
                <div className="step-icon"><RefreshCw size={24} /></div>
                <h3>Continuous Auto-Optimization</h3>
                <p className="text-secondary text-sm">The tool monitors performance and automatically updates internal links and meta-tags to maintain peak rankings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Pain Points */}
        <section className="section bg-alt" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-label">The Problem</span>
              <h2>SEO shouldn't cost a fortune.</h2>
            </div>

            <div className="comparison-columns">
              <div className="card pain-card old-way">
                <div className="card-header border-bottom">
                  <h3>The Old Way</h3>
                </div>
                <ul className="pain-list">
                  <li>
                    <strong>$500&ndash;$2,000 per blog post</strong> - Agencies charge premium rates and still deliver generic content.
                  </li>
                  <li>
                    <strong>2&ndash;4 weeks per article</strong>  - Briefing, drafting, revisions, approvals! By the time it's published, the keyword opportunity may have shifted.
                  </li>
                  <li>
                    <strong>5+ people in the workflow</strong>  - SEO strategist, writer, editor, designer, developer. Each handoff is a bottleneck.
                  </li>
                  <li>
                    <strong>Inconsistent output</strong>  - Miss one month and your rankings start slipping.
                  </li>
                </ul>
              </div>

              <div className="card pain-card new-way accent-border">
                <div className="card-header border-bottom">
                  <Zap className="text-accent" size={20} />
                  <h3>With SEO Automation Tool</h3>
                </div>
                <ul className="pain-list">
                  <li>
                    <strong>A fraction of agency costs</strong> - Get 15+ optimized posts per batch at a cost that makes agencies look absurd.
                  </li>
                  <li>
                    <strong>Published in hours, not weeks</strong> - From trigger to published, full pipeline runs automatically.
                  </li>
                  <li>
                    <strong>Zero coordination overhead</strong> - One automation tool that replaces the entire content team workflow.
                  </li>
                  <li>
                    <strong>Consistent, compounding growth</strong> - Publish on a predictable cadence. Watch organic traffic compound month over month.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Features */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Capabilities</span>
              <h2>Everything you need.</h2>
            </div>

            <div className="grid-3">
              <div className="card feature-card">
                <Search className="text-accent mb-4" size={28} />
                <h3>Intelligent Keyword Research</h3>
                <p>Analyzes your existing content, identifies gaps using real search data, and picks keywords with the best ranking potential for your domain.</p>
              </div>
              <div className="card feature-card">
                <PenTool className="text-accent mb-4" size={28} />
                <h3>SEO-Optimized Writing</h3>
                <p>Full-length blog posts with proper heading structure, meta titles, meta descriptions, keyword density, and readability &mdash; all handled automatically.</p>
              </div>
              <div className="card feature-card">
                <LinkIcon className="text-accent mb-4" size={28} />
                <h3>Smart Internal Linking</h3>
                <p>The agent understands your site structure and automatically adds internal links to relevant existing pages &mdash; boosting SEO authority.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Comparison Table */}
        <section className="section bg-alt" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-label">Compare</span>
              <h2>More than AI writing tools.</h2>
            </div>

            <div className="table-container border-bottom text-secondary" style={{ border: '1px solid var(--border-color)' }}>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>Typical Agency</th>
                    <th>AI Writing Tools</th>
                    <th className="highlight-col text-accent">Wednesday SEO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Keyword research</td>
                    <td>Manual, limited</td>
                    <td>Basic suggestions</td>
                    <td className="highlight-col">Auto gap analysis</td>
                  </tr>
                  <tr>
                    <td>Content writing</td>
                    <td>Human (slow)</td>
                    <td>AI (needs editing)</td>
                    <td className="highlight-col">AI + auto-optimized</td>
                  </tr>
                  <tr>
                    <td>Images</td>
                    <td>Stock photos</td>
                    <td>None</td>
                    <td className="highlight-col">Auto-generated</td>
                  </tr>
                  <tr>
                    <td>Internal linking</td>
                    <td>Manual</td>
                    <td>None</td>
                    <td className="highlight-col">Automatic</td>
                  </tr>
                  <tr>
                    <td>CMS publishing</td>
                    <td>You do it</td>
                    <td>You do it</td>
                    <td className="highlight-col">Fully automated</td>
                  </tr>
                  <tr>
                    <td>Time to publish</td>
                    <td>2&ndash;4 weeks</td>
                    <td>Hours + manual work</td>
                    <td className="highlight-col">Minutes (automated)</td>
                  </tr>
                  <tr>
                    <td>Cost per blog</td>
                    <td>$500&ndash;$2,000</td>
                    <td>$50&ndash;150 + your time</td>
                    <td className="highlight-col">Fraction of agency cost</td>
                  </tr>
                  <tr>
                    <td>Consistency</td>
                    <td>Depends on agency</td>
                    <td>Depends on you</td>
                    <td className="highlight-col">Runs on schedule</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 6. Final CTA Section */}
        <section className="section final-cta-section text-center">
          <div className="container" style={{ maxWidth: '600px' }}>
            <h2 style={{ fontSize: '48px', marginBottom: '24px' }}>Stop managing agencies.<br /> Start compounding traffic.</h2>
            <p className="text-secondary mb-8 text-lg cta-subtitle">Join the waitlist to automate your entire SEO pipeline and secure early-bird access.</p>
            <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
              Get Early Access
            </button>
          </div>
        </section>
      </main>

      {/* Waitlist Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close modal">
              <X size={20} />
            </button>

            {status === "success" ? (
              <div className="text-center" style={{ padding: '20px 0' }}>
                <div className="mx-auto" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(129, 74, 200, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <CheckCircle className="text-accent" size={28} />
                </div>
                <h3 style={{ marginBottom: '16px', fontSize: '24px' }}>You Are On The Waitlist!.</h3>
                <p className="text-secondary mb-8" style={{ fontSize: '15px' }}>
                  Keep an eye on your inbox for early access.
                </p>
                <button className="btn-secondary w-full" onClick={() => setIsModalOpen(false)}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ marginBottom: '8px', fontSize: '24px' }}>Get Early Access</h3>
                <p className="text-secondary mb-6 text-sm">Join the waitlist and be first to automate your SEO pipeline.</p>

                {status === "error" && (
                  <div className="error-message mb-4 text-sm">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={status === "loading"}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={status === "loading"}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      placeholder="Company or brand name"
                      value={formData.company}
                      onChange={handleInputChange}
                      disabled={status === "loading"}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="website">Website URL</label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={handleInputChange}
                      disabled={status === "loading"}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="designation">Designation</label>
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      required
                      placeholder="e.g. Founder, Marketing Head, CTO"
                      value={formData.designation}
                      onChange={handleInputChange}
                      disabled={status === "loading"}
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="btn-primary w-full"
                      disabled={status === "loading"}
                      style={{ justifyContent: 'center' }}
                    >
                      {status === "loading" ? "Joining..." : "Join the Waitlist"}
                    </button>
                    <p className="text-center text-secondary text-xs mt-3">
                      No spam. We'll only email you about early access.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* 7. Footer */}
      <footer className="footer border-bottom" style={{ borderBottom: 'none' }}>
        <div className="container footer-container">
          <p className="text-secondary" style={{ fontSize: '14px' }}>Built by Wednesday Solution &middot; <a href="https://wednesday.is" target="_blank" rel="noopener noreferrer" className="footer-link">wednesday.is</a></p>
        </div>
      </footer>
    </>
  );
}
