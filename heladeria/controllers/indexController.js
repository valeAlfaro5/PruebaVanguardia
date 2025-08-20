
const getNuevo =(req, res) => {
    try{
        res.send('Necesito get info!')
    }  catch(error){
        res.send(error)
    }
  
}

const postProbando =(req, res) => {
    try{
       res.send('Probando que tenga un endpoint')
    }  catch(error){
        res.send(error)
    }
  
}

module.exports = {
    getNuevo,
    postProbando
}