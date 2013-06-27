# powered-by #
An __essential__ nodejs middleware inspired by Bryan O'Sullivan's (in)famous [tweet](https://twitter.com/bos31337/status/238856228451790848):

    Lance Armstrong takes drugs and wins the hardest bike race in the world 7 times. Programmers take drugs and what do we get? Node.js.

# "But...what?" #
Nothing. This middleware will just add a "X-Powered-By" header to all your outgoing HTTP responses saying:

    "node.js: Programmers on drugs"

This HTTP header is (usually) not seen by your visitors and serves no (known) purpose other than ["advertising" your stack](http://stackoverflow.com/questions/1288338/why-does-asp-net-framework-add-the-x-powered-byasp-net-http-header-in-respons). PHP adds it, seems like ASP did too. Contrary to these two, the running .jsnode version isn't displayed. The idea is just to have some fun and spread the node.js love, not make our apps a target to script-kiddies once a vuln is out.

# "How do I even..?" #
Just add it to your express app as you would for any other middleware:

    var express = require('express');
    var app = express();

    app.use(require('node-powered-by'));

# "I'm too hip for express!" #
Oh well. I used to be like you once.

    var http = require('http');
    http.createServer(function (req, res) {
        return require('node-powered-by')(req, res, function () {
            res.end('Hello!');
            return;
        });
    }).listen(process.env.PORT);

# "Still...drugs are bad!" #
The purpose isn't to advertise drug usage, just using a funny node.js quote.

# License #

Copyright (c) 2013, Arnaud 'JoshLeaves' Rouyer

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice,
      this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright notice,
      this list of conditions and the following disclaimer in the documentation
      and/or other materials provided with the distribution.
    * Neither the name of powered-by nor the names of its contributors
      may be used to endorse or promote products derived from this software
      without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

