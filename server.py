#!/usr/bin/env python3

import tornado.httpserver
import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index_cdn.html",title="Tocabi Server")

application = tornado.web.Application([
        #(r"/roslibjs/(.*)",tornado.web.StaticFileHandler, {'path': "roslibjs/"}),
        # (r"/node_modules/(.*)",tornado.web.StaticFileHandler, {'path' : "node_modules/"}),
        # (r"/src/(.*)",tornado.web.StaticFileHandler, {'path' : "src/"}),
        #(r"/src/(.*)",tornado.web.StaticFileHandler, {'path' : "src/"}),
        (r"/", MainHandler)
    ])

if __name__ == "__main__":
    http_server = tornado.httpserver.HTTPServer(application)
    http_server.listen(8080)
    tornado.ioloop.IOLoop.current().start()

