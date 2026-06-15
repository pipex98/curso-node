
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";
import { envs } from "./config/plugins/envs.plugin";
import { MongoDatabase } from "./data/mongo";
import { Server } from "./presentation/server";

(async () => {
  main();
})();

async function main() {

  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL,
  });

  // const connectionString = envs.POSTGRES_URL;
  
  // const adapter = new PrismaPg( connectionString );
  // const prisma = new PrismaClient({ adapter });

  // const newLog = await prisma.logModel.create({
  //   data: {
  //     level: 'HIGH',
  //     message: 'This is a log message',
  //     origin: 'App.ts',
  //   }
  // });

  // const logs = await prisma.logModel.findMany({
  //   where: {
  //     level: 'MEDIUM'
  //   }
  // });

  Server.start();
}