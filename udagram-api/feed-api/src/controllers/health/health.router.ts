import { Router, Request, Response } from "express";
const { v4: uuidv4 } = require("uuid");
import { sequelize } from "../../sequelize";

const router: Router = Router();

router.get("/", async (req, res) => {
  let pid = uuidv4();
  console.log(
    new Date().toLocaleString() + `: ${pid} - Checking database connection...`
  );
  try {
    await sequelize.authenticate();
    console.log(
      new Date().toLocaleString() +
        `: ${pid} - Database Connection has been established successfully`
    );
    return res.status(200).send({
      message:
        new Date().toLocaleString() +
        `: ${pid} - Connection has been established successfully.`,
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return res
      .status(400)
      .send({ message: `Unable to connect to the database: ${error}` });
  }
});

export const HealthRouter: Router = router;
