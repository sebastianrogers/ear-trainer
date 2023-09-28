import * as Tone from 'tone';

export const noteNameCollection = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
export const octaveNameCollection = [0, 1, 2, 3, 4, 5, 6, 7]

export function synth() {
    // create a new synth and route the output to master
    const synth = new Tone.Synth().toDestination();

    const notes = [
        "C0", "C1", null,
        "C1", "C2", null,
        "C2", "C3", null,
        "C3", "C4", null,
        "C4", "C5", null,
        "C5", "C6", null,
        "C6", "C7", null,
    ];

    console.log({ notes });
    // create a new sequence with the synth and notes
    const synthPart = new Tone.Sequence(
        function (time, note) {
            synth.triggerAttackRelease(note as string, "10hz", time);
        },
        notes,
        "4n"
    );

    console.log({ synthPart })
    // Setup the synth to be ready to play on beat 1
    synthPart.start();

    // Note that if you pass a time into the start method 
    // you can specify when the synth part starts 
    // e.g. .start('8n') will start after 1 eighth note
    // start the transport which controls the main timeline
    const now = Tone.now()
    Tone.Transport.start();
    Tone.Transport.stop(now + 16)
}