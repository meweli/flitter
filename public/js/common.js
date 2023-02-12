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
        //content: textbox.val()
    }

    $.post("/api/posts", data, (postData, status, xhr) => {
        alert(postData);
    })
})