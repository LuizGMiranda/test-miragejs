import { Server, Model, Factory } from "miragejs";
import Faker from "faker-br";
import products from "./mocks/products.json";

export function mockServer() {
  new Server({
    models: {
      user: Model,
      product: Model
    },

    factories: {
      user: Factory.extend({
        name() {
          return Faker.name.findName();
        },
        email() {
          return Faker.internet.email();
        },
        cpf() {
          return Faker.br.cpf();
        }
      })
    },
    fixtures: {
      products
    },

    seeds(server) {
      server.loadFixtures();
      server.createList("user", 5);
    },

    routes() {
      this.namespace = "api";

      this.resource("users");
      this.resource("products");
    }
  });
}
