import { useEffect, useState } from 'react'
import './Countdown.css'

function getRemaining(target) {
  const diff = Math.max(0, target.getTime() - Date.now())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds, done: diff === 0 }
}

function Countdown({ target, label = 'Registration closes in' }) {
  const [remaining, setRemaining] = useState(() => getRemaining(target))

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { value: remaining.days, label: 'Days' },
    { value: remaining.hours, label: 'Hrs' },
    { value: remaining.minutes, label: 'Min' },
    { value: remaining.seconds, label: 'Sec' },
  ]

  return (
    <div className="countdown">
      <span className="countdown__label">{remaining.done ? 'Registrations are now closed' : label}</span>
      {!remaining.done && (
        <div className="countdown__units">
          {units.map((u) => (
            <div key={u.label} className="countdown__unit">
              <span className="countdown__value">{String(u.value).padStart(2, '0')}</span>
              <span className="countdown__unit-label">{u.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Countdown
