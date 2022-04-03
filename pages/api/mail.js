const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
	const body = JSON.parse(req.body);

	const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Body: ${body.body}\r\n
    `;

	const data = {
		to: "povilas.kirna@gmail.com",
		from: "contact@povilaskirna.com",
		subject: "New contact message!",
		text: message,
		html: message.replace(/\r\n/g, "<br>"),
	};

	(async () => {
		try {
			await mail.send(data);
		} catch (error) {
			console.error(error);

			if (error.response) {
				console.error(error.response.body);
			}
		}
	})();

	res.status(200).json({ status: "Ok" });
};

/*
[POST] /api/mail
11:22:10:63
Function Status:
200
Edge Status:
200
Duration:
5.30 ms
Init Duration:
N/A
Memory Used:
83 MB
ID:
fra1::iad1::xs89k-1648977730634-6d3a34a20363
User Agent:
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36
s":[{"to":[{"email":"povilas.kirna@gmail.com"}]}],"content":[{"value":"\\n    Name: Povilas Kirna\\r\\n\\n    Email: povilas.kirna@gmail.com\\r\\n\\n    Body: Hell hell hell\\r\\n\\n    ","type":"text/plain"},{"value":"\\n    Name: Povilas Kirna<br>\\n    Email: povilas.kirna@gmail.com<br>\\n    Body: Hell hell hell<br>\\n    ","type":"text/html"}]}',
    baseURL: 'https://api.sendgrid.com/'
  },
  request: <ref *1> Writable {
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      finalCalled: false,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      destroyed: false,
      decodeStrings: true,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [Function: bound onwrite],
      writecb: null,
      writelen: 0,
      afterWriteTickInfo: null,
      buffered: [],
      bufferedIndex: 0,
      allBuffers: true,
      allNoop: true,
      pendingcb: 0,
      prefinished: false,
      errorEmitted: false,
      emitClose: true,
      autoDestroy: true,
      errored: null,
      closed: false
    },
    _events: [Object: null prototype] {
      response: [Function: handleResponse],
      error: [Function: handleRequestError],
      socket: [Function: handleRequestSocket]
    },
    _eventsCount: 3,
    _maxListeners: undefined,
    _options: {
      maxRedirects: 21,
      maxBodyLength: Infinity,
      protocol: 'https:',
      path: '/v3/mail/send',
      method: 'POST',
      headers: [Object],
      agent: undefined,
      agents: [Object],
      auth: undefined,
      hostname: 'api.sendgrid.com',
      port: null,
      nativeProtocols: [Object],
      pathname: '/v3/mail/send'
    },
    _ended: false,
    _ending: true,
    _redirectCount: 0,
    _redirects: [],
    _requestBodyLength: 431,
    _requestBodyBuffers: [ [Object] ],
    _onNativeResponse: [Function (anonymous)],
    _currentRequest: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: true,
      socket: [TLSSocket],
      _header: 'POST /v3/mail/send HTTP/1.1\r\n' +
        'Accept: application/json\r\n' +
        'Content-Type: application/json\r\n' +
        'User-Agent: sendgrid/7.6.2;nodejs\r\n' +
        'Authorization: Bearer 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\r\n' +
        'Content-Length: 431\r\n' +
        'Host: api.sendgrid.com\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: noopPendingOutput],
      agent: [Agent],
      socketPath: undefined,
      method: 'POST',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      path: '/v3/mail/send',
      _ended: false,
      res: null,
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'api.sendgrid.com',
      protocol: 'https:',
      _redirectable: [Circular *1],
      [Symbol(kCapture)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype]
    },
    _currentUrl: 'https://api.sendgrid.com/v3/mail/send',
    [Symbol(kCapture)]: false
  },
  response: undefined,
  isAxiosError: true,
  toJSON: [Function: toJSON]
}
*/
