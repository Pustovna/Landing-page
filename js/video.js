export const videoSlider = () => {
    let previewAll = document.querySelector('.video-place-preview-list')
    let preview = previewAll.querySelectorAll('li')
    let videoLinks =
        ['https://www.youtube.com/embed/JiPkDbjbN8w',
        'https://www.youtube.com/embed/F7e2fi1EC8k',
        'https://www.youtube.com/embed/v93mnMEOvh0',
            'https://www.youtube.com/embed/VxfLQsIhBXc',
            'https://www.youtube.com/embed/JiPkDbjbN8w',
            'https://www.youtube.com/embed/F7e2fi1EC8k']
    let toggle = function (item, count) {
    item.addEventListener('click', function () {
        let mainVideo = document.querySelector('.video-place-main')
        let iframeVideo = mainVideo.querySelector('iframe')
        iframeVideo.src = videoLinks[count]
        console.log(iframeVideo.src, count)
    }) }

    for (let i = 0; i < preview.length; i++) {
        toggle(preview[i], i)
    }
}