var Invitations;
var request = require('request');

function Candidates (config) {
  this.uri = config.endpoint + 'invitations';
  this.apiKey = config.apiKey;
  return this;
}

Invitations.prototype.retrieve = function (id, done) {
  request(
    {
      url: this.uri + '/' + id,
      auth: {
        user: this.apiKey,
        password: ''
      },
      headers: {
        'User-Agent': 'Checkr Node.js Wrapper'
      },
      json: true,
      method: 'GET'
    }, function (e, r, body) {
      if (body.message) {
        done(body.message, body);
      } else {
        done(e, body);
      }
    });
  return true;
};

Invitations.prototype.list = function (done) {
  request(
    {
      url: this.uri,
      auth: {
        user: this.apiKey,
        password: ''
      },
      headers: {
        'User-Agent': 'Checkr Node.js Wrapper'
      },
      json: true,
      method: 'GET'
    }, function (e, r, body) {
      done(e, body);
    });
  return true;
};

Invitations.prototype.create = function (params, done) {
  var options = {
    url: this.uri,
    auth: {
      user: this.apiKey,
      password: ''
    },
    headers: {
      'User-Agent': 'Checkr Node.js Wrapper'
    },
    json: true,
    form: params,
    method: 'POST'
  };

  request(options, function (e, r, body) {
      if (body.error) {
        done(body.error, body);
      } else {
        done(e, body);
      }
    });
};

module.exports = Invitations;
