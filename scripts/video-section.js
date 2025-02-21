document.addEventListener("DOMContentLoaded", function () {
    const docWatch = document.getElementById("doc-watch");
    const button = docWatch.querySelector("button");
    const iframe = docWatch.querySelector("iframe");
    
    // Close btn
    const closeButton = document.createElement("button");
    closeButton.textContent = "✖";
    closeButton.classList.add("close-btn");
    closeButton.style.display = "none";
    docWatch.appendChild(closeButton);

    button.addEventListener("click", () => {
        docWatch.classList.add("fullscreen");
        iframe.style.display = "block";
        button.style.display = "none";
        closeButton.style.display = "block";
        
        if (isMobile()) {
            lockOrientation("landscape");
        }
    });

    closeButton.addEventListener("click", () => {
        closeFullscreen();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeFullscreen();
        }
    });

    // Close function 
    function closeFullscreen() {
        docWatch.classList.remove("fullscreen");
        iframe.style.display = "none";
        button.style.display = "inline-block";
        closeButton.style.display = "none";
    }

    function isMobile() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    function lockOrientation(orientation) {
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock(orientation).catch((error) => {
                console.error("Não foi possível bloquear a orientação: ", error);
            });
        }
    }
});
