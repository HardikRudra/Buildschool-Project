const Bill = require("../model/billModel");
const billModel = require("../model/billModel")


module.exports.updateStatus = async(req,res) =>{
    const {newStatus,id} = req.body;
    const bill = await billModel.findByIdAndUpdate(req.params.id,{
        status:pending,
    })

}




module.exports.addbill = async(req,res,next) =>{

  


    try{
        const{billname,itemname,amount,proof} = req.body;
        const bill = await billModel.create({
            billname,
            itemname,
            amount,
            proof,
            


          });
          return res.json({status:true,bill});
    }
    catch(ex){
        next(ex);
    }
};