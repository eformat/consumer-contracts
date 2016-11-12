var Contract = require('consumer-contracts').Contract;
var Joi = require('consumer-contracts').Joi;
var assert = require('chai').assert;

var url = 'http://localhost:8080/people';
//var url = 'http://bar-bar.192.168.137.3.xip.io/people';
//var url = 'http://foo-foo.192.168.137.3.xip.io/people';

describe('Contract HelloWorld', function () {
    it('throws an error when the consumer is missing', function () {
        assert.throws(function () {
            new Contract({
                name: 'Name',
                request: {
                    url: url
                },
                response: {
                    statusCode: 200
                }
            });
        }, 'Invalid contract: Missing required property [consumer]');
    });

    it('throws an error when we cant add a Person', function (done) {
        var contract = new Contract({
            name: 'People',
            consumer: 'Consumer',
            request: {
                method: 'POST',
                url: url,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                json: { name: "Mikey", message: ["Hello Mikey"] }
            },
            response: {
                statusCode: 201
            }
        });

        contract.validate(done)
    });

    it('throws an error when a Person is missing', function (done) {
        var contract = new Contract({
            name: 'People',
            consumer: 'Consumer',
            request: {
                method: 'GET',
                url: url+'/Mikey'
            },
            response: {
                statusCode: 200,
                body: Joi.object().keys({
                      name: Joi.string().alphanum().min(4).required(),
                      message: Joi.array().items(Joi.string().min(1).required()).required()
                })
            }
        });

        contract.validate(done)
    });

    it('throws an error when we cant add a Person', function (done) {
        var contract = new Contract({
            name: 'People',
            consumer: 'Consumer',
            request: {
                method: 'POST',
                url: url,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                json: { name: "Fred", message: ["Hello Fred"] }
            },
            response: {
                statusCode: 201
            }
        });

        contract.validate(done)
    });   
    
    it('throws an error when People are missing', function (done) {
        var contract = new Contract({
            name: 'People',
            consumer: 'Consumer',
            request: {
                method: 'GET',
                url: url
            },
            response: {
                statusCode: 200,
                body: Joi.array().items(
                    Joi.object().keys({
                        name: Joi.string().alphanum().min(4).required(),
                        message: Joi.array().items(Joi.string().min(1).required()).required()
                    })
                )
            }
        });

        contract.validate(done)
    });

});
