import * as cdk from '@aws-cdk/core';
import { BaseStack } from './stacks/base-stack';

// export class MyStack extends Stack {
//   constructor(scope: Construct, id: string, props: StackProps = {}) {
//     super(scope, id, props);

//     // define resources here...
//   }
// }

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new cdk.App();

// new MyStack(app, 'my-stack-dev', { env: devEnv });
// new MyStack(app, 'my-stack-prod', { env: prodEnv });

new BaseStack(app, 'base-stack', { env: devEnv });

app.synth();