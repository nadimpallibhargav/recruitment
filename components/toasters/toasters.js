import { notification } from "antd";

export const showNotification = async (type, msg) => {
    let styling = "toaster-error";
    if(type === "success"){
        styling = "toaster-success";
    }
    else if(type === "warning"){
        styling = "toaster-warning";
    }
  notification[type]({  
    message: msg,
    placement: "bottomLeft",
    className: styling,
  });
};

// call "showNotification()" wherever you wnt to show toaster msg.
// Pass type of notification (ex: "success", "warning", "error")
// pass message text. Automatically that type taoster will show.