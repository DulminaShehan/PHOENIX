import Countdown from './Countdown'
import PhoenixIntro from './PhoenixIntro'
import phoenixImg from '../assets/phoenix.webp'
import './Hero.css'

const REGISTRATION_DEADLINE = new Date('2026-07-28T23:59:59')

function Hero() {
  return (
    <section id="top" className="hero">
      <PhoenixIntro />
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__rings" aria-hidden="true" />

      <div className="container hero__inner">
        <p className="eyebrow hero__eyebrow">NIBM IEEE Student Branch Presents</p>

        <h1 className="hero__title">
          <img src={phoenixImg} alt="" className="hero__crest" />
          <span className="hero__title-line">Rise Beyond Reality</span>
          <span className="hero__title-main">PHOENIX 2026</span>
        </h1>

        <p className="hero__subtitle">IoT &amp; Robotics Exhibition</p>
        <p className="hero__tagline">Where imagination meets innovation.</p>

        <div className="hero__status">
          <span className="status-dot" aria-hidden="true" />
          Registrations Open
        </div>

        <div className="hero__meta">
          <span>📍 NIBM, Colombo 07</span>
          <span className="hero__meta-sep" aria-hidden="true">
            •
          </span>
          <span>🗓️ 30 July 2026</span>
        </div>

        <div className="hero__actions">
          <a href="#register" className="btn btn-primary">
            Register Now
          </a>
          <a href="#timeline" className="btn btn-ghost">
            View Timeline
          </a>
        </div>

        <div className="hero__countdown">
          <Countdown target={REGISTRATION_DEADLINE} label="Registration closes in" />
        </div>
      </div>
    </section>
  )
}

export default Hero
