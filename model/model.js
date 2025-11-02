export function changePage (pageName) {
    console.log(`Changing to page: ${pageName}`);
    if (pageName === "") {
        $.get("pages/home.html", (data) => {
            $("#app").html(data);
        }).fail((error) => {
            Swal.fire({
                title: `"home" page Missing`,
                text: `"home" page file is missing.`,
                icon: "error",
            });
        });
    } else {
        $.get("pages/" + pageName + ".html", (data) => {
            $("#app").html(data);
        }).fail((error) => {
            Swal.fire({
                title: `"${pageName}" page Missing`,
                text: `"${pageName}" page file is missing.`,
                icon: "error",
            });
        });
    }
}

export function toggleTopnavResponsive() {
  var topnav = document.getElementById("myTopnav");
  if (topnav.className === "topnav") {
    topnav.className += " responsive";
  } else {
    topnav.className = "topnav";
  }
}
