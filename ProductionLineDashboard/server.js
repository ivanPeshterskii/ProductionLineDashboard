const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); 

let productionLine = {
    totalProduced: 0,
    downtimeMinutes: 0,
    lastUpdate: Date.now()
};

function calculatePerformance() {
    let minutesRunning = Math.max((Date.now() - productionLine.lastUpdate) / 60000, 1);
    return (productionLine.totalProduced / minutesRunning).toFixed(2);
}

app.get("/stats", (req, res) => {
    res.json({
        ...productionLine,
        performance: calculatePerformance()
    });
});

app.post("/produce", (req, res) => {
    productionLine.totalProduced += 1;
    productionLine.lastUpdate = Date.now();
    res.json({
        ...productionLine,
        performance: calculatePerformance()
    });
});

app.post("/pause", (req, res) => {
    productionLine.downtimeMinutes += 5;
    productionLine.lastUpdate = Date.now();
    res.json({
        ...productionLine,
        performance: calculatePerformance()
    });
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
