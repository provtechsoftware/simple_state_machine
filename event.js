var Event = {
    // DTMF digits
    DTMF_1: "1",
    DTMF_2: "2",
    DTMF_3: "3",
    DTMF_4: "4",
    DTMF_5: "5",
    DTMF_6: "6",
    DTMF_7: "7",
    DTMF_8: "8",
    DTMF_9: "9",
    DTMF_0: "0",
    // Use "octothorpe" so there is no confusion about "pound" or "hash"
    // terminology.
    DTMF_OCTOTHORPE: "#",
    DTMF_STAR: "*",
    // Call has hung up
    HANGUP: "hangup",
    // Playback of a file has completed
    PLAYBACK_COMPLETE: "playback_complete",
    // Mailbox has been emptied
    MAILBOX_EMPTY: "empty",
    ENTER_INPUT: "enter_input",
    SILENCE: "silence",
    FINISHED: "finished"
}
module.exports = Event;