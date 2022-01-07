const Login = () => {
    return(<>
    <div class="modal fade" id="login-form" tabindex="-1" role="dialog" aria-labelledby="login-form" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-xl modal-lg modal-sm" role="document">
			<div class="modal-content cs container-px-0">
				<div class="container ">
					<div class="row align-items-center c-gutter-0">
						<div class="col-lg-6 d-none d-lg-block">
							<img src="images/gallery/full/05.jpg" alt=""/>
						</div>
						<div class="col-lg-6">
							<div class="form-wrapper p-lg-40 p-20">
								<form class="contact-form" method="post" action="/">
									<div class="row c-mb-20">
										<div class="col-12 form-title  text-center">
											<h5>Login Form</h5>
										</div>
										<div class="col-sm-12">
											<div class="form-group has-placeholder">
												<label for="name3334">Your Login <span class="required">*</span></label>
												<input type="text" aria-required="true" size="30" value="" name="name" id="name3334" class="form-control" placeholder="Your Login"/>
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group has-placeholder">
												<label for="pass12111">Your Password<span class="required">*</span></label>
												<input type="password" id="pass12111" class="form-control" name="pass" aria-required="true" placeholder="Your Password"/>
											</div>
										</div>
										<div class="col-sm-12 mt-lg-40 mt-15 mb-0 text-center">
											<div class="form-group">
												<input class="btn btn-maincolor" type="submit" value="Login"/>
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

export default Login;