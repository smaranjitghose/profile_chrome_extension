/*Here we add a reference to the IDs present in the popup.html file and give it a proper name to it*/

var github_link = document.getElementById("github_link");
var linkedin_link = document.getElementById("linkedin_link");
var website_link = document.getElementById("website_link");
var medium_link = document.getElementById("medium_link");
var twitter_link = document.getElementById("twitter_link");
var kaggle_link = document.getElementById("kaggle_link");
// var facebook_link = document.getElementById("facebook_link");
// var instagram_link = document.getElementById("instagram_link");
var leetcode_link = document.getElementById("leetcode_link");

let array = [
  "github",
  "linkedin",
  "website",
  "medium",
  "twitter",
  "kaggle",
  // "facebook",
  // "instagram",
  "leetcode",
];

function void_click() {
  void 0;
}

/* It will showcase the result after clicking it*/

chrome.storage.sync.get(array, function (links) {
  if (!chrome.runtime.error) {
    console.log(links);

    if (links.github) github_link.href =`https://github.com/${links.github}`;

    if (links.linkedin) linkedin_link.href = `https://linkedin.com/in/${links.medium}`;

    if (links.website) website_link.href = links.website;

    if (links.medium) medium_link.href =`https://medium.com/${links.medium}`;

    if (links.twitter) twitter_link.href = `https://twitter.com/${links.twitter}`;

    if (links.kaggle) kaggle_link.href =`https://kaggle.com/${links.kaggle}`;

    // if (links.facebook) facebook_link.href = `https://www.facebook.com/${links.facebook}`;

    // if (links.instagram) instagram_link.href = `https://www.instagram.com/${links.instagram}`;
    
    if (links.leetcode) leetcode_link.href = `https://leetcode.com/${links.leetcode}`;
  }
});
