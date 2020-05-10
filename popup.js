/*Here we add a reference to the IDs present in the popup.html file and give it a proper name to it*/

var github_link = document.getElementById("github_link");
var linkedin_link = document.getElementById("linkedin_link");
var website_link = document.getElementById("website_link");
var medium_link = document.getElementById("medium_link");
var twitter_link = document.getElementById("twitter_link");
var mail_link = document.getElementById("mail_link");
var custom_mail_link = document.getElementById("custom_mail_link");
var kaggle_link = document.getElementById("kaggle_link");
var facebook_link = document.getElementById("facebook_link");
var instagram_link = document.getElementById("instagram_link");
var leetcode_link = document.getElementById("leetcode_link");

let array = [
  "github",
  "linkedin",
  "website",
  "medium",
  "twitter",
  "mail",
  "custommail",
  "kaggle",
  "facebook",
  "instagram",
  "leetcode",
];

function void_click() {
  void 0;
}

/* It will showcase the result after clicking it*/

chrome.storage.sync.get(array, function (links) {
  if (!chrome.runtime.error) {
    console.log(links);

    if (links.github) github_link.href = links.github;
    else
      github_link.addEventListener("click", function (event) {
        event.preventDefault();
      });

    if (links.linkedin) linkedin_link.href = links.linkedin;
    else
      linkedin_link.addEventListener("click", function (event) {
        event.preventDefault();
      });

    if (links.website) website_link.href = links.website;
    else
      website_link.addEventListener("click", function (event) {
        event.preventDefault();
      });

    if (links.medium) medium_link.href = links.medium;
    else
      medium_link.addEventListener("click", function (event) {
        event.preventDefault();
      });

    if (links.twitter) twitter_link.href = links.twitter;
    else
      twitter_link.addEventListener("click", function (event) {
        event.preventDefault();
      });

    if (links.mail) mail_link.href = links.mail;
    else
      mail_link.addEventListener("click", function (event) {
        event.preventDefault();
      });

    if (links.custommail) custom_mail_link.href = links.custommail;
    else
      custom_mail_link.addEventListener("click", function (event) {
        event.preventDefault();
      });

    if (links.kaggle) kaggle_link.href = links.kaggle;
    else
      kaggle_link.addEventListener("click", function (event) {
        event.preventDefault();
      });

    if (links.facebook) facebook_link.href = links.facebook;
    else
      facebook_link.addEventListener("click", function (event) {
        event.preventDefault();
      });

    if (links.instagram) instagram_link.href = links.instagram;
    else
      mail_link.addEventListener("click", function (event) {
        event.preventDefault();
      });
  }
});
