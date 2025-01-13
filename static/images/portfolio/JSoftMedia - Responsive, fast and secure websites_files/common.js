// Get browser cookie
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
// To local time
function toLocalTime() {
    $('.to_local_time').each(function(i, obj) {
        let utc_time = moment.utc($(this).attr('data-utc'));
        let local_time = moment(utc_time).local();
        local_time = local_time.format("MMM. DD, YYYY, hh:mm a");
        $(this).text(local_time);
    });
}

$(document).ready(function () {
    toLocalTime()
})

// Initiate summernote editor
function summernoteInit(element, description){
    element.summernote({
        followingToolbar: false,
        placeholder: description,
        tabsize: 2,
        height: 150,
        toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link']],
            ['view', ['fullscreen']]
        ]
    });
}
toastr.options.closeButton = true;
