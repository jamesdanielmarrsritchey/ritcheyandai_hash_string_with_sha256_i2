async function hashWithSHA256(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hash = await window.crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

/*
Example usage:

hashWithSHA256("Hello, World!").then(hash => {
    const element = document.querySelector("#myElement");
    if (element) {
        element.innerHTML = hash;
    }
});

Additional example: Using this function in an onClick event handler to replace the innerHTML of an element with a checksum of its current innerHTML

document.querySelector("#myButton").addEventListener("click", function() {
    const element = document.querySelector("#myElement");
    if (element) {
        hashWithSHA256(element.innerHTML).then(hash => {
            element.innerHTML = hash;
        });
    }
});
*/