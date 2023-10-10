import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  try {
    const PORT = process.env.PORT || 7777;
    const app = await NestFactory.create(AppModule, { cors: false });
    app.enableCors({
      origin: true,
      credentials: true,
    });

    await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
