function loader(content) {
    console.log('content', content)
    return content
}

loader.pitch = function(remainingRequest) {
    return `
        import style from '!!${remainingRequest}'
        const styleEl = document.createElement('style')
        styleEl.innerHTML = style
        document.head.appendChild(styleEl)
    `
}

module.exports = loader