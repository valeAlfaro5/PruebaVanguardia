
const getMain = (req, res) => {
    try{
        res.send("Necesito get info!")
    }catch(error){
        res.send(error)
    }
}

module.export = {
    getMain
}