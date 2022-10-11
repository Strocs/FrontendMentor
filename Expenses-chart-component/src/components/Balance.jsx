import './Balance.css'
import logo from '../assets/logo.svg'

const Balance = () => {
  return (
    <div className='balance-container'>
      <div className='balance-data'>
        <p className='data-title'>My balance</p>
        <h1 className='data-balance'>$921.48</h1>
      </div>
      <img className='balance-logo' src={logo} alt="Logo" />
    </div>
  )
}

export default Balance