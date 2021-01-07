import swaggerJsDoc from "swagger-jsdoc";
import swaggerui from "swagger-ui-express";
import { Router } from "express";
const docRouter = Router();
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Alexis Vacilli's brand",
      version: "1.0.0",
      description: "My brand api Documentation",
      contact: {
        name: "Alexis Vacilli",
        url: "https://affectionate-turing-931363.netlify.app/ui/pages/",
        email: "alexisvacilli1@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1/",
      },
    ],
    produces: ["application/json"],
  },
  apis: ["./src/routes/api/*.js"],
};
const swaggerDocument = swaggerJsDoc(options);
docRouter.use(
  "/",
  swaggerui.serve,
  swaggerui.setup(swaggerDocument, { explorer: true })
);
export default docRouter;