import "./button.scss";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

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

function Delete(){
    return<button type="button" style={deleteStyle}>
            <DeleteForeverIcon style={deleteStyle}></DeleteForeverIcon>
            <span>Esborrar</span>
        </button>
}
function View(){
    return<button type="button" style={viewStyle}>
            <VisibilityIcon ></VisibilityIcon>
            <span>Veure</span>
        </button>
}
function Edit(){
    return<button type="button" style={editStyle}>
            <EditIcon ></EditIcon>
            <span>Editar</span>
        </button>
}
function New(){
    return<button type="button" style={newStyle}>
            <AddIcon ></AddIcon>
            <span>Nou</span>
        </button>
}
function Save(){
    return<button type="button" style={newStyle}>
            <SaveIcon ></SaveIcon>
            <span>Guardar</span>
        </button>
}


function selectType(param){
    if (param =="Delete") return Delete();
    else if (param === "View") return View();
    else if (param === "Edit") return Edit();
    else if (param === "New") return New();
    else if (param === "Save") return Save();
    return <div>Default</div>
}

const Button = (prop) => {
    return (
        <>
        {selectType(prop.type)}
        </>   
    );
}

export default Button