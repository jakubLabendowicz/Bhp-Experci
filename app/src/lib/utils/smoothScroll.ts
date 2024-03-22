export function smoothScroll (event: any) {
    event.preventDefault()
    const link = event.currentTarget
    const url = new URL(link.href)
    if(url.hash.includes('#')) {
        const elementId = url.hash.replace('#', '')
        const element = document.getElementById(elementId)
        if(element) {
            window.scrollTo({
                top: (element as any).offsetTop,
                behavior: 'smooth'
            })
        } else {
            window.open(link.href, '_self')
        }
    } else {
        window.open(link.href, '_self')
    }
}