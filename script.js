document.addEventListener("DOMContentLoaded", () => {
    // Animación de entrada con GSAP
    gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
    gsap.from(".hero p", { duration: 1.2, y: -30, opacity: 0, delay: 0.3, ease: "power3.out" });
    gsap.from(".hero a", { duration: 1.5, scale: 0.8, opacity: 0, delay: 0.6, ease: "elastic.out(1, 0.5)" });
    
    // Animaciones en scroll
    gsap.utils.toArray("section").forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });
    
    // Efecto hover en iconos de tecnologías
    document.querySelectorAll(".tech-icon").forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            gsap.to(icon, { scale: 1.2, duration: 0.3 });
        });
        icon.addEventListener("mouseleave", () => {
            gsap.to(icon, { scale: 1, duration: 0.3 });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Animación de entrada con GSAP para los iconos de las tecnologías
    gsap.from(".tech-icon", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        delay: 0.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#skills",
            start: "top 80%", // Dispara la animación cuando la sección esté al 80% de la pantalla
            toggleActions: "play none none none"
        }
    });

    // Efecto hover en iconos de tecnologías
    document.querySelectorAll(".tech-icon").forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            gsap.to(icon, { scale: 1.2, duration: 0.3 });
        });
        icon.addEventListener("mouseleave", () => {
            gsap.to(icon, { scale: 1, duration: 0.3 });
        });
    });
});
