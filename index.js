import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3000;

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.post("/sendData", async (req, res) => {
  console.log("start");
  axios
    .post(
      "https://webhook.site/c7ecffc1-ceaf-4937-967d-b915581003fe/",
      req.body
    )
    .then((response) => {
      console.log("success");
      res.send(response.data);
    })
    .catch((error) => {
      console.error("Error sending data:", error);
      res.status(500).json({
        error: "An error occurred while sending data to Webhook.site.",
      });
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
