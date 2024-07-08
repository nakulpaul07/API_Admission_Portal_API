const TenderModel  = require('../model/Tender')

class TenderController {

    static Tender_insert = async (req, res) => {
        try {
            const {name , description, start_time, end_time, buffer_time} = req.body
            const result = new TenderModel(req.body)
            // const result = new TenderModel({
            //     name:name,
            //     description:description,
            //     start_time:start_time,
            //     end_time:end_time,
            //     buffer_time:buffer_time,
            // })
            if(!result) {
                return res.status(404).json({status:"fail", message:"tender data not found"})
            }

            const savetender = await result.save()
            res.status(200)
            .json({status:"success",mesage:"tender register succesfully" , savetender})

            
        } catch (error) {
            res.status(590)
            .json({status:"failed",message:error.message})
            
        }
    }

    static getallTender = async (req, res) => {
        try {
            const data = await TenderModel.find()

            res.status(200).json({
                data,
            })
            

        } catch (error) {
            // console.log(error)
            res.status(400)
            .json({status:"failed", message: error.mesage})

        }
    }

    // get specific tender by id
  static getTenderById = async (req,res) => {
    try {
        const tender = await TenderModel.findById(req.params.id).populate('name')
        if(!tender) {
            return res.status(404).json({message:"Tender Not Found"})
        }
        res.status(200).json(tender);
        
    } catch (error) {
        console.log(error)
        res.status(400)
        .json({status:"failed", message:error.message})
        
    }
  }

//   deleteTender
  static deleteTender  = async (req,res) => {

    try {
        const id = req.params.id
        const userExist = await TenderModel.findById(id)
        if(!userExist) {
            return res.status(404).json({msg:"user not exist"})
        }
        await TenderModel.findByIdAndDelete(id)
        res.status(200).json({msg:"user deleted Successfully"})
        
    } catch (error) {
        console.log(error.message)
        res.status(400)
        .json({status:"failed",message:error.message})
        
    }

  }



}

module.exports = TenderController