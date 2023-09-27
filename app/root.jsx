import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
} from "@remix-run/react";
import * as Tone from "tone";

function octave() {
    // create a new synth and route the output to master
    const synth = new Tone.Synth().toMaster();

    const notes = [
        "C0", "C1", null, 
        "C1", "C2", null,
        "C2", "C3", null,
        "C3", "C4", null,
        "C4", "C5", null,
        "C5", "C6", null,
        "C6", "C7", null
    ];
    // create a new sequence with the synth and notes
    const synthPart = new Tone.Sequence(
        function (time, note) {
            synth.triggerAttackRelease(note, "10hz", time);
        },
        notes,
        "4n"
    );
    // Setup the synth to be ready to play on beat 1
    synthPart.start();
    // Note that if you pass a time into the start method 
    // you can specify when the synth part starts 
    // e.g. .start('8n') will start after 1 eighth note
    // start the transport which controls the main timeline
    Tone.Transport.start();
}

export default function App() {
    return (
        <html>
            <head>
                <link
                    rel="icon"
                    href="data:image/x-icon;base64,AA"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <h1>Hello world!</h1>
                <Outlet />
                <button onClick={() => octave()}>Octave</button>

                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
