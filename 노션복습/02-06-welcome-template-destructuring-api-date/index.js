import { getWelcomeTemplate, sendWelcomeTemplateToEmail } from "./email.js";
import { getCreateAt } from "./date.js";

function createUser(user){
    const template = getWelcomeTemplate(user)

    sendWelcomeTemplateToEmail(template, user.email)
}

const user = {
    name: "현민",
    age: 27,
    school: "codecamp",
    createAt: getCreateAt()
}

createUser(user)