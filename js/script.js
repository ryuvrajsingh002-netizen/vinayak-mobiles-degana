document.addEventListener("DOMContentLoaded", function () {
    console.log("Vinayak Mobiles Degana Website Loaded Successfully!");

    const callBtn = document.querySelector(".call-btn");

    if (callBtn) {
        callBtn.addEventListener("mouseover", () => {
            callBtn.style.transform = "scale(1.08)";
            callBtn.style.transition = "0.3s";
        });

        callBtn.addEventListener("mouseout", () => {
            callBtn.style.transform = "scale(1)";
        });
    }
});
