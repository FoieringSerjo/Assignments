
/**
 * 
 * @param {object} param0 
 * @param {number} param0.mil 
 * @param {number} param0.numRepetitions 
 * @param {Function} functionToExecute 
 * @param {Function} finalCallback 
 */
function interval({ mil, numRepetitions }, functionToExecute, finalCallback) {
    let counter = 0;
    const interval = setInterval(() => {
        if (counter === numRepetitions) {
            clearInterval(interval);
            return finalCallback();
        }else{
            counter++
            functionToExecute();
        }

    }, mil)
}




