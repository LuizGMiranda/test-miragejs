import { Server, Model, Factory } from "miragejs";
import Faker from "faker-br";

export function mockServer() {
  new Server({
    models: {
      user: Model
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

    seeds(server) {
      server.createList("user", 50);
    },

    routes() {
      this.namespace = "api";

      this.resource("users");
    }
  });
}
