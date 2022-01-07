import React from "react";

const ContactForm = () => {
    return (<>
    <div class="modal fade" id="contact-form" tabindex="-1" role="dialog" aria-labelledby="contact-form" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-xl modal-lg modal-sm" role="document">
			<div class="modal-content cs container-px-0">
				<div class="container ">
					<div class="row align-items-center c-gutter-0">
						<div class="col-lg-6 d-none d-lg-block">
							<img src="images/gallery/full/06.jpg" alt=""/>
						</div>
						<div class="col-lg-6">
							<div class="form-wrapper p-lg-40 p-20">
								<form class="contact-form content-center" method="post" action="/">
									<div class="row c-mb-20">
										<div class="col-12 form-title  text-center">
											<h5>Contact Form</h5>
										</div>
										<div class="col-sm-12">
											<div class="form-group has-placeholder">
												<label for="name33232">Your Name <span class="required">*</span></label>

												<input type="text" aria-required="true" size="30" value="" name="name" id="name33232" class="form-control" placeholder="Your Name"/>
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group has-placeholder">
												<label for="phone22">Phone Number<span class="required">*</span></label>
												<input type="tel" id="phone22" class="form-control" pattern="^[0-9-+\s()]*$" name="phone" aria-required="true" placeholder="Phone Number"/>
											</div>
										</div>
										<div class="col-sm-12 ">
											<div class="form-group has-placeholder">
												<label for="message3333">Message</label>
												<textarea aria-required="true" rows="2" cols="45" name="message" id="message3333" class="form-control" placeholder="Comment"></textarea>
											</div>
										</div>
										<div class="col-sm-12 mt-lg-40 mt-15 mb-0 text-center">
											<div class="form-group">
												<input class="btn btn-maincolor" type="submit" value="Contact us"/>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
    </>)
}

export default ContactForm;