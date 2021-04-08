$(document).ready(function () {
    var repository = document.getElementById("repository");
    $.ajax({
      url: "https://api.github.com/users/piyyapz/repos",
      jsonp: true,
      method: "GET",
      dataType: "json",
      success: function (res) {
        for (let index = 0; index < res.length; index++) {
          repository.innerHTML +=
            "<div class='col-md-4 d-flex justify-content-center'><div class='card border-dark bg-light mb-3' style='width: 18rem'><div class='card-header font-weight-bold text-center'><a class='text-decoration-none text-uppercase text-dark' target='_blank' href='" +
            res[index]["clone_url"] +
            "'>" +
            res[index]["name"] +
            "</a></div><div class='card-body'>     <p class='card-text'>" +
            res[index]["description"] +
            "</p></div><div class='card-footer'><p class='card-text'><small class='text-muted'>Created at : " +
            res[index]["created_at"].slice(0, 10) +
            "</small></p> </div>  </div></div>";
        }
      },
    });
  });
  