import { useFormik } from "formik";
import * as Y from "yup";
const schema= Y.object({
    
})
 function Dangky(){
    const formik=useFormik({
        initialValues:{
            taikhoan:" ",
            matkhau:" ",
            name:" ",
            phone:" ",
            email:" ",
        },
        validationSchema:schema
    })
    return(
        <>
        </>
    )
}
export default Dangky;