import pkg from 'tone';
const { Synth } = pkg;
// create a new synth and route the output to master
const synth = new Synth().toDestination();
// play a note with the synth we setup
// synth.triggerAttackRelease("C2", "8n");