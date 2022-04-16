
export const Header = (props) => {
  return (
    <header id='header'>

      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-90" src="https://picsum.photos/id/102/367/267" alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-90" src="https://picsum.photos/200/300?random=2" alt="Second slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-90" src="https://picsum.photos/200/300?random=3" alt="Third slide" />
                </div>
              </div>
            </div> */}
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
