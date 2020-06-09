$(document).ready(function () {
  $("#btnSubmit").on("click", () => {
    $.ajax({
      type: "GET",
      url: "/api/test",
      dataType: "json",
    }).then((res) => {
      console.log(res);
    });
  });
});
