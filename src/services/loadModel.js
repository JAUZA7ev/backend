const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/submission-jauzazidan/models/model.json');
}
module.exports = loadModel;

