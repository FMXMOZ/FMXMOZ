import React from 'react';

const Slider = ()=>{
    return(
        <>
        <section class="page_slider">
				<div class="flexslider" data-nav="false">
					<ul class="slides">
						<li class="ds slide-1 cover-image s-overlay text-left  ">
							<img src="images/slide01.jpg" alt="img"/>
							<div class="container">
								<div class="row align-items-center">
									<div class="col-12 text-center text-sm-left">
										<div class="intro_layers_wrapper">
											<div class="intro_layers d-flex flex-column flex-md-row align-items-md-center">

												<div class="intro_layer" data-animation="fadeIn">
													<img src="images/chess.png" alt=""/>
												</div>
												<div class="intro_layer" data-animation="fadeInLeft" data-delay="150">
													<h2 class="text-uppercase thin">academic <span class="color-main text-capitalize bold">chess</span></h2>
													<p>
														Best Chess Sets, Tables & Clocks for Sale
													</p>
												</div>


											</div> 
											<div class="intro_layers ">
												<div class="many-buttons intro_layer" data-animation="fadeIn" data-delay="150">
													<a href="#" class="btn btn-maincolor medium-btn">start now</a>
													<a href="#" class="btn btn-outline-darkgrey medium-btn">learn more</a>
												</div>
											</div>
										</div> 
									</div> 
								</div>
							</div>
						</li>
						<li class="ds slide-2 cover-image s-overlay text-left ">
							<img src="images/slide02.jpg" alt="img"/>
							<div class="container">
								<div class="row align-items-center">
									<div class="col-12 text-center text-sm-left">
										<div class="intro_layers_wrapper">
											<div class="intro_layers">

												<div class="intro_layer" data-animation="fadeInLeft" data-delay="150">
													<h2 class="text-uppercase thin">academic <span class="color-main text-capitalize bold">chess</span></h2>
													<p>
														We are dedicated to broadening and developing chess as art, recreation, and
														as a significant element of culture in Northern California.
													</p>
												</div>

												<div class="many-buttons intro_layer " data-animation="fadeIn">
													<a href="#" class="btn btn-maincolor medium-btn">start now</a>
													<a href="#" class="btn btn-outline-darkgrey medium-btn">learn more</a>
												</div>
											</div> 
										</div> 
									</div> 
								</div>
							</div>
						</li>
						<li class="ds slide-3 cover-image s-overlay text-left  ">
							<img src="images/slide03.jpg" alt="img"/>
							<div class="container">
								<div class="row align-items-center">
									<div class="col-12 text-center text-sm-left">
										<div class="intro_layers_wrapper">
											<div class="intro_layers d-flex flex-column flex-md-row align-items-md-center">

												<div class="intro_layer" data-animation="fadeIn">
													<img src="images/chess2.png" alt=""/>
												</div>
												<div class="intro_layer" data-animation="fadeInLeft" data-delay="150">
													<p class="special-heading color-main sub-title">
														<span class="text-uppercase">
															welcome
														</span>
													</p>
													<h2 class="special-heading ">
														<span class="text-capitalize ">
															academic <span class="color-main">chess</span> for kids
														</span>
													</h2>
												</div>


											</div> 
											<div class="intro_layers ">
												<div class="intro_layer" data-animation="fadeIn" data-delay="150">
													<p>
														We are dedicated to broadening and developing chess as art, recreation, and
														as a significant element of culture in Northern California.
													</p>
												</div>
											</div>
											<div class="intro_layers ">
												<div class="many-buttons intro_layer" data-animation="fadeIn" data-delay="150">
													<a href="#" class="btn btn-maincolor medium-btn">start now</a>
													<a href="#" class="btn btn-outline-darkgrey medium-btn">learn more</a>
												</div>
											</div>
										</div> 
									</div> 
								</div>
							</div>
						</li>


					</ul>
				</div> 
			</section>
        </>

    )
}

export default Slider;