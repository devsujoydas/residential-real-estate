if you need the custom cursor you can follow this steps

<style>
    body {
    height: 100vh;
    cursor: none;
    scroll-behavior: smooth;
    }
    .cursor-dot {
    width: 10px;
    height: 10px;
    background-color: rgb(0, 38, 255);
    }
    .cursor-outline {
    width: 40px;
    height: 40px;
    border: 3px solid hsla(239, 100%, 50%, 0.921);
    }
    .cursor-dot,
    .cursor-outline {
    position: fixed;
    top: 0;
    left: 0;

    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 100;
    pointer-events: none;
    }
</style>

  <body>
    <div class="cursor-dot" data-cursor-dot></div>
    <div class="cursor-outline" data-cursor-outline></div>

<script>
    const cursorDot = document.querySelector('[data-cursor-dot]')
    const cursorOutline = document.querySelector('[data-cursor-outline]')

    window.addEventListener('mousemove', function (e) {
    const posX = e.clientX
    const posY = e.clientY

    cursorDot.style.left = `${posX}px`
    cursorDot.style.top = `${posY}px`

    cursorOutline.animate(
        {
        left: `${posX}px`,
        top: `${posY}px`
        },
        {
        duration: 500,
        fill: 'forwards'
        }
    )
    })
</script>

  </body>
