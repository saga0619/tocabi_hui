#!/usr/bin/env python3

import tornado.httpserver
import tornado.ioloop
import tornado.web

import rospkg

pkg_dir = rospkg.RosPack().get_path('tocabi_hui')

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html",title="Tocabi Server")

application = tornado.web.Application([
        # (r"/roslibjs/(.*)",tornado.web.StaticFileHandler, {'path': pkg_dir+"/roslibjs/"}),
        (r"/EventEmitter2/(.*)",tornado.web.StaticFileHandler, {'path': pkg_dir+"/EventEmitter2/"}),
        (r"/material-design-icons/(.*)",tornado.web.StaticFileHandler, {'path' : pkg_dir+"/material-design-icons/"}),
        (r"/src/(.*)",tornado.web.StaticFileHandler, {'path' : pkg_dir+"/src/"}),
        (r"/", MainHandler)
    ])

if __name__ == "__main__":
    http_server = tornado.httpserver.HTTPServer(application)
    http_server.listen(8080)
    tornado.ioloop.IOLoop.current().start()

