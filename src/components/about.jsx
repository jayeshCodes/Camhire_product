import about_image from '../images/landing_page.jpg'


export const About = (props) => {
  return (
    <div id='about' >
      <div className='container'>
        <div className='row'>
          <div className='about-img-cam col-xs-12 col-md-6' data-aos="slide-right" data-aos-duration="1500">
            {' '}
            <img src={about_image} className='img-responsive' alt='' />{' '}
          </div>
          <div className='about-text-title col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2 data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1500">About Us</h2 >
              <p data-aos="fade-left" data-aos-delay="2000" data-aos-duration="1000">{props.data ? props.data.paragraph : 'loading...'}</p>
              <h3 data-aos="fade" data-aos-delay="2000" data-aos-duration="2000">Why Choose Us?</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul data-aos="fade" data-aos-delay="3000" data-aos-duration="1000">
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
                <div data-aos="fade" data-aos-delay="3000" data-aos-duration="1000" className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
