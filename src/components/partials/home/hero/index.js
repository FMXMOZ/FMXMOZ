const Hero = () => {
  return (
    <>
      <section class="page_slider">
        <div class="flexslider" >
            <div class="container">
                <img src="images/slide01.jpg" alt="img" draggable="false" />
            </div>
          {/* <ul class="slides">
            <li
              class="ds slide-1 cover-image s-overlay text-left"
              data-thumb-alt=""
              style='background-image: url("images/slide01.jpg"); width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;'
            >
              
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-12 text-center text-sm-left">
                    <div class="intro_layers_wrapper">
                      <div class="intro_layers d-flex flex-column flex-md-row align-items-md-center">
                        <div
                          class="intro_layer animated fadeIn"
                          data-animation="fadeIn"
                          style="visibility: hidden;"
                        >
                          <img
                            src="images/chess.png"
                            alt=""
                            draggable="false"
                          />
                        </div>
                        <div
                          class="intro_layer animated fadeInLeft"
                          data-animation="fadeInLeft"
                          data-delay="150"
                          style="visibility: hidden;"
                        >
                          <h2 class="text-uppercase thin">
                            academic{" "}
                            <span class="color-main text-capitalize bold">
                              chess
                            </span>
                          </h2>
                          <p>Best Chess Sets, Tables &amp; Clocks for Sale</p>
                        </div>
                      </div>
                      <div class="intro_layers ">
                        <div
                          class="many-buttons intro_layer animated fadeIn"
                          data-animation="fadeIn"
                          data-delay="150"
                          style="visibility: hidden;"
                        >
                          <a href="#" class="btn btn-maincolor medium-btn">
                            start now
                          </a>
                          <a
                            href="#"
                            class="btn btn-outline-darkgrey medium-btn"
                          >
                            learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="ds slide-2 cover-image s-overlay text-left flex-active-slide"
              data-thumb-alt=""
              style='background-image: url("images/slide02.jpg"); width: 100%; float: left; margin-right: -100%; position: relative; opacity: 1; display: block; z-index: 2;'
            >
              <img src="images/slide02.jpg" alt="img" draggable="false" />
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-12 text-center text-sm-left">
                    <div class="intro_layers_wrapper">
                      <div class="intro_layers">
                        <div
                          class="intro_layer animated fadeInLeft"
                          data-animation="fadeInLeft"
                          data-delay="150"
                          style="visibility: hidden;"
                        >
                          <h2 class="text-uppercase thin">
                            academic{" "}
                            <span class="color-main text-capitalize bold">
                              chess
                            </span>
                          </h2>
                          <p>
                            We are dedicated to broadening and developing chess
                            as art, recreation, and as a significant element of
                            culture in Northern California.
                          </p>
                        </div>

                        <div
                          class="many-buttons intro_layer animated fadeIn"
                          data-animation="fadeIn"
                          style="visibility: hidden;"
                        >
                          <a href="#" class="btn btn-maincolor medium-btn">
                            start now
                          </a>
                          <a
                            href="#"
                            class="btn btn-outline-darkgrey medium-btn"
                          >
                            learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="ds slide-3 cover-image s-overlay text-left"
              data-thumb-alt=""
              style='background-image: url("images/slide03.jpg"); width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;'
            >
              <img src="images/slide03.jpg" alt="img" draggable="false" />
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-12 text-center text-sm-left">
                    <div class="intro_layers_wrapper">
                      <div class="intro_layers d-flex flex-column flex-md-row align-items-md-center">
                        <div
                          class="intro_layer animated fadeIn"
                          data-animation="fadeIn"
                          style="visibility: hidden;"
                        >
                          <img
                            src="images/chess2.png"
                            alt=""
                            draggable="false"
                          />
                        </div>
                        <div
                          class="intro_layer animated fadeInLeft"
                          data-animation="fadeInLeft"
                          data-delay="150"
                          style="visibility: hidden;"
                        >
                          <p class="special-heading color-main sub-title">
                            <span class="text-uppercase">welcome</span>
                          </p>
                          <h2 class="special-heading ">
                            <span class="text-capitalize ">
                              academic <span class="color-main">chess</span> for
                              kids
                            </span>
                          </h2>
                        </div>
                      </div>
                      <div class="intro_layers ">
                        <div
                          class="intro_layer animated fadeIn"
                          data-animation="fadeIn"
                          data-delay="150"
                          style="visibility: hidden;"
                        >
                          <p>
                            We are dedicated to broadening and developing chess
                            as art, recreation, and as a significant element of
                            culture in Northern California.
                          </p>
                        </div>
                      </div>
                      <div class="intro_layers ">
                        <div
                          class="many-buttons intro_layer animated fadeIn"
                          data-animation="fadeIn"
                          data-delay="150"
                          style="visibility: hidden;"
                        >
                          <a href="#" class="btn btn-maincolor medium-btn">
                            start now
                          </a>
                          <a
                            href="#"
                            class="btn btn-outline-darkgrey medium-btn"
                          >
                            learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul> */}
          <ol class="flex-control-nav flex-control-paging">
            <li>
              <a href="#" class="">
                1
              </a>
            </li>
            <li>
              <a href="#" class="flex-active">
                2
              </a>
            </li>
            <li>
              <a href="#" class="">
                3
              </a>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default Hero;
