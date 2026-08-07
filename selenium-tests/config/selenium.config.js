module.exports = {
  BASE_URL: process.env.BASE_URL || "https://healthcare-platform-8mq2-fawn.vercel.app",
  API_URL:  process.env.API_URL  || "https://mediq-backend-vcus.onrender.com/api/v1",
  HEADLESS: true, TIMEOUT: 30000, RETRY_COUNT: 2,
  USERS: {
    patient: { email: "lschaithika+patient@gmail.com", password: "Demo@1234" },
    doctor:  { email: "lschaithika+doctor@gmail.com",  password: "Demo@1234" },
    admin:   { email: "lschaithika+admin@gmail.com",   password: "Demo@1234" },
  },
  REPORTS: {
    html: "reports/html/", excel: "reports/excel/",
    screenshots: "reports/screenshots/", logs: "reports/logs/",
    json: "reports/json/", output: "reports/output/",
  }
};