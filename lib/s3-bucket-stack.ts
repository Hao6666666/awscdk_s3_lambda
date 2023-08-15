import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as s3n from "@aws-cdk/aws-s3-notifications";
import * as lambda from "@aws-cdk/aws-lambda";

export interface S3Props extends cdk.StackProps{
    readonly lambdaFunction: lambda.Function;
}

export class S3BucketStack extends cdk.Stack {
  public readonly bucket: s3.Bucket;

  constructor(scope: cdk.Construct, id: string, props: S3Props) {
    super(scope, id, props);

    // The code that defines your stack goes here
    this.bucket = new s3.Bucket(this, "haobucket20230814", {
      versioned: false,
      bucketName: "haobucket20230814",
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    this.bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(props.lambdaFunction));
  }
}
