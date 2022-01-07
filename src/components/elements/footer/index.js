const Footer = () =>{
    return (<>
    <footer class="page_footer footer-1 text-center text-sm-left  ds s-pt-60 s-pb-30 c-mb-30 s-bordertop">
				<div class="container-fluid">
					<div class="row justify-content-center align-items-center">

						<div class="col-xl-2 col-12 text-xl-left text-center  animate" data-animation="fadeInUp">
							<a href="./" class="logo">
								<img src="img/logo.png" alt=""/>
							</a>
						</div>

						<div class="col-xl-8 col-12 text-center animate" data-animation="fadeInUp">

							<div class="widget widget_nav_menu">
								<ul class="list-unstyled">
									<li>
										<a href="about.html">About</a>
									</li>

									<li>
										<a href="courses.html">Courses</a>
									</li>
									<li>
										<a href="blog-right.html">Blog</a>
									</li>
									<li>
										<a href="shop-right.html">Shop</a>
									</li>
									<li>
										<a href="contact.html">Contact Us</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="col-xl-2 col-12 text-center text-xl-right animate" data-animation="fadeInUp">
							<span class="social-icons">
								<a href="#" class="fab fab fa-facebook-f @@iconClass" title="facebook"></a>
								<a href="#" class="fab fa-telegram-plane @@iconClass" title="telegram"></a>
								<a href="#" class="fab fa-linkedin-in @@iconClass" title="linkedin"></a>
								<a href="#" class="fab fa-instagram @@iconClass" title="instagram"></a>
							</span>
						</div>

					</div>
				</div>
			</footer>


			<section class="page_copyright copyright1 ds s-pt-70 s-pb-60 s-bordertop">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-12">
							<div class="widget widget_mailchimp">


								<form class="signup" action="/">

									<i class="far fa-envelope"></i>
									<input name="email" type="email" class="form-control mailchimp_email" placeholder="Email address"/>

									<button type="submit" class="search-submit">
										<span class="screen-reader-text">
											Subscribe
										</span>
									</button>
									<div class="response"></div>
								</form>

							</div>
						</div>
						<div class="col-md-12 text-center">

							<p>&copy; Copyright <span class="copyright_year">{Date.year}</span> All Rights Reserved - <a href="http://mahotaservicos.com/">Mahota Serviços</a></p>
						</div>

					</div>
				</div>
			</section>
    </>)
}


export default Footer;