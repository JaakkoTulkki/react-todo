export function dispatchNote(note) {
    return {
        type: "NOTE",
        note
    };
}

export function updateNoteInput(text_input) {
    return {
        type: "TEXT_INPUT",
        text_input: text_input,
    }
}