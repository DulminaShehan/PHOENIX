import './Timeline.css'

const STAGES = [
  {
    tag: 'Now',
    title: 'Registration Open',
    date: 'Open Now',
    desc: 'Teams can submit entries for the Robotics and IoT tracks.',
    state: 'active',
  },
  {
    tag: '01',
    title: 'Registration Deadline',
    date: 'August 08, 2026',
    desc: 'Last day to complete and submit your team registration.',
    state: 'upcoming',
  },
  {
    tag: '02',
    title: 'Exhibition',
    date: 'August 14, 2026',
    desc: 'Live showcase and judging to crown the PHOENIX 2026 winners at NIBM, Colombo 07.',
    state: 'upcoming',
  },
]

function Timeline() {
  return (
    <section id="timeline" className="section timeline">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Key Dates</p>
          <h2>Event Timeline</h2>
          <p>Mark your calendar — every stage of PHOENIX 2026, from registration to the final showcase.</p>
        </div>

        <ol className="timeline__list">
          {STAGES.map((stage) => (
            <li key={stage.title} className={`timeline__item timeline__item--${stage.state}`}>
              <div className="timeline__marker">
                <span className="timeline__dot" />
              </div>
              <div className="timeline__card">
                <span className="timeline__tag">{stage.tag}</span>
                <h3 className="timeline__title">{stage.title}</h3>
                <span className="timeline__date">{stage.date}</span>
                <p className="timeline__desc">{stage.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Timeline
