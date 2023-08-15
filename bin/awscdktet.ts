#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
// import { AwscdktetStack } from "../lib/awscdktet-stack";
import { S3BucketStack } from "../lib/s3-bucket-stack";
import { basicLambdaStack } from "../lib/basic-lambda-stack";

const app = new cdk.App();

const lambda_stack = new basicLambdaStack(app, "basicLambdaStack");

const s3_bucket_stack = new S3BucketStack(app, "S3bucket", {
  lambdaFunction: lambda_stack.lambdaFunction,
});

const bucket = s3_bucket_stack.bucket;