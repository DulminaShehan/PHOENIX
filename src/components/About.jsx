import './About.css'

const STATS = [
  { value: 'Jul 28', label: 'Registration Deadline' },
  { value: 'Jul 30', label: 'First Round' },
  { value: 'Aug 06', label: 'Final Round' },
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">About the Event</p>
          <h2>A Stage for Builders of Tomorrow</h2>
          <p>
            PHOENIX 2026 is the flagship IoT and Robotics exhibition hosted by the NIBM IEEE Student
            Branch — bringing together student innovators to design, build, and showcase intelligent
            systems that rise beyond the ordinary.
          </p>
          <p className="about__venue">📍 NIBM, Colombo 07</p>
        </div>

        <div className="about__stats">
          {STATS.map((s) => (
            <div key={s.label} className="about__stat">
              <span className="about__stat-value">{s.value}</span>
              <span className="about__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
