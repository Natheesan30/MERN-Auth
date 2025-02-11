import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailTrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}]
    try {
        const response= await mailTrapClient.send({
            from: sender,
            to: recipient,
            subject: "verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category: "Email verification"
        })
        console.log("Email sent successfully", response);
        
    } catch (error) {
        console.error(`Error sending verification`, error);
        throw new Error(`Error sending verification email: ${error}`)
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{email}]
    try {
        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "3698f356-2763-46a6-9099-e242a3649df3",
            template_variables:{
                "company_info_name": "XYZ Company",
                "name": name
            }
        })
        console.log("Welcome Email send successfully", response);
        
    } catch (error) {
        console.error(`Error sending Welcome Email`, error);
        throw new Error(`Error sending Welcome email: ${error}` )
    }
}
export const sendPasswordResetEmail = async(email, resetURL) => {
    const recipient = [{email}]
    try {
        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset",
        })
        console.log("Password reset successfully", response);
    } catch (error) {
        console.error(`Error sending password reset email: ${error}`)
    }
}
export const sendResetSuccessEmail  = async(email) => {
    const recipient = [{email}];
    try {
        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password reset successfully",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password reset",
        })
        console.log("Password reset email sent successfully", response)
    } catch (error) {
        console.error(`Error sending password reset success email`, error);
        throw new Error(`Error sending password reset success email: ${error}`)
    }
}