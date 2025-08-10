const totalProducedEl = document.getElementById("totalProduced");
const downtimeEl = document.getElementById("downtime");
const performanceEl = document.getElementById("performance");

document.getElementById("produceBtn").addEventListener("click", () => {
    fetch("/produce", { method: "POST" })
        .then(res => res.json())
        .then(updateStats);
});

document.getElementById("pauseBtn").addEventListener("click", () => {
    fetch("/pause", { method: "POST" })
        .then(res => res.json())
        .then(updateStats);
});

function updateStats(data) {
    totalProducedEl.textContent = data.totalProduced;
    downtimeEl.textContent = data.downtimeMinutes;
    performanceEl.textContent = `${data.performance} items/min`;
}

setInterval(() => {
    fetch("/stats")
        .then(res => res.json())
        .then(updateStats);
}, 2000);
