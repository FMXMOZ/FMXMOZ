import React from "react";

const LoginForm = () => {
  return (
    <>
      <div class="modal" tabindex="-1" role="dialog" aria-labelledby="search_modal" id="search_modal">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="widget widget_search">
          <form method="get" class="searchform search-form" action="/">
            <div class="form-group">
              <input type="text" value="" name="search" class="form-control" placeholder="Search keyword" id="modal-search-input2"/>
            </div>
            <button type="submit" class="btn">Search</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
