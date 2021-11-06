const mongoose = require('mongoose');

const MedicalInfoSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    bloodGroup:{
        type: String,
    },
    height:{
        type:Number,
    },
    weight:{
        type:Number,
    },
    hasDiabetes:{
        type:Boolean,
        default:false
    },
    hasHeartDisease:{
        type:Boolean,
        default:false
    },
    hasArthritis:{
        type:Boolean,
        default:false
    },
    hasBloodPressureProblem:{
        type:Boolean,
        default:false,
    }    
});

module.exports = MedicalInfoSchema = mongoose.model('medicalInfo',MedicalInfoSchema);

