import { HandlerContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req: Request, _ctx: HandlerContext) {
    console.log("Received a GET request", _req);
    return new Response(
      "Received a GET request"
    );
  },

  POST(_req: Request, _ctx: HandlerContext) {
    console.log("Received a POST request", _req);
    return new Response("Received a POST request");
  },
};
