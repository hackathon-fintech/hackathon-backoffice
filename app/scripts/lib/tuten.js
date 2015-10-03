basePath = 'http://dev.tuten.cl:8080/TutenREST/rest';
TutenSchema = {
  "apiVersion": "1.0.0",
  "swaggerVersion": "1.2",
  "apis": [
    {
      "path": "/funds",
      "description": "Funds API",
      "apiDeclaration": {
        "apiVersion": "1.0.0",
        "swaggerVersion": "1.2",
        "basePath": "http://dev.tuten.cl:8080/TutenREST/rest",
        "resourcePath": "/funds",
        "apis": [
          {
            "path": "/funds/{email}/redeem",
            "operations": [
              {
                "method": "PUT",
                "summary": "Validates a redeemable gift card code into a User's funds.",
                "notes": "Validates a redeemable gift card code into a User's funds.",
                "type": "void",
                "nickname": "redeem",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "hash",
                    "description": "Este parametro representa el codigo de la gift card Tuten el cual se va a hacer redeem",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/funds/{email}/deduct",
            "operations": [
              {
                "method": "PUT",
                "summary": "Deducts funds from a user, and/or uses a user's payment method in order to fulfill a booking's payment",
                "notes": "Deducts funds from a user, and/or uses a user's payment method in order to fulfill a booking's payment",
                "type": "TutenPaymentMethod",
                "nickname": "deduct",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "paymentId",
                    "required": false,
                    "type": "integer",
                    "format": "int64",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "bookingId",
                    "required": false,
                    "type": "integer",
                    "format": "int64",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          }
        ],
        "models": {
          "TutenRole": {
            "id": "TutenRole",
            "properties": {
              "userRole": {
                "type": "string"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenUser": {
            "id": "TutenUser",
            "properties": {
              "serviceData": {
                "type": "string"
              },
              "userAvailability": {
                "type": "string"
              },
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "active": {
                "type": "boolean"
              },
              "passwordHash": {
                "type": "string"
              },
              "sessionTokenWeb": {
                "type": "string"
              },
              "phoneNumber": {
                "type": "string"
              },
              "agreedToTermsOfUse": {
                "type": "boolean"
              },
              "whereKnownUs": {
                "type": "string"
              },
              "lastLogin": {
                "type": "string",
                "format": "date-time"
              },
              "sessionTokenCli": {
                "type": "string"
              },
              "sessionTokenPro": {
                "type": "string"
              },
              "funds": {
                "type": "number",
                "format": "double"
              },
              "tokenFacebook": {
                "type": "string"
              },
              "tokenGoogle": {
                "type": "string"
              },
              "tokensIonic": {
                "type": "string"
              },
              "rejectedWorks": {
                "type": "string"
              },
              "photoPath": {
                "type": "string"
              },
              "photoExt": {
                "type": "string"
              },
              "userRole": {
                "$ref": "TutenRole"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenPaymentMethod": {
            "id": "TutenPaymentMethod",
            "properties": {
              "paymentPaypalCardToken": {
                "type": "string"
              },
              "paymentName": {
                "type": "string"
              },
              "paymentType": {
                "type": "string"
              },
              "paymentId": {
                "type": "integer",
                "format": "int64"
              },
              "paymentData": {
                "type": "string"
              },
              "active": {
                "type": "boolean"
              },
              "tutenUser": {
                "$ref": "TutenUser"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          }
        }
      }
    },
    {
      "path": "/professional",
      "description": "Professional API",
      "apiDeclaration": {
        "apiVersion": "1.0.0",
        "swaggerVersion": "1.2",
        "basePath": "http://dev.tuten.cl:8080/TutenREST/rest",
        "resourcePath": "/professional",
        "apis": [
          {
            "path": "/professional/{email}/history",
            "operations": [
              {
                "method": "GET",
                "summary": "Fetches the backlog of scheduled works from a Professional",
                "notes": "Fetches the backlog of scheduled works from a Professional",
                "type": "array",
                "items": {
                  "$ref": "TutenBooking"
                },
                "nickname": "workHistory",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "date",
                    "description": "Valid Format: dd-MM-yyyy",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/professional/",
            "operations": [
              {
                "method": "GET",
                "summary": "All Professionals",
                "notes": "ONLY ADMINS CAN SEE THIS",
                "type": "array",
                "items": {
                  "$ref": "TutenProfessional"
                },
                "nickname": "professionals",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "APP_CLI, APP_PRO, APP_WEB or APP_BCK",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  }
                ]
              }
            ]
          },
          {
            "path": "/professional/{email}/schedules",
            "operations": [
              {
                "method": "GET",
                "summary": "Fetches the current schedule of a Professional",
                "notes": "Fetches the current schedule of a Professional",
                "type": "array",
                "items": {
                  "$ref": "TutenBooking"
                },
                "nickname": "schedules",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "date",
                    "description": "Valid Format: dd-MM-yyyy",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/professional/{email}/schedules/{id}",
            "operations": [
              {
                "method": "GET",
                "summary": "Fetches a schedule of a Professional",
                "notes": "Fetches a schedule of a Professional",
                "type": "TutenBooking",
                "nickname": "schedule",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "id",
                    "required": true,
                    "type": "integer",
                    "format": "int64",
                    "paramType": "path",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/professional/apply/{email}",
            "operations": [
              {
                "method": "GET",
                "summary": "gets a professional application, this works for WEB only",
                "notes": "Send an email and token",
                "type": "TutenApplication",
                "nickname": "get",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/professional/apply",
            "operations": [
              {
                "method": "PUT",
                "summary": "creates a new Professional and sends an email to the COO, this works for WEB only",
                "notes": "Send the application",
                "type": "TutenApplication",
                "nickname": "apply",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "body",
                    "required": false,
                    "type": "TutenApplication",
                    "paramType": "body",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/professional/{email}",
            "operations": [
              {
                "method": "PUT",
                "summary": "Creates or edits a Professional.",
                "notes": "Creates or edits a Professional and its related data. ONLY USED BY ADMIN, this will not send confirmation email to anyone",
                "type": "TutenProfessional",
                "nickname": "create",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "description": "Admin's email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "description": "Admin's token",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "firstname",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "lastname",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "password",
                    "description": "Only for creating a new User",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "userEmail",
                    "description": "The target user email",
                    "required": true,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "serviceData",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "active",
                    "required": false,
                    "type": "boolean",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "applicationStep",
                    "required": false,
                    "type": "integer",
                    "format": "int32",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "declaredCommitedCrime",
                    "required": false,
                    "type": "boolean",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "experience",
                    "required": false,
                    "type": "boolean",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "hourAvailability",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "legallyElegibleToWork",
                    "required": false,
                    "type": "boolean",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "maxHoursPerWeek",
                    "required": false,
                    "type": "integer",
                    "format": "int32",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "paidYearsExperience",
                    "required": false,
                    "type": "integer",
                    "format": "int32",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "professionalType",
                    "description": "Valid types: PRO,PRO_HANDY,PRO_CLEAN",
                    "required": true,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "referred",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "shirtSize",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "training",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "weekAvailability",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "willingToBackgroundCheck",
                    "required": false,
                    "type": "boolean",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "workExperience",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "workPetsAround",
                    "required": false,
                    "type": "boolean",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "score",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/professional/{email}/booking/{state}",
            "operations": [
              {
                "method": "PUT",
                "summary": "Changes the state of a booking.",
                "notes": "Changes the state of a booking.",
                "type": "TutenBooking",
                "nickname": "state",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "state",
                    "description": "Possible States: -1 rechazado 0 creado 1 aceptado 2 sugerido 3 terminado, -2 cancelado, 5 cancelado admin",
                    "required": true,
                    "type": "integer",
                    "format": "int32",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "bookingId",
                    "required": false,
                    "type": "integer",
                    "format": "int64",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          }
        ],
        "models": {
          "TutenProfessional": {
            "id": "TutenProfessional",
            "properties": {
              "serviceData": {
                "type": "string"
              },
              "tutenRejectedBookings": {
                "$ref": "TutenRejectedBookings"
              },
              "tutenUser": {
                "type": "string"
              },
              "active": {
                "type": "boolean"
              },
              "legallyElegibleToWork": {
                "type": "boolean"
              },
              "paidYearsExperience": {
                "type": "integer",
                "format": "int32"
              },
              "experience": {
                "type": "boolean"
              },
              "willingToBackgroundCheck": {
                "type": "boolean"
              },
              "declaredCommitedCrime": {
                "type": "boolean"
              },
              "referred": {
                "type": "string"
              },
              "workExperience": {
                "type": "string"
              },
              "shirtSize": {
                "type": "string"
              },
              "maxHoursPerWeek": {
                "type": "integer",
                "format": "int32"
              },
              "workPetsAround": {
                "type": "boolean"
              },
              "weekAvailability": {
                "type": "string"
              },
              "hourAvailability": {
                "type": "string"
              },
              "training": {
                "type": "string"
              },
              "applicationStep": {
                "type": "integer",
                "format": "int32"
              },
              "score": {
                "type": "string"
              },
              "professionalType": {
                "$ref": "TutenRole"
              },
              "tutenUser1": {
                "$ref": "TutenUser"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenLocation": {
            "id": "TutenLocation",
            "properties": {
              "streetAddress": {
                "type": "string"
              },
              "apartmentNumber": {
                "type": "string"
              },
              "country": {
                "type": "string"
              },
              "city": {
                "type": "string"
              },
              "state": {
                "type": "string"
              },
              "zipCode": {
                "type": "string"
              },
              "locationId": {
                "type": "integer",
                "format": "int64"
              },
              "commune": {
                "type": "string"
              },
              "region": {
                "type": "string"
              },
              "county": {
                "type": "string"
              },
              "active": {
                "type": "boolean"
              },
              "tutenUser": {
                "$ref": "TutenUser"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenApplication": {
            "id": "TutenApplication",
            "properties": {
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "password": {
                "type": "string"
              },
              "sessionTokenWeb": {
                "type": "string"
              },
              "phoneNumber": {
                "type": "string"
              },
              "agreedToTermsOfUse": {
                "type": "boolean"
              },
              "whereKnownUs": {
                "type": "string"
              },
              "legallyElegibleToWork": {
                "type": "boolean"
              },
              "paidYearsExperience": {
                "type": "integer",
                "format": "int32"
              },
              "willingToBackgroundCheck": {
                "type": "boolean"
              },
              "declaredCommitedCrime": {
                "type": "boolean"
              },
              "referred": {
                "type": "string"
              },
              "workExperience": {
                "type": "string"
              },
              "shirtSize": {
                "type": "string"
              },
              "maxHoursPerWeek": {
                "type": "integer",
                "format": "int32"
              },
              "workPetsAround": {
                "type": "boolean"
              },
              "weekAvailability": {
                "type": "string"
              },
              "hourAvailability": {
                "type": "string"
              },
              "training": {
                "type": "string"
              },
              "serviceData": {
                "type": "string"
              },
              "applicationStep": {
                "type": "integer",
                "format": "int32"
              },
              "professionalType": {
                "type": "string"
              },
              "score": {
                "type": "string"
              }
            }
          },
          "TutenPaymentMethod": {
            "id": "TutenPaymentMethod",
            "properties": {
              "paymentPaypalCardToken": {
                "type": "string"
              },
              "paymentName": {
                "type": "string"
              },
              "paymentType": {
                "type": "string"
              },
              "paymentId": {
                "type": "integer",
                "format": "int64"
              },
              "paymentData": {
                "type": "string"
              },
              "active": {
                "type": "boolean"
              },
              "tutenUser": {
                "$ref": "TutenUser"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenRejectedBookings": {
            "id": "TutenRejectedBookings",
            "properties": {
              "idRejectedBooking": {
                "type": "integer",
                "format": "int64"
              },
              "bookingId": {
                "$ref": "TutenBooking"
              },
              "tutenProfessional": {
                "$ref": "TutenProfessional"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenRole": {
            "id": "TutenRole",
            "properties": {
              "userRole": {
                "type": "string"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenBooking": {
            "id": "TutenBooking",
            "properties": {
              "bookingFields": {
                "type": "string"
              },
              "bookingChecklistData": {
                "type": "string"
              },
              "bookingDurationTime": {
                "type": "integer",
                "format": "int32"
              },
              "recurrentWeeks": {
                "type": "integer",
                "format": "int32"
              },
              "tutenUserProfessionalRole": {
                "$ref": "TutenRole"
              },
              "bookingStatusTime": {
                "type": "string",
                "format": "date-time"
              },
              "bookingCreatedTime": {
                "type": "string",
                "format": "date-time"
              },
              "tutenUserProfessional": {
                "$ref": "TutenProfessional"
              },
              "bookingTime": {
                "type": "string",
                "format": "date-time"
              },
              "bookingId": {
                "type": "integer",
                "format": "int64"
              },
              "bookingState": {
                "type": "integer",
                "format": "int32"
              },
              "bookingPrice": {
                "type": "number",
                "format": "double"
              },
              "locationId": {
                "$ref": "TutenLocation"
              },
              "paymentId": {
                "$ref": "TutenPaymentMethod"
              },
              "tutenUserClient": {
                "$ref": "TutenUser"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenUser": {
            "id": "TutenUser",
            "properties": {
              "serviceData": {
                "type": "string"
              },
              "userAvailability": {
                "type": "string"
              },
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "active": {
                "type": "boolean"
              },
              "passwordHash": {
                "type": "string"
              },
              "sessionTokenWeb": {
                "type": "string"
              },
              "phoneNumber": {
                "type": "string"
              },
              "agreedToTermsOfUse": {
                "type": "boolean"
              },
              "whereKnownUs": {
                "type": "string"
              },
              "lastLogin": {
                "type": "string",
                "format": "date-time"
              },
              "sessionTokenCli": {
                "type": "string"
              },
              "sessionTokenPro": {
                "type": "string"
              },
              "funds": {
                "type": "number",
                "format": "double"
              },
              "tokenFacebook": {
                "type": "string"
              },
              "tokenGoogle": {
                "type": "string"
              },
              "tokensIonic": {
                "type": "string"
              },
              "rejectedWorks": {
                "type": "string"
              },
              "photoPath": {
                "type": "string"
              },
              "photoExt": {
                "type": "string"
              },
              "userRole": {
                "$ref": "TutenRole"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          }
        }
      }
    },
    {
      "path": "/payment",
      "description": "Payment API",
      "apiDeclaration": {
        "apiVersion": "1.0.0",
        "swaggerVersion": "1.2",
        "basePath": "http://dev.tuten.cl:8080/TutenREST/rest",
        "resourcePath": "/payment",
        "apis": [
          {
            "path": "/payment/{email}",
            "operations": [
              {
                "method": "DELETE",
                "summary": "Deactivates a payment type from a user",
                "notes": "Deactivates a payment type from a user",
                "type": "void",
                "nickname": "deactivate",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "paymentId",
                    "description": "Represents the unique id of a payment",
                    "required": false,
                    "type": "integer",
                    "format": "int64",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              },
              {
                "method": "GET",
                "summary": "Fetches all the payment options from a user",
                "notes": "Fetches all the payment options from a user",
                "type": "array",
                "items": {
                  "$ref": "TutenPaymentMethod"
                },
                "nickname": "get",
                "produces": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  }
                ]
              },
              {
                "method": "PUT",
                "summary": "Creates or edits a payment type for a user, to be associated with a booking",
                "notes": "Creates or edits a payment type for a user, to be associated with a booking",
                "type": "TutenPaymentMethod",
                "nickname": "create",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "paymentId",
                    "description": "Represents the unique identifier of a payment from a User",
                    "required": false,
                    "type": "integer",
                    "format": "int64",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "paymentType",
                    "description": "Represents the payment type in a number. 1 = Paypal, 2 = Webpay, 3 = Credit Card",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "paymentName",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "cardType",
                    "description": "Stored Credit Card: In case of Credit card, credit card data is needed in order to execute a payment",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "cardNumber",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "cardExpireMonth",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "cardExpireYear",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "cardFirstName",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "cardLastName",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "paypalPayerEmail",
                    "description": "Paypal Payer Email: This is the paypal email account of the user that will be used for the payment method.",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          }
        ],
        "models": {
          "TutenRole": {
            "id": "TutenRole",
            "properties": {
              "userRole": {
                "type": "string"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenUser": {
            "id": "TutenUser",
            "properties": {
              "serviceData": {
                "type": "string"
              },
              "userAvailability": {
                "type": "string"
              },
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "active": {
                "type": "boolean"
              },
              "passwordHash": {
                "type": "string"
              },
              "sessionTokenWeb": {
                "type": "string"
              },
              "phoneNumber": {
                "type": "string"
              },
              "agreedToTermsOfUse": {
                "type": "boolean"
              },
              "whereKnownUs": {
                "type": "string"
              },
              "lastLogin": {
                "type": "string",
                "format": "date-time"
              },
              "sessionTokenCli": {
                "type": "string"
              },
              "sessionTokenPro": {
                "type": "string"
              },
              "funds": {
                "type": "number",
                "format": "double"
              },
              "tokenFacebook": {
                "type": "string"
              },
              "tokenGoogle": {
                "type": "string"
              },
              "tokensIonic": {
                "type": "string"
              },
              "rejectedWorks": {
                "type": "string"
              },
              "photoPath": {
                "type": "string"
              },
              "photoExt": {
                "type": "string"
              },
              "userRole": {
                "$ref": "TutenRole"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenPaymentMethod": {
            "id": "TutenPaymentMethod",
            "properties": {
              "paymentPaypalCardToken": {
                "type": "string"
              },
              "paymentName": {
                "type": "string"
              },
              "paymentType": {
                "type": "string"
              },
              "paymentId": {
                "type": "integer",
                "format": "int64"
              },
              "paymentData": {
                "type": "string"
              },
              "active": {
                "type": "boolean"
              },
              "tutenUser": {
                "$ref": "TutenUser"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          }
        }
      }
    },
    {
      "path": "/location",
      "description": "Location API",
      "apiDeclaration": {
        "apiVersion": "1.0.0",
        "swaggerVersion": "1.2",
        "basePath": "http://dev.tuten.cl:8080/TutenREST/rest",
        "resourcePath": "/location",
        "apis": [
          {
            "path": "/location/{email}",
            "operations": [
              {
                "method": "DELETE",
                "summary": "Deactivates a location off from a user",
                "notes": "Deactivates a location off from a user",
                "type": "void",
                "nickname": "deactivate",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "locationId",
                    "description": "Represents the unique id of a location",
                    "required": false,
                    "type": "integer",
                    "format": "int64",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              },
              {
                "method": "GET",
                "summary": "Fetches all the locations (addresses) from a user",
                "notes": "Fetches all the locations (addresses) from a user",
                "type": "array",
                "items": {
                  "$ref": "TutenLocation"
                },
                "nickname": "get",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  }
                ]
              },
              {
                "method": "PUT",
                "summary": "Creates or updates a Location",
                "notes": "Creates or updates a Location",
                "type": "TutenLocation",
                "nickname": "create",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "apartmentNumber",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "city",
                    "description": "City",
                    "required": true,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "country",
                    "description": "Country",
                    "required": true,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "locationId",
                    "required": false,
                    "type": "integer",
                    "format": "int64",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "state",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "streetAddress",
                    "description": "Street address",
                    "required": true,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "zipCode",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "commune",
                    "description": "Commune",
                    "required": true,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "region",
                    "description": "Region",
                    "required": true,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "county",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "active",
                    "required": false,
                    "type": "boolean",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          }
        ],
        "models": {
          "TutenLocation": {
            "id": "TutenLocation",
            "properties": {
              "streetAddress": {
                "type": "string"
              },
              "apartmentNumber": {
                "type": "string"
              },
              "country": {
                "type": "string"
              },
              "city": {
                "type": "string"
              },
              "state": {
                "type": "string"
              },
              "zipCode": {
                "type": "string"
              },
              "locationId": {
                "type": "integer",
                "format": "int64"
              },
              "commune": {
                "type": "string"
              },
              "region": {
                "type": "string"
              },
              "county": {
                "type": "string"
              },
              "active": {
                "type": "boolean"
              },
              "tutenUser": {
                "$ref": "TutenUser"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenRole": {
            "id": "TutenRole",
            "properties": {
              "userRole": {
                "type": "string"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenUser": {
            "id": "TutenUser",
            "properties": {
              "serviceData": {
                "type": "string"
              },
              "userAvailability": {
                "type": "string"
              },
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "active": {
                "type": "boolean"
              },
              "passwordHash": {
                "type": "string"
              },
              "sessionTokenWeb": {
                "type": "string"
              },
              "phoneNumber": {
                "type": "string"
              },
              "agreedToTermsOfUse": {
                "type": "boolean"
              },
              "whereKnownUs": {
                "type": "string"
              },
              "lastLogin": {
                "type": "string",
                "format": "date-time"
              },
              "sessionTokenCli": {
                "type": "string"
              },
              "sessionTokenPro": {
                "type": "string"
              },
              "funds": {
                "type": "number",
                "format": "double"
              },
              "tokenFacebook": {
                "type": "string"
              },
              "tokenGoogle": {
                "type": "string"
              },
              "tokensIonic": {
                "type": "string"
              },
              "rejectedWorks": {
                "type": "string"
              },
              "photoPath": {
                "type": "string"
              },
              "photoExt": {
                "type": "string"
              },
              "userRole": {
                "$ref": "TutenRole"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          }
        }
      }
    },
    {
      "path": "/params",
      "description": "Parameters API",
      "apiDeclaration": {
        "apiVersion": "1.0.0",
        "swaggerVersion": "1.2",
        "basePath": "http://dev.tuten.cl:8080/TutenREST/rest",
        "resourcePath": "/params",
        "apis": [
          {
            "path": "/params/{email}",
            "operations": [
              {
                "method": "GET",
                "summary": "Fetches a specific parameter by an identifier",
                "notes": "Fetches a specific parameter",
                "type": "TutenParams",
                "nickname": "get",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "key",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "onlyPublicParams",
                    "description": "Mark true to only get public params",
                    "required": true,
                    "type": "boolean",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ]
              }
            ]
          }
        ],
        "models": {
          "TutenParams": {
            "id": "TutenParams",
            "properties": {
              "paramKey": {
                "type": "string"
              },
              "paramValue": {
                "type": "string"
              },
              "paramPrivate": {
                "type": "boolean"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          }
        }
      }
    },
    {
      "path": "/user",
      "description": "User API",
      "apiDeclaration": {
        "apiVersion": "1.0.0",
        "swaggerVersion": "1.2",
        "basePath": "http://dev.tuten.cl:8080/TutenREST/rest",
        "resourcePath": "/user",
        "apis": [
          {
            "path": "/user/",
            "operations": [
              {
                "method": "GET",
                "summary": "All Users",
                "notes": "ONLY ADMINS CAN SEE THIS",
                "type": "array",
                "items": {
                  "$ref": "TutenUser"
                },
                "nickname": "users",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "APP_CLI, APP_PRO, APP_WEB or APP_BCK",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  }
                ]
              }
            ]
          },
          {
            "path": "/user/{email}",
            "operations": [
              {
                "method": "PUT",
                "summary": "login: validates User credentials",
                "notes": "Just send the email (path) and user info (form)",
                "type": "TutenUser",
                "nickname": "login",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "password",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              },
              {
                "method": "POST",
                "summary": "signup: Creates new User",
                "notes": "Just send the email (path) and user info (form)",
                "type": "TutenUser",
                "nickname": "signup",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "password",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "firstname",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "lastname",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "phoneNumber",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "tokenGoogle",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "tokenFacebook",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              },
              {
                "method": "GET",
                "summary": "recovery: Password recovery",
                "notes": "Just send the email (path) and user info (form)",
                "type": "void",
                "nickname": "recovery",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/user/{email}/newsletter",
            "operations": [
              {
                "method": "POST",
                "summary": "mailing list",
                "notes": "Registers an email to the mailing list",
                "type": "void",
                "nickname": "newsletter",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "firstName",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "lastName",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "phone",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "professional",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/user/{email}/edit",
            "operations": [
              {
                "method": "PUT",
                "summary": "Edits a user",
                "notes": "Edits a user.",
                "type": "TutenUser",
                "nickname": "edit",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "firstName",
                    "description": "Name",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "lastName",
                    "description": "Last name",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "active",
                    "description": "Is active?",
                    "required": false,
                    "type": "boolean",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "phoneNumber",
                    "description": "Phone",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "whereKnownUs",
                    "description": "Where did you found Tuten",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "tokenIonic",
                    "description": "Token from Ionic Push for a user. Only for APP_PRO",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "serviceData",
                    "description": "Represents additional data in a JSON format",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "availabilityData",
                    "description": "Represents availability data in a JSON format",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/user/{email}/social",
            "operations": [
              {
                "method": "PUT",
                "summary": "social login: validates User credentials via facebook or google API",
                "notes": "Just send the email (path) and user info (form)",
                "type": "TutenUser",
                "nickname": "socialLogin",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "socialIdTokenGoogle",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "socialAccessTokenGoogle",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "socialTokenFacebook",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              },
              {
                "method": "POST",
                "summary": "signup: Creates new User by using a social network token, either facebook or google",
                "notes": "Just send the email (path) and user info (form)",
                "type": "TutenUser",
                "nickname": "socialSignup",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "firstname",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "lastname",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "phoneNumber",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "tokenGoogle",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "tokenFacebook",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/user/{email}/photo",
            "operations": [
              {
                "method": "GET",
                "summary": "Retrieves the photo image from a user",
                "notes": "Retrieves the photo image from a user",
                "type": "void",
                "nickname": "photo",
                "produces": [
                  "image/png",
                  "image/jpg",
                  "image/jpg",
                  "application/pdf"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "extension",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/user/{email}/photo/upload",
            "operations": [
              {
                "method": "POST",
                "summary": "Uploads a photo related to a user",
                "notes": "This API doesn't work on Swagger, for testing please use a POST call",
                "type": "void",
                "nickname": "uploadPhoto",
                "consumes": [
                  "multipart/form-data"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "body",
                    "required": false,
                    "type": "java.io.InputStream",
                    "paramType": "body",
                    "allowMultiple": false
                  },
                  {
                    "name": "body",
                    "required": false,
                    "type": "FormDataContentDisposition",
                    "paramType": "body",
                    "allowMultiple": false
                  },
                  {
                    "name": "extension",
                    "description": "Extension of the image is required, recommended types: jpg, png",
                    "required": true,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/user/carreer",
            "operations": [
              {
                "method": "POST",
                "summary": "sends contact form information",
                "notes": "",
                "type": "void",
                "nickname": "carreer",
                "consumes": [
                  "multipart/form-data"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "firstName",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "lastName",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "phone",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "message",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "body",
                    "required": false,
                    "type": "java.io.InputStream",
                    "paramType": "body",
                    "allowMultiple": false
                  },
                  {
                    "name": "body",
                    "required": false,
                    "type": "FormDataContentDisposition",
                    "paramType": "body",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/user/{email}/token",
            "operations": [
              {
                "method": "POST",
                "summary": "token: validates User token",
                "notes": "Just send the email (path) and user token (form)",
                "type": "TutenUser",
                "nickname": "token",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/user/{email}/contact",
            "operations": [
              {
                "method": "POST",
                "summary": "sends contact form information",
                "notes": "",
                "type": "void",
                "nickname": "contact",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "firstName",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "lastName",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "phone",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "message",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/user/{email}/reset",
            "operations": [
              {
                "method": "POST",
                "summary": "password reset: changes password",
                "notes": "Just send the email (path) and credentials",
                "type": "TutenUser",
                "nickname": "reset",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "password",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          }
        ],
        "models": {
          "TutenRole": {
            "id": "TutenRole",
            "properties": {
              "userRole": {
                "type": "string"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenUser": {
            "id": "TutenUser",
            "properties": {
              "serviceData": {
                "type": "string"
              },
              "userAvailability": {
                "type": "string"
              },
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "active": {
                "type": "boolean"
              },
              "passwordHash": {
                "type": "string"
              },
              "sessionTokenWeb": {
                "type": "string"
              },
              "phoneNumber": {
                "type": "string"
              },
              "agreedToTermsOfUse": {
                "type": "boolean"
              },
              "whereKnownUs": {
                "type": "string"
              },
              "lastLogin": {
                "type": "string",
                "format": "date-time"
              },
              "sessionTokenCli": {
                "type": "string"
              },
              "sessionTokenPro": {
                "type": "string"
              },
              "funds": {
                "type": "number",
                "format": "double"
              },
              "tokenFacebook": {
                "type": "string"
              },
              "tokenGoogle": {
                "type": "string"
              },
              "tokensIonic": {
                "type": "string"
              },
              "rejectedWorks": {
                "type": "string"
              },
              "photoPath": {
                "type": "string"
              },
              "photoExt": {
                "type": "string"
              },
              "userRole": {
                "$ref": "TutenRole"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "FormDataContentDisposition": {
            "id": "FormDataContentDisposition",
            "properties": {
              "name": {
                "type": "string"
              },
              "modificationDate": {
                "type": "string",
                "format": "date-time"
              },
              "readDate": {
                "type": "string",
                "format": "date-time"
              },
              "creationDate": {
                "type": "string",
                "format": "date-time"
              },
              "type": {
                "type": "string"
              },
              "parameters": {
                "$ref": "Map[string,string]"
              },
              "size": {
                "type": "integer",
                "format": "int64"
              },
              "fileName": {
                "type": "string"
              }
            }
          }
        }
      }
    },
    {
      "path": "/booking",
      "description": "Booking API",
      "apiDeclaration": {
        "apiVersion": "1.0.0",
        "swaggerVersion": "1.2",
        "basePath": "http://dev.tuten.cl:8080/TutenREST/rest",
        "resourcePath": "/booking",
        "apis": [
          {
            "path": "/booking/{email}/booking",
            "operations": [
              {
                "method": "GET",
                "summary": "Fetches a booking created by a User via its ID",
                "notes": "Fetches a booking created by a User via its ID",
                "type": "TutenBooking",
                "nickname": "booking",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "bookingId",
                    "required": false,
                    "type": "integer",
                    "format": "int64",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ]
              }
            ]
          },
          {
            "path": "/booking/{email}",
            "operations": [
              {
                "method": "GET",
                "summary": "Fetches all the bookings created by a User",
                "notes": "Fetches all the bookings created by a User",
                "type": "array",
                "items": {
                  "$ref": "TutenBooking"
                },
                "nickname": "bookings",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  }
                ]
              },
              {
                "method": "PUT",
                "summary": "Creates or edits a booking of a selected service",
                "notes": "Creates or edits a booking of a selected service",
                "type": "TutenBooking",
                "nickname": "create",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "paymentId",
                    "required": false,
                    "type": "integer",
                    "format": "int64",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "bookingId",
                    "required": false,
                    "type": "integer",
                    "format": "int64",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "bookingTime",
                    "description": "Date format: dd-MM-yyyy hh:mm",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "bookingState",
                    "description": "Possible States: -1 rechazado 0 creado 1 aceptado 2 sugerido 3 terminado, -2 cancelado, 5 cancelado admin",
                    "required": false,
                    "type": "integer",
                    "format": "int32",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "bookingPrice",
                    "required": false,
                    "type": "number",
                    "format": "double",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "bookingData",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "locationId",
                    "required": false,
                    "type": "integer",
                    "format": "int64",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "bookingRole",
                    "description": "Possible Work types for this booking: PRO, PRO_CLEAN, PRO_HANDY",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "recurrentWeeks",
                    "description": "Recurrent weeks, number of weeks that this service will be booked, 0 by default",
                    "required": false,
                    "type": "integer",
                    "format": "int32",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/booking/{email}/checklist/{id}",
            "operations": [
              {
                "method": "PUT",
                "summary": "Edits a booking's checklist ",
                "notes": "Edits a booking's checklist",
                "type": "TutenBooking",
                "nickname": "checklist",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "id",
                    "required": true,
                    "type": "integer",
                    "format": "int64",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "bookingChecklistData",
                    "required": false,
                    "type": "string",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ],
                "responseMessages": [
                  {
                    "code": 200,
                    "message": "OK"
                  },
                  {
                    "code": 400,
                    "message": "Invalid something"
                  }
                ]
              }
            ]
          },
          {
            "path": "/booking/",
            "operations": [
              {
                "method": "GET",
                "summary": "All bookings, between dates",
                "notes": "ONLY ADMINS CAN SEE THIS",
                "type": "array",
                "items": {
                  "$ref": "TutenBooking"
                },
                "nickname": "bookingsPeriod",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "year",
                    "required": false,
                    "type": "integer",
                    "format": "int32",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "month",
                    "required": false,
                    "type": "integer",
                    "format": "int32",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "day",
                    "required": false,
                    "type": "integer",
                    "format": "int32",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "hour",
                    "required": false,
                    "type": "integer",
                    "format": "int32",
                    "paramType": "query",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "APP_CLI, APP_PRO, APP_WEB or APP_BCK",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  }
                ]
              }
            ]
          },
          {
            "path": "/booking/{email}/bookings/date",
            "operations": [
              {
                "method": "GET",
                "summary": "Fetches all the bookings created by a User by a date",
                "notes": "Fetches all the bookings created by a User by a date",
                "type": "array",
                "items": {
                  "$ref": "TutenBooking"
                },
                "nickname": "bookingsDate",
                "consumes": [
                  "application/json"
                ],
                "authorizations": {},
                "parameters": [
                  {
                    "name": "email",
                    "required": true,
                    "type": "string",
                    "paramType": "path",
                    "allowMultiple": false
                  },
                  {
                    "name": "token",
                    "required": false,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "app",
                    "description": "Client is APP_CLI, Professional is APP_PRO and Web is APP_WEB",
                    "required": true,
                    "type": "string",
                    "paramType": "header",
                    "allowMultiple": false
                  },
                  {
                    "name": "bookingDate",
                    "required": false,
                    "type": "string",
                    "format": "date-time",
                    "paramType": "query",
                    "allowMultiple": false
                  }
                ]
              }
            ]
          }
        ],
        "models": {
          "TutenProfessional": {
            "id": "TutenProfessional",
            "properties": {
              "serviceData": {
                "type": "string"
              },
              "tutenRejectedBookings": {
                "$ref": "TutenRejectedBookings"
              },
              "tutenUser": {
                "type": "string"
              },
              "active": {
                "type": "boolean"
              },
              "legallyElegibleToWork": {
                "type": "boolean"
              },
              "paidYearsExperience": {
                "type": "integer",
                "format": "int32"
              },
              "experience": {
                "type": "boolean"
              },
              "willingToBackgroundCheck": {
                "type": "boolean"
              },
              "declaredCommitedCrime": {
                "type": "boolean"
              },
              "referred": {
                "type": "string"
              },
              "workExperience": {
                "type": "string"
              },
              "shirtSize": {
                "type": "string"
              },
              "maxHoursPerWeek": {
                "type": "integer",
                "format": "int32"
              },
              "workPetsAround": {
                "type": "boolean"
              },
              "weekAvailability": {
                "type": "string"
              },
              "hourAvailability": {
                "type": "string"
              },
              "training": {
                "type": "string"
              },
              "applicationStep": {
                "type": "integer",
                "format": "int32"
              },
              "score": {
                "type": "string"
              },
              "professionalType": {
                "$ref": "TutenRole"
              },
              "tutenUser1": {
                "$ref": "TutenUser"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenLocation": {
            "id": "TutenLocation",
            "properties": {
              "streetAddress": {
                "type": "string"
              },
              "apartmentNumber": {
                "type": "string"
              },
              "country": {
                "type": "string"
              },
              "city": {
                "type": "string"
              },
              "state": {
                "type": "string"
              },
              "zipCode": {
                "type": "string"
              },
              "locationId": {
                "type": "integer",
                "format": "int64"
              },
              "commune": {
                "type": "string"
              },
              "region": {
                "type": "string"
              },
              "county": {
                "type": "string"
              },
              "active": {
                "type": "boolean"
              },
              "tutenUser": {
                "$ref": "TutenUser"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenPaymentMethod": {
            "id": "TutenPaymentMethod",
            "properties": {
              "paymentPaypalCardToken": {
                "type": "string"
              },
              "paymentName": {
                "type": "string"
              },
              "paymentType": {
                "type": "string"
              },
              "paymentId": {
                "type": "integer",
                "format": "int64"
              },
              "paymentData": {
                "type": "string"
              },
              "active": {
                "type": "boolean"
              },
              "tutenUser": {
                "$ref": "TutenUser"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenRejectedBookings": {
            "id": "TutenRejectedBookings",
            "properties": {
              "idRejectedBooking": {
                "type": "integer",
                "format": "int64"
              },
              "bookingId": {
                "$ref": "TutenBooking"
              },
              "tutenProfessional": {
                "$ref": "TutenProfessional"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenRole": {
            "id": "TutenRole",
            "properties": {
              "userRole": {
                "type": "string"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "TutenBooking": {
            "id": "TutenBooking",
            "properties": {
              "bookingFields": {
                "type": "string"
              },
              "bookingChecklistData": {
                "type": "string"
              },
              "bookingDurationTime": {
                "type": "integer",
                "format": "int32"
              },
              "recurrentWeeks": {
                "type": "integer",
                "format": "int32"
              },
              "tutenUserProfessionalRole": {
                "$ref": "TutenRole"
              },
              "bookingStatusTime": {
                "type": "string",
                "format": "date-time"
              },
              "bookingCreatedTime": {
                "type": "string",
                "format": "date-time"
              },
              "tutenUserProfessional": {
                "$ref": "TutenProfessional"
              },
              "bookingTime": {
                "type": "string",
                "format": "date-time"
              },
              "bookingId": {
                "type": "integer",
                "format": "int64"
              },
              "bookingState": {
                "type": "integer",
                "format": "int32"
              },
              "bookingPrice": {
                "type": "number",
                "format": "double"
              },
              "locationId": {
                "$ref": "TutenLocation"
              },
              "paymentId": {
                "$ref": "TutenPaymentMethod"
              },
              "tutenUserClient": {
                "$ref": "TutenUser"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          },
          "Date": {
            "id": "Date",
            "properties": {
              "time": {
                "type": "integer",
                "format": "int64"
              },
              "year": {
                "type": "integer",
                "format": "int32"
              },
              "month": {
                "type": "integer",
                "format": "int32"
              },
              "date": {
                "type": "integer",
                "format": "int32"
              },
              "hours": {
                "type": "integer",
                "format": "int32"
              },
              "minutes": {
                "type": "integer",
                "format": "int32"
              },
              "seconds": {
                "type": "integer",
                "format": "int32"
              },
              "day": {
                "type": "integer",
                "format": "int32"
              },
              "timezoneOffset": {
                "type": "integer",
                "format": "int32"
              }
            }
          },
          "TutenUser": {
            "id": "TutenUser",
            "properties": {
              "serviceData": {
                "type": "string"
              },
              "userAvailability": {
                "type": "string"
              },
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "active": {
                "type": "boolean"
              },
              "passwordHash": {
                "type": "string"
              },
              "sessionTokenWeb": {
                "type": "string"
              },
              "phoneNumber": {
                "type": "string"
              },
              "agreedToTermsOfUse": {
                "type": "boolean"
              },
              "whereKnownUs": {
                "type": "string"
              },
              "lastLogin": {
                "type": "string",
                "format": "date-time"
              },
              "sessionTokenCli": {
                "type": "string"
              },
              "sessionTokenPro": {
                "type": "string"
              },
              "funds": {
                "type": "number",
                "format": "double"
              },
              "tokenFacebook": {
                "type": "string"
              },
              "tokenGoogle": {
                "type": "string"
              },
              "tokensIonic": {
                "type": "string"
              },
              "rejectedWorks": {
                "type": "string"
              },
              "photoPath": {
                "type": "string"
              },
              "photoExt": {
                "type": "string"
              },
              "userRole": {
                "$ref": "TutenRole"
              },
              "_persistence_shouldRefreshFetchGroup": {
                "type": "boolean"
              }
            }
          }
        }
      }
    }
  ]
};