const axios = require('axios')
const URL = "http://host.docker.internal:5000/item"

var itemops = {
    getitems: function(req, res) {
        axios({ method: 'get', url: URL + '/getitem' }).then((e) => {
                console.log(e.data)
                res.send(e.data)
            })
            /*fetch(URL + "/getitems")
                .then(r => {

                    res.send(r.json())
                })*/
    },
    saveitems: function(req, res) {
        axios({ method: 'post', url: URL + '/saveitem', data: req.body }).then((e) => {
            res.send(e.data)
        })
    },


}

module.exports = itemops