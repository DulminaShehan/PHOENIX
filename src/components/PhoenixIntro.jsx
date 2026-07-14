import phoenixImg from '../assets/phoenix.webp'
import './PhoenixIntro.css'

function PhoenixIntro() {
  return (
    <div className="phoenix-intro" aria-hidden="true">
      <img src={phoenixImg} alt="" className="phoenix-intro__img" />
    </div>
  )
}

export default PhoenixIntro
