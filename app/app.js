import { changePage, toggleTopnavResponsive } from "../model/model.js";

function initListeners() {
  $("#app").on("click", "#myTopNavIcon", function (e) {
    e.preventDefault();
    toggleTopnavResponsive();
  });
}

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#page-", "");
    changePage(pageID);
}

function initRouting() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    initRouting();
    initListeners();
});