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

relevant documentation

    https://medium.com/@enxebre/gitlab-consumer-driven-contracts-helm-and-kubernetes-b7235a60a1cb#.371jbgxp2
    http://martinfowler.com/articles/consumerDrivenContracts.html
    https://github.com/realestate-com-au/pact/
    https://vimeo.com/187097101?mc_cid=a021cae91b&mc_eid=842a346e2f
    https://www.npmjs.com/package/consumer-contracts
    https://www.npmjs.com/package/swagger-mock
    http://blog.modulus.io/node.js-tutorial-how-to-use-request-module
    https://github.com/hapijs/joi/blob/v9.2.0/API.md
    http://chaijs.com/guide/styles/

