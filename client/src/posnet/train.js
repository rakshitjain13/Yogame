import * as ml5 from 'ml5';
let options = {
  inputs: 34,
  outputs: 2,
  task: 'classification',
  debug: true,
};
const brain = ml5.neuralNetwork(options);
export const testfunction = () => {
  brain.loadData('./testdata.json', () => {
    brain.normalizeData();
    brain.train({ epochs: 50 }, () => {
      console.log('model trained');
      brain.save();
    });
  });
};
