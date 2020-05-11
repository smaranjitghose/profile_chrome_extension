/*Here we add a reference to the IDs in edit.html file and give it a proper name to it*/

var github_link = document.getElementById('github');
var linkedin_link = document.getElementById('linkedin');
var website_link = document.getElementById('website');
var medium_link = document.getElementById('medium');
var twitter_link = document.getElementById('twitter');
var kaggle_link = document.getElementById('kaggle');
//var facebook_link = document.getElementById('facebook');
//var instagram_link = document.getElementById('instagram');
var leetcode_link = document.getElementById('leetcode');
var save_button = document.getElementById('save');

/*It will accept all those links given by the user */

let array = ["github","linkedin","website","medium","twitter","mail","custommail","kaggle","facebook","instagram","leetcode",];
chrome.storage.sync.get(array,function(links){
    if(!chrome.runtime.error){
        console.log(links);
        if(links.github)
            github_link.value=links.github;
        if(links.linkedin)
            linkedin_link.value=links.linkedin;
        if(links.website)
            website_link.value=links.website;
        if(links.medium)
            medium_link.value=links.medium;
        if(links.twitter)
            twitter_link.value=links.twitter;
        if(links.kaggle)
            kaggle_link.value=links.kaggle;
        // if(links.facebook)
        //     facebook_link.value=links.facebook;
        // if(links.instagram)
        //    instagram_link.value=links.instagram;
        if(links.leetcode)
            leetcode_link.value=links.leetcode;
    }
});

/* It will update the links according to it*/

save_button.addEventListener('click',function(){
    UpdateLinks();
});
function UpdateLinks(){
    let dict = {
        "github":github_link.value,
        "linkedin":linkedin_link.value,
        "website":website_link.value,
        "medium":medium_link.value,
        "twitter":twitter_link.value,
        "kaggle":kaggle_link.value,
        // "facebook":facebook_link.value,
        // "instagram":instagram_link.value,
        "leetcode":leetcode_link.value,
    }

    /*It is used to check whether your function is working or not*/
    chrome.storage.sync.set(dict,function(){
        if(!chrome.runtime.error){
            console.log("Links Updated");
            window.location.pathname='popup.html'
        }
    })
}
