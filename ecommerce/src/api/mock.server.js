import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";

faker.seed(123);

export function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      product: Model,
      wish: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 1500;
      this.resource("products");
      this.resource("wishes");
    },

    seeds(server) {
      [...Array(50)].forEach((_) => {
        server.create("product", {
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          image: faker.random.image(),
          price: faker.commerce.price()
        });
      });
      [...Array(0)].forEach((_) => {
        server.create("wish", {
          id: faker.random.alphaNumeric(),
          name: faker.commerce.productName(),
          image: faker.random.image(),
          price: faker.commerce.price()
        });
      });
    }
  });
}
