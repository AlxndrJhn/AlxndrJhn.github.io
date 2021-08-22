
var trigger = new ScrollTrigger.default({
    trigger: {
        once: true,
        offset: {
            viewport: {
                x: 0,
                y: (trigger, frame, direction) => {
                    return trigger.visible ? 0 : 0.25
                }
            }
            }}});
window.addEventListener('load', function () {
trigger.add('.timeline-card', {
once: true,
})
})
