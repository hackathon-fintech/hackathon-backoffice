fetchSchema = require 'fetch-swagger-schema'
fs = require 'fs'
_ = require 'lodash'

basePath = "http://dev.tuten.cl:8080"
# basePath = ""
# basePath = "http://localhost:8080"

# apiDocs =  "http://localhost:8080/TutenREST/rest/api-docs" # basePath + "/TutenREST/rest/api-docs"
apiDocs = basePath + "/TutenREST/rest/api-docs"

fetchSchema apiDocs, (err, schema) ->
  throw err if err
  throw 'schema is empty' if _.isEmpty schema

  _.each schema.apis, (endpoint) ->
    endpoint.apiDeclaration.basePath = basePath + endpoint.apiDeclaration.basePath

  console.log 'schema', JSON.stringify schema, null, 2

  fs.writeFileSync 'tuten.js', "basePath = '#{basePath}/TutenREST/rest';\nTutenSchema = #{JSON.stringify schema, null, 2};"
