import './Highlights.css'

const ITEMS = [
  {
    title: 'Showcase Your Innovation',
    desc: 'Present your Robotics & IoT builds to industry professionals and fellow innovators.',
  },
  {
    title: 'Certificates for All',
    desc: 'Every exhibitor receives an official certificate of participation.',
  },
  {
    title: 'Expand Your Network',
    desc: 'Connect with IEEE members, mentors, and industry professionals.',
  },
  {
    title: 'Limited Spots',
    desc: 'Only a limited number of exhibition slots are available — register early.',
  },
]

function Highlights() {
  return (
    <section id="highlights" className="section highlights">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Why Join</p>
          <h2>What to Expect</h2>
        </div>

        <div className="highlights__grid">
          {ITEMS.map((item) => (
            <div key={item.title} className="highlight-card">
              <h3 className="highlight-card__title">{item.title}</h3>
              <p className="highlight-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
