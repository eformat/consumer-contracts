var Contract = require('consumer-contracts').Contract;
var Joi = require('consumer-contracts').Joi;
var assert = require('chai').assert;

describe('Contract HelloWorld', function () {
    it('throws an error when the consumer is missing', function () {
        assert.throws(function () {
            new Contract({
                name: 'Name',
                request: {
                    url: 'http://foo-foo.192.168.137.3.xip.io/people'
                },
                response: {
                    statusCode: 200
                }
            });
        }, 'Invalid contract: Missing required property [consumer]');
    });

    it('throws an error when cant add a Person', function (done) {
        var contract = new Contract({
            name: 'People',
            consumer: 'Consumer',
            request: {
                method: 'POST',
                url: 'http://foo-foo.192.168.137.3.xip.io/people',
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

    it('throws an error when People are missing', function (done) {
        var contract = new Contract({
            name: 'People',
            consumer: 'Consumer',
            request: {
                method: 'GET',
                url: 'http://foo-foo.192.168.137.3.xip.io/people'
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