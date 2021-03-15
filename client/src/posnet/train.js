import * as ml5 from 'ml5';
let options = {
  inputs: 34,
  outputs: ['label'],
  task: 'classification',
  debug: true,
};
const brain = ml5.neuralNetwork(options);
export const testfunction = () => {
  console.log('training');
  brain.loadData('http://localhost:5000/data/finalmodel.json', () => {
    brain.normalizeData();
    brain.train({ epochs: 50 }, () => {
      console.log('model trained');
      brain.save();
    });
  });
};
