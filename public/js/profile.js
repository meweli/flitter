$(document).ready(() => {
    loadPosts();
});

function loadPosts() {
    $.get("/api/posts", { postedBy: profileUserId }, results => {
        outputPosts(results, $(".postsContainer"));
    })
}

function outputPosts(results, container) {
    container.html("");

    results.forEach(result => {
        const html = createPostHtml(result)
        container.append(html);
    })

    if (results.length == 0) {
        container.append("<span class='noResults'>Nothing to show</span>")
    }
}