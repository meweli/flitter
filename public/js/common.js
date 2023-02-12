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

function createPostHtml(postData) {
    
    var postedBy = postData.postedBy;
    var displayName = postedBy.firstName + " " + postedBy.lastName;
    var timestamp = postData.createdAt;

    return `<div class='post'>

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
                                <button>
                                    <i class="fa-solid fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
}