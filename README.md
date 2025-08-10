# ProductionLineDashboard

**Production Line Dashboard** is a small full stack project simulating the monitoring and control of a production line.

---

## Description

This project is a web application with both frontend and backend that allows tracking of:  
- Total items produced  
- Downtime minutes  
- Production performance (items per minute)  

Users can simulate production actions via two buttons:  
- **Produce Item** – increases the total produced count  
- **Pause Machine** – adds downtime minutes  

Performance is dynamically calculated and updates every 2 seconds.

---

## Technologies

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express  
- **Tools:** npm, CORS middleware  

---

## How to Run

1. Clone the repository:  
   ```bash
   git clone <your-repo-url>
   cd production-dashboard

   Install dependencies:
   
   npm install
   Start the server:
   npm start
   Open your browser and go to:
   http://localhost:3000

## How It Works

--The backend serves API endpoints for stats and commands:
--GET /stats – fetch current stats
--POST /produce – simulate producing one item
--POST /pause – add 5 minutes downtime
--The frontend displays stats and sends requests to the backend.

## Why This Project?
--This project demonstrates skills in:
--Building REST APIs with Express
--Handling asynchronous requests with fetch
--Dynamically updating the UI with JavaScript
--Basic full stack development principles

## Author
Ivan Peshterski

## License
MIT License
