import { createRequestHandler } from '@netlify/remix-adapter';
import * as build from '../build/server';

export const handler = createRequestHandler({ build }); 