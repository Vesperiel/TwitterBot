module.exports = async function (context, req) {
    context.log('Probando la funcion');
    context.res = {
        body: "Primera prueba de bot"
    };
}