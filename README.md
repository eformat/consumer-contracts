# consumer-contracts

install the helloworld api project using openshift / node

    oc new-project foo --display-name="foo" --description="foo"
    oc new-app nodejs:4~https://github.com/eformat/node-hello-world-swagger --name=foo
    oc expose svc foo

run the consumer contract tests (change URL's in test/user-api.js depending on your environment)

    npm test

    > consumer-contracts@0.0.1 test ~/git/consumer-contracts
    > mocha

      Contract HelloWorld
        ✓ throws an error when the consumer is missing
        ✓ throws an error when cant add a Person (1421ms)
        ✓ throws an error when People are missing (129ms)

      3 passing (2s)

use swagger editor to generate server+client code, or edit api

    git clone https://github.com/swagger-api/swagger-editor.git
    cd swagger-editor
    npm install
    npm start

    OR

    http://editor.swagger.io/#/
