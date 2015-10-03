fetchSchema = require 'fetch-swagger-schema'
fs = require 'fs'
_ = require 'lodash'

basePath = "http://hackathonbi.cloudapp.net:8080"

apiDocs = basePath + "/banco-inteligente/rest/api-docs"

fetchSchema apiDocs, (err, schema) ->
  throw err if err
  throw 'schema is empty' if _.isEmpty schema

  _.each schema.apis, (endpoint) ->
    endpoint.apiDeclaration.basePath = basePath + endpoint.apiDeclaration.basePath

  console.log 'schema', JSON.stringify schema, null, 2

  fs.writeFileSync 'bancointeligente.js', "basePath = '#{basePath}/banco-inteligente/rest';\nBancoInteligenteSchema = #{JSON.stringify schema, null, 2};"
