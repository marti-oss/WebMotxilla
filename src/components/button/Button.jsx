import "./button.scss";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import { click } from "@testing-library/user-event/dist/click";
import { ConstructionRounded } from "@mui/icons-material";
import config from "../../config";
import APIClient from "../../client";
import { useEffect, useState } from "react";

const client = new APIClient(config);

const deleteStyle={
    color: "crimson",
    borderColor: "rgba(220, 20, 60, 0.6)"
}

const viewStyle={
    color: "darkblue",
    borderColor: "rgba(0, 0, 139, 0.596)"
};
const editStyle={
    color: "darkblue",
    borderColor: "rgba(0, 0, 139, 0.596)"
};
const newStyle={
    color: "darkblue",
    borderColor: "rgba(0, 0, 139, 0.596)"
};




const Button = (prop) => {
    function Delete(click,isfor){
        return<button type="button" style={deleteStyle} onClick={() => esborrar(isfor)}>
                <DeleteForeverIcon style={deleteStyle}></DeleteForeverIcon>
                <span>Esborrar</span>
            </button>
    }
    function View(click){
        return<button type="button" style={viewStyle} onClick={click}>
                <VisibilityIcon ></VisibilityIcon>
                <span>Veure</span>
            </button>
    }
    function Edit(click){
        return<button type="button" style={editStyle} onClick={click}>
                <EditIcon ></EditIcon>
                <span>Editar</span>
            </button>
    }
    function New(click){
        return<button type="button" style={newStyle} onClick={click}>
                <AddIcon ></AddIcon>
                <span>Nou</span>
            </button>
    }
    function Save(click){
        return<button type="button" style={newStyle} onClick={click}>
                <SaveIcon ></SaveIcon>
                <span>Guardar</span>
            </button>
    }
    
    
    function selectType(type,click,isfor){
        if (type =="Delete") return Delete(click,isfor);
        else if (type === "View") return View(click);
        else if (type === "Edit") return Edit(click);
        else if (type === "New") return New(click);
        else if (type === "Save") return Save(click);
        return <div>Default</div>
    }

    const [pending, setData] = useState(false);
    const esborrar = async(isfor) => {
        client.deleteAll(isfor).then((data) => 
            setData(data),
            window.location.reload(false)
        )
    }
    return (
        <>
        {selectType(prop.type,click,prop.isfor)}
        </>   
    );
}

export default Button