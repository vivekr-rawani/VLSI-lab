import logo from '../assets/logo_new.c32b27e1.png'
import banner from '../assets/banner.png'
import './styles.css'

function Heading() {
  return (
    <div>
        <div className="heading">
          <img src={logo} alt="logo" className="logo" />
          <div className="typed">
            <div className="nav-bar-heading">
              National Institute of Technology Jamshedpur
            </div>
            <div className="nav-bar-heading">
              राष्ट्रीय प्रौद्योगिकी संस्थान जमशेदपुर
            </div>
          </div>
        </div>
        <div className="banner">
        <img src={banner} alt=""  />
      </div>
    </div>
  )
}

export default Heading