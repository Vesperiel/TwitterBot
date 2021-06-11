module.exports = async function (context, req) {
    context.log('Generando Tweets');
    let now = new Date();
    context.res = {
        body: "La fecha es: " + now.toISOString() + " y la hora es: " + now.toTimeString()
    };
}