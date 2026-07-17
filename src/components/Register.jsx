import Countdown from './Countdown'
import './Register.css'

const REGISTRATION_DEADLINE = new Date('2026-08-10T23:59:59')
const REGISTER_URL = 'https://forms.gle/v9K1cGotR39KPuP56'

function Register() {
  return (
    <section id="register" className="section register">
      <div className="container register__inner">
        <p className="eyebrow">Limited Slots</p>
        <h2 className="register__title">Secure Your Spot at PHOENIX 2026</h2>
        <p className="register__desc">
          Registrations are open now and close on <strong>August 10, 2026</strong>. Gather your team and
          submit your entry before the deadline.
        </p>

        <Countdown target={REGISTRATION_DEADLINE} label="Time left to register" />

        <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary register__cta">
          Register Your Team
        </a>

        <p className="register__note">📍 NIBM, Colombo 07 &nbsp;·&nbsp; Limited exhibition slots available</p>
      </div>
    </section>
  )
}

export default Register
