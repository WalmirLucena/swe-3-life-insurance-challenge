import ServerTypes from '@data/protocols/server/IServerAdapter';
import express, { json } from 'express';

abstract class ServerAdapter {
  static createApp(): ServerTypes.ServerInstance {
    return express();
  }
}

export { ServerAdapter };
