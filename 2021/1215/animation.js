function startAnimation() {
  anime({
    targets: "#animation-box",
    keyframes: [
      {
        translateX: 580,
        translateY: 0,
        backgroundColor: "#f00",
        borderRadius: ['0%', '50%'],
        scale: 2,
        rotate: '1turn'
      },
      {
        translateX: 580,
        translateY: 280,
        backgroundColor: "#f00",
        borderRadius: ['0%', '50%'],
        scale: 4,
        rotate: '3turn'
      },
      {
        translateX: 0,
        translateY: 280,
        backgroundColor: "#f00",
        borderRadius: ['0%', '50%'],
        scale: 3,
        rotate: '3turn'
      },
      {
        translateX: 0,
        translateY: 0,
        backgroundColor: "#f00",
        borderRadius: ['0%', '50%'],
        scale: 1,
        rotate: '3turn',
      }
    ],
    duration: 2000,
    easing: "steps(10)"
  });
}
