export type AmplifyDependentResourcesAttributes = {
    "function": {
        "lambdaHealthcheck": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "lambdaLocaltime": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "apiHealthCheck": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}