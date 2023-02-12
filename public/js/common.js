$("#postTextarea").keyup(event => {
    const textbox = $(event.target);
    const value = textbox.val().trim();
    
    const submitButtom = $("#submitPostButtom");

    //if(submitButtom, length == 0) return alert("No submit buttom found");

    if (value == "") {
        submitButtom.prop("disabled", true);
        return;
    }

    submitButtom.prop("disabled", false);
})

$("#submitPostButtom").click(() => {
    const button = $("event.target");
    const textbox = $("#postTextarea");

    const data = {
        content: textbox.val()
    }

    $.post("/api/posts", data, (postData, status, xhr) => {

        const html = createPostHtml(postData);
        $(".postsContainer").prepend(html);
        textbox.val(""); //clear the box
        button.prop("disabled", true);
    })
})

$(document).on("click", ".likeButton", (event) => {
    const button = $(event.target);
    const postId = getPostIdFromElement(button);
    
    if(postId === undefined) {
        return;
    }

    $.ajax({
        url: `/api/posts/${postId}/like`,
        type: "PUT",
        success: (postData) => {
            console.log(postData)
        }
    })
})

function getPostIdFromElement(element) {
    const isRoot = element.hasClass("post");
    const rootElement = isRoot == true ? element : element.closest(".post");
    const postId = rootElement.data().id;

    if(postId === undefined) return alert("Post id undefined");

    return postId;
}

function createPostHtml(postData) {
    
    var postedBy = postData.postedBy;

    if(postedBy._id === undefined) {
        return console.log("User object not populated")
    }

    var displayName = postedBy.firstName + " " + postedBy.lastName;
    var timestamp = postData.createdAt;

    return `<div class='post' data-id='${postData._id}'>

                <div class='mainContentContainer'>
                    <div class='userImageContainer'>
                        <img src='${postedBy.profilePic}'>
                    </div>
                    <div class='postContentContainer'>
                        <div class='header'>
                            <a href='/profile/${postedBy.username}'class='displayName'>${displayName}</a>
                            <span class='username'>@${postedBy.username}</span>
                            <span class='date'>${timestamp}</span>
                        </div>
                        <div class='postBody'>
                            <span>${postData.content}</span>
                        </div>
                        <div class='postFooter'>
                            <div class='postButtonContainer'>
                                <button class='likeButton'>
                                    <i class="fa-solid fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
}

function timeDifference(current, previous) {

    console.log(current, previous);

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        if(elapsed/1000 < 30) return "Just now";

        return Math.round(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        return Math.round(elapsed/msPerDay) + ' days ago';   
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + ' months ago';   
    }

    else {
        return Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}