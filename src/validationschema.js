import * as yup from 'yup';
const validationSchema = yup.object({
            name:yup
            .string()
            .required("Name is requried")
            .min(2, "Name must be at-least 2 characters")
            .max(35, "Name must be more than 35 characters"),
            phone:yup
            .number()
            .required("Phone is requried")
            .min(1000000000, "Phone must be at-least 10 characters")
            .max(9999999999, "Phone must be more than 35 characters"),
            gender:yup
            .string()
            .required("Gender is requried"),
            income:yup
            .number()
            .required("Income is requried"),
            about:yup
            .string()
            .required("About is requried"),
            date:yup
            .date("Date is required")
            .required("Date required")
            .min("2022-7-6", "Imvalid date")
            .max("2022-7-10", "Imvalid date"),
            social:yup.array().of(
                yup.string().required("String is required..")
        
            )
}) 
export default validationSchema