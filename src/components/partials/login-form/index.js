import React from "react";

const LoginForm = () => {
  return (
    <>
      <section class="page_topline ds ms c-gutter-0 s-py-15 s-borderbottom  d-xl-none">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-6 text-left">
              <ul class="top-includes">
                <li>
                  <a
                    class="login-form-btn"
                    href="#"
                    data-toggle="modal"
                    data-target="#login-form"
                  >
                    <i class="far fa-user"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="contact-form-btn"
                    href="#"
                    data-toggle="modal"
                    data-target="#contact-form"
                  >
                    <i class="far fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <div class="dropdown">
                    <a
                      href="#"
                      class="dropdown-toggle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fa fa-search"></i>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <div class="widget widget_search">
                        <form
                          role="search"
                          method="get"
                          class="search-form"
                          action="/"
                        >
                          <label for="search-form-top2">
                            <span class="screen-reader-text">Search for:</span>
                          </label>
                          <input
                            type="search"
                            id="search-form-top2"
                            class="search-field"
                            placeholder="Search keyword"
                            value=""
                            name="search"
                          />
                          <button type="submit" class="search-submit">
                            <span class="screen-reader-text">Search</span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-6 text-right">
              <a href="#" class="btn btn-outline-maincolor">
                donate
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
