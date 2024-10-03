function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolvedPromise: Success after 500ms');
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('rejectedPromise: Error after 500ms');
        }, 500);
    });
}

resolvedPromise().then(result => console.log(result)).catch(err => console.log(err));
rejectedPromise().then(result => console.log(result)).catch(err => console.log(err));
